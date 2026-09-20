const INDEKURILANC_STANDARD_VERSION = 'INDEKURILANC-STD-V1';

const DEFAULT_RESULT_STATE = Object.freeze({
    score: '-',
    status: 'Not Calculated',
    summary: 'Run the calculator to generate an operational interpretation.',
    priority: 'Awaiting input',
    nextStep: 'Update the inputs to see the recommended next repository move.',
    standard: INDEKURILANC_STANDARD_VERSION,
    contributions: []
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

const MODULE_BOUNDARIES = Object.freeze([
    Object.freeze({
        title: 'Score logic',
        body: 'Keep calculation weights, maturity bands, and result requirements tied to the INDEKURILANC standard.',
        meta: [
            'Owner lane: developer / prototype',
            'Controlling source: standards/indekurilanc-standard.md',
            'Visibility: public-safe output from canonical rule'
        ]
    }),
    Object.freeze({
        title: 'Narrative panels',
        body: 'Keep creator-facing explanation blocks downstream from governance and standard wording.',
        meta: [
            'Owner lane: creator + prototype',
            'Controlling source: docs/repository-operating-model.md',
            'Visibility: public-safe'
        ]
    }),
    Object.freeze({
        title: 'Reference surfaces',
        body: 'Keep standards, governance, and portfolio cards curated as repo-relative public-safe references.',
        meta: [
            'Owner lane: developer / prototype',
            'Controlling source: README.md',
            'Visibility: public-safe'
        ]
    }),
    Object.freeze({
        title: 'Future platform path',
        body: 'Add multilingual, dashboard, and API layers only after source mapping and release gates are stable.',
        meta: [
            'Owner lane: portfolio / architecture',
            'Controlling source: docs/repository-roadmap.md',
            'Visibility: planning-led public-safe growth'
        ]
    })
]);

const NARRATIVE_LANES = Object.freeze([
    Object.freeze({
        title: 'Developer lane',
        body: 'Own implementation, rendering, structure, validation, and traceability for controlled repository surfaces.'
    }),
    Object.freeze({
        title: 'Creator lane',
        body: 'Own public-safe framing, narrative clarity, reusable explanation, and audience alignment.'
    }),
    Object.freeze({
        title: 'Shared lane',
        body: 'Own source confirmation, visibility classification, release-readiness checks, and concept-surface mapping across roles.'
    }),
    Object.freeze({
        title: 'Canonical downstream rule',
        body: 'Keep public-safe messaging, plans, and prototype surfaces downstream from standards and governance.'
    })
]);

const REPOSITORY_WORK_CYCLE = Object.freeze([
    'Follow the canonical repository work cycle in docs/repository-operating-model.md.',
    'Start with the controlling source plus audience/visibility classification.',
    'Align standards, governance, portfolio, and plans before updating downstream public-safe surfaces.',
    'Validate anchors, references, standard/version exposure, sanitization, and release readiness before sharing.'
]);

const PUBLIC_OUTPUT_FLOW = Object.freeze([
    'Start from the controlling standard or governance rule.',
    'Route the change through the relevant working plan or portfolio document.',
    'Sanitize or aggregate sensitive content before public reuse.',
    'Expose only the approved public-safe result in documents or the prototype.'
]);

const APPROVAL_FLOW = Object.freeze([
    'Update the controlling standard or governance source first.',
    'Update governance rules second when lifecycle, visibility, or release gates are affected.',
    'Align portfolio, roadmap, and dependent planning documents third.',
    'Update plans and support templates fourth.',
    'Update the public prototype and other public-safe outputs last, then run validation and release checks.'
]);

const RELEASE_GATES = Object.freeze([
    Object.freeze({
        title: 'Standards first',
        body: 'Normative rules must lead prototype or document changes.'
    }),
    Object.freeze({
        title: 'Visibility check',
        body: 'Keep public-safe, limited/internal, and canonical scopes explicit.'
    }),
    Object.freeze({
        title: 'Validation pass',
        body: 'Repository checks and frontend syntax must pass before release.'
    }),
    Object.freeze({
        title: 'Sanitization',
        body: 'Remove sensitive operational identifiers, quantities, and secrets.'
    })
]);

const DEVELOPER_CREATOR_CHECKPOINTS = Object.freeze([
    'Confirm the controlling standard, governance rule, or approved plan before changing a reusable surface.',
    'Classify the target audience layer and visibility before drafting new copy or prototype panels.',
    'Keep source logic, public-safe explanation, and release-readiness checks separable.',
    'Update concept-surface mapping when a reusable panel or cataloged output changes.',
    'Confirm whether the change needs shared-lane coordination before release.',
    'Keep multilingual or dashboard-ready variants downstream from canonical wording.'
]);

const CHANGE_IMPACT_CLASSES = Object.freeze([
    'Low impact: clarity, cleanup, or non-normative presentation changes that still preserve controlling meaning.',
    'Medium impact: new working docs, new public-safe panels, support-flow updates, or lane-routing changes that require portfolio and audience checks.',
    'High impact: standards, governance, visibility-boundary, or new reusable concept-surface changes that require full downstream alignment and release-readiness review.'
]);

const SUCCESS_CRITERIA = Object.freeze([
    'Every non-trivial change has a visible controlling source.',
    'Every structured document keeps valid Document Control metadata.',
    'Every reusable public-safe surface is cataloged and traceable.',
    'Developer and creator responsibilities stay separated but coordinated.',
    'Standards, governance, docs, plans, prototype, and validation express the same operating logic.'
]);

const CONCEPT_SURFACE_INVENTORY = Object.freeze([
    Object.freeze({
        title: 'Repository overview',
        body: 'Public framing of the controlled repository system, pillars, and architecture path.',
        meta: [
            'Channel: README + prototype overview',
            'Controlling source: governance/repo-charter.md',
            'Owner lane: creator + prototype'
        ]
    }),
    Object.freeze({
        title: 'Operating-model panels',
        body: 'Developer/creator routing, repository work cycle, approval order, public-output flow, release gates, and success criteria.',
        meta: [
            'Channel: docs + prototype operating model',
            'Controlling source: docs/repository-operating-model.md',
            'Visibility: public-safe'
        ]
    }),
    Object.freeze({
        title: 'INDEKURILANC results',
        body: 'Score, status, interpretation, priority, next step, and active standard exposure.',
        meta: [
            'Channel: prototype calculator',
            'Controlling source: standards/indekurilanc-standard.md',
            `Standard version: ${INDEKURILANC_STANDARD_VERSION}`
        ]
    }),
    Object.freeze({
        title: 'Reference cards',
        body: 'Curated standards, governance, portfolio, and roadmap references for contributors and viewers.',
        meta: [
            'Channel: prototype reference sections',
            'Controlling source: docs/document-portfolio.md',
            'Visibility: public-safe'
        ]
    })
]);

const PUBLIC_OUTPUT_CATALOG = Object.freeze([
    Object.freeze({
        title: 'README navigation',
        body: 'Top-level public-safe framing and contributor entry point.',
        meta: [
            'Source reference: README.md',
            'Audience layer: creator / public-safe',
            'Release gate: visibility + source-reference check'
        ]
    }),
    Object.freeze({
        title: 'Controlled prototype',
        body: 'Static UI that exposes standards, governance routes, and the active INDEKURILANC calculator.',
        meta: [
            'Source reference: index.html, styles.css, script.js',
            `Standard exposure: ${INDEKURILANC_STANDARD_VERSION}`,
            'Release gate: validation + syntax + sanitization'
        ]
    }),
    Object.freeze({
        title: 'Operating-model guide',
        body: 'Public-safe routing document for ownership, approvals, and release readiness.',
        meta: [
            'Source reference: docs/repository-operating-model.md',
            'Audience layer: contributor + creator',
            'Release gate: governance alignment'
        ]
    }),
    Object.freeze({
        title: 'Policy and transparency template',
        body: 'Public-safe structure for transparency and policy outputs under controlled standards.',
        meta: [
            'Source reference: javni-prikaz-emisija-i-kamatna-politika-plan.md',
            'Audience layer: public-safe policy framing',
            'Release gate: sanitization + policy source check'
        ]
    })
]);

const STANDARD_SUMMARY_ITEMS = Object.freeze([
    `Infrastructure: ${Math.round(INDEKURILANC_WEIGHTS.infrastructure * 100)}%`,
    `Skills: ${Math.round(INDEKURILANC_WEIGHTS.skills * 100)}%`,
    `Governance: ${Math.round(INDEKURILANC_WEIGHTS.governance * 100)}%`,
    `Active reference: ${INDEKURILANC_STANDARD_VERSION}`
]);

const ROADMAP_PHASES = Object.freeze([
    Object.freeze({
        label: 'Phase A-B',
        body: 'operating-model ownership rules plus governance and lifecycle enforcement.'
    }),
    Object.freeze({
        label: 'Phase C-D',
        body: 'portfolio/roadmap alignment plus root-plan and support-template routing.'
    }),
    Object.freeze({
        label: 'Phase E-F',
        body: 'prototype synchronization plus validation and release-readiness gates.'
    }),
    Object.freeze({
        label: 'Phase G-I',
        body: 'security, sanitization, automation, creator messaging, and support alignment.'
    }),
    Object.freeze({
        label: 'Phase J-L',
        body: 'modular growth, public/internal layering, and platformization after controls stabilize.'
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
            priority: 'Scale responsibly, document decisions, and preserve governance discipline.',
            nextStep: 'Advance with portfolio-aligned expansion, additional calculators, and metadata-first dashboard planning.'
        };
    }
    if (score >= 40) {
        return {
            summary: 'Core capability exists, but execution consistency and institutional discipline still need reinforcement.',
            priority: 'Strengthen repeatability, close governance gaps, and improve operational depth.',
            nextStep: 'Align roadmap, support workflows, and public-safe outputs before expanding the surface area.'
        };
    }
    return {
        summary: 'Foundational capability is still forming and requires concentrated build-up across multiple dimensions.',
        priority: 'Prioritize core infrastructure, team capability, and baseline operating controls.',
        nextStep: 'Stabilize standards, governance, and validation before introducing new modules or public claims.'
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
    elements.nextStep.textContent = state.nextStep;
    elements.standard.textContent = state.standard;
    renderContributionList(elements.contributions, state.contributions);
}

function createMiniCard(item, headingLevel = 'h4') {
    const card = document.createElement('article');
    card.className = 'mini-card';

    const title = document.createElement(headingLevel);
    title.textContent = item.title;

    const body = document.createElement('p');
    body.textContent = item.body;

    card.append(title, body);

    if (Array.isArray(item.meta) && item.meta.length) {
        const metaList = document.createElement('ul');
        metaList.className = 'mini-card-meta';

        metaList.replaceChildren(...item.meta.map((entry) => {
            const metaItem = document.createElement('li');
            metaItem.textContent = entry;
            return metaItem;
        }));

        card.append(metaList);
    }

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

function buildContributionItems(scores) {
    return [
        {
            title: 'Infrastructure contribution',
            weight: INDEKURILANC_WEIGHTS.infrastructure,
            score: scores.infrastructure
        },
        {
            title: 'Skills contribution',
            weight: INDEKURILANC_WEIGHTS.skills,
            score: scores.skills
        },
        {
            title: 'Governance contribution',
            weight: INDEKURILANC_WEIGHTS.governance,
            score: scores.governance
        }
    ].map((item) => ({
        title: item.title,
        weightedValue: Number((item.score * item.weight).toFixed(2)),
        detail: `Raw score ${item.score} x weight ${Math.round(item.weight * 100)}%`
    }));
}

function createMetricItem(item) {
    const wrapper = document.createElement('article');
    wrapper.className = 'metric-item';

    const heading = document.createElement('h4');
    heading.textContent = item.title;

    const value = document.createElement('p');
    value.className = 'metric-value';
    value.textContent = `${item.weightedValue} points`;

    const detail = document.createElement('p');
    detail.textContent = item.detail;

    wrapper.append(heading, value, detail);
    return wrapper;
}

function renderContributionList(container, items) {
    if (!container) {
        return;
    }

    if (!items.length) {
        const emptyState = document.createElement('p');
        emptyState.textContent = 'Calculate the index to see how each weighted dimension contributes to the total score.';
        container.replaceChildren(emptyState);
        return;
    }

    container.replaceChildren(...items.map((item) => createMetricItem(item)));
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

    list.replaceChildren(...STANDARD_SUMMARY_ITEMS.map((item) => {
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
    renderMiniCardGrid('module-boundaries', MODULE_BOUNDARIES);
    renderMiniCardGrid('narrative-lanes', NARRATIVE_LANES);
    renderList('repository-work-cycle', REPOSITORY_WORK_CYCLE);
    renderList('public-output-flow', PUBLIC_OUTPUT_FLOW);
    renderList('approval-flow', APPROVAL_FLOW);
    renderMiniCardGrid('release-gates', RELEASE_GATES);
    renderList('developer-creator-checkpoints', DEVELOPER_CREATOR_CHECKPOINTS);
    renderList('change-impact-matrix', CHANGE_IMPACT_CLASSES);
    renderList('success-criteria', SUCCESS_CRITERIA);
    renderMiniCardGrid('concept-surface-inventory', CONCEPT_SURFACE_INVENTORY);
    renderMiniCardGrid('public-output-catalog', PUBLIC_OUTPUT_CATALOG);
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
        nextStep: document.getElementById('indekurilanc-next-step'),
        standard: document.getElementById('indekurilanc-standard'),
        contributions: document.getElementById('indekurilanc-contributions')
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
            nextStep: interpretation.nextStep,
            standard: INDEKURILANC_STANDARD_VERSION,
            contributions: buildContributionItems(scores)
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
