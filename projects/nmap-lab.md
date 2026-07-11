# Network Reconnaissance and Service Enumeration with Nmap

## Executive Summary

This project demonstrates the use of Nmap (Network Mapper) to perform authorized network reconnaissance and service enumeration within a controlled virtual lab environment. The objective was to identify active hosts, discover open ports, determine running services, and better understand the attack surface of systems before conducting a security assessment.

The exercise highlights how Nmap supports vulnerability assessments, network administration, and defensive security operations by providing accurate visibility into network assets.

---

# Objectives

- Discover active hosts on a network.
- Identify open TCP ports.
- Detect running services and versions.
- Perform operating system detection.
- Understand network exposure.
- Document findings and recommend security improvements.

---

# Lab Environment

| Component | Description |
|-----------|-------------|
| Scanner | Nmap |
| Attacker Machine | Kali Linux |
| Target Machines | Windows 11, Ubuntu Linux, Windows Server 2022 |
| Virtualization | Oracle VirtualBox |
| Network | Host-Only Lab Network |

---

# Tools Used

- Nmap
- Kali Linux
- VirtualBox
- Windows 11
- Ubuntu Linux
- Windows Server 2022

---

# Methodology

## Step 1 – Host Discovery

The network was scanned to identify live systems.

Example command:

```bash
nmap -sn 192.168.56.0/24
```

This scan identified reachable hosts without performing a port scan.

---

## Step 2 – Port Scanning

A TCP SYN scan was performed against selected hosts.

Example command:

```bash
nmap -sS 192.168.56.101
```

The scan identified open TCP ports available on the target.

---

## Step 3 – Service Detection

Service and version detection was enabled to determine which applications were listening on open ports.

Example command:

```bash
nmap -sV 192.168.56.101
```

---

## Step 4 – Operating System Detection

Operating system fingerprinting was performed.

Example command:

```bash
sudo nmap -O 192.168.56.101
```

---

## Step 5 – Comprehensive Scan

A more detailed scan combined multiple detection techniques.

Example command:

```bash
sudo nmap -A 192.168.56.101
```

This included:

- OS detection
- Version detection
- Default NSE scripts
- Traceroute

---

# Sample Findings

The assessment identified several commonly used services, including:

| Port | Service | Status |
|------|---------|--------|
| 22 | SSH | Open |
| 80 | HTTP | Open |
| 443 | HTTPS | Open |
| 3389 | Remote Desktop | Open (Windows Host) |

The presence of these services demonstrated how exposed network services can be identified during an authorized assessment.

---

# Analysis

The scan results provided valuable information about the network environment, including:

- Active systems
- Available network services
- Operating system characteristics
- Potential administrative interfaces

This information helps defenders understand what systems are exposed and prioritize security reviews.

---

# Security Recommendations

- Disable unnecessary services.
- Restrict administrative services to trusted networks.
- Apply security updates regularly.
- Review firewall rules.
- Monitor exposed services for unusual activity.
- Perform periodic authorized network assessments.

---

# Skills Demonstrated

- Network Reconnaissance
- Asset Discovery
- Port Scanning
- Service Enumeration
- Operating System Detection
- Attack Surface Identification
- Network Documentation
- Security Assessment

---

# Challenges

- Distinguishing filtered ports from closed ports.
- Understanding different scan techniques.
- Interpreting service detection results.
- Avoiding scans that could disrupt production systems.

---

# Lessons Learned

This project reinforced the importance of network visibility in cybersecurity. Understanding which hosts and services are exposed enables defenders to reduce attack surfaces, identify unnecessary services, and strengthen overall network security.

---

# Future Improvements

Future enhancements for this lab include:

- Using additional Nmap Scripting Engine (NSE) scripts.
- Comparing scan results before and after system hardening.
- Integrating scan results into vulnerability management workflows.
- Automating scheduled scans for asset inventory.

---

# Technologies Used

- Nmap
- Kali Linux
- Windows 11
- Ubuntu Linux
- Windows Server 2022
- TCP/IP Networking

---

# Conclusion

This project demonstrates practical experience using Nmap for authorized network discovery and service enumeration. By identifying hosts, open ports, and running services within a controlled lab environment, the exercise strengthened my understanding of network visibility and defensive security assessment techniques while emphasizing responsible and authorized use.
