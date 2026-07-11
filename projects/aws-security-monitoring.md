# AWS Security Monitoring Lab

## Executive Summary

This project demonstrates the implementation of a basic cloud security monitoring solution using Amazon Web Services (AWS). The objective was to improve visibility into account activity by enabling logging, monitoring events, and configuring automated notifications for security-related actions.

The lab focused on understanding how AWS native services can be combined to support Security Operations Center (SOC) activities and cloud security monitoring.

---

## Objectives

- Enable audit logging for AWS account activities.
- Monitor security-relevant events.
- Configure automated alerts.
- Strengthen visibility into cloud resources.
- Gain hands-on experience with AWS security services.

---

## Environment

| Component | Technology |
|------------|------------|
| Cloud Platform | AWS |
| Logging | AWS CloudTrail |
| Monitoring | Amazon CloudWatch |
| Event Processing | Amazon EventBridge |
| Notifications | Amazon SNS |
| Identity Management | AWS IAM |

---

## Tools Used

- AWS Management Console
- CloudTrail
- CloudWatch
- EventBridge
- SNS
- IAM

---

## Methodology

### Step 1

Created an AWS account and configured IAM users following the principle of least privilege.

### Step 2

Enabled AWS CloudTrail to capture management events across the account.

### Step 3

Configured CloudWatch to receive CloudTrail logs.

### Step 4

Created EventBridge rules to detect selected management events.

### Step 5

Configured Amazon SNS to deliver notifications whenever monitored events occurred.

---

## Security Events Monitored

- Console login
- Failed authentication
- IAM policy changes
- User creation
- Role modification
- Access key creation
- Security group modifications

---

## Results

The monitoring environment successfully generated alerts whenever monitored activities occurred. CloudTrail logs provided detailed records of user actions, while CloudWatch and EventBridge enabled near real-time event processing.

---

## Security Benefits

- Improved visibility
- Audit trail
- Faster incident detection
- Event correlation
- Cloud governance

---

## Challenges

- Understanding IAM permissions
- Configuring EventBridge rules
- Testing SNS notifications
- Interpreting CloudTrail logs

---

## Lessons Learned

This project demonstrated the importance of continuous monitoring within cloud environments. Security is not limited to protecting infrastructure; effective monitoring and logging are essential for detecting suspicious behaviour and supporting incident response.

---

## Skills Demonstrated

- AWS Cloud Security
- Security Monitoring
- CloudTrail
- CloudWatch
- EventBridge
- SNS
- IAM
- Log Analysis
- Incident Detection

---

## Future Improvements

- Integrate Amazon GuardDuty.
- Forward logs into Splunk.
- Monitor AWS Config compliance.
- Automate remediation using AWS Lambda.
- Implement Security Hub.

---

## References

- AWS CloudTrail Documentation
- Amazon CloudWatch Documentation
- AWS IAM Documentation
- AWS EventBridge Documentation
- Amazon SNS Documentation
