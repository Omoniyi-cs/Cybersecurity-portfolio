# Linux Security Administration Lab

## Executive Summary

This project documents my hands-on experience securing and administering Linux systems within a controlled virtual lab environment. The focus was on user and permission management, system hardening, log analysis, service management, package maintenance, and basic security monitoring.

The objective was to build practical Linux administration skills that support cybersecurity operations, incident response, and secure system management.

---

# Objectives

- Develop Linux system administration skills.
- Implement basic system hardening.
- Manage users and permissions securely.
- Analyse Linux system logs.
- Configure and manage system services.
- Apply security best practices.

---

# Lab Environment

| Component | Description |
|-----------|-------------|
| Operating System | Ubuntu Linux |
| Terminal | Bash Shell |
| Virtualization | Oracle VirtualBox |
| Host OS | Windows 11 |
| Supporting Tools | SSH, Nmap, Wireshark |

---

# Tools Used

- Ubuntu Linux
- Bash
- SSH
- Systemctl
- Journalctl
- APT Package Manager
- Nmap
- VirtualBox

---

# Practical Activities

## User and Group Management

Created and managed user accounts while applying the principle of least privilege.

Commands practiced:

```bash
sudo adduser analyst
sudo passwd analyst
sudo usermod -aG sudo analyst
groups analyst
id analyst
```

Skills gained:

- User creation
- Password management
- Group administration
- Privilege assignment

---

## File Permissions

Configured secure file and directory permissions.

Commands:

```bash
chmod
chown
chgrp
umask
ls -la
```

Topics covered:

- Read, write, and execute permissions
- Ownership
- Permission inheritance
- Least privilege

---

## Package Management

Updated and maintained installed software.

Commands:

```bash
sudo apt update
sudo apt upgrade
sudo apt autoremove
```

Importance:

- Applying security patches
- Removing obsolete packages
- Maintaining system stability

---

## Service Management

Managed system services using systemd.

Commands:

```bash
systemctl status
systemctl start
systemctl stop
systemctl restart
systemctl enable
```

---

## Log Analysis

Reviewed Linux logs for troubleshooting and security monitoring.

Commands:

```bash
journalctl
tail
cat
grep
less
```

Logs examined included:

- Authentication logs
- System logs
- Service logs
- Boot logs

---

## Process Monitoring

Observed and managed running processes.

Commands:

```bash
top
htop
ps
kill
killall
```

---

## SSH Administration

Configured and tested secure remote access.

Activities included:

- SSH connectivity
- User authentication
- Basic SSH security practices

---

# Security Hardening

Implemented basic hardening measures, including:

- Applying software updates
- Restricting unnecessary services
- Reviewing user privileges
- Strengthening file permissions
- Monitoring authentication logs
- Removing unused packages

---

# Skills Demonstrated

- Linux Administration
- Bash Command Line
- User Management
- File Permissions
- Service Management
- Log Analysis
- Security Hardening
- Process Management
- SSH Administration

---

# Challenges

Some of the challenges encountered included:

- Learning Linux command syntax.
- Understanding file permissions.
- Troubleshooting service failures.
- Navigating system log files.

These challenges strengthened my troubleshooting and analytical skills.

---

# Lessons Learned

This project reinforced the importance of Linux administration in cybersecurity. Effective security begins with proper system configuration, regular updates, controlled user privileges, and continuous monitoring of system activity.

---

# Recommendations

- Keep systems fully updated.
- Apply the principle of least privilege.
- Disable unnecessary services.
- Monitor authentication logs regularly.
- Enforce strong password policies.
- Perform routine security reviews.

---

# Future Improvements

Future enhancements include:

- Deploying Fail2Ban for SSH protection.
- Configuring UFW firewall rules.
- Automating routine administration tasks with Bash.
- Integrating Linux logs into Splunk.
- Exploring SELinux and AppArmor.

---

# Technologies Used

- Ubuntu Linux
- Bash
- SSH
- Systemd
- APT
- VirtualBox
- Windows 11

---

# Key Competencies

- Linux System Administration
- Security Hardening
- Command Line Operations
- Log Analysis
- User and Permission Management
- Troubleshooting
- Technical Documentation

---

# Conclusion

This project demonstrates practical Linux administration and security skills developed through hands-on laboratory exercises. By managing users, securing permissions, maintaining software, analysing logs, and implementing security best practices, I strengthened the foundational skills required for SOC Analyst, Security Engineer, and Systems Administrator roles.
