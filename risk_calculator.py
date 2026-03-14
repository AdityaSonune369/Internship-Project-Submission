import csv
import os

class RiskAssessmentCalculator:
    def __init__(self):
        self.risks = []
        self.categories = {
            "Low": (1, 6),
            "Moderate": (8, 12),
            "High": (15, 25)
        }

    def get_risk_level(self, score):
        if score <= 6:
            return "Low"
        elif score <= 12:
            return "Moderate"
        else:
            return "High"

    def add_risk(self):
        print("\n--- Add New Risk Entry ---")
        threat = input("Threat Category (e.g., Phishing, Ransomware): ")
        
        while True:
            try:
                likelihood = int(input("Likelihood (1-5): "))
                if 1 <= likelihood <= 5: break
                print("Please enter a value between 1 and 5.")
            except ValueError:
                print("Invalid input. Please enter a number.")

        while True:
            try:
                impact = int(input("Impact (1-5): "))
                if 1 <= impact <= 5: break
                print("Please enter a value between 1 and 5.")
            except ValueError:
                print("Invalid input. Please enter a number.")

        score = likelihood * impact
        level = self.get_risk_level(score)
        
        self.risks.append({
            "Threat": threat,
            "Likelihood": likelihood,
            "Impact": impact,
            "Score": score,
            "Level": level
        })
        print(f"Added: {threat} | Score: {score} | Level: {level}")

    def display_summary(self):
        if not self.risks:
            print("\nNo data to display.")
            return

        print("\n" + "="*60)
        print(f"{'Threat Category':<25} | {'L':<2} | {'I':<2} | {'Score':<5} | {'Level':<10}")
        print("-" * 60)
        for r in self.risks:
            print(f"{r['Threat']:<25} | {r['Likelihood']:<2} | {r['Impact']:<2} | {r['Score']:<5} | {r['Level']:<10}")
        print("="*60)

    def export_csv(self, filename="risk_assessment_report.csv"):
        if not self.risks:
            return
        
        keys = self.risks[0].keys()
        with open(filename, 'w', newline='') as f:
            dict_writer = csv.DictWriter(f, fieldnames=keys)
            dict_writer.writeheader()
            dict_writer.writerows(self.risks)
        print(f"\nReport exported to {filename}")

def main():
    calculator = RiskAssessmentCalculator()
    print("SME Cybersecurity Risk Assessment Calculator")
    
    while True:
        print("\n1. Add Risk Entry")
        print("2. View Summary")
        print("3. Export to CSV")
        print("4. Exit")
        
        choice = input("Select an option: ")
        
        if choice == '1':
            calculator.add_risk()
        elif choice == '2':
            calculator.display_summary()
        elif choice == '3':
            calculator.export_csv()
        elif choice == '4':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
