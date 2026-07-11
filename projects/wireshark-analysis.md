# Wireshark Network Traffic Analysis

## Executive Summary

This project demonstrates the use of Wireshark to capture and analyse network traffic in a controlled lab environment. The objective was to understand normal and suspicious network behaviour by examining packets, identifying protocols, tracing communications between hosts, and detecting potential security issues.

The investigation simulated a SOC analyst reviewing packet captures (PCAPs) to identify authentication activity, DNS queries, HTTP requests, TCP sessions, and other network events that could indicate malicious behaviour.

---

# Objectives

- Capture and analyse network traffic.
- Identify common network protocols.
- Investigate suspicious communications.
- Trace client-server interactions.
- Understand packet structures.
- Develop practical network analysis skills.

---

# Lab Environment

| Component | Description |
|-----------|-------------|
| Packet Analyzer | Wireshark |
| Host OS | Windows 11 |
| Analysis VM | Kali Linux |
| Virtualization | Oracle VirtualBox |
| Network Mode | NAT and Host-Only |
| Traffic Sources | Web browsing, DNS lookups, ICMP, SSH |

---

# Tools Used

- Wireshark
- Kali Linux
- Windows 11
- VirtualBox
- Command Prompt
- Linux Terminal

---

# Methodology

## Step 1 – Capture Traffic

A packet capture session was started while generating normal network activity, including:

- Web browsing
- DNS queries
- ICMP (Ping)
- SSH connections
- HTTP/HTTPS requests

---

## Step 2 – Protocol Identification

Captured packets were grouped by protocol to understand the types of communication occurring on the network.

Protocols observed included:

- TCP
- UDP
- DNS
- HTTP
- HTTPS
- ICMP
- ARP

---

## Step 3 – Packet Inspection

Individual packets were examined to identify:

- Source IP address
- Destination IP address
- Source and destination ports
- Protocol
- Packet length
- TCP flags
- Payload information (where applicable)

---

## Step 4 – Traffic Filtering

Display filters were used to isolate specific traffic.

Example filters:

```text
http
dns
tcp
icmp
ip.addr == 10.0.2.15
tcp.port == 80
```

These filters simplified the investigation by displaying only relevant packets.

---

# Investigation Scenario

The objective was to determine whether any unusual outbound communications were present.

The investigation focused on:

- Unexpected external IP addresses
- Repeated DNS requests
- Suspicious HTTP traffic
- Failed TCP connections
- Unusual packet frequency

---

# Findings

Analysis of the captured traffic showed:

- Successful DNS resolution before web connections.
- Standard TCP three-way handshakes.
- Expected HTTP and HTTPS communication.
- Normal ICMP responses.
- No evidence of malicious packet injection during the lab exercise.

The packet flow demonstrated how legitimate network communication appears under normal operating conditions.

---

# Indicators Reviewed

During analysis, the following indicators were considered:

- High volumes of failed connections
- Communication with unknown IP addresses
- Excessive DNS requests
- Beaconing behaviour
- Unexpected protocols
- Large outbound data transfers

Although these indicators were not observed during this exercise, understanding them is essential for effective network monitoring.

---

# Skills Demonstrated

- Packet Analysis
- Network Troubleshooting
- Protocol Identification
- Traffic Filtering
- TCP/IP Analysis
- Network Security Monitoring
- Wireshark Usage
- Evidence Collection

---

# Lessons Learned

This project improved my understanding of network communication and reinforced the importance of packet analysis during security investigations. Examining traffic at the packet level provides valuable insight into both normal operations and potential indicators of compromise.

---

# Recommendations

- Monitor network traffic continuously.
- Capture packet data during security incidents.
- Correlate packet analysis with SIEM logs.
- Investigate unusual outbound communications promptly.
- Restrict unnecessary network services.
- Maintain accurate network documentation.

---

# Future Improvements

Future enhancements include:

- Analysing malware-generated network traffic.
- Investigating encrypted HTTPS sessions.
- Correlating Wireshark captures with Splunk logs.
- Performing packet analysis during simulated incident response exercises.
- Analysing larger enterprise PCAP datasets.

---

# Technologies Used

- Wireshark
- TCP/IP
- DNS
- HTTP
- HTTPS
- ICMP
- Kali Linux
- Windows 11
- VirtualBox

---

# Conclusion

This project demonstrates practical experience using Wireshark to inspect and analyse network traffic. By capturing packets, identifying protocols, applying display filters, and interpreting communication patterns, the exercise strengthened my ability to support incident investigations and network security monitoring within a SOC environment.
