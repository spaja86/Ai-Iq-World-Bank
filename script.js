// script.js

// Function to display the current date and time
function displayCurrentDateTime() {
    const currentDateTime = new Date().toISOString();
    console.log(`Current Date and Time (UTC): ${currentDateTime}`);
}

const INDEKURILANC_WEIGHTS = Object.freeze({
    infrastructure: 0.4,
    skills: 0.35,
    governance: 0.25
});

function clampToRange(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function parseScore(rawValue) {
    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed)) {
        return null;
    }
    const normalized = clampToRange(parsed, 0, 100);
    return Number(normalized.toFixed(2));
}

function validateInputs(scores) {
    const requiredFields = ['infrastructure', 'skills', 'governance'];
    for (const field of requiredFields) {
        if (scores[field] === null) {
            return { valid: false, message: `Please provide a valid ${field} score between 0 and 100.` };
        }
    }
    return { valid: true };
}

function calculateIndekurilanc(scores) {
    const result =
        (scores.infrastructure * INDEKURILANC_WEIGHTS.infrastructure) +
        (scores.skills * INDEKURILANC_WEIGHTS.skills) +
        (scores.governance * INDEKURILANC_WEIGHTS.governance);
    return Number(result.toFixed(2));
}

function resolveMaturity(score) {
    if (score >= 70) {
        return 'Advanced';
    }
    if (score >= 40) {
        return 'Emerging';
    }
    return 'Early Stage';
}

function setFeedback(element, message, type) {
    element.textContent = message;
    element.classList.remove('error', 'success');
    if (type) {
        element.classList.add(type);
    }
}

function updateResultView(scoreElement, statusElement, score, status) {
    scoreElement.textContent = String(score);
    statusElement.textContent = status;
}

function initializeIndekurilanc() {
    const form = document.getElementById('indekurilanc-form');
    const resetButton = document.getElementById('indekurilanc-reset');
    const feedback = document.getElementById('indekurilanc-feedback');
    const scoreOutput = document.getElementById('indekurilanc-score');
    const statusOutput = document.getElementById('indekurilanc-status');

    if (!form || !resetButton || !feedback || !scoreOutput || !statusOutput) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const scores = {
            infrastructure: parseScore(formData.get('infrastructure')),
            skills: parseScore(formData.get('skills')),
            governance: parseScore(formData.get('governance'))
        };

        const validation = validateInputs(scores);
        if (!validation.valid) {
            setFeedback(feedback, validation.message, 'error');
            updateResultView(scoreOutput, statusOutput, '-', 'Not Calculated');
            return;
        }

        const score = calculateIndekurilanc(scores);
        const status = resolveMaturity(score);

        setFeedback(feedback, 'INDEKURILANC score calculated successfully.', 'success');
        updateResultView(scoreOutput, statusOutput, score, status);
    });

    resetButton.addEventListener('click', () => {
        form.reset();
        setFeedback(feedback, '', null);
        updateResultView(scoreOutput, statusOutput, '-', 'Not Calculated');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDateTime();
    initializeIndekurilanc();
});