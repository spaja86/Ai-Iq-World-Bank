/**
 * AI IQ World Bank — Chart.js (Vanilla Canvas)
 * Asset Growth Chart 2020-2026
 */

(function () {
  'use strict';

  var canvas = document.getElementById('assetChart');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');

  // ── Data ────────────────────────────────────────────────────
  var labels = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  var assetsData  = [12, 18, 24, 31, 39, 46, 50];  // billions USD
  var clientsData = [0.8, 1.4, 2.1, 3.0, 3.9, 4.6, 5.0]; // millions

  // ── Colors ──────────────────────────────────────────────────
  var GOLD    = '#c9a227';
  var BLUE    = '#3b82f6';
  var GRID    = 'rgba(255,255,255,0.06)';
  var TEXT    = 'rgba(168,178,200,0.9)';
  var BG      = '#0d1f3c';

  // ── Responsive canvas resize ─────────────────────────────────
  function resizeCanvas() {
    var parent = canvas.parentElement;
    canvas.width  = parent.clientWidth || 800;
    canvas.height = 350;
    drawChart();
  }

  // ── Easing ──────────────────────────────────────────────────
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  // ── Draw Chart ──────────────────────────────────────────────
  var animProgress = 0;
  var animFrame;

  function drawChart() {
    var W = canvas.width;
    var H = canvas.height;
    var pad = { top: 32, right: 40, bottom: 56, left: 64 };
    var chartW = W - pad.left - pad.right;
    var chartH = H - pad.top - pad.bottom;

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = BG;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(0, 0, W, H, 12) : ctx.rect(0, 0, W, H);
    ctx.fill();

    var maxAssets  = 55;
    var maxClients = 6;
    var n = labels.length;
    var step = chartW / (n - 1);

    // Grid lines
    var gridLines = 5;
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    for (var g = 0; g <= gridLines; g++) {
      var yG = pad.top + chartH - (g / gridLines) * chartH;
      ctx.beginPath();
      ctx.moveTo(pad.left, yG);
      ctx.lineTo(pad.left + chartW, yG);
      ctx.stroke();

      // Y label (assets)
      ctx.fillStyle = TEXT;
      ctx.font = '11px Segoe UI, Arial, sans-serif';
      ctx.textAlign = 'right';
      var assetVal = ((g / gridLines) * maxAssets).toFixed(0);
      ctx.fillText('$' + assetVal + 'B', pad.left - 8, yG + 4);
    }

    // X labels
    ctx.textAlign = 'center';
    ctx.fillStyle = TEXT;
    ctx.font = '12px Segoe UI, Arial, sans-serif';
    for (var i = 0; i < n; i++) {
      var xL = pad.left + i * step;
      ctx.fillText(labels[i], xL, H - pad.bottom + 20);
    }

    // X axis line
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top + chartH);
    ctx.lineTo(pad.left + chartW, pad.top + chartH);
    ctx.stroke();

    var prog = animProgress;

    // ── Assets Line (gold) ──
    var gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
    gradient.addColorStop(0, 'rgba(201,162,39,0.35)');
    gradient.addColorStop(1, 'rgba(201,162,39,0.0)');

    // Fill area
    ctx.beginPath();
    for (var i2 = 0; i2 < n; i2++) {
      var xA = pad.left + i2 * step;
      var rawA = assetsData[i2] * prog;
      var yA = pad.top + chartH - (rawA / maxAssets) * chartH;
      if (i2 === 0) ctx.moveTo(xA, yA);
      else ctx.lineTo(xA, yA);
    }
    ctx.lineTo(pad.left + (n - 1) * step, pad.top + chartH);
    ctx.lineTo(pad.left, pad.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    for (var i3 = 0; i3 < n; i3++) {
      var xB = pad.left + i3 * step;
      var rawB = assetsData[i3] * prog;
      var yB = pad.top + chartH - (rawB / maxAssets) * chartH;
      if (i3 === 0) ctx.moveTo(xB, yB);
      else ctx.lineTo(xB, yB);
    }
    ctx.stroke();

    // Dots
    for (var i4 = 0; i4 < n; i4++) {
      var xC = pad.left + i4 * step;
      var rawC = assetsData[i4] * prog;
      var yC = pad.top + chartH - (rawC / maxAssets) * chartH;
      ctx.beginPath();
      ctx.arc(xC, yC, 5, 0, Math.PI * 2);
      ctx.fillStyle = GOLD;
      ctx.fill();
      ctx.strokeStyle = BG;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // ── Clients Line (blue) ──
    var gradBlue = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
    gradBlue.addColorStop(0, 'rgba(59,130,246,0.25)');
    gradBlue.addColorStop(1, 'rgba(59,130,246,0.0)');

    ctx.beginPath();
    for (var i5 = 0; i5 < n; i5++) {
      var xD = pad.left + i5 * step;
      var rawD = clientsData[i5] * prog;
      var yD = pad.top + chartH - (rawD / maxClients) * chartH;
      if (i5 === 0) ctx.moveTo(xD, yD);
      else ctx.lineTo(xD, yD);
    }
    ctx.lineTo(pad.left + (n - 1) * step, pad.top + chartH);
    ctx.lineTo(pad.left, pad.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradBlue;
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = BLUE;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.setLineDash([6, 4]);
    for (var i6 = 0; i6 < n; i6++) {
      var xE = pad.left + i6 * step;
      var rawE = clientsData[i6] * prog;
      var yE = pad.top + chartH - (rawE / maxClients) * chartH;
      if (i6 === 0) ctx.moveTo(xE, yE);
      else ctx.lineTo(xE, yE);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // ── Legend ──
    var legendX = pad.left + chartW - 280;
    var legendY = pad.top + 12;
    drawLegendItem(legendX, legendY, GOLD, 'Sredstva (mlrd $)');
    drawLegendItem(legendX + 160, legendY, BLUE, 'Klijenti (mil.)');

    // Title
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 13px Segoe UI, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Rast Sredstava & Klijenata 2020–2026', pad.left, pad.top - 10);
  }

  function drawLegendItem(x, y, color, label) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.moveTo(x, y + 7);
    ctx.lineTo(x + 24, y + 7);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + 12, y + 7, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = TEXT;
    ctx.font = '11px Segoe UI, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 30, y + 11);
  }

  // ── Animation ────────────────────────────────────────────────
  function animateChart() {
    cancelAnimationFrame(animFrame);
    animProgress = 0;
    var start = null;
    var duration = 1400;

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed = timestamp - start;
      animProgress = easeOutCubic(Math.min(elapsed / duration, 1));
      drawChart();
      if (elapsed < duration) {
        animFrame = requestAnimationFrame(step);
      }
    }
    animFrame = requestAnimationFrame(step);
  }

  // ── Intersection Observer trigger ───────────────────────────
  var triggered = false;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        animateChart();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(canvas);

  // ── Initial render (no animation) ───────────────────────────
  resizeCanvas();

  // ── Resize handler ───────────────────────────────────────────
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      triggered = false;
      resizeCanvas();
    }, 200);
  }, { passive: true });

})();
