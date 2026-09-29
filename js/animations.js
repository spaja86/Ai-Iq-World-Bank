/**
 * AI IQ World Bank — Scroll Animations & Counter Animations
 * Uses Intersection Observer API (no external dependencies)
 */

(function () {
  'use strict';

  // ── Fade-in scroll animations ────────────────────────────────
  var fadeEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Counter Animations ───────────────────────────────────────
  function animateCounter(el) {
    var target  = parseFloat(el.dataset.target)  || 0;
    var suffix  = el.dataset.suffix  || '';
    var prefix  = el.dataset.prefix  || '';
    var decimals = parseInt(el.dataset.decimals) || 0;
    var duration = 1800;
    var start    = null;

    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed  = timestamp - start;
      var progress = easeOutQuart(Math.min(elapsed / duration, 1));
      var current  = progress * target;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-counter]');

  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent =
        (el.dataset.prefix || '') +
        parseFloat(el.dataset.target || 0).toFixed(parseInt(el.dataset.decimals) || 0) +
        (el.dataset.suffix || '');
    });
  }

  // ── Progress Bar Animations ──────────────────────────────────
  var progressBars = document.querySelectorAll('.progress-fill[data-width]');

  if (progressBars.length && 'IntersectionObserver' in window) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width;
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    progressBars.forEach(function (bar) {
      bar.style.width = '0%';
      barObserver.observe(bar);
    });
  }

  // ── Stagger children fade-in ─────────────────────────────────
  // Adds .fade-in to direct children inside .stagger-children
  document.querySelectorAll('.stagger-children').forEach(function (parent) {
    var children = parent.children;
    Array.prototype.forEach.call(children, function (child, index) {
      child.classList.add('fade-in');
      child.style.transitionDelay = (index * 0.12) + 's';
    });
  });

  // Re-observe after stagger classes added
  var staggerEls = document.querySelectorAll('.stagger-children .fade-in');
  if (staggerEls.length && 'IntersectionObserver' in window) {
    var staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    staggerEls.forEach(function (el) { staggerObserver.observe(el); });
  }

})();
