# Virtualization Lab for Cybersecurity Training

## Executive Summary

This project documents the design, deployment, and management of a personal cybersecurity laboratory using Oracle VirtualBox. The lab provided a safe, isolated environment for learning system administration, networking, security monitoring, vulnerability assessment, malware analysis, and incident response.

The environment was built to simulate enterprise systems while allowing security tools and techniques to be tested without affecting production devices.

---

# Objectives

- Build a secure cybersecurity laboratory.
- Deploy multiple operating systems.
- Configure isolated virtual networks.
- Support security testing and analysis.
- Practice system administration.
- Create a reusable environment for continuous learning.

---

# Lab Architecture

| Component | Description |
|-----------|-------------|
| Hypervisor | Oracle VirtualBox |
| Host Operating System | Windows 11 |
| Guest Operating Systems | Kali Linux, Ubuntu Linux, Windows Server 2022, Windows 11 |
| Network Modes | NAT, Host-Only Adapter |
| Storage | Virtual Disk Images (VDI) |

---

# Virtual Machines

## Kali Linux

Primary security testing workstation used for:

- Network reconnaissance
- Packet analysis
- Vulnerability assessment
- Linux administration
- Security tool usage

---

## Ubuntu Linux

Used for:

- Linux administration practice
- System hardening
- Package management
- Service configuration
- Log analysis

---

## Windows Server 2022

Configured as an enterprise server providing:

- Active Directory Domain Services (AD DS)
- DNS
- Domain management
- Group Policy
- User administration

---

## Windows 11

Used as a client workstation for:

- Domain membership
- Authentication testing
- Security event generation
- User activity simulation

---

# Network Configuration

The laboratory used different VirtualBox networking modes depending on the exercise.

## NAT

Used when internet connectivity was required for:

- Software updates
- Package installation
- Downloading tools
- Cloud connectivity

---

## Host-Only Network

Used for:

- Internal communication
- Active Directory testing
- Isolated security exercises
- Network reconnaissance
- Vulnerability assessment

---

# Practical Activities

The lab supported numerous cybersecurity exercises, including:

- AWS Security Monitoring
- Splunk SIEM configuration
- Wireshark packet capture
- Nmap network scanning
- Vulnerability assessments
- Windows Server administration
- Linux security hardening
- Incident investigation
- Malware analysis

---

# Security Tools Used

Throughout the lab environment, I worked with:

- Splunk Enterprise
- Wireshark
- Nmap
- OpenVAS (Greenbone)
- Burp Suite
- Metasploit Framework
- Bash
- PowerShell
- Windows Event Viewer

---

# Skills Demonstrated

- Virtual Machine Deployment
- Virtual Networking
- Operating System Installation
- Network Configuration
- Linux Administration
- Windows Administration
- Troubleshooting
- Lab Documentation

---

# Challenges

Several technical challenges were encountered during lab development, including:

- Configuring virtual networking.
- Troubleshooting internet connectivity.
- Managing virtual machine resources.
- Resolving operating system compatibility issues.
- Optimising performance on limited hardware.

Addressing these issues improved my understanding of virtualization and system administration.

---

# Lessons Learned

Building a personal cybersecurity lab provided invaluable practical experience. It reinforced the importance of understanding operating systems, networking, and virtualization before performing security testing.

The ability to safely experiment with tools and techniques accelerated my learning and improved my confidence in troubleshooting real-world technical problems.

---

# Recommendations

To enhance the lab environment further, I plan to:

- Add Microsoft Sentinel integration.
- Deploy Security Onion for network monitoring.
- Build a dedicated Active Directory attack-and-defence lab.
- Explore Docker-based security environments.
- Implement automated lab provisioning.

---

# Future Development

Future improvements include:

- Multi-server Active Directory environments.
- Additional Linux distributions.
- Enterprise logging architecture.
- Threat hunting scenarios.
- Purple Team exercises.
- Cloud-connected hybrid security labs.

---

# Technologies Used

- Oracle VirtualBox
- Windows 11
- Windows Server 2022
- Ubuntu Linux
- Kali Linux
- Splunk Enterprise
- Wireshark
- Nmap
- OpenVAS
- PowerShell
- Bash

---

# Key Competencies

- Virtualization
- Network Configuration
- System Administration
- Security Monitoring
- Infrastructure Management
- Technical Troubleshooting
- Documentation
- Continuous Learning

---

# Conclusion

This virtualization lab served as the foundation for my cybersecurity learning journey. By designing and maintaining an isolated environment for experimentation, I gained practical experience across networking, operating systems, security monitoring, vulnerability assessment, and enterprise administration. The lab continues to evolve as I expand my skills and explore new technologies, supporting my goal of becoming a Security Operations Center (SOC) Analyst.
