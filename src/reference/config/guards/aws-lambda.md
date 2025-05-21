---
redirectFrom: /reference/config/guards/guard-aws-lambda.html
shortTitle: aws-lambda
category:
  - Guard
tag:
  - aws-lambda
---

# aws-lambda Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with `AWS Lambda` support.

The **AWS Lambda** guard in Zilla provides authentication and access control by verifying `Token`.

AWS Lambda guard leverages `token-based` lambda authorizer, verifying requests using configured **[AWS Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)** function and enforcing access based on policy.

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

### options\*

> `object`

The `aws-lambda` specific options.

```yaml
guards:
  my_aws_lambda_guard:
    type: aws-lambda
    options:
      region: us-east-1
      account-id: 012345678901
      api-id: p2xdv3thgh
      stage: ESTestInvoke-stage
      function: custom-authorizer-lambda
      type: token
      max-age: 100
```

#### options.region

> `string`

AWS region where the Lambda function is deployed.

#### options.account-id

> `string`

AWS account ID of the Lambda function.

#### options.api-id\*

> `string`

API ID.

#### options.stage\*

> `string`

Deployment stage (e.g., `prod`).

#### options.function\*

> `string`

Name of the Lambda function to invoke.

#### options.type\*

> `enum` [ `token` ]

Type of Lambda authorizer.

#### options.max-age

> `integer` | Default: `300` | Minimum: `0` (`disabled`) | Maximum: `3600`

Configures the time to live in `seconds` for the cached authorization results. The default is `300` seconds or `5` minutes.

