# KudiPay Security Incident Investigation

## Executive Summary

This project documents the investigation of a simulated security incident involving KudiPay, a fictional financial technology company. The objective was to follow a Security Operations Center (SOC) investigation workflow by identifying suspicious activity, analysing available evidence, determining the scope of the incident, and recommending remediation measures.

The exercise focused on applying fundamental incident response principles, log analysis, and evidence-based decision making in a realistic enterprise scenario.

---

# Objectives

- Identify indicators of suspicious activity.
- Analyse available security evidence.
- Determine the timeline of the incident.
- Assess the potential impact.
- Recommend containment and remediation actions.
- Document the investigation process.

---

# Investigation Environment

| Component | Description |
|-----------|-------------|
| Organisation | KudiPay (Simulated) |
| Investigation Type | Security Incident |
| Operating Environment | Windows & Linux Systems |
| Network Analysis | Packet Captures (PCAP) |
| Log Analysis | Authentication and System Logs |
| Security Tools | Wireshark, Nmap, Splunk, Linux CLI |

---

# Scenario

The SOC team received multiple alerts indicating unusual authentication activity involving privileged user accounts. Shortly afterwards, abnormal outbound network traffic was detected from one of the internal systems.

The objective was to determine whether the activity represented a legitimate administrative action or a potential security compromise.

---

# Investigation Process

## Step 1 – Alert Validation

The initial alerts were reviewed to confirm that the activity was genuine rather than a false positive.

Items reviewed included:

- Alert timestamps
- User accounts involved
- Source IP addresses
- Destination IP addresses
- Authentication status

---

## Step 2 – Log Analysis

Relevant authentication and system logs were analysed to identify:

- Multiple failed login attempts
- Successful logins following repeated failures
- Privilege escalation events
- Newly created user accounts
- Changes to system configurations

---

## Step 3 – Network Analysis

Network traffic was reviewed for signs of malicious communication.

Indicators examined included:

- Unusual outbound connections
- DNS requests
- HTTP/HTTPS traffic
- Suspicious external IP addresses
- Large data transfers

---

## Step 4 – Asset Review

The affected endpoint was examined for signs of compromise.

Checks included:

- Running processes
- Scheduled tasks
- Startup programs
- User accounts
- Installed software
- Recently modified files

---

## Indicators Observed

Potential indicators identified during the investigation included:

- Repeated authentication failures
- Successful login after multiple failed attempts
- Access outside normal working hours
- Unexpected outbound connections
- Unusual administrative activity

---

# Findings

The investigation identified behaviour consistent with suspicious account activity.

Although the exercise was performed in a controlled lab environment, the observed indicators resembled techniques commonly associated with:

- Credential attacks
- Account compromise
- Privilege misuse
- Initial access attempts
- Lateral movement preparation

---

# Risk Assessment

**Likelihood:** Medium

**Potential Impact:**

- Unauthorised access
- Data exposure
- Service disruption
- Financial loss
- Reputational damage

Overall Risk Rating:

**Medium to High**

---

# Recommended Response

Immediate actions:

- Reset affected credentials.
- Disable compromised accounts.
- Isolate affected systems if necessary.
- Review firewall activity.
- Preserve logs for forensic analysis.

Long-term improvements:

- Enable Multi-Factor Authentication (MFA).
- Strengthen password policies.
- Improve security monitoring.
- Deploy endpoint detection and response (EDR).
- Conduct regular security awareness training.
- Review privileged account usage.

---

# Skills Demonstrated

- Security Monitoring
- Incident Response
- Log Analysis
- Network Analysis
- Threat Investigation
- Risk Assessment
- Security Documentation
- Evidence Collection
- Technical Reporting

---

# Lessons Learned

This investigation reinforced the importance of a structured incident response process. Effective security investigations require careful validation of alerts, correlation of multiple data sources, and evidence-based conclusions rather than assumptions.

The exercise also highlighted the value of centralised logging, continuous monitoring, and timely response in reducing the impact of potential security incidents.

---

# Future Enhancements

Future versions of this investigation could include:

- Splunk correlation searches
- MITRE ATT&CK mapping
- Digital forensic evidence
- IOC extraction
- Threat intelligence enrichment
- Automated alerting
- Timeline visualisation

---

# Technologies

- Splunk
- Wireshark
- Nmap
- Windows
- Linux
- VirtualBox

---

# MITRE ATT&CK Techniques (Representative)

- T1078 – Valid Accounts
- T1110 – Brute Force
- T1041 – Exfiltration Over C2 Channel (if applicable to the scenario)
- T1087 – Account Discovery

---

# Conclusion

This project demonstrates the application of SOC investigation techniques to a realistic security scenario. Through systematic analysis of authentication events, network activity, and system evidence, the investigation produced actionable findings and recommendations that reflect industry-standard incident response practices.
