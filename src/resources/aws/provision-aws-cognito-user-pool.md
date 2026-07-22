---
description: Provision an AWS Cognito user pool with a resource server and client_credentials app clients, for use with the aws-cognito guard.
---

# Provision an AWS Cognito User Pool

The following parameters are needed when following these steps to provision a user pool for use with the [`aws-cognito`](/reference/config/guards/aws-cognito.md) guard.

- User pool name: `my-user-pool`
- Hosted UI domain prefix: `my-app`
- Resource server identifier: `my-api`
- Resource server scope: `stream`
- App client name (one per external client): `my-client`

::: note Check your selected region
Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.
:::

## Create the User Pool

```bash
aws cognito-idp create-user-pool \
  --region us-east-1 \
  --pool-name my-user-pool \
  --query 'UserPool.Id' --output text
```

Note the returned pool id (e.g. `us-east-1_ABC123XYZ`) — the [`aws-cognito`](/reference/config/guards/aws-cognito.md) guard's `options.pool` accepts this id directly, the full ARN, or just its suffix.

## Create a Hosted UI Domain

The OAuth token endpoint that app clients use to request tokens lives under the pool's Hosted UI domain.

```bash
aws cognito-idp create-user-pool-domain \
  --region us-east-1 \
  --domain my-app \
  --user-pool-id <pool-id>
```

The token endpoint is then `https://<domain>.auth.<region>.amazoncognito.com/oauth2/token`.

## Create a Resource Server

A resource server defines the custom scope app clients request when authenticating.

```bash
aws cognito-idp create-resource-server \
  --region us-east-1 \
  --user-pool-id <pool-id> \
  --identifier my-api \
  --name my-api \
  --scopes "ScopeName=stream,ScopeDescription=Stream messages"
```

## Create an App Client per External Client

Each external client that authenticates through [`external.authorization`](/reference/config/bindings/kafka-proxy/README.md) needs its own app client, using the `client_credentials` OAuth flow (no end user involved):

```bash
aws cognito-idp create-user-pool-client \
  --region us-east-1 \
  --user-pool-id <pool-id> \
  --client-name my-client \
  --generate-secret \
  --allowed-o-auth-flows client_credentials \
  --allowed-o-auth-flows-user-pool-client \
  --allowed-o-auth-scopes "my-api/stream" \
  --supported-identity-providers COGNITO
```

Note the returned `ClientId` and `ClientSecret` — these are the credentials each client uses to fetch its access token.

::: info Access tokens carry no aud claim
Tokens from the `client_credentials` grant have `token_use: access` and no `aud` claim, so the [`aws-cognito`](/reference/config/guards/aws-cognito.md) guard's `options.client-id` (not `options.audience`) is what validates them, matched against the token's `client_id` claim.
:::

## Fetch and Inspect a Token

To confirm a client's token has the expected shape (`token_use: access`, `client_id` set, no `aud`):

```bash
curl -s -X POST "https://my-app.auth.us-east-1.amazoncognito.com/oauth2/token" \
  -u "<client-id>:<client-secret>" \
  -d "grant_type=client_credentials&scope=my-api/stream" \
  | jq -r .access_token | cut -d. -f2 | tr '_-' '/+' \
  | { p=$(cat); case $(( ${#p} % 4 )) in 2) p="${p}==" ;; 3) p="${p}=" ;; esac; printf '%s' "$p"; } \
  | base64 -d | jq .
```

## Clean Up

Removing everything created above, in reverse order:

```bash
aws cognito-idp delete-user-pool-client --region us-east-1 --user-pool-id <pool-id> --client-id <client-id>
aws cognito-idp delete-resource-server --region us-east-1 --user-pool-id <pool-id> --identifier my-api
aws cognito-idp delete-user-pool-domain --region us-east-1 --domain my-app --user-pool-id <pool-id>
aws cognito-idp delete-user-pool --region us-east-1 --user-pool-id <pool-id>
```

::: caution
Deleting the user pool removes every user, group, and app client in it — only delete a pool if nothing else depends on it.
:::
