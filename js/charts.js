/**
 * AI IQ World Bank — charts.js
 * Canvas grafovi za investicije i ostale stranice
 */

(function () {
  'use strict';

  // ── Assets Growth Line Chart ──────────────────────────────────
  function drawLineChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width  = canvas.parentElement.offsetWidth || 600;
    const H = canvas.height = 320;

    const padL = 60, padR = 30, padT = 30, padB = 50;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    const maxVal = Math.max(...data.values) * 1.1;
    const minVal = 0;

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0d2440';
    ctx.fillRect(0, 0, W, H);

    // Grid lines
    const gridLines = 5;
    ctx.strokeStyle = 'rgba(201,168,76,0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= gridLines; i++) {
      const y = padT + (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + chartW, y);
      ctx.stroke();

      // Y labels
      const val = maxVal - (maxVal / gridLines) * i;
      ctx.fillStyle = '#a0aec0';
      ctx.font = '11px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText('$' + val.toFixed(0) + 'B', padL - 8, y);
    }

    // X labels
    data.labels.forEach((label, i) => {
      const x = padL + (chartW / (data.labels.length - 1)) * i;
      ctx.fillStyle = '#a0aec0';
      ctx.font = '11px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(label, x, H - padB + 10);
    });

    // Area fill (gradient)
    const points = data.values.map((val, i) => ({
      x: padL + (chartW / (data.values.length - 1)) * i,
      y: padT + chartH - ((val - minVal) / (maxVal - minVal)) * chartH
    }));

    const gradient = ctx.createLinearGradient(0, padT, 0, padT + chartH);
    gradient.addColorStop(0, 'rgba(201,168,76,0.35)');
    gradient.addColorStop(1, 'rgba(201,168,76,0.02)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, padT + chartH);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, padT + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#c9a84c';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Points
    points.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#c9a84c';
      ctx.fill();
      ctx.strokeStyle = '#0a1628';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Value label
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('$' + data.values[i] + 'B', p.x, p.y - 8);
    });
  }

  // ── Returns Bar Chart ─────────────────────────────────────────
  function drawBarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width  = canvas.parentElement.offsetWidth || 600;
    const H = canvas.height = 280;

    const padL = 50, padR = 20, padT = 20, padB = 50;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    const maxVal = Math.max(...data.values) * 1.15;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0d2440';
    ctx.fillRect(0, 0, W, H);

    const barW = (chartW / data.values.length) * 0.65;
    const gap  = (chartW / data.values.length) * 0.35;

    data.values.forEach((val, i) => {
      const barH = (val / maxVal) * chartH;
      const x = padL + (chartW / data.values.length) * i + gap / 2;
      const y = padT + chartH - barH;

      // Bar gradient
      const grad = ctx.createLinearGradient(x, y, x, y + barH);
      grad.addColorStop(0, '#e6c870');
      grad.addColorStop(1, '#c9a84c');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]) : ctx.rect(x, y, barW, barH);
      ctx.fill();

      // Value
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(val + '%', x + barW / 2, y - 4);

      // X label
      ctx.fillStyle = '#a0aec0';
      ctx.font = '11px Segoe UI, Arial, sans-serif';
      ctx.textBaseline = 'top';
      ctx.fillText(data.labels[i], x + barW / 2, H - padB + 8);
    });
  }

  // ── Init ──────────────────────────────────────────────────────
  function initCharts() {
    // Assets growth
    drawLineChart('assetsChart', {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      values: [30, 35, 38, 42, 45, 48, 50]
    });

    // Annual returns
    drawBarChart('returnsChart', {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
      values: [8.2, 11.4, 7.9, 12.1, 9.6, 14.3]
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    // Redraw on resize
    window.addEventListener('resize', initCharts);
  });

})();
