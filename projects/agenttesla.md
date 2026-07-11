# AgentTesla Malware Investigation

## Executive Summary

This project documents the investigation of an AgentTesla malware infection simulated in a controlled cybersecurity lab. AgentTesla is a well-known information-stealing malware capable of harvesting credentials, capturing keystrokes, collecting clipboard data, and exfiltrating sensitive information to attacker-controlled infrastructure.

The objective of this investigation was to identify the initial infection vector, analyse indicators of compromise (IOCs), determine the malware's behaviour, map observed techniques to the MITRE ATT&CK framework, and recommend appropriate containment and mitigation measures.

---

# Objectives

- Investigate a phishing-based malware infection.
- Identify Indicators of Compromise (IOCs).
- Analyse malware behaviour.
- Understand persistence mechanisms.
- Document the incident response process.
- Recommend remediation and preventive controls.

---

# Lab Environment

| Component | Description |
|-----------|-------------|
| Malware | AgentTesla (Simulated Sample) |
| Operating System | Windows 11 |
| Analysis VM | Kali Linux |
| Virtualization | Oracle VirtualBox |
| Network Analysis | Wireshark |
| Log Analysis | Splunk Enterprise |
| Email Scenario | Phishing Attachment |

---

# Scenario

An employee reported receiving an email containing what appeared to be an invoice attachment. Shortly after opening the attachment, the workstation became unusually slow and began communicating with unfamiliar external IP addresses.

The Security Operations Center (SOC) initiated an investigation to determine whether the endpoint had been compromised.

---

# Investigation Process

## Step 1 – Email Analysis

The suspicious email was examined to identify:

- Sender address
- Subject line
- Attachment type
- File extension
- Embedded URLs
- Social engineering indicators

Initial findings suggested a phishing attempt designed to trick the recipient into opening a malicious attachment.

---

## Step 2 – Endpoint Analysis

The affected workstation was reviewed for signs of compromise.

The investigation focused on:

- Running processes
- Startup entries
- Scheduled tasks
- Recently created files
- Registry modifications
- Suspicious executables

---

## Step 3 – Network Traffic Analysis

Using Wireshark, outbound communications from the infected host were analysed.

Indicators included:

- Connections to unfamiliar external IP addresses
- Repeated HTTP/HTTPS requests
- DNS lookups for suspicious domains
- Periodic beaconing behaviour

---

## Step 4 – Log Analysis

Security logs were reviewed using Splunk to identify:

- Process creation events
- User logon activity
- PowerShell execution
- Network connections
- System events surrounding the infection

---

# Indicators of Compromise (IOCs)

Examples of observed indicators:

- Suspicious executable downloaded from email attachment
- Unknown outbound IP connections
- Unexpected PowerShell execution
- Newly created persistence mechanism
- Repeated outbound beaconing

---

# Malware Behaviour

The investigation indicated behaviour commonly associated with information-stealing malware:

- Credential harvesting
- Clipboard monitoring
- Persistence through autorun mechanisms
- Communication with command-and-control (C2) infrastructure
- Data exfiltration

---

# MITRE ATT&CK Mapping

| Technique | Description |
|----------|-------------|
| T1566.001 | Phishing Attachment |
| T1059 | Command and Scripting Interpreter |
| T1547 | Boot or Logon Autostart Execution |
| T1071 | Application Layer Protocol |
| T1041 | Exfiltration Over Command and Control Channel |
| T1082 | System Information Discovery |

---

# Incident Response

## Containment

- Isolated the infected endpoint.
- Blocked malicious IP addresses.
- Disabled affected user credentials.
- Preserved logs for forensic analysis.

## Eradication

- Removed malicious files.
- Deleted persistence mechanisms.
- Updated endpoint security tools.
- Performed a full antivirus scan.

## Recovery

- Restored the workstation to a trusted state.
- Reset user passwords.
- Monitored for additional malicious activity.

---

# Findings

The investigation demonstrated how phishing emails remain an effective initial access technique.

The simulated malware established persistence, attempted credential theft, and communicated with external infrastructure, reinforcing the importance of layered security controls and user awareness.

---

# Recommendations

- Enforce Multi-Factor Authentication (MFA).
- Deploy Endpoint Detection and Response (EDR).
- Enable advanced email filtering.
- Restrict execution of untrusted attachments.
- Conduct phishing awareness training.
- Monitor outbound network traffic continuously.
- Regularly update endpoint security solutions.

---

# Skills Demonstrated

- Malware Analysis
- Threat Investigation
- Incident Response
- Log Analysis
- Wireshark
- Splunk
- Windows Security
- Digital Forensics
- Threat Intelligence
- MITRE ATT&CK Mapping

---

# Lessons Learned

This project reinforced the importance of combining endpoint analysis, network monitoring, and log correlation during malware investigations. It also highlighted the role of user awareness and layered security controls in defending against phishing campaigns.

---

# Future Improvements

- Analyse malware within a sandbox environment.
- Integrate Sysmon logs into Splunk.
- Automate IOC detection.
- Build Splunk detection rules.
- Incorporate YARA rules for malware identification.
- Generate a complete forensic timeline.

---

# Technologies Used

- Splunk Enterprise
- Wireshark
- VirtualBox
- Windows 11
- Kali Linux
- MITRE ATT&CK Framework

---

# Conclusion

This investigation demonstrates a structured SOC approach to analysing a phishing-delivered malware infection. By combining endpoint analysis, log investigation, and network traffic inspection, the incident was effectively analysed, documented, and remediated. The exercise strengthened practical skills in malware analysis, incident response, and defensive security operations.
