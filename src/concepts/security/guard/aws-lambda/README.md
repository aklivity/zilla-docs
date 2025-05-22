---
shortTitle: AWS Lambda
---

# AWS Lambda

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The **AWS Lambda** guard in Zilla provides authentication and access control by verifying `Token`.

AWS Lambda guard leverages `token-based` lambda authorizer, verifying requests using configured **[AWS Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)** function and enforcing access based on policy.

When a client sends a request, Zilla calls the Lambda function with the `token` & `methodArn`.

The Lambda authorizer validates the token and returns a response containing one or more policy statements.

```json
[
  {
    "Action": "execute-api:Invoke",
    "Effect": "Allow|Deny",
    "Resource": "arn:aws:execute-api:{regionId}:{accountId}:{apiId}/{stage}/{httpVerb}/[{resource}/[{child-resources}]]"
  }
]
```

Zilla evaluates the lambda authorizer response to decide if the request should be allowed or denied.

:::info
Currently, `guard-aws-lambda` supports only `token` based lambda authorizer.
:::

## Usage Example

```yaml {2}
guards:
  my_aws_lambda_guard:
    type: aws-lambda
    options:
      api-id: p2xdv3thgh
      stage: ESTestInvoke-stage
      function: custom-authorizer-lambda
      type: token
```

## Configuration (\* required)

::: tabs

@tab options

### options

> `object`

The `aws-lambda` specific options.

| Property              | Type              | Description                                                                                                      |
|-----------------------|-------------------|------------------------------------------------------------------------------------------------------------------|
| options.region        | `string`          | AWS region where the Lambda function is deployed.                                                                |
| options.account-id    | `string`          | AWS account ID of the Lambda function.                                                                           |
| options.api-id\*      | `string`          | API ID.                                                                                                          |
| options.stage\*       | `string`          | Deployment stage (e.g., `prod`).                                                                                 |
| options.function\*    | `string`          | Name of the Lambda function to invoke.                                                                           |
| options.type\*        | `enum` [`token`]  | Only `token` type is currently supported.                                                                        |
| options.max-age       | `integer`         | Max age in seconds for cached authorization results. Default: `300`. Minimum: `0` (`disabled`). Maximum: `3600`. |

:::

## Reference

[`aws-lambda` Guard](/reference/config/guards/aws-lambda.md)
