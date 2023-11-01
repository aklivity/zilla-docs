---
description: Create a new MSK cluster with 3 brokers, each in a different availability zone with mTLS.
---

# Create a MSK Cluster

The following parameters are needed when following these steps to create a new MSK cluster.

- Name
- VPC
- Subnets

## Create a VPC

- MSK Cluster
  - Name `aklivity`
- VPC
  - Name `my-msk-cluster` in region `us-east-1`
- Subnets
  - Name `my-msk-cluster-1a` in zone `us-east-1a`
  - Name `my-msk-cluster-1b` in zone `us-east-1b`
  - Name `my-msk-cluster-1c` in zone `us-east-1c`

## Create the MSK Cluster

From the MSK Management Console make sure you have selected the desired region, such as `US East (N. Virginia) us-east-1`.

Start the [`Create cluster` wizard and specify Custom create](https://console.aws.amazon.com/msk/home#/cluster/create?isCustomCreate=true)

### Step 1: Cluster Settings

- Creation method: `Custom create`
- Cluster name: `my-msk-cluster`
- Cluster type: `Provisioned`
- Specify your desired settings

::: note For a small evaluation MSK use these settings
Broker: `kafka.t3.small`\
Storage: `10 GiB`
:::

### Step 2: Networking

- VPC: `my-msk-cluster-vpc`
- For each of the 3 Zones 
  - Subnet: `my-msk-cluster-subnet-public*`

### Step 3: Security Settings

- Access control methods: `Unauthenticated access`

- Encryption
  - Between clients and brokers: `TLS Encryption`

### Step 4: Monitoring and tags

- Specify your desired settings

### Step 5: Review and create

Check to make sure all of the settings are correct and click `Create Cluster`.
