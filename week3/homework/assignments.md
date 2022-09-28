## Mandatory assignments

**Assignment 1:**
Steps: 1. Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws. amazon.com/s3/.

    2.In the Buckets list, choose the name of the bucket that you want to enable server access logging for.

    3.Choose Properties.

    4.In the Server access logging section, choose Edit.

    5.Under Server access logging, select Enable.

    6.For Target bucket, enter the name of the bucket that you want to receive the log record objects.The target bucket must be in the same Region as the source bucket and must not have a default retention period configuration.

    7.Choose Save changes.
        When you enable server access logging on a bucket, the console both enables logging on the source bucket and updates the bucket policy for the target bucket to grant s3:PutObject permissions to the logging service principal (logging.s3.amazonaws.com). For more information about this bucket policy, see Grant permissions to the logging service principal using a bucket policy.You can view the logs in the target bucket. After you enable server access logging, it might take a few hours before the logs are delivered to the target bucket. For more information about how and when logs are delivered, see How are logs delivered?.

Three line sample of the S3 access logs for your bucket:

```f7a3ac526268714ee846c7c63f733aa09aedd75f3215800b465088eec95d2824 hyf-hosting-anil-webapp [23/Sep/2022:06:57:40 +0000] 2.104.21.42 f7a3ac526268714ee846c7c63f733aa09aedd75f3215800b465088eec95d2824 7RYHW3TX2M81S5AP REST.GET.BUCKETPOLICY - "GET /?policy HTTP/1.1" 200 - 372 - 12 - "-" "S3Console/0.4, aws-internal/3 aws-sdk-java/1.11.1030 Linux/5.4.207-126.363.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.302-b08 java/1.8.0_302 vendor/Oracle_Corporation cfg/retry-mode/standard" - Y+V7ZeOp2hCrWspA+ha1982irkB2MYBTl5EGlfmYShYCudOFVrcLvbM6XoRwOSM0m/UH6zvL4vk= SigV4 ECDHE-RSA-AES128-GCM-SHA256 AuthHeader hyf-hosting-anil-webapp.s3.us-east-1.amazonaws.com TLSv1.2 -

```

How would you calculate total impressions based on the S3 access logs format? `?`
bucket owner: f7a3ac526268714ee846c7c63f733aa09aedd75f3215800b465088eec95d2824
bucket:hyf-hosting-anil-webapp
time at request received: [23/Sep/2022:06:57:40 +0000]
remote ip: 2.104.21.42
requester: f7a3ac526268714ee846c7c63f733aa09aedd75f3215800b465088eec95d2824
request id :7RYHW3TX2M81S5AP
operation: REST.GET.BUCKETPOLICY
key: -
request uri: "GET /?policy HTTP/1.1"
http status: 200
error code: -
bytes sent: 372
object size: -
total time: 12 milliseconds
**Assignment 2:**

1. The URL of the public API: https://pjebi851c6.execute-api.us-east-1.amazonaws.com/Prod/products
2. The URL of the website using the API: https://hyf-hosting-anil-webapp.s3.amazonaws.com/index.html
3. Screenshot of the updated service map: `?`
4. Which service has the highest latency: `?`

**Optional assignment**

1. Screenshot of the layer in the AWS console, clearly showing the ARN: `?`
2. Screenshot of the lambda function, clearly showing that it is now using the created layer: `?`
