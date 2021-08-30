<!--
title: 'Serverless CQRS'
description: 'This template demonstrates how to deploy a CQRS pattern on AWS Lambda using the Serverless Framework.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Yashesh Bhatt, (Nosoft-CoE).'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Serverless CQRS

This template demonstrates how to deploy a CQRS pattern on AWS Lambda using the Serverless Framework.

### Motivation

Defining a consistent pattern of querying the data from a distributed system.
- The Read/Write model in distributed systems often has asymmetric structure due to the separation of concerns.
- Some queries in a distributed system may need to serve a complex and aggregated data model owned by multiple Microservices.
- Two methods of implementing the Read model:
  - **The API composition pattern**— Simpler approach, It works by making clients of the services that own the data responsible for invoking the services and combining the results.
  - **The Command query responsibility segregation (CQRS) pattern**—This is more powerful than the API composition pattern, but it’s also more complex. It maintains one or more view databases whose sole purpose is to support queries.
- This template aims at addressing the baseline complexity of setting up a CQRS pattern, with serverless compute mode (FaaS) on AWS Lambda and API Gateway implementations.
- **Why Serverless ?**
  - It enforces stateless and pure functions.
  - The cost of operation is low (invocation based).
  - Infrastructure management is less and capacity planning can be more elastic.
  - Better suited for event driven async communication.



### Usage

#### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: aws-node
stage: dev
region: us-east-1
stack: aws-node-dev
resources: 6
functions:
  api: aws-node-dev-hello
layers:
  None
```

#### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

#### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```
