/* SUREA — shopping bag.
   State lives in localStorage; the drawer is injected once per page so the
   markup never drifts between pages. */
window.SUREAcart = (function () {
  var KEY = "surea.bag.v1";
  var listeners = [];
  var el = {};

  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      var list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) return [];
      return list.filter(function (line) {
        return line && window.SUREA.byId(line.id) && line.qty > 0;
      });
    } catch (err) {
      return [];
    }
  }

  function write(list) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(list));
    } catch (err) {
      /* private mode — the bag simply will not persist across reloads */
    }
    render();
    emit();
  }

  function emit() {
    for (var i = 0; i < listeners.length; i++) listeners[i](api.summary());
  }

  function onChange(fn) {
    listeners.push(fn);
    fn(api.summary());
  }

  function keyFor(id, size) {
    return id + "::" + (size || "");
  }

  function add(id, size, qty) {
    var product = window.SUREA.byId(id);
    if (!product) return false;
    var chosen = size || (product.sizes.length === 1 ? product.sizes[0] : "");
    if (product.sizes.length > 1 && !chosen) return false;

    var list = read();
    var found = null;
    for (var i = 0; i < list.length; i++) {
      if (keyFor(list[i].id, list[i].size) === keyFor(id, chosen)) found = list[i];
    }
    if (found) found.qty = Math.min(10, found.qty + (qty || 1));
    else list.push({ id: id, size: chosen, qty: qty || 1 });
    write(list);
    return true;
  }

  function setQty(id, size, qty) {
    var list = read().map(function (line) {
      if (keyFor(line.id, line.size) === keyFor(id, size)) {
        line.qty = Math.max(0, Math.min(10, qty));
      }
      return line;
    }).filter(function (line) { return line.qty > 0; });
    write(list);
  }

  function remove(id, size) {
    write(read().filter(function (line) {
      return keyFor(line.id, line.size) !== keyFor(id, size);
    }));
  }

  function changeSize(id, fromSize, toSize) {
    if (!toSize || fromSize === toSize) return;
    var list = read();
    var target = null;
    var clash = null;
    list.forEach(function (line) {
      if (line.id === id && line.size === fromSize) target = line;
      if (line.id === id && line.size === toSize) clash = line;
    });
    if (!target) return;
    if (clash) {
      clash.qty = Math.min(10, clash.qty + target.qty);
      list = list.filter(function (line) { return line !== target; });
    } else {
      target.size = toSize;
    }
    write(list);
  }

  function clear() { write([]); }

  function lines() {
    return read().map(function (line) {
      var p = window.SUREA.byId(line.id);
      return {
        id: p.id,
        size: line.size,
        qty: line.qty,
        name: p.name,
        material: p.material,
        sizes: p.sizes,
        image: p.image,
        price: p.price,
        total: p.price * line.qty,
        url: "product.html?id=" + encodeURIComponent(p.id)
      };
    });
  }

  function summary() {
    var list = lines();
    var subtotal = list.reduce(function (sum, l) { return sum + l.total; }, 0);
    var count = list.reduce(function (sum, l) { return sum + l.qty; }, 0);
    return {
      lines: list,
      count: count,
      subtotal: subtotal,
      freeShippingAt: window.SUREA.freeShipping,
      remaining: Math.max(0, window.SUREA.freeShipping - subtotal),
      qualifies: subtotal >= window.SUREA.freeShipping && subtotal > 0
    };
  }

  /* ------------------------------------------------------------------ drawer */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function build() {
    if (el.root) return;
    var host = document.createElement("div");
    host.innerHTML =
      '<div class="scrim" data-bag-scrim hidden></div>' +
      '<aside class="bag" role="dialog" aria-modal="true" aria-label="Shopping bag" aria-hidden="true" data-bag>' +
        '<div class="bag__head">' +
          '<h2 class="bag__title">Your Bag</h2>' +
          '<button type="button" class="bag__close" data-bag-close>Close</button>' +
        '</div>' +
        '<div class="bag__body" data-bag-body></div>' +
        '<div class="bag__foot" data-bag-foot></div>' +
      '</aside>' +
      '<div class="toast" role="status" aria-live="polite" data-toast></div>';
    while (host.firstChild) document.body.appendChild(host.firstChild);

    el.scrim = document.querySelector("[data-bag-scrim]");
    el.root = document.querySelector("[data-bag]");
    el.body = document.querySelector("[data-bag-body]");
    el.foot = document.querySelector("[data-bag-foot]");
    el.toast = document.querySelector("[data-toast]");

    el.scrim.addEventListener("click", close);
    document.querySelector("[data-bag-close]").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    el.body.addEventListener("change", function (e) {
      var pick = e.target.closest('select[data-line-action="size"]');
      if (!pick) return;
      changeSize(pick.getAttribute("data-id"), pick.getAttribute("data-size"), pick.value);
    });

    el.body.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-line-action]");
      if (!btn) return;
      var id = btn.getAttribute("data-id");
      var size = btn.getAttribute("data-size");
      var line = read().filter(function (l) { return keyFor(l.id, l.size) === keyFor(id, size); })[0];
      if (!line) return;
      var action = btn.getAttribute("data-line-action");
      if (action === "inc") setQty(id, size, line.qty + 1);
      if (action === "dec") setQty(id, size, line.qty - 1);
      if (action === "remove") remove(id, size);
    });
  }

  function open() {
    build();
    render();
    el.scrim.hidden = false;
    requestAnimationFrame(function () {
      el.scrim.classList.add("is-open");
      el.root.classList.add("is-open");
    });
    el.root.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    document.querySelector("[data-bag-close]").focus();
  }

  function close() {
    if (!el.root) return;
    el.scrim.classList.remove("is-open");
    el.root.classList.remove("is-open");
    el.root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    setTimeout(function () { el.scrim.hidden = true; }, 380);
  }

  function render() {
    build();
    var s = summary();

    if (!s.lines.length) {
      el.body.innerHTML =
        '<div class="bag__empty">' +
          '<p>Your bag is empty — the collection is worth a look.</p>' +
          '<a class="btn btn--solid" href="shop.html">Shop the collection</a>' +
        '</div>';
      el.foot.innerHTML = "";
      return;
    }

    el.body.innerHTML = s.lines.map(function (l) {
      return '<article class="bag-item">' +
        '<div class="bag-item__media"><img src="' + esc(l.image) + '" alt="' + esc(l.name) + '" loading="lazy"></div>' +
        '<div>' +
          '<h3 class="bag-item__name"><a href="' + esc(l.url) + '">' + esc(l.name) + '</a></h3>' +
          '<p class="bag-item__meta">' + esc(l.material) + "</p>" +
          (l.sizes.length > 1
            ? '<label class="bag-item__meta">Size' +
                '<select class="size-pick" data-line-action="size" data-id="' + esc(l.id) + '" data-size="' + esc(l.size) + '" aria-label="Choose size for ' + esc(l.name) + '">' +
                  l.sizes.map(function (s) {
                    return '<option value="' + esc(s) + '"' + (s === l.size ? " selected" : "") + ">" + esc(s) + "</option>";
                  }).join("") +
                "</select></label>"
            : "") +
          '<div class="bag-item__row">' +
            '<span class="qty">' +
              '<button type="button" aria-label="Decrease quantity" data-line-action="dec" data-id="' + esc(l.id) + '" data-size="' + esc(l.size) + '">&minus;</button>' +
              '<span>' + l.qty + '</span>' +
              '<button type="button" aria-label="Increase quantity" data-line-action="inc" data-id="' + esc(l.id) + '" data-size="' + esc(l.size) + '">+</button>' +
            '</span>' +
            '<span class="bag-item__price">' + window.SUREA.money(l.total) + '</span>' +
          '</div>' +
          '<div class="bag-item__row">' +
            '<button type="button" class="bag-item__remove" data-line-action="remove" data-id="' + esc(l.id) + '" data-size="' + esc(l.size) + '">Remove</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");

    var pct = Math.min(100, Math.round((s.subtotal / s.freeShippingAt) * 100));
    el.foot.innerHTML =
      '<p class="ship-meter">' + (s.qualifies
        ? 'Complimentary shipping unlocked'
        : window.SUREA.money(s.remaining) + ' away from complimentary shipping') + '</p>' +
      '<div class="meter"><div class="meter__fill" style="width:' + pct + '%"></div></div>' +
      '<div class="bag__total"><span>Subtotal</span><span>' + window.SUREA.money(s.subtotal) + '</span></div>' +
      '<a class="btn btn--solid btn--full" href="checkout.html">Checkout</a>';
  }

  function toast(message) {
    build();
    el.toast.textContent = message;
    el.toast.classList.add("is-show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.toast.classList.remove("is-show"); }, 2600);
  }

  var api = {
    add: add, remove: remove, setQty: setQty, changeSize: changeSize, clear: clear,
    lines: lines, summary: summary, onChange: onChange,
    open: open, close: close, render: render, toast: toast
  };
  return api;
})();
