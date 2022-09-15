## Mandatory assignments

**Assignment 1:**

What is an ARN: `?`
Amazon Resource Names (ARNs) uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS, such as in IAM policies, Amazon Relational Database Service (Amazon RDS) tags, and API calls.

**Assignment 2:**

Response from the command:
AWS_REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone | sed 's/\(.*\)[a-z]/\1/')
SUPPORTED_REGIONS=("us-west-2" "us-east-1" "us-east-2" "eu-central-1" "eu-west-1" "ap-southeast-2" )
if [[ ! " ${SUPPORTED_REGIONS[@]} " =~ " ${AWS_REGION} " ]]; then
    /bin/echo -e "\e[1;31m'$AWS_REGION' is not a supported AWS Region, delete this Cloud9 instance and restart the workshop in a supported AWS Region.\e[0m"
else
/bin/echo -e "\e[1;32m'$AWS_REGION' is a supported AWS Region\e[0m"
fi

'us-east-1' is a supported AWS Region

**Assignment 3:**

1. response of the command:
   ec2-user:~/environment $ aws s3 ls
   2022-09-08 14:03:07 cf-templates-1d3uorp6wuf0t-us-east-1
   2022-09-14 17:10:13 hyf-week1-cf-week1hw
   2022-09-08 13:55:53 hyf-week1-cli-anil2
   2022-09-08 13:54:04 hyf-week1-console-anil

2. Command to upload file with the AWS CLI: `?`
   command: aws s3 cp \hello-world.txt s3://hyf-week1-cf-week1hw/
   result-message: upload: ./hello-world.txt to s3://hyf-week1-cf-week1hw/hello-world.txt

3. Command to create a presigned URL: `?`
   command: aws s3 presign s3://hyf-week1-cf-week1hw/hello-world.txt
   result-message: https://hyf-week1-cf-week1hw.s3.amazonaws.com/hello-world.txt?AWSAccessKeyId=ASIAWENST4G3CNH36MVZ&Expires=1663180210&x-amz-security-token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIDOq6Jnzpra2zlleJw0mjGiri7Vd7fYCb4rbM7tOyo37AiAduO%2FEBJVPxsxPtd5qDfr40xcOYwPBqcecXOZcvrfL5SrWAwjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDQyMTgxODI2MTk0MiIMaUoRS%2FHH0zWq0cH6KqoDAb4RYZdlC9BqAe01Jt%2FvfqBZMWtGJGggBIU4tv5g3ufNe4yulR%2BxxDf%2BAuJQL7x8PA%2BEmuDWgEQfHpYrmqiL606p34L9nxKsV5C5eecc3mGxNTjQ6MC%2BLAE3Arm%2BwzCE1fuz9Z9mkPy3Gff6ly10YpENpNc3lZf4cKa%2B6I4FFTrEMA38xklQlnzufDzWFqg0QdzmWnJN60bE1XWDLAX%2BlFefagD3WeN%2FFoz%2B3My4gTlAcIio7np28%2BZt3xQ%2BVa%2BSeCeI3CsmZ5cuXcu4ZVsIQUmUhmnZL%2FWA%2Fp3zq0q4LeIBE3iRYmutCnmtLVXG5YSpZGj%2BprB5ZOSPG4a%2B9yOp%2B%2B57vKpsolG9OncQLl5Kl%2FZXtW3cDLPCvDPoCQBu63Y0wveeDdkZVKZ9HnoKwBZ83xpZVWnLkQn48oknNPRD4WppcgSb%2BkVk%2Fe%2BU7b2KRWNqc%2FXmJ5ybXMSl0E0qN0YmM01feFT8lo%2F9%2BQx9bM7cQfkF4ZfKfpyFKIwgeHRZ1xyIlWNJsCpjCvt5NlVf1R8GVm6F4JpiaYwn%2B6lKABmmPjC2dQfkYYgiIhZ6MJy0h5kGOpMCUb4NO%2B98L6VJnQfPYzoFbBi%2BIZnLdbMosQehDrmR1ZvdsCebFwnNYvOcOGVU1z0B2Ae03DvX9%2F%2FwNdJUEqqc2NT8uMLjDJ0nTh2a%2FnhYh3WJhs%2F%2BoplglAsqiCPObjvbCza6kwwpD5dVga5pUZdkAx4HjwTx93M1KZCCAmGAz1RMuXMQdVQVfUoJ8XbAAn%2FbR28bX6Xexx0AStwxEbhSRumF6XbcSjQqrDUWs%2BBnRICpvIW2h2X9VbdohW7pbpVmj3zLpouqnJkxrbOShCyR3F%2BhhYBJeMUaYMzDbCPWNsPUWVVKgO2bpcnH%2Ff0%2BrOCjNo9ywEtNV4AAEoIfoLmfR5u4PYursM1i1bpDSyC37Bfdt6A%3D&Signature=0dtKw6pZtyU5IzNDsoTWrImDV%2FY%3D

4. Command to delete your bucket with the AWS CLI: `?`
   command: aws s3 rb s3://hyf-week1-console-anil
   result-message: remove_bucket: hyf-week1-console-anil

   command: aws s3 rb s3://hyf-week1-cli-anil2
   result-message: remove_bucket: hyf-week1-cli-anil2

5. Can you simply delete a CloudFormation bucket? : `?`
   command: aws s3 rb s3://hyf-week1-cf-week1hw
   result-message: remove_bucket failed: s3://hyf-week1-cf-week1hw An error occurred (BucketNotEmpty) when calling the DeleteBucket operation: The bucket you tried to delete is not empty

   since the bucket is having a file named hello-world.txt, the above command failed.
   next step is to delete the file (in some cases files and directories).

   command: aws s3 rm s3://hyf-week1-cf-week1hw --recursive
   result-message: delete: s3://hyf-week1-cf-week1hw/hello-world.txt

   At last we can delete our cloudFormation bucket using
   command: aws s3 rb s3://hyf-week1-cf-week1hw
   result-message: remove_bucket: hyf-week1-cf-week1hw

**Assignment 4 (Optional):**

create a file named template.yaml in AWS cloud9 and copy the content of template.yaml from week1 homework folder into it.

next to create a CF stack using AWS CLI,
command: aws cloudformation create-stack --stack-name awsclistack --template-body file:////home/ec2-user/environment/template.yaml
{
"StackId": "arn:aws:cloudformation:us-east-1:421818261942:stack/awsclistack/20693b50-34d1-11ed-a1c4-1204628369e5"
}

Command to deploy your CloudFormation template using the AWS CLI: `?`
