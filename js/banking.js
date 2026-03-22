/**
 * AI IQ World Bank — Banking Calculator
 * Loan calculator (monthly payment) and savings calculator
 * Formula: M = P[r(1+r)^n] / [(1+r)^n - 1]
 */

(function () {
  'use strict';

  // ── Utility: format currency ─────────────────────────────────
  function formatCurrency(value, currency) {
    currency = currency || 'EUR';
    return new Intl.NumberFormat('sr-RS', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2
    }).format(value);
  }

  // ── Loan Calculator ──────────────────────────────────────────
  function calcLoan(principal, annualRate, months) {
    if (months <= 0 || principal <= 0) return null;
    if (annualRate <= 0) {
      // Zero interest
      return {
        monthly: principal / months,
        totalPayment: principal,
        totalInterest: 0
      };
    }
    var r = annualRate / 100 / 12;
    var n = months;
    var monthly = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    var totalPayment = monthly * n;
    return {
      monthly: monthly,
      totalPayment: totalPayment,
      totalInterest: totalPayment - principal
    };
  }

  // ── Savings Calculator ───────────────────────────────────────
  function calcSavings(monthlyDeposit, annualRate, years) {
    var months = years * 12;
    if (months <= 0) return null;
    if (annualRate <= 0) {
      return {
        total: monthlyDeposit * months,
        totalDeposited: monthlyDeposit * months,
        interest: 0
      };
    }
    var r = annualRate / 100 / 12;
    // Future Value of Annuity Due
    var fv = monthlyDeposit * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    var totalDeposited = monthlyDeposit * months;
    return {
      total: fv,
      totalDeposited: totalDeposited,
      interest: fv - totalDeposited
    };
  }

  // ── Update Loan Results ──────────────────────────────────────
  function updateLoanResults() {
    var principal = parseFloat(document.getElementById('loanAmount').value) || 0;
    var rate      = parseFloat(document.getElementById('loanRate').value)   || 0;
    var months    = parseInt(document.getElementById('loanTerm').value)     || 0;

    var result = calcLoan(principal, rate, months);

    if (!result || principal <= 0 || months <= 0) {
      document.getElementById('loanMonthly').textContent     = '—';
      document.getElementById('loanTotal').textContent       = '—';
      document.getElementById('loanInterestTotal').textContent = '—';
      document.getElementById('loanPrincipalVal').textContent  = '—';
      return;
    }

    document.getElementById('loanMonthly').textContent        = formatCurrency(result.monthly);
    document.getElementById('loanTotal').textContent          = formatCurrency(result.totalPayment);
    document.getElementById('loanInterestTotal').textContent  = formatCurrency(result.totalInterest);
    document.getElementById('loanPrincipalVal').textContent   = formatCurrency(principal);

    // Progress bar: principal share of total payment
    var principalPct = (principal / result.totalPayment * 100).toFixed(1);
    var interestPct  = (100 - principalPct).toFixed(1);
    var principalBar = document.getElementById('principalBar');
    if (principalBar) principalBar.style.width = principalPct + '%';

    var principalPctEl = document.getElementById('principalPct');
    var interestPctEl  = document.getElementById('interestPct');
    if (principalPctEl) principalPctEl.textContent = principalPct + '%';
    if (interestPctEl)  interestPctEl.textContent  = interestPct + '%';
  }

  // ── Update Savings Results ───────────────────────────────────
  function updateSavingsResults() {
    var monthly = parseFloat(document.getElementById('savingsMonthly').value) || 0;
    var rate    = parseFloat(document.getElementById('savingsRate').value)    || 0;
    var years   = parseInt(document.getElementById('savingsYears').value)     || 0;

    var result = calcSavings(monthly, rate, years);

    if (!result || monthly <= 0 || years <= 0) {
      document.getElementById('savingsTotal').textContent     = '—';
      document.getElementById('savingsDeposited').textContent = '—';
      document.getElementById('savingsInterest').textContent  = '—';
      return;
    }

    document.getElementById('savingsTotal').textContent     = formatCurrency(result.total);
    document.getElementById('savingsDeposited').textContent = formatCurrency(result.totalDeposited);
    document.getElementById('savingsInterest').textContent  = formatCurrency(result.interest);

    var growthPct = document.getElementById('savingsGrowth');
    if (growthPct && result.totalDeposited > 0) {
      var pct = ((result.total / result.totalDeposited - 1) * 100).toFixed(1);
      growthPct.textContent = '+' + pct + '%';
    }
  }

  // ── Tab switching ────────────────────────────────────────────
  var loanPanel    = document.getElementById('loanPanel');
  var savingsPanel = document.getElementById('savingsPanel');
  var tabLoan      = document.getElementById('tabLoan');
  var tabSavings   = document.getElementById('tabSavings');

  if (tabLoan && tabSavings) {
    tabLoan.addEventListener('click', function () {
      tabLoan.classList.add('active');
      tabSavings.classList.remove('active');
      if (loanPanel)    loanPanel.style.display    = '';
      if (savingsPanel) savingsPanel.style.display = 'none';
    });

    tabSavings.addEventListener('click', function () {
      tabSavings.classList.add('active');
      tabLoan.classList.remove('active');
      if (savingsPanel) savingsPanel.style.display = '';
      if (loanPanel)    loanPanel.style.display    = 'none';
    });
  }

  // ── Attach input listeners ───────────────────────────────────
  var loanInputs = ['loanAmount', 'loanRate', 'loanTerm'];
  loanInputs.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', updateLoanResults);
  });

  var savingsInputs = ['savingsMonthly', 'savingsRate', 'savingsYears'];
  savingsInputs.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', updateSavingsResults);
  });

  // ── Initial calculation on page load ────────────────────────
  updateLoanResults();
  updateSavingsResults();

})();
