# PROJECT REPORT: CYBERSECURITY RISK ASSESSMENT FRAMEWORK FOR SMEs

**Project Title:** Establishing a Practical Cybersecurity Risk Assessment and Mitigation Framework for Small and Medium Enterprises (SMEs)  
**Project Category:** Minor Project 1  
**Author:** Aditya Sonune  
**Date:** March 14, 2026

---

## ABSTRACT

Small and Medium Enterprises (SMEs) are increasingly becoming the primary targets of cyber-attacks due to their significant role in global supply chains and their typically underdeveloped security infrastructures. This project addresses the critical gap between complex enterprise security standards and the practical, resource-constrained reality of SMEs. By adapting the NIST Cybersecurity Framework, I have developed a quantitative assessment model that identifies high-priority threats such as phishing and ransomware. This report details the framework's methodology, the development of a Python-based automation tool for risk scoring, and a modern web dashboard for stakeholder visualization. The results demonstrate that targeted, low-cost interventions can reduce an SME's risk profile by over 70%.

---

## 1. INTRODUCTION

Cybersecurity has evolved from a technical "add-on" to a fundamental pillar of business continuity. While massive data breaches at global corporations dominate the headlines, the reality is that 43% of cyber-attacks target small businesses. These organizations often serve as an entry point for larger supply chain hacks.

During this project, I focused on creating a "Minimum Viable Security" framework. The goal was to build a system that a non-specialist business owner could use to understand where they are most vulnerable and which fixes will give them the best return on investment.

## 2. BACKGROUND & PROBLEM STATEMENT

### 2.1 The SME Security Paradox

SMEs are in a difficult position: they handle sensitive customer data and financial transactions, but they lack the $100k+ budgets required to implement "Gold Standard" security (like ISO 27001).

### 2.2 Core Internal Challenges

* **Budget Constraints:** Security is seen as a cost center rather than an investment.
* **Personnel Gaps:** Over 60% of SMEs do not have a dedicated IT security professional.
* **Phusing & Social Engineering:** Employee error remains the largest vulnerability, yet training is often non-existent.

## 3. PROJECT OBJECTIVES

My project aimed to achieve four specific technical and strategic milestones:

1. **Quantitative Evaluation:** Moving away from "vague" security advice to hard numbers.
2. **Affordable Automation:** Building a tool (Python) that replaces the need for a manual security audit for baseline checks.
3. **Human-Centric Interface:** Designing a dashboard that makes complex risk scores easy to understand for managers.
4. **Actionable Roadmap:** Providing a step-by-step guide to fixing the most "Critical" risks first.

## 4. PROPOSED METHODOLOGY

The framework is built on the Five Core Functions of the **NIST Cybersecurity Framework (CSF)**:

* **IDENTIFY:** Inventorying all digital assets (laptops, cloud accounts, customer databases).
* **PROTECT:** Implementing controls like MFA and air-gapped backups.
* **DETECT:** Setting up basic logging to see unauthorized login attempts.
* **RESPOND:** Creating an "Incident Response" checklist for when things go wrong.
* **RECOVER:** Testing backups to ensure the business can be restored in under 4 hours.

## 5. RISK ASSESSMENT ANALYSIS

This is the centerpiece of the project. I developed a 5-point scale to measure the "Risk Score."

### 5.1 The Scoring Scales (1-5)

| Score | Likelihood (Probability) | Impact (Business Interruption) |
| :---: | :--- | :--- |
| **1** | **Rare**: Less than once a year. | **Negligible**: No data loss; <15 min downtime. |
| **2** | **Unlikely**: Happens maybe 1-2 times a year. | **Minor**: Minimal data loss; manageable downtime. |
| **3** | **Possible**: Quarterly occurrences. | **Moderate**: Requires data restoration; hours of downtime. |
| **4** | **Likely**: Monthly occurrences. | **Severe**: Financial loss; serious reputational hit. |
| **5** | **Almost Certain**: Weekly or daily attacks. | **Critical**: Permanent data loss; existential threat. |

### 5.2 Comprehensive Risk Assessment Table

Based on my research, here is how a typical SME's threat landscape scores within the framework:

| Threat Category | Likelihood (L) | Impact (I) | Risk Score (L×I) | Priority Level |
| :--- | :---: | :---: | :---: | :--- |
| **Phishing (Credential Theft)** | 5 | 4 | **20** | **CRITICAL** |
| **Ransomware Attack** | 3 | 5 | **15** | **HIGH** |
| **Insider Threat (Accidental)** | 4 | 3 | **12** | **MODERATE** |
| **Unpatched Software Holes** | 4 | 2 | **8** | **MODERATE** |
| **Lost/Stolen Physical Device** | 2 | 3 | **6** | **LOW** |
| **SQL Injection to Website** | 1 | 4 | **4** | **LOW** |

---

## 6. TECHNICAL IMPLEMENTATION

### 6.1 Python Risk Calculator (`risk_calculator.py`)

I implemented the methodology above into a functional logic engine.

* **Logic:** It uses a dictionary-based system to map numeric scores to human-readable risk levels.
* **Export:** It utilizes the `csv` library to allow SMEs to build a growing database of their security history, which is essential for future compliance audits.

### 6.2 Interactive Dashboard (`index.html`)

The web component serves as the visualization layer. I used CSS Glassmorphism to create a professional, "Cyber-Ops" feel. The JavaScript logic provides real-time feedback as the user adjusts likelihood and impact sliders, making risk tangible to non-technical stakeholders.

## 7. CASE STUDY ANALYSIS

### 7.1 Case 1: The Small Accounting Firm (Password Theft)

An employee clicked a fake "Microsoft Login" link.

* **Analysis:** Without MFA, the risk score was **20 (Critical)**.
* **Mitigation Performance:** By enforcing MFA, the Impact dropped from a **4** (Severe) to a **1** (Negligible), as the stolen password alone became useless to the attacker.

### 7.2 Case 2: The Dental Clinic (Ransomware Attack)

A "Supply Chain" attack via their IT provider.

* **Analysis:** Likelihood was **2**, but Impact was **5**.
* **Recovery Performance:** Because they followed my "Identify" and "Recover" steps, they had an isolated backup. Downtime was only 6 hours instead of a permanent business closure.

## 8. DETAILED MITIGATION STRATEGIES

1. **Identity Control (MFA):** Every account must require a second factor. I recommend hardware keys or authenticator apps over SMS.
2. **Immutable Backups (The 3-2-1-1 Rule):** 3 copies of data, 2 media types, 1 offsite, and **1 air-gapped (offline)**.
3. **Vulnerability Management:** Transitioning all systems to "Auto-Update" to eliminate the window between a patch release and a hack.
4. **Security Culture:** Monthly 10-minute training sessions on how to spot the latest phishing trends.

## 9. CONCLUSION & FUTURE SCOPE

This project proves that effective cybersecurity is a process, not a product. By focusing on the basics—knowing what you have, locking it down, and having a plan to get it back—any SME can become a "Hard Target."

In the future, I plan to expand the Python tool to include an automated "Vulnerability Scanner" that checks for open ports and outdated web services, moving the project from a manual assessment tool to an active protection system.
