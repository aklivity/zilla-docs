---
shortTitle: Create an MSK Cluster
description: Create a new MSK cluster with 3 brokers, each in a different availability zone.
---

# Create an MSK Cluster

## Prerequisites

The following are needed when following these steps to create a new MSK cluster:
1. The `Name`, `VPC`, and `Subnets` parameters.
    ::: note Check your selected region
    Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.
    :::
2. A VPC. If you haven't already created a VPC, go to the [Create VPC page](https://console.aws.amazon.com/vpcconsole/home#CreateVpc:createMode=vpcWithResources) and [guide](./create-vpc.md#create-vpc) to create a `VPC and more` for your MSK cluster with the following parameters.

    - Name tag auto-generation: `my-msk-cluster`
    - IPv4 CIDR block: `10.0.0.0/16`
    - Number of Availability Zones: `3`

## Step 1: Start the wizard

Start the [Create MSK cluster](https://console.aws.amazon.com/msk/home#/cluster/create?isCustomCreate=true&isProvisionedCreate=true) wizard.

## Step 2: Set the cluster settings

Configure the basic cluster parameters, including the creation method, name, and type, to match your requirements.

- Creation method: `Custom create`
- Cluster name: `my-msk-cluster`
- Cluster type: `Provisioned`
- Specify your desired settings

::: info For a small evaluation MSK use these settings:
Broker: `kafka.t3.small`\
Storage: `10 GiB`
:::

## Step 3: Set the networking

Define the networking setup by selecting the appropriate VPC and subnets for each availability zone.

- VPC: `my-msk-cluster-vpc`
- For each of the 3 Zones
  - Subnet: `my-msk-cluster-subnet-public*`

## Step 4: Configure the security settings

Choose the access control method and encryption settings to secure communication between clients and brokers.

- Access control methods:
  - `SASL/SCRAM authentication`
  > -- or --
  - For mTLS
    - `TLS client authentication`
    - ACM Private CAs: `Mutual Authentication CA`
  > -- or --
  - `Unauthenticated access`

- Encryption
  - Between clients and brokers: `TLS Encryption`

## Step 5: Specify the monitoring and tags

Specify your desired settings.

## Step 6: Review and create

Verify all configured settings, ensure they meet your needs, and finalize the cluster creation process by clicking `Create Cluster`.