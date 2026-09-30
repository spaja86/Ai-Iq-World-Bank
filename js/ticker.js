/**
 * AI IQ World Bank — ticker.js
 * Animirani status platforme bez tržišnih podataka
 */

(function () {
  'use strict';

  const tickerData = [
    { label: 'AI IQ', value: 'digitalni razvoj', change: 'info', up: true },
    { label: 'KALKULATOR', value: 'edukativni alat', change: 'info', up: true },
    { label: 'SADRŽAJ', value: 'proverava se', change: 'status', up: true },
    { label: 'KONTAKT', value: 'email kanal', change: 'info', up: true },
  ];

  function buildTickerHTML() {
    return tickerData.map(item => {
      const cls = item.up ? 'up' : 'down';
      return `<span>${item.label}: <strong>${item.value}</strong> <span class="${cls}">${item.change}</span></span>`;
    }).join(' &nbsp;|&nbsp; ');
  }

  function initTicker() {
    const track = document.querySelector('.ticker-track');
    if (!track) return;

    const content = buildTickerHTML();
    // Duplicate content for seamless loop
    track.innerHTML = content + ' &nbsp;&nbsp;&nbsp; ' + content;
  }

  document.addEventListener('DOMContentLoaded', initTicker);

})();
