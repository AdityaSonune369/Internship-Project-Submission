document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const scoreVal = document.getElementById('score-val');
    const scoreCircle = document.getElementById('score-circle');
    const levelTag = document.getElementById('level-tag');
    const resultDesc = document.getElementById('result-desc');

    calculateBtn.addEventListener('click', () => {
        const threat = document.getElementById('threat').value || "This threat";
        const likelihood = parseInt(document.getElementById('likelihood').value);
        const impact = parseInt(document.getElementById('impact').value);
        
        const score = likelihood * impact;
        
        // Update values
        scoreVal.textContent = score;
        
        // Remove old classes
        scoreCircle.classList.remove('low', 'moderate', 'high');
        levelTag.classList.remove('low-tag', 'moderate-tag', 'high-tag');
        
        // Apply new classes and descriptions
        if (score <= 6) {
            scoreCircle.classList.add('low');
            levelTag.classList.add('low-tag');
            levelTag.textContent = "Low Risk";
            resultDesc.textContent = `${threat} is considered manageable. Maintain baseline monitoring and standard security protocols.`;
        } else if (score <= 12) {
            scoreCircle.classList.add('moderate');
            levelTag.classList.add('moderate-tag');
            levelTag.textContent = "Moderate Risk";
            resultDesc.textContent = `${threat} requires action! Develop a mitigation plan within the current quarter.`;
        } else {
            scoreCircle.classList.add('high');
            levelTag.classList.add('high-tag');
            levelTag.textContent = "High Risk";
            resultDesc.textContent = `URGENT: ${threat} poses a critical danger to business continuity. Implement mitigations immediately.`;
        }

        // Add a small bounce animation
        scoreCircle.style.transform = 'scale(1.1)';
        setTimeout(() => {
            scoreCircle.style.transform = 'scale(1)';
        }, 200);
    });
});
