/**
 * AI IQ World Bank — calculator.js
 * Kreditni kalkulator: M = P * [r(1+r)^n] / [(1+r)^n - 1]
 */

(function () {
  'use strict';

  // ── Helpers ────────────────────────────────────────────────────
  function fmt(num) {
    return new Intl.NumberFormat('sr-RS', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2
    }).format(num);
  }

  function calculateLoan(principal, annualRate, months) {
    if (annualRate === 0) {
      const M = principal / months;
      return { monthlyPayment: M, totalPayment: M * months, totalInterest: 0 };
    }
    const r = annualRate / 100 / 12;
    const pow = Math.pow(1 + r, months);
    const M = principal * (r * pow) / (pow - 1);
    return {
      monthlyPayment: M,
      totalPayment:   M * months,
      totalInterest:  M * months - principal
    };
  }

  // ── Pie Chart (Canvas) ─────────────────────────────────────────
  function drawPieChart(canvasId, principal, interest) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;

    const ctx   = canvas.getContext('2d');
    const total = principal + interest;
    const W = canvas.width  = canvas.offsetWidth  || 320;
    const H = canvas.height = 220;
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.38;

    ctx.clearRect(0, 0, W, H);

    const slices = [
      { value: principal, color: '#c9a84c', label: 'Glavnica' },
      { value: interest,  color: '#1a3a5c', label: 'Kamata'   }
    ];

    let startAngle = -Math.PI / 2;
    slices.forEach(slice => {
      const angle = (slice.value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startAngle, startAngle + angle);
      ctx.closePath();
      ctx.fillStyle = slice.color;
      ctx.fill();
      ctx.strokeStyle = '#0a1628';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      const midAngle = startAngle + angle / 2;
      const lx = cx + (r * 0.65) * Math.cos(midAngle);
      const ly = cy + (r * 0.65) * Math.sin(midAngle);
      const pct = ((slice.value / total) * 100).toFixed(1);
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(11, r * 0.14)}px Segoe UI, Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pct + '%', lx, ly);

      startAngle += angle;
    });

    // Legend
    const legendY = H - 28;
    slices.forEach((slice, i) => {
      const lx = cx - 100 + i * 120;
      ctx.fillStyle = slice.color;
      ctx.fillRect(lx, legendY, 14, 14);
      ctx.fillStyle = '#e8e8e8';
      ctx.font = '12px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(slice.label, lx + 18, legendY + 7);
    });
  }

  // ── UI Update ─────────────────────────────────────────────────
  function updateCalc() {
    const principal = parseFloat(document.getElementById('loanAmount').value)  || 0;
    const rate      = parseFloat(document.getElementById('loanRate').value)    || 0;
    const months    = parseInt(document.getElementById('loanMonths').value, 10) || 1;

    // Update display values
    const amtDisp = document.getElementById('amountDisplay');
    const rateDisp = document.getElementById('rateDisplay');
    const monthDisp = document.getElementById('monthsDisplay');
    if (amtDisp)   amtDisp.textContent   = fmt(principal);
    if (rateDisp)  rateDisp.textContent  = rate.toFixed(2) + '%';
    if (monthDisp) monthDisp.textContent = months + ' mes.';

    if (principal <= 0 || months <= 0) return;

    const result = calculateLoan(principal, rate, months);

    const monthlyEl  = document.getElementById('resultMonthly');
    const totalEl    = document.getElementById('resultTotal');
    const interestEl = document.getElementById('resultInterest');
    if (monthlyEl)  monthlyEl.textContent  = fmt(result.monthlyPayment);
    if (totalEl)    totalEl.textContent    = fmt(result.totalPayment);
    if (interestEl) interestEl.textContent = fmt(result.totalInterest);

    drawPieChart('loanChart', principal, result.totalInterest);
  }

  function initCalculator() {
    const ids = ['loanAmount', 'loanRate', 'loanMonths'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', updateCalc);
        el.addEventListener('change', updateCalc);
      }
    });

    // Sync range ↔ number inputs
    const rangePairs = [
      ['loanAmountRange', 'loanAmount'],
      ['loanRateRange',   'loanRate'],
      ['loanMonthsRange', 'loanMonths'],
    ];
    rangePairs.forEach(([rangeId, numId]) => {
      const range = document.getElementById(rangeId);
      const num   = document.getElementById(numId);
      if (!range || !num) return;
      range.addEventListener('input', () => { num.value = range.value; updateCalc(); });
      num.addEventListener('input',   () => { range.value = num.value; updateCalc(); });
    });

    updateCalc();
  }

  document.addEventListener('DOMContentLoaded', initCalculator);

})();
