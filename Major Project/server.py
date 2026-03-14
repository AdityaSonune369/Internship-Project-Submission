from flask import Flask, render_template, request, redirect, url_for
import os
from datetime import datetime

app = Flask(__name__)

@app.after_request
def add_header(r):
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    r.headers["bypass-tunnel-reminder"] = "true"
    return r

# ---------------------------------------------------------------
# Detect environment: Vercel sets the VERCEL env variable automatically
# ---------------------------------------------------------------
IS_VERCEL = os.environ.get('VERCEL') is not None

# Local log file (only used on localhost / Windows)
LOG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'interactions.log')

# Firebase setup (only initialised when running on Vercel)
db = None
if IS_VERCEL:
    try:
        import json
        import firebase_admin
        from firebase_admin import credentials, firestore

        service_account_info = os.environ.get('FIREBASE_SERVICE_ACCOUNT')
        if service_account_info:
            cred_dict = json.loads(service_account_info)
            cred = credentials.Certificate(cred_dict)
            firebase_admin.initialize_app(cred)
            db = firestore.client()
            print("Firebase initialised successfully.")
        else:
            print("FIREBASE_SERVICE_ACCOUNT env variable not set.")
    except Exception as e:
        print(f"Firebase failed to initialise: {e}")
else:
    # Running locally — ensure log file exists (original behaviour)
    if not os.path.exists(LOG_FILE):
        with open(LOG_FILE, 'w') as f:
            f.write("=== Phishing Simulation Log ===\n")

# ---------------------------------------------------------------
# Logging helper
# ---------------------------------------------------------------
def log_interaction(event_type, details, extra_fields=None):
    timestamp_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    if IS_VERCEL:
        # On Vercel: log to Firebase Firestore (permanent)
        if db:
            try:
                doc = {
                    'timestamp': datetime.now(),
                    'event_type': event_type,
                    'ip': request.remote_addr,
                    'details': details
                }
                if extra_fields:
                    doc.update(extra_fields)
                db.collection('interactions').add(doc)
                print(f"Logged to Firebase: {event_type}")
            except Exception as e:
                print(f"Firebase logging failed: {e}")
    else:
        # On localhost: log to interactions.log (original behaviour)
        with open(LOG_FILE, 'a') as f:
            f.write(f"[{timestamp_str}] {event_type} | IP: {request.remote_addr} | Details: {details}\n")
        print(f"Logged {event_type}: {details}")

# ---------------------------------------------------------------
# Routes
# ---------------------------------------------------------------
@app.route('/')
def index():
    log_interaction("PAGE_VISIT", "User visited the fake login page")
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    # Extract the email/username. DO NOT EXTRACT OR STORE THE PASSWORD.
    email = request.form.get('loginfmt', 'unknown')

    log_interaction(
        "SUBMIT_CREDENTIALS",
        f"User attempted to login with email: {email} (Password ignored)",
        extra_fields={
            'email': email,
            'password_note': 'Password ignored — not captured for ethical reasons'
        }
    )

    return redirect(url_for('simulation_reveal'))

@app.route('/reveal')
def simulation_reveal():
    return """
    <html>
        <head>
            <title>Phishing Simulation Notice</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f3f2f1; margin: 0; }
                .container { background-color: white; padding: 40px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 600px; text-align: center; border-left: 6px solid #d83b01; }
                h1 { color: #d83b01; margin-top: 0; }
                p { font-size: 16px; line-height: 1.5; color: #323130; }
                .safe-badge { display: inline-block; background-color: #e2e2e2; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin-bottom: 20px; font-size: 14px; color: #505050; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="safe-badge">Education Purposes Only</div>
                <h1>This was a Phishing Simulation!</h1>
                <p>Hello! You have participated in an authorized cybersecurity awareness test.</p>
                <p><strong>Your credentials were NOT captured or stored by this system.</strong></p>
                <p>This page was designed to demonstrate how easily attackers can mimic legitimate portals (like Microsoft 365). Always verify the URL in your browser's address bar before entering your password.</p>
                <p><small>Close this window and read the follow-up materials for more information on spotting phishing attempts.</small></p>
            </div>
        </body>
    </html>
    """

if __name__ == '__main__':
    print("Starting ethical phishing tracking server on http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)
