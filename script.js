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

const MATURITY_BANDS = Object.freeze([
    Object.freeze({
        range: '0-39.99',
        status: 'Early Stage',
        summary: 'Foundation work is still the main priority.'
    }),
    Object.freeze({
        range: '40-69.99',
        status: 'Emerging',
        summary: 'Core capability exists, but it still needs stronger repeatability and discipline.'
    }),
    Object.freeze({
        range: '70-100',
        status: 'Advanced',
        summary: 'Capability is comparatively mature and can support structured scale-up.'
    })
]);

const REPOSITORY_PILLARS = Object.freeze([
    Object.freeze({
        title: 'Product / Prototype',
        body: 'Current baseline: the static website and the INDEKURILANC readiness calculator.'
    }),
    Object.freeze({
        title: 'Standards',
        body: 'Canonical scoring, terminology, and value-system rules control interpretation.'
    }),
    Object.freeze({
        title: 'Operational Plans',
        body: 'Serbian-language templates define business, asset, licensing, policy, and support workflows.'
    }),
    Object.freeze({
        title: 'Governance and Protection',
        body: 'Lifecycle, sanitization, visibility, and review rules protect repository growth.'
    })
]);

const SOURCE_OF_TRUTH = Object.freeze([
    'Approved standards and active normative root standards',
    'Governance rules',
    'README navigation and contributor workflow',
    'Architecture, portfolio, and roadmap references',
    'Operational templates and support plans',
    'Prototype implementation details'
]);

const VISIBILITY_MODEL = Object.freeze([
    Object.freeze({
        title: 'public-safe',
        body: 'Broadly shareable material without sensitive operational detail.'
    }),
    Object.freeze({
        title: 'limited/internal',
        body: 'Restricted working content with non-public context.'
    }),
    Object.freeze({
        title: 'canonical/internal standard',
        body: 'Normative repository guidance that controls other assets.'
    })
]);

const FUTURE_MODULES = Object.freeze([
    Object.freeze({
        title: 'Metadata layer',
        body: 'Document control, dependencies, visibility, and portfolio alignment.'
    }),
    Object.freeze({
        title: 'Additional calculators',
        body: 'New score or readiness modules introduced under controlled standards.'
    }),
    Object.freeze({
        title: 'Dashboard/API layer',
        body: 'Later platform work after governance and data boundaries are stable.'
    })
]);

const ROADMAP_PHASES = Object.freeze([
    Object.freeze({
        label: 'Foundation stabilization',
        body: 'structure, hierarchy, standards, and validation.'
    }),
    Object.freeze({
        label: 'Product strengthening',
        body: 'clearer prototype surfaces and standard-aligned outputs.'
    }),
    Object.freeze({
        label: 'Core standardization',
        body: 'standards and glossary control future logic changes.'
    }),
    Object.freeze({
        label: 'Portfolio alignment',
        body: 'document metadata, dependencies, and visibility.'
    }),
    Object.freeze({
        label: 'Lifecycle enforcement and platform growth',
        body: 'controlled modular expansion.'
    })
]);

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

function createMiniCard(item, headingLevel = 'h4') {
    const card = document.createElement('article');
    card.className = 'mini-card';

    const title = document.createElement(headingLevel);
    title.textContent = item.title;

    const body = document.createElement('p');
    body.textContent = item.body;

    card.append(title, body);
    return card;
}

function renderMiniCardGrid(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) {
        return;
    }
    container.replaceChildren(...items.map((item) => createMiniCard(item)));
}

function renderList(elementId, items) {
    const list = document.getElementById(elementId);
    if (!list) {
        return;
    }
    list.replaceChildren(...items.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    }));
}

function renderRoadmap() {
    const list = document.getElementById('roadmap-list');
    if (!list) {
        return;
    }

    list.replaceChildren(...ROADMAP_PHASES.map((phase) => {
        const listItem = document.createElement('li');
        const label = document.createElement('strong');
        label.textContent = `${phase.label}:`;
        listItem.append(label, ` ${phase.body}`);
        return listItem;
    }));
}

function renderStandardSummary() {
    const list = document.getElementById('indekurilanc-standard-list');
    if (!list) {
        return;
    }

    const items = [
        `Infrastructure: ${Math.round(INDEKURILANC_WEIGHTS.infrastructure * 100)}%`,
        `Skills: ${Math.round(INDEKURILANC_WEIGHTS.skills * 100)}%`,
        `Governance: ${Math.round(INDEKURILANC_WEIGHTS.governance * 100)}%`,
        `Active reference: ${INDEKURILANC_STANDARD_VERSION}`
    ];

    list.replaceChildren(...items.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    }));
}

function renderMaturityBands() {
    renderMiniCardGrid('maturity-bands', MATURITY_BANDS.map((band) => ({
        title: `${band.status} (${band.range})`,
        body: band.summary
    })));
}

function initializeRepositoryView() {
    renderMiniCardGrid('pillar-grid', REPOSITORY_PILLARS.map((pillar) => ({
        title: pillar.title,
        body: pillar.body
    })));
    renderList('source-hierarchy', SOURCE_OF_TRUTH);
    renderMiniCardGrid('visibility-model', VISIBILITY_MODEL);
    renderMiniCardGrid('future-modules', FUTURE_MODULES);
    renderRoadmap();
    renderStandardSummary();
    renderMaturityBands();
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
    initializeRepositoryView();
    initializeIndekurilanc();
});
