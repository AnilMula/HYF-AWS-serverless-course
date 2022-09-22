## Mandatory assignments

**Assignment 4 & 5:**
npm run build
aws s3api create-bucket --bucket hyf-hosting-anil-webapp --region us-east-1
echo "error page - try again later" > build/error.html
aws s3 sync ./build s3://hyf-hosting-webapp-anil
aws s3 website s3://hyf-hosting-anil-webapp --index-document index.html --error-document error.html

Sync your changes to s3 and write down your s3 bucket url.

bucket url: https://hyf-hosting-anil-webapp.s3.amazonaws.com/index.html

**Assignment 6:**

Right now, the website does not support HTTPS. Explain which other AWS service needs to be integrated in order to achieve this.

service name: CloudFront

**Assignment 7:**

Write down the main cost factors for S3

brief description: free tier account
5GB for 12 Months
20,000 GET requests
2,000 PUT requests

**Assignment 8:**

How much would it cost to store 51TB on S3?

S3 Standard storage: 51 TB per month x 1024 GB in a TB = 52224 GB per month
51200 GB x 0.0230000000 USD = 1177.60 USD
1024 GB x 0.0220000000 USD = 22.53 USD
Total tier cost: 1177.60 USD + 22.53 USD = 1200.1280 USD (S3 Standard storage cost)
S3 Standard cost (monthly): 1,200.13 USD

Price: 1,200.13 USD per month

**Assignment 9:**

How much would hosting your website on S3 cost?

Price: Free

**Assignment 10:**

Write down a brief use case on when S3 could be used for a data engineering assignment:

use case: `?`

## Optional assignments:

**Assignment 11:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `?`

**Assignment 12:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `?`
