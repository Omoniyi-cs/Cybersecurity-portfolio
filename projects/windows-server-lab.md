# Windows Server Administration and Active Directory Lab

## Executive Summary

This project documents my hands-on experience deploying and administering Windows Server 2022 in a virtual lab environment. The lab focused on configuring Active Directory Domain Services (AD DS), Domain Name System (DNS), Organizational Units (OUs), Group Policy Objects (GPOs), and domain user management.

The objective was to understand how enterprise Windows environments are managed and secured, while developing practical skills applicable to Security Operations Center (SOC), Blue Team, and systems administration roles.

---

# Objectives

- Deploy Windows Server 2022 in a virtual environment.
- Configure Active Directory Domain Services (AD DS).
- Install and manage DNS.
- Create and manage Organizational Units (OUs).
- Manage domain users and groups.
- Configure and apply Group Policy.
- Understand enterprise identity management concepts.

---

# Lab Environment

| Component | Description |
|-----------|-------------|
| Server Operating System | Windows Server 2022 |
| Client Operating System | Windows 11 |
| Virtualization | Oracle VirtualBox |
| Network | Host-Only and NAT |
| Directory Service | Active Directory Domain Services (AD DS) |
| Name Resolution | DNS |

---

# Tools Used

- Windows Server 2022
- Active Directory Users and Computers (ADUC)
- Server Manager
- DNS Manager
- Group Policy Management Console (GPMC)
- Windows 11
- VirtualBox

---

# Lab Activities

## Server Deployment

Installed Windows Server 2022 and completed the initial server configuration.

Tasks included:

- Configuring server name
- Assigning a static IP address
- Installing updates
- Verifying network connectivity

---

## Active Directory Installation

Installed the Active Directory Domain Services (AD DS) role and promoted the server to a domain controller.

Activities included:

- Creating a new forest
- Configuring the domain
- Verifying Active Directory services
- Testing domain functionality

---

## DNS Configuration

Configured DNS to support Active Directory operations.

Tasks included:

- Creating forward lookup zones
- Verifying DNS records
- Testing name resolution
- Troubleshooting DNS issues

---

## User and Group Management

Created and managed domain users and security groups.

Activities included:

- Creating user accounts
- Resetting passwords
- Managing group membership
- Disabling inactive accounts
- Applying the principle of least privilege

---

## Organizational Units (OUs)

Designed a logical Active Directory structure by creating Organizational Units to organise users and resources efficiently.

Example structure:

```
Company
├── IT
├── HR
├── Finance
└── Students
```

---

## Group Policy

Configured Group Policy Objects (GPOs) to manage domain settings.

Examples included:

- Password policy
- Account lockout policy
- Desktop restrictions
- Security settings
- User environment configuration

---

## Client Domain Join

Joined a Windows 11 client machine to the Active Directory domain and verified:

- Domain authentication
- DNS resolution
- Group Policy application
- User logon

---

# Security Concepts Applied

During the lab, I applied several foundational security principles, including:

- Principle of Least Privilege (PoLP)
- Centralized Identity Management
- Password Policy Enforcement
- Account Lockout Policy
- Secure Authentication
- Role-Based Access Control (RBAC)

---

# Skills Demonstrated

- Windows Server Administration
- Active Directory
- DNS Administration
- Group Policy Management
- User and Group Administration
- Identity and Access Management (IAM)
- Windows Networking
- Enterprise System Administration

---

# Challenges

Some challenges encountered during the lab included:

- Troubleshooting Active Directory promotion.
- Resolving DNS configuration issues.
- Understanding Group Policy processing.
- Configuring client domain joins.
- Managing virtual networking within VirtualBox.

Working through these issues improved my troubleshooting skills and understanding of enterprise Windows environments.

---

# Lessons Learned

This project reinforced the importance of centralized identity management in enterprise networks. Active Directory provides the foundation for authentication, authorization, and policy enforcement, making it a critical component of Windows-based infrastructures.

The lab also demonstrated how proper DNS configuration and Group Policy management contribute to secure and efficient administration.

---

# Recommendations

- Implement Multi-Factor Authentication (MFA) for privileged accounts.
- Regularly review inactive users and groups.
- Audit privileged account usage.
- Apply security updates promptly.
- Monitor authentication logs for suspicious activity.
- Back up Active Directory regularly.

---

# Future Improvements

Future enhancements for this lab include:

- Deploying multiple domain controllers for redundancy.
- Configuring Active Directory Certificate Services (AD CS).
- Integrating Windows Event Logs with Splunk.
- Implementing Windows Server Update Services (WSUS).
- Exploring Active Directory security monitoring techniques.

---

# Technologies Used

- Windows Server 2022
- Windows 11
- Active Directory Domain Services
- DNS
- Group Policy
- VirtualBox

---

# Key Competencies

- Enterprise Administration
- Identity and Access Management
- Windows Security
- Active Directory
- DNS Management
- Policy Administration
- Technical Documentation

---

# Conclusion

This project demonstrates practical experience deploying and administering Windows Server 2022 within a virtual lab environment. By configuring Active Directory, DNS, Group Policy, and domain services, I developed foundational enterprise administration skills that support cybersecurity operations, identity management, and secure Windows infrastructure.
