# Resolvers

Resolvers are a variable syntax for reading values dynamically outside `zilla.yaml` files. This is useful if the values are sensitive data like secret or env files that can't be directly written on the configuration file. Validation occurs before and after resolvers have been converted.

Zilla supports two kinds of resolvers:

- [Environment Variables](./environment-variables.md)
- [AWS Secrets Manager](./aws-secrets-manager.md)
