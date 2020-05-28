---
title: 'Lambda'
slug: 'aws_lambda'
description: 'Intro to AWS Lambda'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-05-27'
---

## What is AWS Lambda

AWS Lambda is a compute service where you can upload your code and create a Lambda function.

AWS Lambda takes care of provisioning and managing the servers that you use to run the code. You don’t have to worry about operating systems, patching, scaling, etc.

You can use Lambda in Event Driven Service, for example it can respond to:

- New file upload to S3
- Change in DynamoDB table
- API Call made using SDK
- HTTP response using API gateway

### Number of requests

First one million requests are free. \$0.20 per one million requests thereafter.

### Duration

Duration is calculated from the time your code begins executing until it returns or otherwise terminates, rounded up to the nearest 100ms.

The price depends on the amount of memory you allocate to your function. You are charged \$0.00001667 for every GB-second used.
