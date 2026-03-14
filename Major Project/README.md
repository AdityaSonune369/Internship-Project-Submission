# Phishing Awareness Simulation

This project serves as a practical demonstration of a phishing attack for educational and awareness purposes. It contains a realistic (but completely safe) fake Microsoft login page and a Python server to track interactions without stealing data.

**🔴 Live Demo:** [https://microsoft-account-protection-hub.vercel.app](https://microsoft-account-protection-hub.vercel.app)
*(Note: Enter any fake email. The password field is deliberately ignored for ethical purposes.)*

## Prerequisites

- Python 3.x installed on your computer.

## Setup Instructions

1. **Install Dependencies:**
   Open your terminal/command prompt, navigate to this project folder, and install Flask:

   ```bash
   pip install flask
   ```

2. **Start the Tracking Server:**
   Run the `server.py` file to start the backend server:

   ```bash
   python server.py
   ```

   The server will start running locally at `http://localhost:5000` or `http://127.0.0.1:5000`.

3. **Conduct the Simulation:**
   - Use the content in `email_template.md` to send a test email to your willing participants (e.g., your classmates or friends).
   - Ensure the link in the email points to your running server (`http://localhost:5000` if they are on the same machine, or your local IP address if they are on the same network).
   - *Note:* If testing across the internet, you would normally use a tool like `ngrok` to expose your local server securely, e.g., `ngrok http 5000`.

4. **Monitor Results:**
   - As users click the link or attempt to log in, the server will safely record the events in a new file named `interactions.log`.
   - **Crucial:** The server deliberately ignores the password field. It only logs the interaction type, IP, and the submitted email address to prove the simulated compromise.

## Ethical Disclaimer

This project is strictly for **educational purposes** and authorized simulations only. Never use these tools to deceive individuals outside of a controlled, consented environment. All collected data should be handled responsibly.
