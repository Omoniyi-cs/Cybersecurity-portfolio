# Splunk SIEM Investigation Lab

## Executive Summary

This project demonstrates the deployment and use of Splunk Enterprise as a Security Information and Event Management (SIEM) platform for centralized log collection, monitoring, and investigation. The objective was to understand how security analysts use log data to identify suspicious activities, investigate incidents, and support threat detection.

Using a local virtual lab, I configured Splunk to ingest system logs, performed searches using the Search Processing Language (SPL), and created dashboards to improve visibility into security events.

---

# Objectives

- Install and configure Splunk Enterprise.
- Collect and index security logs.
- Perform log searches using SPL.
- Investigate suspicious events.
- Build dashboards for monitoring.
- Understand the role of SIEM in a Security Operations Center (SOC).

---

# Lab Environment

| Component | Technology |
|-----------|------------|
| SIEM Platform | Splunk Enterprise |
| Operating System | Ubuntu Linux |
| Log Sources | Windows Event Logs, Linux System Logs |
| Virtualization | VirtualBox |
| Analysis | Splunk Search Processing Language (SPL) |

---

# Tools Used

- Splunk Enterprise
- Ubuntu Linux
- Windows 11
- Windows Server
- VirtualBox
- SPL (Search Processing Language)

---

# Implementation

## Step 1 — Install Splunk

Installed Splunk Enterprise on an Ubuntu virtual machine and verified that the Splunk web interface was accessible.

---

## Step 2 — Configure Data Inputs

Configured log ingestion from available system sources, ensuring that events were indexed correctly for analysis.

---

## Step 3 — Search Security Events

Performed searches using SPL to identify:

- Failed login attempts
- Successful authentication events
- System errors
- User activity
- Network-related events

Example SPL query:

```spl
index=* sourcetype=WinEventLog:Security
| search EventCode=4625
```

This query filters Windows Security logs to display failed login attempts.

---

## Step 4 — Create Dashboards

Developed dashboards displaying:

- Login activity
- Event volume over time
- Top event sources
- Security event distribution

These visualizations improve situational awareness during monitoring.

---

## Investigation Scenario

A simulated investigation focused on repeated failed login attempts.

### Actions Taken

- Identified the affected account.
- Reviewed timestamps.
- Examined source IP addresses.
- Correlated related authentication events.
- Determined whether the activity appeared legitimate or suspicious.

---

# Findings

The investigation demonstrated how centralized logging enables analysts to quickly identify patterns that may indicate:

- Brute-force attacks
- Password spraying
- Unauthorized access attempts
- Misconfigured systems
- Normal administrative activity

---

# Skills Demonstrated

- SIEM Operations
- Log Analysis
- Security Monitoring
- Event Correlation
- SPL Querying
- Incident Investigation
- Threat Detection
- Dashboard Development

---

# Challenges

- Understanding Splunk indexing.
- Learning SPL syntax.
- Configuring data inputs.
- Interpreting different log formats.

These challenges reinforced the importance of structured log management and continuous practice with SIEM tools.

---

# Lessons Learned

This project highlighted the value of SIEM platforms in modern cybersecurity operations. Splunk enables analysts to aggregate logs from multiple sources, search large volumes of events efficiently, and investigate potential security incidents using evidence-based analysis.

---

# Future Improvements

Future enhancements for this lab include:

- Integrating Sysmon logs.
- Creating custom detection rules.
- Building security alerts.
- Forwarding AWS CloudTrail logs into Splunk.
- Developing additional SOC dashboards.
- Integrating threat intelligence feeds.

---

# Technologies

- Splunk Enterprise
- Ubuntu Linux
- Windows Event Logs
- VirtualBox
- SPL
- Linux Administration

---

# References

- Splunk Enterprise Documentation
- Splunk Search Processing Language (SPL) Documentation
- Microsoft Windows Security Event Reference
