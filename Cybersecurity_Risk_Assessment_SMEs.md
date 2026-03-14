# SME Cybersecurity Risk Assessment - Minor Project 1

## 1. WHY THIS MATTERS

Cybersecurity isn't just a "big tech" problem anymore. I chose to focus on Small and Medium Enterprises (SMEs) because they're often the easiest targets. They usually don't have a massive IT budget or a dedicated security team, which makes them sitting ducks for basic attacks.

The idea behind this project was to create a simple, working way for a small business to figure out where they're vulnerable without needing to hire an expensive consultant.

### 1.1 The Most Common Threats I Found

During my research, I noticed that hackers don't usually use "movie-style" high-tech tricks on small businesses. Instead, they stick to what works:

*   **Phishing:** Just sending fake emails to trick people into giving up passwords. It's the #1 way businesses get hacked because it’s easy to do.
*   **Ransomware:** This is the nightmare scenario where all company files get locked up and the hackers demand money to release them.
*   **Bad Habits/Insider Errors:** Sometimes it's just an employee using a weak password or someone accidentally deleting a sensitive database because they weren't trained.
*   **Old Software:** Many small shops use "legacy" systems that haven't been updated in years. These have known holes that hackers scan for automatically.

---

## 2. HOW I BUILT THE MODEL

I looked at the NIST Cybersecurity Framework, which is the industry gold standard. It's way too complicated for a small shop to use as-is, so I stripped it down to the basics.

### 2.1 The Simplified Process

1.  **IDENTIFY:** Know what you have (servers, laptops, customer data).
2.  **PROTECT:** Lock the doors (firewalls, passwords).
3.  **DETECT:** Setting up alarms so you know if someone is inside your network.
4.  **RESPOND:** Knowing exactly what to do the second you find a breach.
5.  **RECOVER:** How to get back to work without losing everything.

### 2.2 The Risk Score Formula

To make this practical, I used a basic math formula:
**Risk Score = How likely it is to happen × How bad it would be if it did**

I used a scale of 1 to 5 for both.

| Score | Likelihood (How often?) | Impact (How bad?) |
| :--- | :--- | :--- |
| **1** | Barely ever (once a year) | Not a big deal |
| **2** | Might happen twice a year | Small headache (1hr downtime) |
| **3** | Likely once a quarter | Actually hurts (data loss) |
| **4** | Happens monthly | Serious trouble (fines/client loss) |
| **5** | Happens all the time | Business-ending event |

---

## 3. REAL EXAMPLES I TESTED

I ran the numbers against two common situations:

### 3.1 The Accountant Phishing Case
A local accounting firm had an email password stolen.
*   **The Score:** This was a **High Risk (16)** because it's so common.
*   **The Fix:** Adding MFA (Multi-Factor Authentication) would have stopped the hacker, even with the right password.

### 3.2 The Clinic Ransomware Case
A dental clinic's IT provider got hacked, which spread to the clinic.
*   **The Score:** This was a **Moderate Risk (10)**.
*   **The Fix:** They had a "3-2-1" backup (offsite and offline), so they just wiped the PCs and restored everything for free.

---

## 4. THE CALCULATOR TOOL (PYTHON)

I didn't want this to just be a paper project. I wrote a Python script (`risk_calculator.py`) that actually does the math for you. You can feed it different threats, and it'll tell you if it's "Low", "Moderate", or "High" priority. It also creates a CSV file that you can show to a manager.

**Run it with:** `python risk_calculator.py`

---

## 5. THE WEB DASHBOARD

For people who don't like using a terminal, I built a web interface (`index.html`). It's basically a visual dashboard for the project. You can move sliders around to see how risk levels change in real-time. I spent extra time making sure the "Dark Mode" looks clean and professional.

**Edit:** I had some issues with dropdown visibility in the first version, but I've updated the CSS so it works perfectly now.

---

## 6. PROJECT FILES

| File | What it does |
| :--- | :--- |
| **`Cybersecurity_Risk_Assessment_SMEs.md`** | This main report. |
| **`risk_calculator.py`** | The Python logic and reporting tool. |
| **`index.html`** | The interactive dashboard front-end. |

---

## 7. TOP WAYS TO STAY SAFE

Based on my research, most small businesses can be "safe enough" if they just do these four things:

1.  **Use MFA everywhere.** No exceptions.
2.  **The 3-2-1 Backup.** 3 copies, 2 media types, 1 offsite.
3.  **Patch your stuff.** Set everything to "Auto-Update".
4.  **Train your team.** Most hacks start with a human error, not a computer error.

---

## 8. MY TAKEAWAY

The big lesson here is that you can't stop every hack. You have to assume you'll get hit eventually. The goal of this project was to show that by being smart with a simple risk matrix and basic tools, even a tiny business can be tougher to hack than a big bank.
