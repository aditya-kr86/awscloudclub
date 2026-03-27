# 📘 **AWS Cloud Club — Web Hosting & Cloud Foundations Syllabus**

## 🎯 Overall Goal

> Students will understand cloud fundamentals and deploy a live website using AWS S3 with proper security and cost management.

---

# 🟣 **SESSION 1: Introduction to Cloud & Web Hosting Fundamentals**

## 🕒 Duration: 60–75 mins

## 🎯 Objective:

* Cloud kya hai samajhna
* Deployment vs actual infrastructure ka difference
* AWS ecosystem ka overview
* Curiosity build karna

---

## 🔹 Module 1: Hook & Problem Statement

* “You deploy apps… but what runs behind?”
* Render/Vercel vs real infrastructure
* Server crash scenario (scalability problem)

---

## 🔹 Module 2: Traditional vs Cloud Computing

* Physical servers (CapEx model)
* Maintenance challenges:

  * Hardware
  * Electricity
  * Cooling
  * Downtime
* Cloud as a solution

---

## 🔹 Module 3: Cloud Computing Basics

* Definition:

  * Storage
  * Compute
  * Networking
  * Analytics
* Pay-as-you-go model (OpEx)

---

## 🔹 Module 4: Real-World Analogies

* Pizza analogy (CapEx vs OpEx)
* Uber analogy (on-demand resources)

---

## 🔹 Module 5: Cloud Superpowers

* Scalability
* Elasticity
* Fault Tolerance
* Disaster Recovery
* High Availability

---

## 🔹 Module 6: Real-World Example

* Hotstar / live streaming
* Traffic spike handling
* Auto-scaling concept

---

## 🔹 Module 7: Cloud Service Models

* IaaS → control
* PaaS → deploy
* SaaS → use

---

## 🔹 Module 8: Why AWS?

* Largest cloud provider
* Global infrastructure
* Industry usage (Netflix, etc.)

---

## 🔹 Module 9: Club Vision

* Learn by building
* Hands-on approach
* Future roadmap (labs, projects)

---

## 🎯 Outcome of Session 1

Students will:

* Understand cloud conceptually
* Know why AWS matters
* Be ready for hands-on learning

---

---

# 🟣 **SESSION 2: Hands-On Lab — IAM, Billing Safety & S3 Website Hosting**

## 🕒 Duration: 90–120 mins

## 🎯 Objective:

* Safe AWS usage
* Account/IAM understanding
* Budget protection
* S3 static website hosting

---

## 🔹 Module 1: AWS Account & Safety

* AWS account structure
* Root vs IAM user
* Importance of cost control

---

## 🔹 Module 2: IAM Basics

### Concepts:

* IAM User
* IAM Group
* Permissions / Policies

---

### 🛠 Practical:

#### 1. Create IAM Group

* Name: `S3-LAB-TEMP`

#### 2. Attach Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": [
        "ec2:*",
        "rds:*",
        "lambda:*",
        "iam:*",
        "organizations:*",
        "cloudformation:*",
        "budgets:*",
        "ce:*"
      ],
      "Resource": "*"
    }
  ]
}
```

---

#### 3. Create IAM User

* Enable console access
* Temporary password
* Add to group (`S3-LAB-TEMP`)

---

## 🔹 Module 3: Billing Protection

* Free tier explanation
* Budget concept

### Practical:

* Billing → Budgets
* Create budget: $2
* Alerts:

  * 50%
  * 80%

---

## 🔹 Module 4: Introduction to S3

* Bucket = container
* Object = file
* Static hosting concept

---

## 🔹 Module 5: Architecture

Laptop → S3 → Internet → Browser

---

## 🔹 Module 6: Hands-On Website Hosting

### Step 1: Create Bucket

* Unique name
* Region: Mumbai
* Disable block public access

---

### Step 2: Upload Files

* index.html
* CSS / JS / images (optional)

---

### Step 3: Enable Static Hosting

* Index document: `index.html`

---

### Step 4: Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

---

### Step 5: Access Website

* Use endpoint URL
* Verify live deployment

---

## 🔹 Module 7: Debugging & Common Errors

* Access Denied → policy issue
* CSS not loading → path issue
* 403 error → public access block
* Wrong filename

---

## 🔹 Module 8: Cleanup & Safety

* Delete buckets
* Remove IAM users
* Keep budget active

---

## 🔹 Module 9: What’s Next

* EC2 (dynamic hosting)
* Custom domain
* CloudFront

---

## 🎯 Outcome of Session 2

Students will:

* Deploy real website on cloud
* Understand IAM basics
* Learn cost safety
* Gain confidence in AWS