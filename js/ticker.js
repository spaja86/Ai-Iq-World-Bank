/**
 * AI IQ World Bank — ticker.js
 * Animirani ticker bar sa kripto/forex podacima
 */

(function () {
  'use strict';

  const tickerData = [
    { label: 'BTC',     value: '$67,420',  change: '+2.3%', up: true  },
    { label: 'ETH',     value: '$3,840',   change: '+1.7%', up: true  },
    { label: 'EUR/USD', value: '1.0842',   change: '+0.1%', up: true  },
    { label: 'USD/RSD', value: '109.50',   change: '-0.2%', up: false },
    { label: 'GOLD',    value: '$2,340/oz',change: '+0.8%', up: true  },
    { label: 'BNB',     value: '$542',     change: '+1.2%', up: true  },
    { label: 'SOL',     value: '$148',     change: '+3.1%', up: true  },
    { label: 'GBP/USD', value: '1.2650',   change: '-0.1%', up: false },
    { label: 'Silver',  value: '$27.40/oz',change: '+0.5%', up: true  },
    { label: 'ADA',     value: '$0.48',    change: '+2.0%', up: true  },
  ];

  function buildTickerHTML() {
    return tickerData.map(item => {
      const cls = item.up ? 'up' : 'down';
      const arrow = item.up ? '▲' : '▼';
      return `<span>${item.label}: <strong>${item.value}</strong> <span class="${cls}">${arrow}${item.change}</span></span>`;
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
