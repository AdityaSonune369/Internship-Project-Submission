# PROJECT REPORT: PHISHING AWARENESS SIMULATION

**Project Title:** Phishing Awareness Simulation using Social Engineering
**Project Category:** Major Project: Cyber Security
**Author:** Aditya Sonune

---

### ABSTRACT

Phishing remains the primary vector for modern cyber-attacks, exploiting human psychology rather than technical vulnerabilities. This project addresses the critical gap in user awareness by conducting a controlled, authorized phishing simulation. By replicating real-world social engineering tactics—specifically a "Password Expiry" lure from a spoofed Microsoft domain—I have evaluated the susceptibility of a target group. This report details the methodology of the simulation, the development of a Python-based Flask backend for interaction logging, and real-time cloud storage via Firebase Firestore. The results demonstrate that branding familiarity and artificial urgency significantly lower user vigilance, with a 70% click-through rate, highlighting the ongoing need for targeted security awareness training.

### 1. INTRODUCTION
Phishing is a deceptive technique used by cyber-attackers to harvest sensitive information. This simulation was designed to test the human firewall of a controlled group. The objective was to measure the effectiveness of urgency-based lures in professional environments and provide an educational feedback loop for compromised individuals.

### 2. METHODOLOGY
The simulation used a multi-layered approach involving a deceptive email lure, a high-fidelity credential harvesting portal, and a dual-persistent logging system.

- **The Lure:** An email impersonating Microsoft 365 Support was sent from the domain `microsoft-security-auth.com`. It utilized a 24-hour account expiry threat to bypass slow, critical thinking.
- **The Hook:** Users were directed to a cloned login portal hosted at `microsoft-account-protection-hub.vercel.app`. The page used official Microsoft CSS to maximize perceived legitimacy.
- **Technical Backend:** A Python/Flask application was configured to detect two primary events: `PAGE_VISIT` and `SUBMIT_CREDENTIALS`. For ethical compliance, the server was programmed to bypass the password field, capturing only the email address for tracking purposes.

### 3. RESULTS (SIMULATION STATS)
The data collected from the 10 targeted participants revealed a significant trust in familiar branding:

- **Total Emails Sent:** 10
- **Total Link Clicks:** 7 (70% Susceptibility)
- **Logins Attempted:** 3 (30% Compromise Rate)
- **Conversion Rate:** 43% of those who clicked surrendered their email.

### 4. SCREENSHOTS

**4.1 Phishing Lure (Email Body)**
*(Urgency-based password expiry notification)*

**4.2 Simulation Portal (Login UI)**
*(Cloned Microsoft 365 Authentication interface)*

### 5. MITIGATION STRATEGIES
Based on the results, the following preventive measures are critical:
- Standardize the verification of sender email domains before interaction.
- Implementation of Multi-Factor Authentication (MFA) to decouple account security from password vulnerability.
- Mandatory security awareness training to recognize "Red Flags" like artificial urgency and suspicious sender names.
