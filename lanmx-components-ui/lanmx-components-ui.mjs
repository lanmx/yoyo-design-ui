function kt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const T = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, en = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], dt = () => {
}, tn = /^on[^a-z]/, nn = (e) => tn.test(e), I = Object.assign, rn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sn = Object.prototype.hasOwnProperty, m = (e, t) => sn.call(e, t), h = Array.isArray, H = (e) => Ne(e) === "[object Map]", ht = (e) => Ne(e) === "[object Set]", E = (e) => typeof e == "function", $ = (e) => typeof e == "string", Ae = (e) => typeof e == "symbol", w = (e) => e !== null && typeof e == "object", on = (e) => w(e) && E(e.then) && E(e.catch), _t = Object.prototype.toString, Ne = (e) => _t.call(e), gt = (e) => Ne(e).slice(8, -1), mt = (e) => Ne(e) === "[object Object]", je = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ln = cn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), _e = (e, t) => !Object.is(e, t), un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Qe;
const Ie = () => Qe || (Qe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function be(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = $(s) ? dn(s) : be(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if ($(e))
      return e;
    if (w(e))
      return e;
  }
}
const an = /;(?![^(]*\))/g, fn = /:([^]+)/, pn = /\/\*[^]*?\*\//g;
function dn(e) {
  const t = {};
  return e.replace(pn, "").split(an).forEach((n) => {
    if (n) {
      const s = n.split(fn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Oe(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const s = Oe(e[n]);
      s && (t += s + " ");
    }
  else if (w(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const hn = (e) => $(e) ? e : e == null ? "" : h(e) || w(e) && (e.toString === _t || !E(e.toString)) ? JSON.stringify(e, Et, 2) : String(e), Et = (e, t) => t && t.__v_isRef ? Et(e, t.value) : H(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : ht(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : w(t) && !h(t) && !mt(t) ? String(t) : t;
function Xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let wt;
function _n(e, t = wt) {
  t && t.active && t.effects.push(e);
}
function gn() {
  return wt;
}
const Re = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Nt = (e) => (e.w & j) > 0, bt = (e) => (e.n & j) > 0, mn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= j;
}, En = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Nt(r) && !bt(r) ? r.delete(e) : t[n++] = r, r.w &= ~j, r.n &= ~j;
    }
    t.length = n;
  }
}, $e = /* @__PURE__ */ new WeakMap();
let k = 0, j = 1;
const De = 30;
let O;
const U = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ce = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class wn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, _n(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = O, n = W;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = O, O = this, W = !0, j = 1 << ++k, k <= De ? mn(this) : Ze(this), this.fn();
    } finally {
      k <= De && En(this), j = 1 << --k, O = this.parent, W = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = !0 : this.active && (Ze(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ze(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let W = !0;
const Ot = [];
function St() {
  Ot.push(W), W = !1;
}
function yt() {
  const e = Ot.pop();
  W = e === void 0 ? !0 : e;
}
function y(e, t, n) {
  if (W && O) {
    let s = $e.get(e);
    s || $e.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Re());
    const o = process.env.NODE_ENV !== "production" ? { effect: O, target: e, type: t, key: n } : void 0;
    Nn(r, o);
  }
}
function Nn(e, t) {
  let n = !1;
  k <= De ? bt(e) || (e.n |= j, n = !Nt(e)) : n = !e.has(O), n && (e.add(O), O.deps.push(e), process.env.NODE_ENV !== "production" && O.onTrack && O.onTrack(
    I(
      {
        effect: O
      },
      t
    )
  ));
}
function z(e, t, n, s, r, o) {
  const i = $e.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(s);
    i.forEach((d, l) => {
      (l === "length" || l >= a) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? je(n) && c.push(i.get("length")) : (c.push(i.get(U)), H(e) && c.push(i.get(Ce)));
        break;
      case "delete":
        h(e) || (c.push(i.get(U)), H(e) && c.push(i.get(Ce)));
        break;
      case "set":
        H(e) && c.push(i.get(U));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: r, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? oe(c[0], u) : oe(c[0]));
  else {
    const a = [];
    for (const d of c)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? oe(Re(a), u) : oe(Re(a));
  }
}
function oe(e, t) {
  const n = h(e) ? e : [...e];
  for (const s of n)
    s.computed && ke(s, t);
  for (const s of n)
    s.computed || ke(s, t);
}
function ke(e, t) {
  (e !== O || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(I({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const bn = /* @__PURE__ */ kt("__proto__,__v_isRef,__isVue"), Vt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ae)
), On = /* @__PURE__ */ ze(), Sn = /* @__PURE__ */ ze(!0), yn = /* @__PURE__ */ ze(!0, !0), et = /* @__PURE__ */ Vn();
function Vn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        y(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      St();
      const s = p(this)[t].apply(this, n);
      return yt(), s;
    };
  }), e;
}
function xn(e) {
  const t = p(this);
  return y(t, "has", e), t.hasOwnProperty(e);
}
function ze(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? Dt : $t : t ? Un : Rt).get(s))
      return s;
    const i = h(s);
    if (!e) {
      if (i && m(et, r))
        return Reflect.get(et, r, o);
      if (r === "hasOwnProperty")
        return xn;
    }
    const c = Reflect.get(s, r, o);
    return (Ae(r) ? Vt.has(r) : bn(r)) || (e || y(s, "get", r), t) ? c : S(c) ? i && je(r) ? c : c.value : w(c) ? e ? vt(c) : Ct(c) : c;
  };
}
const In = /* @__PURE__ */ Rn();
function Rn(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (G(i) && S(i) && !S(r))
      return !1;
    if (!e && (!ve(r) && !G(r) && (i = p(i), r = p(r)), !h(n) && S(i) && !S(r)))
      return i.value = r, !0;
    const c = h(n) && je(s) ? Number(s) < n.length : m(n, s), u = Reflect.set(n, s, r, o);
    return n === p(o) && (c ? _e(r, i) && z(n, "set", s, r, i) : z(n, "add", s, r)), u;
  };
}
function $n(e, t) {
  const n = m(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && z(e, "delete", t, void 0, s), r;
}
function Dn(e, t) {
  const n = Reflect.has(e, t);
  return (!Ae(t) || !Vt.has(t)) && y(e, "has", t), n;
}
function Cn(e) {
  return y(e, "iterate", h(e) ? "length" : U), Reflect.ownKeys(e);
}
const vn = {
  get: On,
  set: In,
  deleteProperty: $n,
  has: Dn,
  ownKeys: Cn
}, xt = {
  get: Sn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Xe(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Xe(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Tn = /* @__PURE__ */ I(
  {},
  xt,
  {
    get: yn
  }
), Ke = (e) => e, Se = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = p(e), o = p(t);
  n || (t !== o && y(r, "get", t), y(r, "get", o));
  const { has: i } = Se(r), c = s ? Ke : n ? Be : We;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, s = p(n), r = p(e);
  return t || (e !== r && y(s, "has", e), y(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && y(p(e), "iterate", U), Reflect.get(e, "size", e);
}
function tt(e) {
  e = p(e);
  const t = p(this);
  return Se(t).has.call(t, e) || (t.add(e), z(t, "add", e, e)), this;
}
function nt(e, t) {
  t = p(t);
  const n = p(this), { has: s, get: r } = Se(n);
  let o = s.call(n, e);
  o ? process.env.NODE_ENV !== "production" && It(n, s, e) : (e = p(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? _e(t, i) && z(n, "set", e, t, i) : z(n, "add", e, t), this;
}
function rt(e) {
  const t = p(this), { has: n, get: s } = Se(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && It(t, n, e) : (e = p(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && z(t, "delete", e, void 0, o), i;
}
function st() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? H(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && z(e, "clear", void 0, void 0, n), s;
}
function ue(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = p(i), u = t ? Ke : e ? Be : We;
    return !e && y(c, "iterate", U), i.forEach((a, d) => s.call(r, u(a), u(d), o));
  };
}
function ae(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = p(r), i = H(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), d = n ? Ke : t ? Be : We;
    return !t && y(
      o,
      "iterate",
      u ? Ce : U
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
        return f ? { value: l, done: f } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function P(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ln(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Pn() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: tt,
    set: nt,
    delete: rt,
    clear: st,
    forEach: ue(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: tt,
    set: nt,
    delete: rt,
    clear: st,
    forEach: ue(!1, !0)
  }, n = {
    get(o) {
      return ie(this, o, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: ue(!0, !1)
  }, s = {
    get(o) {
      return ie(this, o, !0, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: ue(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ae(
      o,
      !1,
      !1
    ), n[o] = ae(
      o,
      !0,
      !1
    ), t[o] = ae(
      o,
      !1,
      !0
    ), s[o] = ae(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Mn,
  Fn,
  An,
  jn
] = /* @__PURE__ */ Pn();
function He(e, t) {
  const n = t ? e ? jn : An : e ? Fn : Mn;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    m(n, r) && r in s ? n : s,
    r,
    o
  );
}
const zn = {
  get: /* @__PURE__ */ He(!1, !1)
}, Kn = {
  get: /* @__PURE__ */ He(!0, !1)
}, Hn = {
  get: /* @__PURE__ */ He(!0, !0)
};
function It(e, t, n) {
  const s = p(n);
  if (s !== n && t.call(e, s)) {
    const r = gt(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rt = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap();
function Wn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Bn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Wn(gt(e));
}
function Ct(e) {
  return G(e) ? e : Ue(
    e,
    !1,
    vn,
    zn,
    Rt
  );
}
function vt(e) {
  return Ue(
    e,
    !0,
    xt,
    Kn,
    $t
  );
}
function fe(e) {
  return Ue(
    e,
    !0,
    Tn,
    Hn,
    Dt
  );
}
function Ue(e, t, n, s, r) {
  if (!w(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Bn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function B(e) {
  return G(e) ? B(e.__v_raw) : !!(e && e.__v_isReactive);
}
function G(e) {
  return !!(e && e.__v_isReadonly);
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function Te(e) {
  return B(e) || G(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Jn(e) {
  return un(e, "__v_skip", !0), e;
}
const We = (e) => w(e) ? Ct(e) : e, Be = (e) => w(e) ? vt(e) : e;
function S(e) {
  return !!(e && e.__v_isRef === !0);
}
function qn(e) {
  return S(e) ? e.value : e;
}
const Gn = {
  get: (e, t, n) => qn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return S(r) && !S(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ln(e) {
  return B(e) ? e : new Proxy(e, Gn);
}
const J = [];
function Yn(e) {
  J.push(e);
}
function Qn() {
  J.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  St();
  const n = J.length ? J[J.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Xn();
  if (s)
    q(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Yt(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Zn(r)), console.warn(...o);
  }
  yt();
}
function Xn() {
  let e = J[J.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Zn(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...kn(n));
  }), t;
}
function kn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Yt(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...er(e.props), o] : [r + o];
}
function er(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Tt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Tt(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = Tt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : E(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Pt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function q(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Mt(o, t, n);
  }
  return r;
}
function Pe(e, t, n, s) {
  if (E(e)) {
    const o = q(e, t, n, s);
    return o && on(o) && o.catch((i) => {
      Mt(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Pe(e[o], t, n, s));
  return r;
}
function Mt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Pt[n] : n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      q(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  tr(e, n, r, s);
}
function tr(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Pt[t];
    if (n && Yn(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Qn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ge = !1, Me = !1;
const D = [];
let F = 0;
const Q = [];
let v = null, M = 0;
const Ft = /* @__PURE__ */ Promise.resolve();
let Je = null;
const nr = 100;
function rr(e) {
  const t = Je || Ft;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sr(e) {
  let t = F + 1, n = D.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    re(D[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function qe(e) {
  (!D.length || !D.includes(
    e,
    ge && e.allowRecurse ? F + 1 : F
  )) && (e.id == null ? D.push(e) : D.splice(sr(e.id), 0, e), At());
}
function At() {
  !ge && !Me && (Me = !0, Je = Ft.then(zt));
}
function jt(e) {
  h(e) ? Q.push(...e) : (!v || !v.includes(
    e,
    e.allowRecurse ? M + 1 : M
  )) && Q.push(e), At();
}
function or(e) {
  if (Q.length) {
    const t = [...new Set(Q)];
    if (Q.length = 0, v) {
      v.push(...t);
      return;
    }
    for (v = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), v.sort((n, s) => re(n) - re(s)), M = 0; M < v.length; M++)
      process.env.NODE_ENV !== "production" && Kt(e, v[M]) || v[M]();
    v = null, M = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, ir = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zt(e) {
  Me = !1, ge = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort(ir);
  const t = process.env.NODE_ENV !== "production" ? (n) => Kt(e, n) : dt;
  try {
    for (F = 0; F < D.length; F++) {
      const n = D[F];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    F = 0, D.length = 0, or(e), ge = !1, Je = null, (D.length || Q.length) && zt(e);
  }
}
function Kt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > nr) {
      const s = t.ownerInstance, r = s && Lt(s.type);
      return b(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Z = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ie().__VUE_HMR_RUNTIME__ = {
  createRecord: ye(cr),
  rerender: ye(lr),
  reload: ye(ur)
});
const me = /* @__PURE__ */ new Map();
function cr(e, t) {
  return me.has(e) ? !1 : (me.set(e, {
    initialDef: te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function te(e) {
  return Qt(e) ? e.__vccOpts : e;
}
function lr(e, t) {
  const n = me.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, te(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function ur(e, t) {
  const n = me.get(e);
  if (!n)
    return;
  t = te(t), ot(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = te(r.type);
    Z.has(o) || (o !== n.initialDef && ot(o, t), Z.add(o)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Z.add(o), r.ceReload(t.styles), Z.delete(o)) : r.parent ? qe(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  jt(() => {
    for (const r of s)
      Z.delete(
        te(r.type)
      );
  });
}
function ot(e, t) {
  I(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ye(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let A = null, ar = null;
const fr = (e) => e.__isSuspense;
function pr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : jt(e);
}
const pe = {};
function dr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = T) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (g) => {
    b(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = gn() === ((c = X) == null ? void 0 : c.scope) ? X : null;
  let d, l = !1, f = !1;
  if (S(e) ? (d = () => e.value, l = ve(e)) : B(e) ? (d = () => e, s = !0) : h(e) ? (f = !0, l = e.some((g) => B(g) || ve(g)), d = () => e.map((g) => {
    if (S(g))
      return g.value;
    if (B(g))
      return Y(g);
    if (E(g))
      return q(g, a, 2);
    process.env.NODE_ENV !== "production" && u(g);
  })) : E(e) ? t ? d = () => q(e, a, 2) : d = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), Pe(
        e,
        a,
        3,
        [V]
      );
  } : (d = dt, process.env.NODE_ENV !== "production" && u(e)), t && s) {
    const g = d;
    d = () => Y(g());
  }
  let _, V = (g) => {
    _ = R.onStop = () => {
      q(g, a, 4);
    };
  }, x = f ? new Array(e.length).fill(pe) : pe;
  const K = () => {
    if (R.active)
      if (t) {
        const g = R.run();
        (s || l || (f ? g.some(
          (Xt, Zt) => _e(Xt, x[Zt])
        ) : _e(g, x))) && (_ && _(), Pe(t, a, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          x === pe ? void 0 : f && x[0] === pe ? [] : x,
          V
        ]), x = g);
      } else
        R.run();
  };
  K.allowRecurse = !!t;
  let se;
  r === "sync" ? se = K : r === "post" ? se = () => at(K, a && a.suspense) : (K.pre = !0, a && (K.id = a.uid), se = () => qe(K));
  const R = new wn(d, se);
  return process.env.NODE_ENV !== "production" && (R.onTrack = o, R.onTrigger = i), t ? n ? K() : x = R.run() : r === "post" ? at(
    R.run.bind(R),
    a && a.suspense
  ) : R.run(), () => {
    R.stop(), a && a.scope && rn(a.scope.effects, R);
  };
}
function hr(e, t, n) {
  const s = this.proxy, r = $(e) ? e.includes(".") ? _r(s, e) : () => s[e] : e.bind(s, s);
  let o;
  E(t) ? o = t : (o = t.handler, n = t);
  const i = X;
  pt(this);
  const c = dr(r, o.bind(s), n);
  return i ? pt(i) : Mr(), c;
}
function _r(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Y(e, t) {
  if (!w(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    Y(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      Y(e[n], t);
  else if (ht(e) || H(e))
    e.forEach((n) => {
      Y(n, t);
    });
  else if (mt(e))
    for (const n in e)
      Y(e[n], t);
  return e;
}
function gr(e, t) {
  return E(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => I({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const mr = Symbol.for("v-ndc"), Fe = (e) => e ? Fr(e) ? Ar(e) || e.proxy : Fe(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ I(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? fe(e.refs) : e.refs,
    $parent: (e) => Fe(e.parent),
    $root: (e) => Fe(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Nr(e),
    $forceUpdate: (e) => e.f || (e.f = () => qe(e.update)),
    $nextTick: (e) => e.n || (e.n = rr.bind(e.proxy)),
    $watch: (e) => hr.bind(e)
  })
), Er = (e) => e === "_" || e === "$", Ve = (e, t) => e !== T && !e.__isScriptSetup && m(e, t), wr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ve(s, t))
          return i[t] = 1, s[t];
        if (r !== T && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && m(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== T && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = ne[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (y(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && y(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== T && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, m(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && A && (!$(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== T && Er(t[0]) && m(r, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === A && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Ve(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== T && m(s, t) ? (s[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== T && m(e, i) || Ve(t, i) || (c = o[0]) && m(c, i) || m(s, i) || m(ne, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (wr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function it(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Nr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (a) => Ee(u, a, i, !0)
  ), Ee(u, t, i)), w(t) && o.set(t, u), u;
}
function Ee(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Ee(e, o, n, !0), r && r.forEach(
    (i) => Ee(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = br[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const br = {
  data: ct,
  props: ut,
  emits: ut,
  // objects
  methods: ee,
  computed: ee,
  // lifecycle
  beforeCreate: N,
  created: N,
  beforeMount: N,
  mounted: N,
  beforeUpdate: N,
  updated: N,
  beforeDestroy: N,
  beforeUnmount: N,
  destroyed: N,
  unmounted: N,
  activated: N,
  deactivated: N,
  errorCaptured: N,
  serverPrefetch: N,
  // assets
  components: ee,
  directives: ee,
  // watch
  watch: Sr,
  // provide / inject
  provide: ct,
  inject: Or
};
function ct(e, t) {
  return t ? e ? function() {
    return I(
      E(e) ? e.call(this, this) : e,
      E(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Or(e, t) {
  return ee(lt(e), lt(t));
}
function lt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function N(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ee(e, t) {
  return e ? I(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ut(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : I(
    /* @__PURE__ */ Object.create(null),
    it(e),
    it(t ?? {})
  ) : t;
}
function Sr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = I(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = N(e[s], t[s]);
  return n;
}
const at = pr, yr = (e) => e.__isTeleport, Ht = Symbol.for("v-fgt"), Vr = Symbol.for("v-txt"), xr = Symbol.for("v-cmt"), de = [];
let C = null;
function Ut(e = !1) {
  de.push(C = e ? null : []);
}
function Ir() {
  de.pop(), C = de[de.length - 1] || null;
}
function Rr(e) {
  return e.dynamicChildren = C || en, Ir(), C && C.push(e), e;
}
function Wt(e, t, n, s, r, o) {
  return Rr(
    Ge(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
      /* isBlock */
    )
  );
}
function $r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Dr = (...e) => qt(
  ...e
), Bt = "__vInternal", Jt = ({ key: e }) => e ?? null, he = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || S(e) || E(e) ? { i: A, r: e, k: t, f: !!n } : e : null);
function Ge(e, t = null, n = null, s = 0, r = null, o = e === Ht ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jt(t),
    ref: t && he(t),
    scopeId: ar,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: A
  };
  return c ? (Le(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= $(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && b("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  C && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && C.push(u), u;
}
const Cr = process.env.NODE_ENV !== "production" ? Dr : qt;
function qt(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === mr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = xr), $r(e)) {
    const c = we(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Le(c, n), !o && C && (c.shapeFlag & 6 ? C[C.indexOf(e)] = c : C.push(c)), c.patchFlag |= -2, c;
  }
  if (Qt(e) && (e = e.__vccOpts), t) {
    t = vr(t);
    let { class: c, style: u } = t;
    c && !$(c) && (t.class = Oe(c)), w(u) && (Te(u) && !h(u) && (u = I({}, u)), t.style = be(u));
  }
  const i = $(e) ? 1 : fr(e) ? 128 : yr(e) ? 64 : w(e) ? 4 : E(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Te(e) && (e = p(e), b(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ge(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function vr(e) {
  return e ? Te(e) || Bt in e ? I({}, e) : e : null;
}
function we(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? Pr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Jt(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(he(t)) : [r, he(t)] : he(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && h(i) ? i.map(Gt) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ht ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && we(e.ssContent),
    ssFallback: e.ssFallback && we(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Gt(e) {
  const t = we(e);
  return h(e.children) && (t.children = e.children.map(Gt)), t;
}
function Tr(e = " ", t = 0) {
  return Cr(Vr, null, e, t);
}
function Le(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Le(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Bt in t) ? t._ctx = A : r === 3 && A && (A.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    E(t) ? (t = { default: t, _ctx: A }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Tr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Oe([t.class, s.class]));
      else if (r === "style")
        t.style = be([t.style, s.style]);
      else if (nn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(h(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
let X = null, Ye, L, ft = "__VUE_INSTANCE_SETTERS__";
(L = Ie()[ft]) || (L = Ie()[ft] = []), L.push((e) => X = e), Ye = (e) => {
  L.length > 1 ? L.forEach((t) => t(e)) : L[0](e);
};
const pt = (e) => {
  Ye(e), e.scope.on();
}, Mr = () => {
  X && X.scope.off(), Ye(null);
};
function Fr(e) {
  return e.vnode.shapeFlag & 4;
}
function Ar(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ln(Jn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ne)
          return ne[n](e);
      },
      has(t, n) {
        return n in t || n in ne;
      }
    }));
}
const jr = /(?:^|[-_])(\w)/g, zr = (e) => e.replace(jr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Lt(e, t = !0) {
  return E(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yt(e, t, n = !1) {
  let s = Lt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? zr(s) : n ? "App" : "Anonymous";
}
function Qt(e) {
  return E(e) && "__vccOpts" in e;
}
function xe(e) {
  return !!(e && e.__v_isShallow);
}
function Kr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, r = {
    header(l) {
      return w(l) ? l.__isVue ? ["div", e, "VueInstance"] : S(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : B(l) ? [
        "div",
        {},
        ["span", e, xe(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${G(l) ? " (readonly)" : ""}`
      ] : G(l) ? [
        "div",
        {},
        ["span", e, xe(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== T && f.push(i("setup", l.setupState)), l.data !== T && f.push(i("data", p(l.data)));
    const _ = u(l, "computed");
    _ && f.push(i("computed", _));
    const V = u(l, "inject");
    return V && f.push(i("injected", V)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = I({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", s, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : w(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const _ = l.type;
    if (E(_))
      return;
    const V = {};
    for (const x in l.ctx)
      a(_, x, f) && (V[x] = l.ctx[x]);
    return V;
  }
  function a(l, f, _) {
    const V = l[_];
    if (h(V) && V.includes(f) || w(V) && f in V || l.extends && a(l.extends, f, _) || l.mixins && l.mixins.some((x) => a(x, f, _)))
      return !0;
  }
  function d(l) {
    return xe(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function Hr() {
  Kr();
}
process.env.NODE_ENV !== "production" && Hr();
const Ur = /* @__PURE__ */ gr({
  name: "xButton",
  __name: "index",
  props: {
    type: {},
    text: {},
    color: {},
    size: {},
    round: { type: Boolean },
    dashed: { type: Boolean },
    solid: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (Ut(), Wt("button", {
      class: Oe(["btn", {
        // type颜色类型
        default: !t.type,
        primary: t.type === "primary",
        success: t.type === "success",
        warn: t.type === "warn",
        danger: t.type === "danger",
        // 边框类型
        dashed: t.dashed,
        solid: t.solid,
        // 按钮大小
        small: t.size === "small",
        larger: t.size === "larger",
        // 圆角
        round: t.round
      }]),
      style: be({ backgroundColor: t.color })
    }, hn(t.text), 7));
  }
});
const Wr = {
  name: "xSelector"
}, Br = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Jr = /* @__PURE__ */ Ge("input", { type: "text" }, null, -1), qr = [
  Jr
];
function Gr(e, t, n, s, r, o) {
  return Ut(), Wt("div", null, qr);
}
const Lr = /* @__PURE__ */ Br(Wr, [["render", Gr]]), Yr = [Ur, Lr], Xr = function(e) {
  Yr.forEach((t) => {
    console.log(t, t.name, "---注册"), e.component(t.name, t);
  });
};
export {
  Xr as default
};
