const INDEKURILANC_STANDARD_VERSION = 'INDEKURILANC-STD-V1';
const DEFAULT_RESULT_STATE = Object.freeze({
    score: '-',
    status: 'Not Calculated',
    summary: 'Run the calculator to generate an operational interpretation.',
    priority: 'Awaiting input',
    standard: INDEKURILANC_STANDARD_VERSION
});

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

function resolveInterpretation(score) {
    if (score >= 70) {
        return {
            summary: 'Capability is mature enough to support structured scale-up, provided standards stay controlled.',
            priority: 'Scale responsibly, document decisions, and preserve governance discipline.'
        };
    }
    if (score >= 40) {
        return {
            summary: 'Core capability exists, but execution consistency and institutional discipline still need reinforcement.',
            priority: 'Strengthen repeatability, close governance gaps, and improve operational depth.'
        };
    }
    return {
        summary: 'Foundational capability is still forming and requires concentrated build-up across multiple dimensions.',
        priority: 'Prioritize core infrastructure, team capability, and baseline operating controls.'
    };
}

function setFeedback(element, message, type) {
    element.textContent = message;
    element.classList.remove('error', 'success');
    if (type) {
        element.classList.add(type);
    }
}

function updateResultView(elements, state) {
    elements.score.textContent = String(state.score);
    elements.status.textContent = state.status;
    elements.summary.textContent = state.summary;
    elements.priority.textContent = state.priority;
    elements.standard.textContent = state.standard;
}

function initializeIndekurilanc() {
    const form = document.getElementById('indekurilanc-form');
    const resetButton = document.getElementById('indekurilanc-reset');
    const feedback = document.getElementById('indekurilanc-feedback');
    const resultElements = {
        score: document.getElementById('indekurilanc-score'),
        status: document.getElementById('indekurilanc-status'),
        summary: document.getElementById('indekurilanc-summary'),
        priority: document.getElementById('indekurilanc-priority'),
        standard: document.getElementById('indekurilanc-standard')
    };

    if (!form || !resetButton || !feedback || Object.values(resultElements).some((element) => !element)) {
        return;
    }

    updateResultView(resultElements, DEFAULT_RESULT_STATE);

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
            updateResultView(resultElements, DEFAULT_RESULT_STATE);
            return;
        }

        const score = calculateIndekurilanc(scores);
        const status = resolveMaturity(score);
        const interpretation = resolveInterpretation(score);

        setFeedback(feedback, 'INDEKURILANC score calculated successfully.', 'success');
        updateResultView(resultElements, {
            score,
            status,
            summary: interpretation.summary,
            priority: interpretation.priority,
            standard: INDEKURILANC_STANDARD_VERSION
        });
    });

    resetButton.addEventListener('click', () => {
        form.reset();
        setFeedback(feedback, '', null);
        updateResultView(resultElements, DEFAULT_RESULT_STATE);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeIndekurilanc();
});
