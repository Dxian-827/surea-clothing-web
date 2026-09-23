/* SUREA — shared interface behaviour: icons, product cards, header, reveal. */
window.SUREAui = (function () {
  var ICONS = {
    heart: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 0 1 19.4 13Z"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
    user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="12" cy="8.5" r="4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
    bag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 8h12l1 12H5Z"/><path d="M9.5 8V6.5a2.5 2.5 0 0 1 5 0V8"/></svg>',
    arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 12h15m0 0-5-5m5 5-5 5"/></svg>',
    crown: '<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true"><path d="M5 23h22M5 23 3 10l7 5 6-9 6 9 7-5-2 13"/><path d="M8 26h16"/></svg>',
    needle: '<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true"><path d="M25 6 9 22"/><path d="M7 24 5 27l3-1"/><ellipse cx="25.5" cy="6.5" rx="2" ry="3" transform="rotate(45 25.5 6.5)"/><path d="M12 12c3 1 4 3 3 6"/></svg>',
    house: '<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true"><path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13"/><path d="M13 27v-8h6v8"/></svg>',
    tree: '<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true"><path d="M16 4c-5 0-8 4-8 8 0 4 3 7 8 7s8-3 8-7c0-4-3-8-8-8Z"/><path d="M16 19v9"/><path d="M11 28h10"/></svg>',
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none"/></svg>',
    pinterest: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M10 18.5 12.6 8"/><path d="M9.2 11.6c0-2 1.6-3.6 3.7-3.6 2 0 3.4 1.3 3.4 3.2 0 2.3-1.3 4.1-3.1 4.1-1 0-1.7-.7-1.5-1.6"/></svg>',
    tiktok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.5 2.5 2 4 4.5 4.3"/></svg>',
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M14.5 8.5H17V5.5h-2.5a4 4 0 0 0-4 4v2H8v3h2.5v6h3v-6H16l.5-3h-3v-1.6a1.4 1.4 0 0 1 1-1.4Z"/></svg>',
    youtube: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m11 9.5 4 2.5-4 2.5Z"/></svg>',
    crest: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M36 6c-3 0-5 2-5 4 0 1 .5 2 1 2.5"/><path d="M28 16h16l2-6H26Z"/><path d="M22 20c-5 2-8 6-8 11 0 5 4 8 8 8"/><path d="M50 20c5 2 8 6 8 11 0 5-4 8-8 8"/><path d="M36 18c8 0 14 5 14 12s-6 16-14 16-14-9-14-16 6-12 14-12Z"/><text x="36" y="41" text-anchor="middle" font-family="Georgia, serif" font-size="17" fill="currentColor" stroke="none">S</text><path d="M24 52c4 4 8 6 12 6s8-2 12-6"/><path d="M30 60h12"/></svg>'
  };

  function icon(name, cls) {
    return '<span class="' + (cls || "ic") + '" aria-hidden="true">' + (ICONS[name] || "") + "</span>";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function stars(rating, count) {
    var out = "";
    for (var i = 1; i <= 5; i++) {
      out += '<svg width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" fill="' +
        (i <= rating ? "currentColor" : "none") +
        '" stroke="currentColor" stroke-width="1.2"><path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8Z"/></svg>';
    }
    return '<div class="stars"><span class="stars__glyph">' + out + "</span>" +
      (count != null ? '<span class="stars__count">(' + count + ")</span>" : "") + "</div>";
  }

  function defaultSize(p) {
    if (p.sizes.length === 1) return p.sizes[0];
    return p.sizes[Math.floor(p.sizes.length / 2)];
  }

  function productCard(p) {
    var url = "product.html?id=" + encodeURIComponent(p.id);
    return '<article class="product-card reveal">' +
      '<div class="product-card__media">' +
        (p.badge ? '<span class="badge' + (p.badge === "Bestseller" ? "" : " badge--oxblood") + '">' + esc(p.badge) + "</span>" : "") +
        '<a href="' + url + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' — ' + esc(p.material) + '" loading="lazy"></a>' +
      "</div>" +
      '<button type="button" class="wishlist" aria-pressed="false" data-wish="' + esc(p.id) + '" aria-label="Save ' + esc(p.name) + ' to your list">' + ICONS.heart + "</button>" +
      '<div class="product-card__body">' +
        '<h3 class="product-card__name"><a href="' + url + '">' + esc(p.name) + "</a></h3>" +
        '<p class="product-card__material">' + esc(p.material) + "</p>" +
        stars(p.reviews.rating, p.reviews.count) +
        '<p class="product-card__price">' + window.SUREA.money(p.price) +
          (p.compareAt ? '<s class="price-was">' + window.SUREA.money(p.compareAt) + "</s>" : "") + "</p>" +
        '<button type="button" class="btn btn--solid btn--full btn--sm" data-add="' + esc(p.id) + '">Add to bag</button>' +
      "</div>" +
    "</article>";
  }

  function gridInto(selector, list) {
    var host = document.querySelector(selector);
    if (!host) return;
    host.innerHTML = list.map(productCard).join("");
    observe(host.querySelectorAll(".reveal"));
  }

  /* ---------------------------------------------------------------- reveal */
  var seen = new WeakSet();
  function observe(nodes) {
    var io = "IntersectionObserver" in window
      ? new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 })
      : null;

    Array.prototype.forEach.call(nodes || [], function (node) {
      if (seen.has(node)) return;
      seen.add(node);
      if (io) io.observe(node);
      else node.classList.add("is-in");
    });
  }

  /* ---------------------------------------------------------------- search */
  function buildSearch() {
    var trigger = document.querySelector("[data-search-toggle]");
    if (!trigger) return;
    var panel = document.createElement("div");
    panel.className = "search";
    panel.innerHTML =
      '<div class="wrap">' +
        '<form class="search__field" role="search" data-search-form>' +
          '<label class="skip-link" for="site-search">Search the collection</label>' +
          '<input id="site-search" type="search" placeholder="Search the collection…" autocomplete="off">' +
          '<button class="btn btn--sm" type="submit">Search</button>' +
        "</form>" +
        '<ul class="search__results" data-search-results></ul>' +
      "</div>";
    var header = trigger.closest(".site-header");
    header.appendChild(panel);

    var input = panel.querySelector("input");
    var results = panel.querySelector("[data-search-results]");

    function draw() {
      var found = window.SUREA.search(input.value);
      if (!input.value.trim()) { results.innerHTML = ""; return; }
      results.innerHTML = found.length
        ? found.map(function (p) {
            return '<li><a href="product.html?id=' + encodeURIComponent(p.id) + '"><span>' +
              esc(p.name) + ' <em class="muted small">' + esc(p.material) + "</em></span>" +
              '<span class="price">' + window.SUREA.money(p.price) + "</span></a></li>";
          }).join("")
        : '<li class="search__empty">Nothing matched “' + esc(input.value) + '”. Try “tartan”, “velvet” or “travel”.</li>';
    }

    trigger.addEventListener("click", function () {
      panel.classList.toggle("is-open");
      if (panel.classList.contains("is-open")) input.focus();
    });
    input.addEventListener("input", draw);
    panel.querySelector("[data-search-form]").addEventListener("submit", function (e) {
      e.preventDefault();
      var found = window.SUREA.search(input.value);
      if (found.length === 1) window.location.href = "product.html?id=" + encodeURIComponent(found[0].id);
      else window.location.href = "shop.html?q=" + encodeURIComponent(input.value.trim());
    });
  }

  /* ---------------------------------------------------------------- header */
  function buildHeader() {
    var burger = document.querySelector("[data-nav-toggle]");
    var mobile = document.querySelector("[data-mobile-nav]");
    if (burger && mobile) {
      burger.addEventListener("click", function () {
        var open = mobile.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    document.addEventListener("click", function (e) {
      var open = e.target.closest("[data-open-bag]");
      if (open) { e.preventDefault(); window.SUREAcart.open(); }
    });

    function paint(summary) {
      document.querySelectorAll("[data-bag-count]").forEach(function (node) {
        node.textContent = summary.count;
      });
    }
    window.SUREAcart.onChange(paint);
  }

  /* ---------------------------------------------------------------- actions */
  function buildActions() {
    document.addEventListener("click", function (e) {
      var add = e.target.closest("[data-add]");
      if (add) {
        e.preventDefault();
        var p = window.SUREA.byId(add.getAttribute("data-add"));
        if (!p) return;
        var size = p.sizes.length > 1 ? defaultSize(p) : p.sizes[0];
        if (window.SUREAcart.add(p.id, size, 1)) {
          window.SUREAcart.open();
          window.SUREAcart.toast("Added — " + p.name + " in " + size + ". Change the size in your bag.");
        }
        return;
      }

      var wish = e.target.closest("[data-wish]");
      if (wish) {
        var on = wish.getAttribute("aria-pressed") === "true";
        wish.setAttribute("aria-pressed", on ? "false" : "true");
        window.SUREAcart.toast(on ? "Removed from your list" : "Saved to your list");
      }
    });

    document.querySelectorAll("[data-icon]").forEach(function (node) {
      node.innerHTML = ICONS[node.getAttribute("data-icon")] || "";
      node.removeAttribute("data-icon");
    });

    var year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();

    document.querySelectorAll("[data-subscribe]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = form.querySelector("input");
        var note = form.parentNode.querySelector("[data-form-note]");
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
        if (note) {
          note.textContent = ok
            ? "Thank you — you are on the list. (Demo only: nothing was sent.)"
            : "Please enter a valid email address.";
        }
        if (ok) input.value = "";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildSearch();
    buildActions();
    observe(document.querySelectorAll(".reveal"));
  });

  return {
    icon: icon, icons: ICONS, esc: esc, stars: stars,
    productCard: productCard, gridInto: gridInto, observe: observe,
    defaultSize: defaultSize
  };
})();
