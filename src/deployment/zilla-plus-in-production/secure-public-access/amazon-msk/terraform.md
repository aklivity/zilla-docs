---
icon: aky-zilla-plus
shortTitle: Terraform
---

# Secure Public Access with Terraform

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

This guide will help you gather the necessary AWS values required to configure and deploy Zilla Plus Secure Public Access using Cloud Development Kit for Terraform (CDKTF). You can access the full guide [here](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/secure-public-access).

## Prerequisites

1. Be subscribed to [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44).
2. [Install Node.js](https://nodejs.org/en/download/package-manager).
3. [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
4. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
5. Configure AWS CLI: Run `aws configure` and follow the prompts to set up your AWS credentials.
6. Set your aws region: `aws configure set region us-east-1`
7. Verify your region and credentials: `aws configure list`

   ```text
         Name                    Value             Type    Location
         ----                    -----             ----    --------
      profile                <not set>             None    None
   access_key     ****************XXXX              env
   secret_key     ****************XXXX              env
       region                us-east-1              env    ['AWS_REGION', 'AWS_DEFAULT_REGION']
   ```

## Step 1: Create an example MSK cluster (optional)

If you don't have an existing MSK cluster you can use our example MSK deployment with basic configuration and Unauthorized access. Follow the instructions inside the [example-cluster](https://github.com/aklivity/zilla-plus-aws-templates/blob/main/amazon-msk/cdktf/example-cluster/README.md) folder to deploy the example MSK cluster. Note the `mskClusterName` from the outputs as you'll need this later. You will need to set the [MSK client auth method](#step-2-set-the-required-cdktf-context-variables) env var to `Unauthorized`.

## Step 2: Set the required CDKTF context variables

You can set these variables in your `context` in `cdktf.json` file under `zilla-plus` object.

:::: details msk related variables

**`msk` Related Variables**

```json
"msk":
{
    "cluster": "<your MSK cluster name>",
    "clientAuthentication": "<MSK client authentication method: [mTLS, SASL/SCRAM or Unauthorized]>"
},
```

::: tabs

@tab `cluster`

#### `cluster`

To get a list all MSK clusters run:

```bash
aws kafka list-clusters --query 'ClusterInfoList[*].{Name:ClusterName, Arn:ClusterArn, Iam:ClientAuthentication.Iam.Enabled,  Scram:ClientAuthentication.Sasl.Scram.Enabled, Tls:ClientAuthentication.Tls.Enabled, mTls:ClientAuthentication.Tls.CertificateAuthorityArnList[*] | join(`,`, @) || None, Unauthenticated:ClientAuthentication.Unauthenticated.Enabled}' --output table
```

Use the `ClusterName` of your desired MSK cluster for this variable.

@tab `clientAuthentication`

#### `clientAuthentication`

Set the desired client authentication method based on the MSK cluster setup, using `clientAuthentication` variable. Allowed values are: `SASL/SCRAM`, `mTLS`, `Unauthorized`.

:::

::::

:::: details public Zilla Plus variables

**`public` Zilla Plus Variables**

```json
    "public":
    {
        "wildcardDNS": "<your public wildcard dns>",
        "certificate": "<your public tls certificate key ARN>",
        "port": "<your public port>"
    }
```

::: tabs

@tab `wildcardDNS`

#### `wildcardDNS`

This variable defines the public wildcard DNS pattern for bootstrap servers to be used by Kafka clients.
It should match the wildcard DNS of the public TLS certificate.

@tab `certificate`

#### `certificate`

You need the ARN of either the Certificte Manager certificate or the Secrets Manager secret that contains your public TLS certificate private key.

List all certificates in Certificate Manager:

```bash
aws acm list-certificates --certificate-statuses ISSUED --query 'CertificateSummaryList[*].[DomainName,CertificateArn]' --output table
```

Find and note down the ARN of your public TLS certificate.

List all secrets in Secrets Manager:

```bash
aws secretsmanager list-secrets --query 'SecretList[*].[Name,ARN]' --output table
```

Find and note down the ARN of the secret that contains your public TLS certificate private key.

@tab `port`

#### `port`

> Default: `9094`

This variable defines the public port number to be used by Kafka clients.

@tab `capacity`

#### `capacity`

> Default: `2`

This variable defines the initial number of Zilla Plus instances.

@tab `instanceType`

#### `instanceType`

> Default: `t3.small`

This variable defines the initial number of Zilla Plus instances.

:::

::::

:::: details mTLS Specific Variables

**mTLS Specific Variables**

You only need to add these if you choose mTLS as client authentication method.

::: tabs

@tab `certificateAuthorityArn`

#### `certificateAuthorityArn`

This variable defines the ACM Private Certificate Authority ARN used to authorize clients connecting to the MSK cluster. You can set this in the context variable in your `cdktf.json` file under `zilla-plus` object in the `msk` variables section.

List all ACM Private Certificate Authorities:

```bash
aws acm-pca list-certificate-authorities --query 'CertificateAuthorities[*].[Arn]' --output table
```

Note down the ARN of the ACM Private Certificate Authority you want to use.

:::

::::

## Step 3: Configure the optional features (optional)

These features all have default values and can be configured using cdk context variables. If you don't plan to configure any of these features you can skip this section and go to the [Deploy stack using Terraform](#step-4-deploy-stack-using-terraform) section.

### Internet Gateway ID

If you already have an Internet Gateway in the MSK's VPN it should be provided via the `igwId` context variable in your `cdktf.json` under `zilla-plus` object. If not set the deployment will attempt to create on in the VPC.

To query the IGW_ID of your MSK's VPN use the following command:

```bash
VPC_ID=$(aws kafka describe-cluster --cluster-arn <msk-cluster-arn> --query "ClusterInfo.VpcConfig.VpcId" --output text)
aws ec2 describe-internet-gateways --filters "Name=attachment.vpc-id,Values=$VPC_ID" --query "InternetGateways[0].InternetGatewayId" --output text
```

### Public TLS Certificate via AWS Certificate Manager for Nitro Enclaves

If you want to enable Zilla-plus Nitro Enclaves support all you have to do is provide the `public.certificate` context variable via ACM.

### Custom Zilla Plus Role

By default the deployment creates the Zilla Plus Role with the necessary roles and policies. If you want, you can specify your own role by setting `roleName` context variable in your `cdktf.json` under `zilla-plus` object.

List all IAM roles:

```bash
aws iam list-roles --query 'Roles[*].[RoleName,Arn]' --output table
```

Note down the role name `RoleName` of the desired IAM role.

### Custom Zilla Plus Security Groups

By default the deployment creates the Zilla Plus Security Group with the necessary ports to be open. If you want, you can specify your own security group by setting `securityGroups` context variable in your `cdktf.json` under `zilla-plus` object.

List all security groups:

```bash
aws ec2 describe-security-groups --query 'SecurityGroups[*].[GroupId, GroupName]' --output table
```

Note down the security group IDs (GroupId) of the desired security groups.

### Separate Public Certificate Authority ARN

This variable defines the ACM Private Certificate Authority ARN used to authorize clients connecting to the Public Zilla Plus.
By default Zilla Plus will use the `msk.certificateAuthorityArn` for the Public Certificate Authority. If you want to change this set `certificateAuthorityArn` context variable in your `cdktf.json` file under `zilla-plus` object in the `public` variables section.

List all ACM Private Certificate Authorities:

```bash
aws acm-pca list-certificate-authorities --query 'CertificateAuthorities[*].[Arn]' --output table
```

Note down the ARN of the ACM Private Certificate Authority you want to use.

### CloudWatch Integration

```json
"cloudwatch":
{
    "disabled": false,
    "logs": 
    {
        "group": "<your cloudwatch log group name>"
    },
    "metrics":
    {
        "namespace": "<your cloudwatch metrics namespace>"
    }
}
```

By default CloudWatch metrics and logging is enabled. To disable CloudWatch logging and metrics, set the `cloudwatch.disabled` context variable to `true`.

You can create or use existing log groups and metric namespaces in CloudWatch.

By default, the deployment creates a CloudWatch Log Groups and Custom Metrics Namespace.
If you want to define your own, follow these steps.

#### List All CloudWatch Log Groups

```bash
aws logs describe-log-groups --query 'logGroups[*].[logGroupName]' --output table
```

This command will return a table listing the names of all the log groups in your CloudWatch.
In your `cdktf.json` file add the desired CloudWatch Logs Group for variable name `logs.group` under `zilla-plus` object in the `cloudwatch` variables section.

#### List All CloudWatch Custom Metric Namespaces

```bash
aws cloudwatch list-metrics --query 'Metrics[*].Namespace' --output text | tr '\t' '\n' | sort | uniq | grep -v '^AWS'
```

In your `cdktf.json` file add the desired CloudWatch Metrics Namespace for variable name `metrics.namespace` under `zilla-plus` object in the `cloudwatch` variables section.

### Enable SSH Access

To enable SSH access to the instances you will need the name of an existing EC2 KeyPair to set the `sshKey` context variable under `zilla-plus` object.

List all EC2 KeyPairs:

```bash
aws ec2 describe-key-pairs --query 'KeyPairs[*].[KeyName]' --output table
```

Note down the KeyPair name `KeyName` you want to use.

## Step 4: Deploy stack using Terraform

1. Install the node.js dependencies specified in the `package.json` file:

    ```bash
    npm install
    ```

2. Navigate to the CDKTF project directory and run the following command to generate the constructs for external providers:

    ```bash
    npm run get
    ```

3. Navigate to the CDKTF project directory and run the following command to synthesize the configuration:

    ```bash
    npm run synth
    ```

    ::: info Note
    This command will generate the necessary Terraform JSON configuration files in the cdktf.out directory.
    :::

4. Initialize terraform, apply the plan, review the resources to be create, and confirm to deploy the resources:

    ```bash
    terraform -chdir=cdktf.out/stacks/secure-public-access init
    terraform -chdir=cdktf.out/stacks/secure-public-access apply
    ```

5. Configure Global DNS to ensures that any new Kafka brokers added to the cluster can still be reached via the Zilla proxy. When using a wildcard DNS name for your own domain, such as `*.example.aklivity.io` then the DNS entries are setup in your DNS provider. After deploying the stack, check the outputs, where you can find the NetworkLoadBalancer DNS.

    ```
    NetworkLoadBalancerOutput = "network-load-balancer-******.elb.us-east-1.amazonaws.com"
    ```

    Lookup the IP addresses of your load balancer using `nslookup` and the DNS of the NetworkLoadBalancer.

    ```bash
    nslookup network-load-balancer-86334a80cbd16ec2.elb.us-east-2.amazonaws.com
    ```

    ::: info Note
    For testing purposes you can edit your local /etc/hosts file instead of updating your DNS provider.
    :::

6. Install a Java runtime that can be used by the Kafka client, then install the Kafka Client:

    ```bash
    sudo yum install java-1.8.0
    ```

    ```bash
    wget https://archive.apache.org/dist/kafka/2.8.0/kafka_2.13-2.8.0.tgz
    tar -xzf kafka_2.13-2.8.0.tgz
    cd kafka_2.13-2.8.0
    ```

7. With the Kafka client now installed we are ready to configure it and point it at the Zilla proxy:

    ::::tabs

    @tab mTLS

    If you configured Zilla Plus to use mTLS authentication method, we need to import the trusted client certificate and corresponding private key into the local key store used by the Kafka client when connecting to the Zilla proxy. Also first you need to create a client certificate.

    ##### Create client certificate

    You can use the following script to create a client certificate signed by an AWS Private Certificate Authority and upload the client private key to AWS SecretsManager.

    :::details create_client_certificate.sh
    ```bash
    <!-- @include: ./create_client_certificate.sh -->
    ```
    :::

    ##### Import trusted client certificate

    ```bash
    openssl pkcs12 -export -in client-1.cert -inkey client-1.pkcs8.pem -out client-1.p12 -name client-1
    keytool -importkeystore -destkeystore /tmp/kafka.client.keystore.jks -deststorepass generated -srckeystore client-1.p12 -srcstoretype PKCS12 -srcstorepass generated -alias client-1
    ```

    In this example, we are importing a private key and certificate with Common Name client-1 signed by a private certificate authority. First the private key and signed certificate are converted into a p12 formatted key store.

    Then the key store is converted to /tmp/kafka.client.keystore.jks in JKS format. When prompted, use a consistent password for each command. We use the password generated to illustrate these steps.

    The Zilla proxy relies on TLS so we need to create a file called client.properties that tells the Kafka client to use SSL as the security protocol and to specify the key store containing authorized client certificates.

    ##### client.properties

    ```text
    security.protocol=SSL
    ssl.keystore.location=/tmp/kafka.client.keystore.jks
    ssl.keystore.password=generated
    ```

    @tab SASL/SCRAM

    If you configured Zilla Plus to use SASL/SCRAM authentication method, Zilla proxy relies on encrypted SASL/SCRAM so we need to create a file called client.properties that tells the Kafka client to use SASL_SSL as the security protocol with SCRAM-SHA-512 encryption.

    Notice we used the default username and password, but you will need to replace those with your own credentials from the `AmazonMSK_*` secret you created.

    ##### client.properties

    ```text
    sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="alice" password="alice-secret";
    security.protocol=SASL_SSL
    sasl.mechanism=SCRAM-SHA-512
    ```

    @tab Unauthorized Access

    ##### Trust the Private Certificate Authority

    Import the private CA certificate into your trust store.

    ```bash
    keytool -importcert -keystore /tmp/kafka.client.truststore.jks -storetype jks -storepass generated -alias pca -file Certificate.pem
    ```

    ##### Configure the Kafka Client

    The Zilla proxy relies on TLS so we need to create a file called client.properties that tells the Kafka client to use SSL as the security protocol and to trust your private certificate authority as the signer of the \*.aklivity.example.com certificate.

    ##### client.properties

    ```text
    security.protocol=SSL
    ssl.truststore.location=/tmp/kafka.client.truststore.jks
    ```

    ::::

8. Test the Kafka Client to verifies internet connectivity to your MSK cluster via Zilla Plus for Amazon MSK. If using the wildcard DNS pattern `*.example.aklivity.io`, then we use the following as TLS bootstrap server names for the Kafka client:

    ```text
    b-1.example.aklivity.io:9094,b-2.example.aklivity.io:9094
    ```

    ::: info Note
    Replace these TLS bootstrap server names accordingly for your own custom wildcard DNS pattern.
    :::

    ::: tabs
    @tab Create a Topic

    Use the Kafka client to create a topic called zilla-proxy-test, replacing `<tls-bootstrap-server-names>` in the command below with the TLS proxy names of your Zilla proxy:

    ```bash
    bin/kafka-topics.sh --create --topic zilla-proxy-test --partitions 3 --replication-factor 2 --command-config client.properties --bootstrap-server <tls-bootstrap-server-names>
    ```

    :::