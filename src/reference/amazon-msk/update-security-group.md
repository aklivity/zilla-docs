---
description: Add a new inbound rule to a VPC security group.
---

# Update Security Group

## Resource Parameters

The following parameters are needed when following these steps to add a new security group inbound rule.

- VPC
- Security Group
- Inbound Rule
  - Type
  - Source

Throughout this guide we use the following example Security Group parameters.

- VPC
  - ID `vpc-xxx` with name `my-vpc` in region `us-east-1`
- Security Group
  - Name `default`
- Inbound Rule
  - Type `SSH` from source `0.0.0.0/0`

## Update the Security Group

Navigate to the VPC Management Console [Security Groups table](https://console.aws.amazon.com/vpc/home#securityGroups:) and make sure you have selected the desired region in the upper right corner, such as `US East (N. Virginia) us-east-1`.

Filter the security groups by selecting a `VPC`.

## Adding a Rule

Click `Add rule` and fill in the new inbound rule with the following details.

- Example: Any connection access over `SSH`
  - Type: `SSH`
  - Source: `0.0.0.0/0`

Click `Save rules`
