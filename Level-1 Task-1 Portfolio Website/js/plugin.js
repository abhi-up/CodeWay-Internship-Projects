!(function (e, t) {
  "use strict"
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document")
            return t(e)
          })
    : t(e)
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict"
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e)
        }
      : function (e) {
          return oe.concat.apply([], e)
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      )
    },
    y = function (e) {
      return null != e && e === e.window
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 }
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script")
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i)
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e
  }
  var t = "3.7.0",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t)
    }
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e)
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    )
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  ;(ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this)
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e]
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e)
        return (t.prevObject = this), t
      },
      each: function (e) {
        return ce.each(this, e)
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2
          })
        )
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2
          })
        )
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0)
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r))
        return a
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        )
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n)
      },
      each: function (e, t) {
        var n,
          r = 0
        if (c(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
        return e
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType
        if (i) {
          if (1 === i || 9 === i || 11 === i) return e.textContent
          if (3 === i || 4 === i) return e.nodeValue
        } else while ((t = e[r++])) n += ce.text(t)
        return n
      },
      makeArray: function (e, t) {
        var n = t || []
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        )
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n)
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement
        return !l.test(t || (n && n.nodeName) || "HTML")
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i])
        return r
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = []
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i)
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
        return g(a)
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
      }
    )
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g")
  ce.contains = function (e, t) {
    var n = t && t.parentNode
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    )
  }
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p)
  }
  var ye = C,
    me = s
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        )
      },
      R = function () {
        V()
      },
      M = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset")
        },
        { dir: "parentNode", next: "legend" }
      )
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t))
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1))
        },
      }
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n
              if (a.id === i) return k.call(n, a), n
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ;((f = (H.test(t) && z(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length)
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o])
            c = l.join(",")
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            h(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r)
    }
    function W() {
      var r = []
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        )
      }
    }
    function F(e) {
      return (e[S] = !0), e
    }
    function $(e) {
      var t = T.createElement("fieldset")
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t
      }
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t
      }
    }
    function X(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && M(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t
      }
    }
    function U(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
          })
        )
      })
    }
    function z(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", R),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            )
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*")
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope")
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1
            } catch (e) {
              return !0
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P)
                return function (e) {
                  return e.getAttribute("id") === t
                }
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e)
                  return n ? [n] : []
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P)
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id")
                  return t && t.value === n
                }
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e)
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o]
                    ;(i = t.getElementsByName(e)), (r = 0)
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o]
                  }
                  return []
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e)
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e)
          }),
          (d = []),
          $(function (e) {
            var t
            ;(r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            )
          })),
        T
      )
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t)
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t)
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n
        } catch (e) {
          h(t, !0)
        }
      return 0 < I(t, T, null, [e]).length
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
    }),
    (I.attr = function (e, t) {
      ;(e.ownerDocument || e) != T && V(e)
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0
      return void 0 !== r ? r : e.getAttribute(t)
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i))
        while (r--) he.call(e, n[r], 1)
      }
      return (o = null), e
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)))
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            )
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2]
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3))
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase()
            return "*" === e
              ? function () {
                  return !0
                }
              : function (e) {
                  return fe(e, t)
                }
          },
          CLASS: function (e) {
            var t = s[e + " "]
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  )
                }))
            )
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n)
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1
                        s = u = "only" === d && !s && "nextSibling"
                      }
                      return !0
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      ;(p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a])
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p]
                          break
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h)
                  }
                }
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e)
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i])
                    })
                  : function (e) {
                      return a(e, 0, t)
                    })
              : a
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"))
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                }
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length
            }
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t)
              }
            )
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    )
                } while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === r
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            )
          },
          enabled: X(!1),
          disabled: X(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            )
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return q.test(e.nodeName)
          },
          input: function (e) {
            return N.test(e.nodeName)
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button")
          },
          text: function (e) {
            var t
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            )
          },
          first: U(function () {
            return [0]
          }),
          last: U(function (e, t) {
            return [t - 1]
          }),
          eq: U(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: U(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n)
            return e
          }),
          odd: U(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n)
            return e
          }),
          lt: U(function (e, t, n) {
            var r
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r)
            return e
          }),
          gt: U(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
            return e
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e)
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e)
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "]
      if (l) return t ? 0 : l.slice(0)
      ;(a = e), (s = []), (u = b.preFilter)
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)))
        if (!n) break
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value
      return r
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n)
            return !1
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f]
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2])
                    if (((i[l] = o)[2] = a(e, t, n))) return !0
                  }
            return !1
          }
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length
            while (r--) if (!i[r](e, t, n)) return !1
            return !0
          }
        : i[0]
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
      return a
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n)
                return n
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r)
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            ;(i = Z(s, l)), v(i, [], n, r), (o = i.length)
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
          }
          if (e) {
            if (y || d) {
              if (y) {
                ;(i = []), (o = s.length)
                while (o--) (a = s[o]) && i.push((p[o] = a))
                y(null, (s = []), i, r)
              }
              o = s.length
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a))
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s)
        })
      )
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e)
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n))
              return (i = null), r
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)]
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            )
          }
          c.push(t)
        }
      return K(c)
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "]
      if (!a) {
        t || (t = Y(e)), (n = t.length)
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a)
        ;(a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                ;(a = 0), t || o.ownerDocument == T || (V(o), (n = !C))
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o)
                    break
                  }
                i && (E = h)
              }
              m && ((o = !s && o) && u--, e && c.push(o))
            }
            if (((u += l), m && l !== u)) {
              a = 0
              while ((s = y[a++])) s(c, f, t, n)
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r))
                f = Z(f)
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
            }
            return i && ((E = h), (w = p)), c
          }),
          m ? F(r) : r)
        )).selector = e
      }
      return a
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e))
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
        }
        i = D.needsContext.test(e) ? 0 : o.length
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && z(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n
            break
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && z(t.parentNode)) || t),
        n
      )
    }
    ;(G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort)
  })()
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break
          r.push(e)
        }
      return r
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e)
      return n
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r
        })
      : ce.filter(n, e, r)
  }
  ;(ce.filter = function (e, t, n) {
    var r = t[0]
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n)
        return 1 < r ? ce.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0))
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length
      },
    })
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((ce.fn.init = function (e, t, n) {
    var r, i
    if (!e) return this
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
        return this
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      )
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this)
  }).prototype = ce.fn),
    (k = ce(C))
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 }
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e)
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n)
              break
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return d(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n)
        },
        next: function (e) {
          return A(e, "nextSibling")
        },
        prev: function (e) {
          return A(e, "previousSibling")
        },
        nextAll: function (e) {
          return d(e, "nextSibling")
        },
        prevAll: function (e) {
          return d(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n)
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return h(e.firstChild)
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes))
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e)
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          )
        }
      }
    )
  var D = /[^\x20\t\r\n\f]+/g
  function N(e) {
    return e
  }
  function q(e) {
    throw e
  }
  function L(e, t, n, r) {
    var i
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ;(ce.Callbacks = function (r) {
    var e, n
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : ce.extend({}, r)
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift()
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1))
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "")
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t)
                })
              })(arguments),
              t && !i && c()),
            this
          )
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--
            }),
            this
          )
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          )
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        },
      }
    return f
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i
            },
            always: function () {
              return s.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return a.then(null, e)
            },
            pipe: function () {
              var i = arguments
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]]
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments)
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments)
                    })
                  }),
                    (i = null)
                })
                .promise()
            },
            then: function (t, n, r) {
              var u = 0
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution")
                        ;(t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e()
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r))
                          }
                        }
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t))
                }
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q))
                })
                .promise()
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a
            },
          },
          s = {}
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5]
            ;(a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                )
              }),
              (s[t[0] + "With"] = n.fireWith)
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        )
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              ;(r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i)
            }
          }
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then()
        while (t--) L(i[t], a(t), o.reject)
        return o.promise()
      },
    })
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e
      })
    })
  var O = ce.Deferred()
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready()
  }
  ;(ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e)
      }),
      this
    )
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce])
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P))
  var R = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n
      if ("object" === x(n)) for (s in ((i = !0), n)) R(e, t, s, n[s], !0, o, a)
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n)
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    M = /^-ms-/,
    I = /-([a-z])/g
  function W(e, t) {
    return t.toUpperCase()
  }
  function F(e) {
    return e.replace(M, "ms-").replace(I, W)
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  function B() {
    this.expando = ce.expando + B.uid++
  }
  ;(B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        )
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e)
        if ("string" == typeof t) i[F(t)] = n
        else for (r in t) i[F(r)] = t[r]
        return i
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando]
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length
            while (n--) delete r[t[n]]
          }
          ;(void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !ce.isEmptyObject(t)
      },
    })
  var _ = new B(),
    X = new B(),
    U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    z = /[A-Z]/g
  function V(e, t, n) {
    var r, i
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : U.test(i)
                ? JSON.parse(i)
                : i))
        } catch (e) {}
        X.set(e, t, n)
      } else n = void 0
    return n
  }
  ce.extend({
    hasData: function (e) {
      return X.hasData(e) || _.hasData(e)
    },
    data: function (e, t, n) {
      return X.access(e, t, n)
    },
    removeData: function (e, t) {
      X.remove(e, t)
    },
    _data: function (e, t, n) {
      return _.access(e, t, n)
    },
    _removeData: function (e, t) {
      _.remove(e, t)
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes
        if (void 0 === n) {
          if (
            this.length &&
            ((i = X.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]))
            _.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof n
          ? this.each(function () {
              X.set(this, n)
            })
          : R(
              this,
              function (e) {
                var t
                if (o && void 0 === e)
                  return void 0 !== (t = X.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0
                this.each(function () {
                  X.set(this, n, e)
                })
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e)
        })
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          )
      },
      dequeue: function (e, t) {
        t = t || "fx"
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t)
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t)
              },
              o
            )),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks"
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n])
            }),
          })
        )
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n)
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o])
          }
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx")
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s))
        return s(), i.promise(t)
      },
    })
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e)
    },
    Z = { composed: !0 }
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      )
    })
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    )
  }
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur()
          }
        : function () {
            return ce.css(e, t, "")
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t))
    if (c && c[3] !== l) {
      ;(u /= 2), (l = l || c[3]), (c = +u || 1)
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o)
      ;(c *= 2), ce.style(e, t, c + l), (n = n || [])
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    )
  }
  var ne = {}
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)))
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c])
    return e
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0)
    },
    hide: function () {
      return re(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide()
          })
    },
  })
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i
  ;(xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild)
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  }
  function Se(e, t) {
    var n
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    )
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
  }
  ;(ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"])
  var je = /<|&#?\w+;/
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o)
        else if (je.test(o)) {
          ;(a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0])
          while (c--) a = a.lastChild
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "")
        } else p.push(t.createTextNode(o))
    ;(f.textContent = ""), (d = 0)
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o)
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o)
      }
    return f
  }
  var De = /^([^.]*)(?:\.(.+)|)/
  function Ne() {
    return !0
  }
  function qe() {
    return !1
  }
  function Le(e, t, n, r, i, o) {
    var a, s
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o)
      return e
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe
    else if (!i) return e
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n)
      })
    )
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r)
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation()
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne))
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
  }
  ;(ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t)
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0
              }),
          (l = (e = (e || "").match(D) || [""]).length)
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0))
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e)
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            ;(f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length)
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c))
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d])
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0)
        ce.isEmptyObject(u) && _.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {}
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        ;(a = ce.event.handlers.call(this, u, l)), (t = 0)
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          ;(u.currentTarget = i.elem), (n = 0)
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r)
            o.length && s.push({ elem: l, handlers: o })
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      )
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          })
        },
      })
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e)
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          )
        },
        trigger: function (e) {
          var t = this || e
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          )
        },
        _default: function (e) {
          var t = e.target
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          )
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0)
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e)
          ;(n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n)
        } else ce.event.simulate(i, e.target, ce.event.fix(e))
      }
      ;(ce.event.special[r] = {
        setup: function () {
          var e
          if ((He(this, r, !0), !C.documentMode)) return !1
          ;(e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1)
        },
        trigger: function () {
          return He(this, r), !0
        },
        teardown: function () {
          var e
          if (!C.documentMode) return !1
          ;(e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i))
        },
        _default: function (e) {
          return _.get(e.target, r)
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i)
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i))
          },
        })
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            )
          },
        }
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          )
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i])
          return this
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t)
          })
        )
      },
    })
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g
  function Me(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    )
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    )
  }
  function Fe(e, t) {
    var n, r, i, o, a, s
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n])
      X.hasData(e) && ((o = X.access(e)), (a = ce.extend({}, o)), X.set(t, a))
    }
  }
  function $e(n, r, i, o) {
    r = g(r)
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d)
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e)
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
      })
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c)
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : m(u.textContent.replace(Re, ""), u, l))
    }
    return n
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r))
    return e
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e)
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue)
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r])
        else Fe(e, c)
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle)
            n[_.expando] = void 0
          }
          n[X.expando] && (n[X.expando] = void 0)
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0)
      },
      remove: function (e) {
        return Be(this, e)
      },
      text: function (e) {
        return R(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return $e(this, arguments, function (e) {
          ;(1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Me(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Me(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return R(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e)
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var n = []
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
          },
          n
        )
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get())
          return this.pushStack(n)
        }
      }
    )
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    Xe = /^--/,
    Ue = function (e) {
      var t = e.ownerDocument.defaultView
      return (t && t.opener) || (t = ie), t.getComputedStyle(e)
    },
    ze = function (e, t, n) {
      var r,
        i,
        o = {}
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
      return r
    },
    Ve = new RegExp(Q.join("|"), "i")
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Xe.test(t),
      u = e.style
    return (
      (n = n || Ue(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    )
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      },
    }
  }
  !(function () {
    function e() {
      if (l) {
        ;(u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l)
        var e = ie.getComputedStyle(l)
        ;(n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null)
      }
    }
    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div")
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), o
        },
        pixelPosition: function () {
          return e(), n
        },
        reliableMarginLeft: function () {
          return e(), s
        },
        scrollboxSize: function () {
          return e(), i
        },
        reliableTrDimensions: function () {
          var e, t, n, r
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          )
        },
      }))
  })()
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {}
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e]
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length
              while (n--) if ((e = Qe[n] + t) in Je) return e
            })(e) || e))
    )
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" }
  function rt(e, t, n) {
    var r = Y.exec(t)
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0
    if (n === (r ? "border" : "content")) return 0
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)))
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    )
  }
  function ot(e, t, n) {
    var r = Ue(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1)
    if (_e.test(a)) {
      if (!n) return a
      a = "auto"
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    )
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i)
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity")
            return "" === n ? "1" : n
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = Xe.test(t),
          l = e.style
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)))
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t)
      return (
        Xe.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      )
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : ze(e, tt, function () {
                  return ot(e, u, n)
                })
        },
        set: function (e, t, n) {
          var r,
            i = Ue(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          )
        },
      }
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ze(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + "px"
        )
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      ;(ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0]
          return n
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }),
    ce.fn.extend({
      css: function (e, t) {
        return R(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0
            if (Array.isArray(t)) {
              for (r = Ue(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r)
              return o
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
          },
          e,
          t,
          1 < arguments.length
        )
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"))
      },
      cur: function () {
        var e = at.propHooks[this.prop]
        return e && e.get ? e.get(this) : at.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        )
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit)
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {})
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick())
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0
      }),
      (st = Date.now())
    )
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e }
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e
    return t && (i.opacity = i.width = e), i
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n)
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        )
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          )
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0
          if (a) return this
          for (a = !0; t < n; t++) l.tweens[t].run(1)
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          )
        },
      }),
      c = l.props
    for (
      !(function (e, t) {
        var n, r, i, o, a
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i))
          else t[r] = i
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        )
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    )
  }
  ;(ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t)
          return te(n.elem, e, Y.exec(t), n), n
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D))
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t)
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow")
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s()
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
            })
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue
              g = !0
            }
            d[r] = (v && v[r]) || ce.style(e, r)
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              ;(h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2])
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r])
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            }
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }),
        r
      )
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o)
            ;(i || _.get(this, "finish")) && e.stop(!0)
          }
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        )
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop
          delete e.stop, t(o)
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this)
            if (t) r[t] && r[t].stop && a(r[t])
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t])
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1))
            ;(!e && o) || ce.dequeue(this, i)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1))
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this)
            delete t.finish
          })
        )
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r]
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n)
      }
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1)
      n.length || ce.fx.stop(), (st = void 0)
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start()
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt())
    }),
    (ce.fx.stop = function () {
      ut = null
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r)
          t.stop = function () {
            ie.clearTimeout(n)
          }
        })
      )
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value)
  var mt,
    xt = ce.expr.attrHandle
  ce.fn.extend({
    attr: function (e, t) {
      return R(this, ce.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e)
      })
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D)
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n)
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase()
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        )
      }
    })
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i
  function Tt(e) {
    return (e.match(D) || []).join(" ")
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || ""
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || []
  }
  ce.fn.extend({
    prop: function (e, t) {
      return R(this, ce.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e]
      })
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex")
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)))
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ")
                ;(a = Tt(n)), r !== a && this.setAttribute("class", a)
              }
            })
          : this
      },
      removeClass: function (t) {
        var e, n, r, i, o, a
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)))
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o]
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ")
                  }
                  ;(a = Tt(n)), r !== a && this.setAttribute("class", a)
                }
              })
            : this
          : this.attr("class", "")
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t)
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r)
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ))
            }))
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0
        t = " " + e + " "
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0
        return !1
      },
    })
  var St = /\r/g
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0]
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + ""
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t))
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value")
            return null != t ? t : Tt(ce.text(e))
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0)
            return n || (e.selectedIndex = -1), o
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      ;(ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t))
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
          })
    })
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/
  ce.parseXML = function (e) {
    var t, n
    if (!e || "string" != typeof e) return null
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml")
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent
                  })
                  .join("\n")
              : e)
        ),
      t
    )
  }
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation()
    }
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : []
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o)
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie)
        }
        i = 0
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault())
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        )
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 })
      ce.event.trigger(r, null, t)
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return ce.event.trigger(e, t, n, !0)
      },
    })
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i
  function Pt(n, e, r, i) {
    var t
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            )
      })
    else if (r || "object" !== x(e)) i(n, e)
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
  }
  ;(ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      }
    if (null == e) return ""
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value)
      })
    else for (n in e) Pt(n, e[n], t, i)
    return r.join("&")
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements")
          return e ? ce.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            )
          })
          .map(function (e, t) {
            var n = ce(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") }
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") }
          })
          .get()
      },
    })
  var Rt = /%20/g,
    Mt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    Xt = "*/".concat("*"),
    Ut = C.createElement("a")
  function zt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"))
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || []
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t)
    }
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t
    function l(e) {
      var r
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a)
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1)
        }),
        r
      )
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"))
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
    return r && ce.extend(!0, e, r), e
  }
  ;(Ut.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Xt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
      },
      ajaxPrefilter: zt(Bt),
      ajaxTransport: zt(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {})
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (h) {
                if (!n) {
                  n = {}
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2])
                }
                t = n[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function () {
              return h ? p : null
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              )
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (h) T.always(e[T.status])
                else for (t in e) w[t] = [w[t], e[t]]
              return this
            },
            abort: function (e) {
              var t = e || u
              return c && c.abort(t), l(0, t), this
            },
          }
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a")
          try {
            ;(r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host)
          } catch (e) {
            v.crossDomain = !0
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Mt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Rt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i])
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort()
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout")
            }, v.timeout))
          try {
            ;(h = !1), c.send(a, l)
          } catch (e) {
            if (h) throw e
            l(-1, e)
          }
        } else l(-1, "No Transport")
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"))
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i)
                      break
                    }
                if (u[0] in n) o = u[0]
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i
                      break
                    }
                    a || (a = i)
                  }
                  o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice()
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
              o = c.shift()
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                          break
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t)
                      else
                        try {
                          t = a(t)
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          }
                        }
                  }
              return { state: "success", data: t }
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script")
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    ce.ajaxPrefilter(function (e) {
      var t
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "")
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n)
        },
      })
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this
                while (e.firstElementChild) e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e))
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents()
              t.length ? t.wrapAll(n) : e.append(n)
            })
      },
      wrap: function (t) {
        var n = v(t)
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e)
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest()
      } catch (e) {}
    })
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr()
  ;(le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr()
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n]
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n])
            ;(o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ))
              }
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a()
                      })
                  }),
              (o = o("abort"))
            try {
              r.send((i.hasContent && i.data) || null)
            } catch (e) {
              if (o) throw e
            }
          },
          abort: function () {
            o && o()
          },
        }
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            ;(r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type)
                })
              )),
              C.head.appendChild(r[0])
          },
          abort: function () {
            i && i()
          },
        }
    })
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++
      return (this[e] = !0), e
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data")
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0]
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0)
          }),
          "script"
        )
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)))
      var r, i, o
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ")
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              ;(o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                  })
                }
            ),
        this
      )
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {}
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f)
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e)
              })
        var e,
          n,
          r = this[0]
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 }
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect()
          else {
            ;(t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement)
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)))
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent
          return e || J
        })
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i
        ce.fn[t] = function (e) {
          return R(
            this,
            function (e, t, n) {
              var r
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t]
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n)
            },
            t,
            e,
            arguments.length
          )
        }
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t
      })
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border")
            return R(
              this,
              function (e, t, n) {
                var r
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? ce.css(e, t, i)
                  : ce.style(e, t, n, i)
              },
              s,
              n ? e : void 0,
              n
            )
          }
        }
      )
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
      }
    )
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
  ;(ce.proxy = function (e, t) {
    var n, r, i
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      )
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0)
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e)
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1")
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce
      })
  var tn = ie.jQuery,
    nn = ie.$
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      )
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  )
})

/*!
 * Bootstrap v5.3.0-alpha1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e())
})(this, function () {
  "use strict"
  const t = "transitionend",
    e = (t) => (
      t &&
        window.CSS &&
        window.CSS.escape &&
        (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      t
    ),
    i = (e) => {
      e.dispatchEvent(new Event(t))
    },
    n = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    s = (t) =>
      n(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(e(t))
        : null,
    o = (t) => {
      if (!n(t) || 0 === t.getClientRects().length) return !1
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])")
      if (!i) return e
      if (i !== t) {
        const e = t.closest("summary")
        if (e && e.parentNode !== i) return !1
        if (null === e) return !1
      }
      return e
    },
    r = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    a = (t) => {
      if (!document.documentElement.attachShadow) return null
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode()
        return e instanceof ShadowRoot ? e : null
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? a(t.parentNode) : null
    },
    l = () => {},
    c = (t) => {
      t.offsetHeight
    },
    h = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    d = [],
    u = () => "rtl" === document.documentElement.dir,
    f = (t) => {
      var e
      ;(e = () => {
        const e = h()
        if (e) {
          const i = t.NAME,
            n = e.fn[i]
          ;(e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface))
        }
      }),
        "loading" === document.readyState
          ? (d.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of d) t()
              }),
            d.push(e))
          : e()
    },
    p = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
    m = (e, n, s = !0) => {
      if (!s) return void p(e)
      const o =
        ((t) => {
          if (!t) return 0
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t)
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i)
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0
        })(n) + 5
      let r = !1
      const a = ({ target: i }) => {
        i === n && ((r = !0), n.removeEventListener(t, a), p(e))
      }
      n.addEventListener(t, a),
        setTimeout(() => {
          r || i(n)
        }, o)
    },
    g = (t, e, i, n) => {
      const s = t.length
      let o = t.indexOf(e)
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))])
    },
    _ = /[^.]*(?=\..*)\.|.*/,
    b = /\..*/,
    v = /::\d+$/,
    y = {}
  let w = 1
  const A = { mouseenter: "mouseover", mouseleave: "mouseout" },
    E = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ])
  function T(t, e) {
    return (e && `${e}::${w++}`) || t.uidEvent || w++
  }
  function C(t) {
    const e = T(t)
    return (t.uidEvent = e), (y[e] = y[e] || {}), y[e]
  }
  function O(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    )
  }
  function x(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i
    let o = D(t)
    return E.has(o) || (o = t), [n, s, o]
  }
  function k(t, e, i, n, s) {
    if ("string" != typeof e || !t) return
    let [o, r, a] = x(e, i, n)
    if (e in A) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e)
        }
      r = t(r)
    }
    const l = C(t),
      c = l[a] || (l[a] = {}),
      h = O(c, r, o ? i : null)
    if (h) return void (h.oneOff = h.oneOff && s)
    const d = T(r, e.replace(_, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e)
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      N(s, { delegateTarget: r }),
                      n.oneOff && I.off(t, s.type, e, i),
                      i.apply(r, [s])
                    )
            }
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                N(n, { delegateTarget: t }),
                i.oneOff && I.off(t, n.type, e),
                e.apply(t, [n])
              )
            }
          })(t, r)
    ;(u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o)
  }
  function L(t, e, i, n, s) {
    const o = O(e[i], n, s)
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }
  function S(t, e, i, n) {
    const s = e[i] || {}
    for (const [o, r] of Object.entries(s))
      o.includes(n) && L(t, e, i, r.callable, r.delegationSelector)
  }
  function D(t) {
    return (t = t.replace(b, "")), A[t] || t
  }
  const I = {
    on(t, e, i, n) {
      k(t, e, i, n, !1)
    },
    one(t, e, i, n) {
      k(t, e, i, n, !0)
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return
      const [s, o, r] = x(e, i, n),
        a = r !== e,
        l = C(t),
        c = l[r] || {},
        h = e.startsWith(".")
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) S(t, l, i, e.slice(1))
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(v, "")
          ;(a && !e.includes(s)) || L(t, l, r, n.callable, n.delegationSelector)
        }
      } else {
        if (!Object.keys(c).length) return
        L(t, l, r, o, s ? i : null)
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null
      const n = h()
      let s = null,
        o = !0,
        r = !0,
        a = !1
      e !== D(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()))
      let l = new Event(e, { bubbles: o, cancelable: !0 })
      return (
        (l = N(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      )
    },
  }
  function N(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n })
      }
    return t
  }
  const P = new Map(),
    j = {
      set(t, e, i) {
        P.has(t) || P.set(t, new Map())
        const n = P.get(t)
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            )
      },
      get: (t, e) => (P.has(t) && P.get(t).get(e)) || null,
      remove(t, e) {
        if (!P.has(t)) return
        const i = P.get(t)
        i.delete(e), 0 === i.size && P.delete(t)
      },
    }
  function M(t) {
    if ("true" === t) return !0
    if ("false" === t) return !1
    if (t === Number(t).toString()) return Number(t)
    if ("" === t || "null" === t) return null
    if ("string" != typeof t) return t
    try {
      return JSON.parse(decodeURIComponent(t))
    } catch (e) {
      return t
    }
  }
  function F(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
  }
  const H = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${F(e)}`, i)
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${F(e)}`)
    },
    getDataAttributes(t) {
      if (!t) return {}
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        )
      for (const n of i) {
        let i = n.replace(/^bs/, "")
        ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = M(t.dataset[n]))
      }
      return e
    },
    getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${F(e)}`)),
  }
  class $ {
    static get Default() {
      return {}
    }
    static get DefaultType() {
      return {}
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      )
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      )
    }
    _configAfterMerge(t) {
      return t
    }
    _mergeConfigObj(t, e) {
      const i = n(e) ? H.getDataAttribute(e, "config") : {}
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(n(e) ? H.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      }
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [s, o] of Object.entries(e)) {
        const e = t[s],
          r = n(e)
            ? "element"
            : null == (i = e)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase()
        if (!new RegExp(o).test(r))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`
          )
      }
      var i
    }
  }
  class W extends $ {
    constructor(t, e) {
      super(),
        (t = s(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          j.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      j.remove(this._element, this.constructor.DATA_KEY),
        I.off(this._element, this.constructor.EVENT_KEY)
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null
    }
    _queueCallback(t, e, i = !0) {
      m(t, e, i)
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      )
    }
    static getInstance(t) {
      return j.get(s(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
    }
    static get VERSION() {
      return "5.3.0-alpha1"
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`
    }
  }
  const B = (t) => {
      let i = t.getAttribute("data-bs-target")
      if (!i || "#" === i) {
        let e = t.getAttribute("href")
        if (!e || (!e.includes("#") && !e.startsWith("."))) return null
        e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
          (i = e && "#" !== e ? e.trim() : null)
      }
      return e(i)
    },
    z = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = []
        let n = t.parentNode.closest(e)
        for (; n; ) i.push(n), (n = n.parentNode.closest(e))
        return i
      },
      prev(t, e) {
        let i = t.previousElementSibling
        for (; i; ) {
          if (i.matches(e)) return [i]
          i = i.previousElementSibling
        }
        return []
      },
      next(t, e) {
        let i = t.nextElementSibling
        for (; i; ) {
          if (i.matches(e)) return [i]
          i = i.nextElementSibling
        }
        return []
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",")
        return this.find(e, t).filter((t) => !r(t) && o(t))
      },
      getSelectorFromElement(t) {
        const e = B(t)
        return e && z.findOne(e) ? e : null
      },
      getElementFromSelector(t) {
        const e = B(t)
        return e ? z.findOne(e) : null
      },
      getMultipleElementsFromSelector(t) {
        const e = B(t)
        return e ? z.find(e) : []
      },
    },
    R = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME
      I.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), r(this))
        )
          return
        const s = z.getElementFromSelector(this) || this.closest(`.${n}`)
        t.getOrCreateInstance(s)[e]()
      })
    }
  class q extends W {
    static get NAME() {
      return "alert"
    }
    close() {
      if (I.trigger(this._element, "close.bs.alert").defaultPrevented) return
      this._element.classList.remove("show")
      const t = this._element.classList.contains("fade")
      this._queueCallback(() => this._destroyElement(), this._element, t)
    }
    _destroyElement() {
      this._element.remove(),
        I.trigger(this._element, "closed.bs.alert"),
        this.dispose()
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this)
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`)
          e[t](this)
        }
      })
    }
  }
  R(q, "close"), f(q)
  const V = '[data-bs-toggle="button"]'
  class K extends W {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      )
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = K.getOrCreateInstance(this)
        "toggle" === t && e[t]()
      })
    }
  }
  I.on(document, "click.bs.button.data-api", V, (t) => {
    t.preventDefault()
    const e = t.target.closest(V)
    K.getOrCreateInstance(e).toggle()
  }),
    f(K)
  const Q = { endCallback: null, leftCallback: null, rightCallback: null },
    X = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    }
  class Y extends $ {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Y.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents())
    }
    static get Default() {
      return Q
    }
    static get DefaultType() {
      return X
    }
    static get NAME() {
      return "swipe"
    }
    dispose() {
      I.off(this._element, ".bs.swipe")
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX)
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        p(this._config.endCallback)
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX)
      if (t <= 40) return
      const e = t / this._deltaX
      ;(this._deltaX = 0),
        e && p(e > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
      this._supportPointerEvents
        ? (I.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
          I.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (I.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
          I.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
          I.on(this._element, "touchend.bs.swipe", (t) => this._end(t)))
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      )
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      )
    }
  }
  const U = "next",
    G = "prev",
    J = "left",
    Z = "right",
    tt = "slid.bs.carousel",
    et = "carousel",
    it = "active",
    nt = { ArrowLeft: Z, ArrowRight: J },
    st = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    }
  class rt extends W {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = z.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === et && this.cycle()
    }
    static get Default() {
      return st
    }
    static get DefaultType() {
      return ot
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(U)
    }
    nextWhenVisible() {
      !document.hidden && o(this._element) && this.next()
    }
    prev() {
      this._slide(G)
    }
    pause() {
      this._isSliding && i(this._element), this._clearInterval()
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ))
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? I.one(this._element, tt, () => this.cycle())
          : this.cycle())
    }
    to(t) {
      const e = this._getItems()
      if (t > e.length - 1 || t < 0) return
      if (this._isSliding)
        return void I.one(this._element, tt, () => this.to(t))
      const i = this._getItemIndex(this._getActive())
      if (i === t) return
      const n = t > i ? U : G
      this._slide(n, e[t])
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t
    }
    _addEventListeners() {
      this._config.keyboard &&
        I.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (I.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          I.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch && Y.isSupported() && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      for (const t of z.find(".carousel-item img", this._element))
        I.on(t, "dragstart.bs.carousel", (t) => t.preventDefault())
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(J)),
        rightCallback: () => this._slide(this._directionToOrder(Z)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )))
        },
      }
      this._swipeHelper = new Y(this._element, t)
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return
      const e = nt[t.key]
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return
      const e = z.findOne(".active", this._indicatorsElement)
      e.classList.remove(it), e.removeAttribute("aria-current")
      const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)
      i && (i.classList.add(it), i.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive()
      if (!t) return
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10)
      this._config.interval = e || this._config.defaultInterval
    }
    _slide(t, e = null) {
      if (this._isSliding) return
      const i = this._getActive(),
        n = t === U,
        s = e || g(this._getItems(), i, n, this._config.wrap)
      if (s === i) return
      const o = this._getItemIndex(s),
        r = (e) =>
          I.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          })
      if (r("slide.bs.carousel").defaultPrevented) return
      if (!i || !s) return
      const a = Boolean(this._interval)
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s)
      const l = n ? "carousel-item-start" : "carousel-item-end",
        h = n ? "carousel-item-next" : "carousel-item-prev"
      s.classList.add(h),
        c(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, h),
              s.classList.add(it),
              i.classList.remove(it, h, l),
              (this._isSliding = !1),
              r(tt)
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle()
    }
    _isAnimated() {
      return this._element.classList.contains("slide")
    }
    _getActive() {
      return z.findOne(".active.carousel-item", this._element)
    }
    _getItems() {
      return z.find(".carousel-item", this._element)
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), (this._interval = null))
    }
    _directionToOrder(t) {
      return u() ? (t === J ? G : U) : t === J ? U : G
    }
    _orderToDirection(t) {
      return u() ? (t === G ? J : Z) : t === G ? Z : J
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = rt.getOrCreateInstance(this, t)
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`)
            e[t]()
          }
        } else e.to(t)
      })
    }
  }
  I.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (t) {
      const e = z.getElementFromSelector(this)
      if (!e || !e.classList.contains(et)) return
      t.preventDefault()
      const i = rt.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to")
      return n
        ? (i.to(n), void i._maybeEnableCycle())
        : "next" === H.getDataAttribute(this, "slide")
        ? (i.next(), void i._maybeEnableCycle())
        : (i.prev(), void i._maybeEnableCycle())
    }
  ),
    I.on(window, "load.bs.carousel.data-api", () => {
      const t = z.find('[data-bs-ride="carousel"]')
      for (const e of t) rt.getOrCreateInstance(e)
    }),
    f(rt)
  const at = "show",
    lt = "collapse",
    ct = "collapsing",
    ht = '[data-bs-toggle="collapse"]',
    dt = { parent: null, toggle: !0 },
    ut = { parent: "(null|element)", toggle: "boolean" }
  class ft extends W {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = [])
      const i = z.find(ht)
      for (const t of i) {
        const e = z.getSelectorFromElement(t),
          i = z.find(e).filter((t) => t === this._element)
        null !== e && i.length && this._triggerArray.push(t)
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle()
    }
    static get Default() {
      return dt
    }
    static get DefaultType() {
      return ut
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown()) return
      let t = []
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => ft.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return
      if (I.trigger(this._element, "show.bs.collapse").defaultPrevented) return
      for (const e of t) e.hide()
      const e = this._getDimension()
      this._element.classList.remove(lt),
        this._element.classList.add(ct),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0)
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`
      this._queueCallback(
        () => {
          ;(this._isTransitioning = !1),
            this._element.classList.remove(ct),
            this._element.classList.add(lt, at),
            (this._element.style[e] = ""),
            I.trigger(this._element, "shown.bs.collapse")
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`)
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return
      if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return
      const t = this._getDimension()
      ;(this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        c(this._element),
        this._element.classList.add(ct),
        this._element.classList.remove(lt, at)
      for (const t of this._triggerArray) {
        const e = z.getElementFromSelector(t)
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
      }
      ;(this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            ;(this._isTransitioning = !1),
              this._element.classList.remove(ct),
              this._element.classList.add(lt),
              I.trigger(this._element, "hidden.bs.collapse")
          },
          this._element,
          !0
        )
    }
    _isShown(t = this._element) {
      return t.classList.contains(at)
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = s(t.parent)), t
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height"
    }
    _initializeChildren() {
      if (!this._config.parent) return
      const t = this._getFirstLevelChildren(ht)
      for (const e of t) {
        const t = z.getElementFromSelector(e)
        t && this._addAriaAndCollapsedClass([e], this._isShown(t))
      }
    }
    _getFirstLevelChildren(t) {
      const e = z.find(":scope .collapse .collapse", this._config.parent)
      return z.find(t, this._config.parent).filter((t) => !e.includes(t))
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e)
    }
    static jQueryInterface(t) {
      const e = {}
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = ft.getOrCreateInstance(this, e)
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`)
            i[t]()
          }
        })
      )
    }
  }
  I.on(document, "click.bs.collapse.data-api", ht, function (t) {
    ;("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault()
    for (const t of z.getMultipleElementsFromSelector(this))
      ft.getOrCreateInstance(t, { toggle: !1 }).toggle()
  }),
    f(ft)
  var pt = "top",
    mt = "bottom",
    gt = "right",
    _t = "left",
    bt = "auto",
    vt = [pt, mt, gt, _t],
    yt = "start",
    wt = "end",
    At = "clippingParents",
    Et = "viewport",
    Tt = "popper",
    Ct = "reference",
    Ot = vt.reduce(function (t, e) {
      return t.concat([e + "-" + yt, e + "-" + wt])
    }, []),
    xt = [].concat(vt, [bt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + yt, e + "-" + wt])
    }, []),
    kt = "beforeRead",
    Lt = "read",
    St = "afterRead",
    Dt = "beforeMain",
    It = "main",
    Nt = "afterMain",
    Pt = "beforeWrite",
    jt = "write",
    Mt = "afterWrite",
    Ft = [kt, Lt, St, Dt, It, Nt, Pt, jt, Mt]
  function Ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }
  function $t(t) {
    if (null == t) return window
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument
      return (e && e.defaultView) || window
    }
    return t
  }
  function Wt(t) {
    return t instanceof $t(t).Element || t instanceof Element
  }
  function Bt(t) {
    return t instanceof $t(t).HTMLElement || t instanceof HTMLElement
  }
  function zt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof $t(t).ShadowRoot || t instanceof ShadowRoot)
    )
  }
  const Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t]
        Bt(s) &&
          Ht(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t]
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e)
          }))
      })
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        }
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t
              }, {})
            Bt(n) &&
              Ht(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t)
              }))
          })
        }
      )
    },
    requires: ["computeStyles"],
  }
  function qt(t) {
    return t.split("-")[0]
  }
  var Vt = Math.max,
    Kt = Math.min,
    Qt = Math.round
  function Xt() {
    var t = navigator.userAgentData
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version
          })
          .join(" ")
      : navigator.userAgent
  }
  function Yt() {
    return !/^((?!chrome|android).)*safari/i.test(Xt())
  }
  function Ut(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1)
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1
    e &&
      Bt(t) &&
      ((s = (t.offsetWidth > 0 && Qt(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Qt(n.height) / t.offsetHeight) || 1))
    var r = (Wt(t) ? $t(t) : window).visualViewport,
      a = !Yt() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    }
  }
  function Gt(t) {
    var e = Ut(t),
      i = t.offsetWidth,
      n = t.offsetHeight
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    )
  }
  function Jt(t, e) {
    var i = e.getRootNode && e.getRootNode()
    if (t.contains(e)) return !0
    if (i && zt(i)) {
      var n = e
      do {
        if (n && t.isSameNode(n)) return !0
        n = n.parentNode || n.host
      } while (n)
    }
    return !1
  }
  function Zt(t) {
    return $t(t).getComputedStyle(t)
  }
  function te(t) {
    return ["table", "td", "th"].indexOf(Ht(t)) >= 0
  }
  function ee(t) {
    return (
      (Wt(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement
  }
  function ie(t) {
    return "html" === Ht(t)
      ? t
      : t.assignedSlot || t.parentNode || (zt(t) ? t.host : null) || ee(t)
  }
  function ne(t) {
    return Bt(t) && "fixed" !== Zt(t).position ? t.offsetParent : null
  }
  function se(t) {
    for (var e = $t(t), i = ne(t); i && te(i) && "static" === Zt(i).position; )
      i = ne(i)
    return i &&
      ("html" === Ht(i) || ("body" === Ht(i) && "static" === Zt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(Xt())
            if (/Trident/i.test(Xt()) && Bt(t) && "fixed" === Zt(t).position)
              return null
            var i = ie(t)
            for (
              zt(i) && (i = i.host);
              Bt(i) && ["html", "body"].indexOf(Ht(i)) < 0;

            ) {
              var n = Zt(i)
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i
              i = i.parentNode
            }
            return null
          })(t) ||
          e
  }
  function oe(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }
  function re(t, e, i) {
    return Vt(t, Kt(e, i))
  }
  function ae(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t)
  }
  function le(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e
    }, {})
  }
  const ce = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = qt(i.placement),
        l = oe(a),
        c = [_t, gt].indexOf(a) >= 0 ? "height" : "width"
      if (o && r) {
        var h = (function (t, e) {
            return ae(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : le(t, vt)
            )
          })(s.padding, i),
          d = Gt(o),
          u = "y" === l ? pt : _t,
          f = "y" === l ? mt : gt,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = se(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = re(v, w, y),
          E = l
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e)
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Jt(e.elements.popper, n) &&
        (e.elements.arrow = n)
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  }
  function he(t) {
    return t.split("-")[1]
  }
  var de = { top: "auto", right: "auto", bottom: "auto", left: "auto" }
  function ue(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({ x: f, y: m }) : { x: f, y: m }
    ;(f = g.x), (m = g.y)
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = _t,
      y = pt,
      w = window
    if (c) {
      var A = se(i),
        E = "clientHeight",
        T = "clientWidth"
      A === $t(i) &&
        "static" !== Zt((A = ee(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (T = "scrollWidth")),
        (s === pt || ((s === _t || s === gt) && o === wt)) &&
          ((y = mt),
          (m -=
            (d && A === w && w.visualViewport
              ? w.visualViewport.height
              : A[E]) - n.height),
          (m *= l ? 1 : -1)),
        (s !== _t && ((s !== pt && s !== mt) || o !== wt)) ||
          ((v = gt),
          (f -=
            (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
            n.width),
          (f *= l ? 1 : -1))
    }
    var C,
      O = Object.assign({ position: a }, c && de),
      x =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1
              return { x: Qt(e * n) / n || 0, y: Qt(i * n) / n || 0 }
            })({ x: f, y: m })
          : { x: f, y: m }
    return (
      (f = x.x),
      (m = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((C = {})[y] = b ? "0" : ""),
            (C[v] = _ ? "0" : ""),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + m + "px)"
                : "translate3d(" + f + "px, " + m + "px, 0)"),
            C)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? m + "px" : ""),
            (e[v] = _ ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    )
  }
  const fe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: qt(e.placement),
          variation: he(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        }
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          ue(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            ue(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }))
    },
    data: {},
  }
  var pe = { passive: !0 }
  const me = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = $t(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper)
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, pe)
          }),
        a && l.addEventListener("resize", i.update, pe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, pe)
            }),
            a && l.removeEventListener("resize", i.update, pe)
        }
      )
    },
    data: {},
  }
  var ge = { left: "right", right: "left", bottom: "top", top: "bottom" }
  function _e(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return ge[t]
    })
  }
  var be = { start: "end", end: "start" }
  function ve(t) {
    return t.replace(/start|end/g, function (t) {
      return be[t]
    })
  }
  function ye(t) {
    var e = $t(t)
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
  }
  function we(t) {
    return Ut(ee(t)).left + ye(t).scrollLeft
  }
  function Ae(t) {
    var e = Zt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY
    return /auto|scroll|overlay|hidden/.test(i + s + n)
  }
  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Ht(t)) >= 0
      ? t.ownerDocument.body
      : Bt(t) && Ae(t)
      ? t
      : Ee(ie(t))
  }
  function Te(t, e) {
    var i
    void 0 === e && (e = [])
    var n = Ee(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = $t(n),
      r = s ? [o].concat(o.visualViewport || [], Ae(n) ? n : []) : n,
      a = e.concat(r)
    return s ? a : a.concat(Te(ie(r)))
  }
  function Ce(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    })
  }
  function Oe(t, e, i) {
    return e === Et
      ? Ce(
          (function (t, e) {
            var i = $t(t),
              n = ee(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0
            if (s) {
              ;(o = s.width), (r = s.height)
              var c = Yt()
              ;(c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop))
            }
            return { width: o, height: r, x: a + we(t), y: l }
          })(t, i)
        )
      : Wt(e)
      ? (function (t, e) {
          var i = Ut(t, !1, "fixed" === e)
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          )
        })(e, i)
      : Ce(
          (function (t) {
            var e,
              i = ee(t),
              n = ye(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Vt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Vt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + we(t),
              l = -n.scrollTop
            return (
              "rtl" === Zt(s || i).direction &&
                (a += Vt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            )
          })(ee(t))
        )
  }
  function xe(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? qt(s) : null,
      r = s ? he(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2
    switch (o) {
      case pt:
        e = { x: a, y: i.y - n.height }
        break
      case mt:
        e = { x: a, y: i.y + i.height }
        break
      case gt:
        e = { x: i.x + i.width, y: l }
        break
      case _t:
        e = { x: i.x - n.width, y: l }
        break
      default:
        e = { x: i.x, y: i.y }
    }
    var c = o ? oe(o) : null
    if (null != c) {
      var h = "y" === c ? "height" : "width"
      switch (r) {
        case yt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2)
          break
        case wt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2)
      }
    }
    return e
  }
  function ke(t, e) {
    void 0 === e && (e = {})
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? At : a,
      c = i.rootBoundary,
      h = void 0 === c ? Et : c,
      d = i.elementContext,
      u = void 0 === d ? Tt : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = ae("number" != typeof g ? g : le(g, vt)),
      b = u === Tt ? Ct : Tt,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = Te(ie(t)),
                    i =
                      ["absolute", "fixed"].indexOf(Zt(t).position) >= 0 &&
                      Bt(t)
                        ? se(t)
                        : t
                  return Wt(i)
                    ? e.filter(function (t) {
                        return Wt(t) && Jt(t, i) && "body" !== Ht(t)
                      })
                    : []
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = Oe(t, i, n)
            return (
              (e.top = Vt(s.top, e.top)),
              (e.right = Kt(s.right, e.right)),
              (e.bottom = Kt(s.bottom, e.bottom)),
              (e.left = Vt(s.left, e.left)),
              e
            )
          }, Oe(t, r, n))
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        )
      })(Wt(y) ? y : y.contextElement || ee(t.elements.popper), l, h, r),
      A = Ut(t.elements.reference),
      E = xe({ reference: A, element: v, strategy: "absolute", placement: s }),
      T = Ce(Object.assign({}, v, E)),
      C = u === Tt ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right,
      },
      x = t.modifiersData.offset
    if (u === Tt && x) {
      var k = x[s]
      Object.keys(O).forEach(function (t) {
        var e = [gt, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [pt, mt].indexOf(t) >= 0 ? "y" : "x"
        O[t] += k[i] * e
      })
    }
    return O
  }
  function Le(t, e) {
    void 0 === e && (e = {})
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? xt : l,
      h = he(n),
      d = h
        ? a
          ? Ot
          : Ot.filter(function (t) {
              return he(t) === h
            })
        : vt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0
      })
    0 === u.length && (u = d)
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = ke(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[qt(i)]),
        e
      )
    }, {})
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e]
    })
  }
  const Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = qt(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if (qt(t) === bt) return []
                    var e = _e(t)
                    return [ve(t), e, ve(e)]
                  })(g)
                : [_e(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                qt(i) === bt
                  ? Le(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              )
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = qt(O),
            k = he(O) === yt,
            L = [pt, mt].indexOf(x) >= 0,
            S = L ? "width" : "height",
            D = ke(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = L ? (k ? gt : _t) : k ? mt : pt
          y[S] > w[S] && (I = _e(I))
          var N = _e(I),
            P = []
          if (
            (o && P.push(D[x] <= 0),
            a && P.push(D[I] <= 0, D[N] <= 0),
            P.every(function (t) {
              return t
            }))
          ) {
            ;(T = O), (E = !1)
            break
          }
          A.set(O, P)
        }
        if (E)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e)
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t
                    })
                })
                if (e) return (T = e), "break"
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0))
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  }
  function De(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    )
  }
  function Ie(t) {
    return [pt, gt, mt, _t].some(function (e) {
      return t[e] >= 0
    })
  }
  const Ne = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, { elementContext: "reference" }),
          a = ke(e, { altBoundary: !0 }),
          l = De(r, n),
          c = De(a, s, o),
          h = Ie(l),
          d = Ie(c)
        ;(e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }))
      },
    },
    Pe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = xt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = qt(t),
                  s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1]
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [_t, gt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                )
              })(i, e.rects, o)),
              t
            )
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r)
      },
    },
    je = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name
        e.modifiersData[i] = xe({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        })
      },
      data: {},
    },
    Me = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = qt(e.placement),
          b = he(e.placement),
          v = !b,
          y = oe(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          O =
            "number" == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          k = { x: 0, y: 0 }
        if (A) {
          if (o) {
            var L,
              S = "y" === y ? pt : _t,
              D = "y" === y ? mt : gt,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + g[S],
              j = N - g[D],
              M = f ? -T[I] / 2 : 0,
              F = b === yt ? E[I] : T[I],
              H = b === yt ? -T[I] : -E[I],
              $ = e.elements.arrow,
              W = f && $ ? Gt($) : { width: 0, height: 0 },
              B = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              z = B[S],
              R = B[D],
              q = re(0, E[I], W[I]),
              V = v
                ? E[I] / 2 - M - q - z - O.mainAxis
                : F - q - z - O.mainAxis,
              K = v
                ? -E[I] / 2 + M + q + R + O.mainAxis
                : H + q + R + O.mainAxis,
              Q = e.elements.arrow && se(e.elements.arrow),
              X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = re(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(j, U) : j)
            ;(A[y] = G), (k[y] = G - N)
          }
          if (a) {
            var J,
              Z = "x" === y ? pt : _t,
              tt = "x" === y ? mt : gt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [pt, _t].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = re(t, e, i)
                      return n > i ? i : n
                    })(at, et, lt)
                  : re(f ? at : nt, et, f ? lt : st)
            ;(A[w] = ct), (k[w] = ct - et)
          }
          e.modifiersData[n] = k
        }
      },
      requiresIfExists: ["offset"],
    }
  function Fe(t, e, i) {
    void 0 === i && (i = !1)
    var n,
      s,
      o = Bt(e),
      r =
        Bt(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Qt(e.width) / t.offsetWidth || 1,
            n = Qt(e.height) / t.offsetHeight || 1
          return 1 !== i || 1 !== n
        })(e),
      a = ee(e),
      l = Ut(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 }
    return (
      (o || (!o && !i)) &&
        (("body" !== Ht(e) || Ae(a)) &&
          (c =
            (n = e) !== $t(n) && Bt(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : ye(n)),
        Bt(e)
          ? (((h = Ut(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = we(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    )
  }
  function He(t) {
    var e = new Map(),
      i = new Set(),
      n = []
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t)
              n && s(n)
            }
          }),
        n.push(t)
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t)
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t)
      }),
      n
    )
  }
  var $e = { placement: "bottom", modifiers: [], strategy: "absolute" }
  function We() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i]
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    })
  }
  function Be(t) {
    void 0 === t && (t = {})
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? $e : s
    return function (t, e, i) {
      void 0 === i && (i = o)
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, $e, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Wt(t)
                  ? Te(t)
                  : t.contextElement
                  ? Te(t.contextElement)
                  : [],
                popper: Te(e),
              })
            var r,
              c,
              u = (function (t) {
                var e = He(t)
                return Ft.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i
                    })
                  )
                }, [])
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name]
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  )
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t]
                }))
              )
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n })
                  l.push(o || function () {})
                }
              }),
              h.update()
            )
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper
              if (We(e, i)) {
                ;(a.rects = {
                  reference: Fe(e, se(i), "fixed" === a.options.strategy),
                  popper: Gt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign({}, t.data))
                  })
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a)
                  } else (a.reset = !1), (n = -1)
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a)
              })
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      ;(r = void 0), t(s())
                    })
                  })),
                r
              )
            }),
          destroy: function () {
            d(), (c = !0)
          },
        }
      if (!We(t, e)) return h
      function d() {
        l.forEach(function (t) {
          return t()
        }),
          (l = [])
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t)
        }),
        h
      )
    }
  }
  var ze = Be(),
    Re = Be({ defaultModifiers: [me, je, fe, Rt] }),
    qe = Be({ defaultModifiers: [me, je, fe, Rt, Pe, Se, Me, ce, Ne] })
  const Ve = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: Be,
          detectOverflow: ke,
          createPopperBase: ze,
          createPopper: qe,
          createPopperLite: Re,
          top: pt,
          bottom: mt,
          right: gt,
          left: _t,
          auto: bt,
          basePlacements: vt,
          start: yt,
          end: wt,
          clippingParents: At,
          viewport: Et,
          popper: Tt,
          reference: Ct,
          variationPlacements: Ot,
          placements: xt,
          beforeRead: kt,
          read: Lt,
          afterRead: St,
          beforeMain: Dt,
          main: It,
          afterMain: Nt,
          beforeWrite: Pt,
          write: jt,
          afterWrite: Mt,
          modifierPhases: Ft,
          applyStyles: Rt,
          arrow: ce,
          computeStyles: fe,
          eventListeners: me,
          flip: Se,
          hide: Ne,
          offset: Pe,
          popperOffsets: je,
          preventOverflow: Me,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Ke = "dropdown",
    Qe = "ArrowUp",
    Xe = "ArrowDown",
    Ye = "click.bs.dropdown.data-api",
    Ue = "keydown.bs.dropdown.data-api",
    Ge = "show",
    Je = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ze = `${Je}.show`,
    ti = ".dropdown-menu",
    ei = u() ? "top-end" : "top-start",
    ii = u() ? "top-start" : "top-end",
    ni = u() ? "bottom-end" : "bottom-start",
    si = u() ? "bottom-start" : "bottom-end",
    oi = u() ? "left-start" : "right-start",
    ri = u() ? "right-start" : "left-start",
    ai = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    li = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    }
  class ci extends W {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          z.next(this._element, ti)[0] ||
          z.prev(this._element, ti)[0] ||
          z.findOne(ti, this._parent)),
        (this._inNavbar = this._detectNavbar())
    }
    static get Default() {
      return ai
    }
    static get DefaultType() {
      return li
    }
    static get NAME() {
      return Ke
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (r(this._element) || this._isShown()) return
      const t = { relatedTarget: this._element }
      if (!I.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            I.on(t, "mouseover", l)
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Ge),
          this._element.classList.add(Ge),
          I.trigger(this._element, "shown.bs.dropdown", t)
      }
    }
    hide() {
      if (r(this._element) || !this._isShown()) return
      const t = { relatedTarget: this._element }
      this._completeHide(t)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      ;(this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update()
    }
    _completeHide(t) {
      if (!I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            I.off(t, "mouseover", l)
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Ge),
          this._element.classList.remove(Ge),
          this._element.setAttribute("aria-expanded", "false"),
          H.removeDataAttribute(this._menu, "popper"),
          I.trigger(this._element, "hidden.bs.dropdown", t)
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !n(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        )
      return t
    }
    _createPopper() {
      if (void 0 === Ve)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        )
      let t = this._element
      "parent" === this._config.reference
        ? (t = this._parent)
        : n(this._config.reference)
        ? (t = s(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference)
      const e = this._getPopperConfig()
      this._popper = qe(t, this._menu, e)
    }
    _isShown() {
      return this._menu.classList.contains(Ge)
    }
    _getPlacement() {
      const t = this._parent
      if (t.classList.contains("dropend")) return oi
      if (t.classList.contains("dropstart")) return ri
      if (t.classList.contains("dropup-center")) return "top"
      if (t.classList.contains("dropdown-center")) return "bottom"
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()
      return t.classList.contains("dropup") ? (e ? ii : ei) : e ? si : ni
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const { offset: t } = this._config
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      }
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (H.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...t, ...p(this._config.popperConfig, [t]) }
      )
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = z
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((t) => o(t))
      i.length && g(i, e, t === Xe, !i.includes(e)).focus()
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ci.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
          e[t]()
        }
      })
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return
      const e = z.find(Ze)
      for (const i of e) {
        const e = ci.getInstance(i)
        if (!e || !1 === e._config.autoClose) continue
        const n = t.composedPath(),
          s = n.includes(e._menu)
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue
        const o = { relatedTarget: e._element }
        "click" === t.type && (o.clickEvent = t), e._completeHide(o)
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Qe, Xe].includes(t.key)
      if (!n && !i) return
      if (e && !i) return
      t.preventDefault()
      const s = this.matches(Je)
          ? this
          : z.prev(this, Je)[0] ||
            z.next(this, Je)[0] ||
            z.findOne(Je, t.delegateTarget.parentNode),
        o = ci.getOrCreateInstance(s)
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t)
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
    }
  }
  I.on(document, Ue, Je, ci.dataApiKeydownHandler),
    I.on(document, Ue, ti, ci.dataApiKeydownHandler),
    I.on(document, Ye, ci.clearMenus),
    I.on(document, "keyup.bs.dropdown.data-api", ci.clearMenus),
    I.on(document, Ye, Je, function (t) {
      t.preventDefault(), ci.getOrCreateInstance(this).toggle()
    }),
    f(ci)
  const hi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    di = ".sticky-top",
    ui = "padding-right",
    fi = "margin-right"
  class pi {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const t = document.documentElement.clientWidth
      return Math.abs(window.innerWidth - t)
    }
    hide() {
      const t = this.getWidth()
      this._disableOverFlow(),
        this._setElementAttributes(this._element, ui, (e) => e + t),
        this._setElementAttributes(hi, ui, (e) => e + t),
        this._setElementAttributes(di, fi, (e) => e - t)
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, ui),
        this._resetElementAttributes(hi, ui),
        this._resetElementAttributes(di, fi)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden")
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth()
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n) return
        this._saveInitialAttribute(t, e)
        const s = window.getComputedStyle(t).getPropertyValue(e)
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
      })
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e)
      i && H.setDataAttribute(t, e, i)
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = H.getDataAttribute(t, e)
        null !== i
          ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e)
      })
    }
    _applyManipulationCallback(t, e) {
      if (n(t)) e(t)
      else for (const i of z.find(t, this._element)) e(i)
    }
  }
  const mi = "show",
    gi = "mousedown.bs.backdrop",
    _i = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    bi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    }
  class vi extends $ {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null)
    }
    static get Default() {
      return _i
    }
    static get DefaultType() {
      return bi
    }
    static get NAME() {
      return "backdrop"
    }
    show(t) {
      if (!this._config.isVisible) return void p(t)
      this._append()
      const e = this._getElement()
      this._config.isAnimated && c(e),
        e.classList.add(mi),
        this._emulateAnimation(() => {
          p(t)
        })
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(mi),
          this._emulateAnimation(() => {
            this.dispose(), p(t)
          }))
        : p(t)
    }
    dispose() {
      this._isAppended &&
        (I.off(this._element, gi),
        this._element.remove(),
        (this._isAppended = !1))
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div")
        ;(t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t)
      }
      return this._element
    }
    _configAfterMerge(t) {
      return (t.rootElement = s(t.rootElement)), t
    }
    _append() {
      if (this._isAppended) return
      const t = this._getElement()
      this._config.rootElement.append(t),
        I.on(t, gi, () => {
          p(this._config.clickCallback)
        }),
        (this._isAppended = !0)
    }
    _emulateAnimation(t) {
      m(t, this._getElement(), this._config.isAnimated)
    }
  }
  const yi = ".bs.focustrap",
    wi = "backward",
    Ai = { autofocus: !0, trapElement: null },
    Ei = { autofocus: "boolean", trapElement: "element" }
  class Ti extends $ {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null)
    }
    static get Default() {
      return Ai
    }
    static get DefaultType() {
      return Ei
    }
    static get NAME() {
      return "focustrap"
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        I.off(document, yi),
        I.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        I.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0))
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), I.off(document, yi))
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config
      if (t.target === document || t.target === e || e.contains(t.target))
        return
      const i = z.focusableChildren(e)
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === wi
        ? i[i.length - 1].focus()
        : i[0].focus()
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? wi : "forward")
    }
  }
  const Ci = "hidden.bs.modal",
    Oi = "show.bs.modal",
    xi = "modal-open",
    ki = "show",
    Li = "modal-static",
    Si = { backdrop: !0, focus: !0, keyboard: !0 },
    Di = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" }
  class Ii extends W {
    constructor(t, e) {
      super(t, e),
        (this._dialog = z.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new pi()),
        this._addEventListeners()
    }
    static get Default() {
      return Si
    }
    static get DefaultType() {
      return Di
    }
    static get NAME() {
      return "modal"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        I.trigger(this._element, Oi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(xi),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)))
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (I.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(ki),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )))
    }
    dispose() {
      for (const t of [window, this._dialog]) I.off(t, ".bs.modal")
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new vi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      })
    }
    _initializeFocusTrap() {
      return new Ti({ trapElement: this._element })
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0)
      const e = z.findOne(".modal-body", this._dialog)
      e && (e.scrollTop = 0),
        c(this._element),
        this._element.classList.add(ki),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              I.trigger(this._element, "shown.bs.modal", { relatedTarget: t })
          },
          this._dialog,
          this._isAnimated()
        )
    }
    _addEventListeners() {
      I.on(this._element, "keydown.dismiss.bs.modal", (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition()
      }),
        I.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog()
        }),
        I.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          I.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition())
          })
        })
    }
    _hideModal() {
      ;(this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(xi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            I.trigger(this._element, Ci)
        })
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY
      "hidden" === e ||
        this._element.classList.contains(Li) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Li),
        this._queueCallback(() => {
          this._element.classList.remove(Li),
            this._queueCallback(() => {
              this._element.style.overflowY = e
            }, this._dialog)
        }, this._dialog),
        this._element.focus())
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0
      if (i && !t) {
        const t = u() ? "paddingLeft" : "paddingRight"
        this._element.style[t] = `${e}px`
      }
      if (!i && t) {
        const t = u() ? "paddingRight" : "paddingLeft"
        this._element.style[t] = `${e}px`
      }
    }
    _resetAdjustments() {
      ;(this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "")
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ii.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`)
          i[t](e)
        }
      })
    }
  }
  I.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = z.getElementFromSelector(this)
      ;["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        I.one(e, Oi, (t) => {
          t.defaultPrevented ||
            I.one(e, Ci, () => {
              o(this) && this.focus()
            })
        })
      const i = z.findOne(".modal.show")
      i && Ii.getInstance(i).hide(), Ii.getOrCreateInstance(e).toggle(this)
    }
  ),
    R(Ii),
    f(Ii)
  const Ni = "show",
    Pi = "showing",
    ji = "hiding",
    Mi = ".offcanvas.show",
    Fi = "hidePrevented.bs.offcanvas",
    Hi = "hidden.bs.offcanvas",
    $i = { backdrop: !0, keyboard: !0, scroll: !1 },
    Wi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    }
  class Bi extends W {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners()
    }
    static get Default() {
      return $i
    }
    static get DefaultType() {
      return Wi
    }
    static get NAME() {
      return "offcanvas"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown ||
        I.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new pi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Pi),
        this._queueCallback(
          () => {
            ;(this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Ni),
              this._element.classList.remove(Pi),
              I.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              })
          },
          this._element,
          !0
        ))
    }
    hide() {
      this._isShown &&
        (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(ji),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Ni, ji),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new pi().reset(),
                I.trigger(this._element, Hi)
            },
            this._element,
            !0
          )))
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop)
      return new vi({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : I.trigger(this._element, Fi)
            }
          : null,
      })
    }
    _initializeFocusTrap() {
      return new Ti({ trapElement: this._element })
    }
    _addEventListeners() {
      I.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : I.trigger(this._element, Fi))
      })
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Bi.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`)
          e[t](this)
        }
      })
    }
  }
  I.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = z.getElementFromSelector(this)
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), r(this)))
        return
      I.one(e, Hi, () => {
        o(this) && this.focus()
      })
      const i = z.findOne(Mi)
      i && i !== e && Bi.getInstance(i).hide(),
        Bi.getOrCreateInstance(e).toggle(this)
    }
  ),
    I.on(window, "load.bs.offcanvas.data-api", () => {
      for (const t of z.find(Mi)) Bi.getOrCreateInstance(t).show()
    }),
    I.on(window, "resize.bs.offcanvas", () => {
      for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          Bi.getOrCreateInstance(t).hide()
    }),
    R(Bi),
    f(Bi)
  const zi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    qi =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Vi = (t, e) => {
      const i = t.nodeName.toLowerCase()
      return e.includes(i)
        ? !zi.has(i) || Boolean(Ri.test(t.nodeValue) || qi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i))
    },
    Ki = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Qi = {
      allowList: Ki,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Xi = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Yi = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    }
  class Ui extends $ {
    constructor(t) {
      super(), (this._config = this._getConfig(t))
    }
    static get Default() {
      return Qi
    }
    static get DefaultType() {
      return Xi
    }
    static get NAME() {
      return "TemplateFactory"
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean)
    }
    hasContent() {
      return this.getContent().length > 0
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      )
    }
    toHtml() {
      const t = document.createElement("div")
      t.innerHTML = this._maybeSanitize(this._config.template)
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e)
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass)
      return i && e.classList.add(...i.split(" ")), e
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content)
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Yi)
    }
    _setContent(t, e, i) {
      const o = z.findOne(i, t)
      o &&
        ((e = this._resolvePossibleFunction(e))
          ? n(e)
            ? this._putElementInTemplate(s(e), o)
            : this._config.html
            ? (o.innerHTML = this._maybeSanitize(e))
            : (o.textContent = e)
          : o.remove())
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t
            if (i && "function" == typeof i) return i(t)
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"))
            for (const t of s) {
              const i = t.nodeName.toLowerCase()
              if (!Object.keys(e).includes(i)) {
                t.remove()
                continue
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || [])
              for (const e of n) Vi(e, s) || t.removeAttribute(e.nodeName)
            }
            return n.body.innerHTML
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t
    }
    _resolvePossibleFunction(t) {
      return p(t, [this])
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t)
      e.textContent = t.textContent
    }
  }
  const Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ji = "fade",
    Zi = "show",
    tn = ".modal",
    en = "hide.bs.modal",
    nn = "hover",
    sn = "focus",
    on = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: u() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: u() ? "right" : "left",
    },
    rn = {
      allowList: Ki,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    an = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    }
  class ln extends W {
    constructor(t, e) {
      if (void 0 === Ve)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        )
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle()
    }
    static get Default() {
      return rn
    }
    static get DefaultType() {
      return an
    }
    static get NAME() {
      return "tooltip"
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter())
    }
    dispose() {
      clearTimeout(this._timeout),
        I.off(this._element.closest(tn), en, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose()
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements")
      if (!this._isWithContent() || !this._isEnabled) return
      const t = I.trigger(this._element, this.constructor.eventName("show")),
        e = (
          a(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element)
      if (t.defaultPrevented || !e) return
      this._disposePopper()
      const i = this._getTipElement()
      this._element.setAttribute("aria-describedby", i.getAttribute("id"))
      const { container: n } = this._config
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          I.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(Zi),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          I.on(t, "mouseover", l)
      this._queueCallback(
        () => {
          I.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1)
        },
        this.tip,
        this._isAnimated()
      )
    }
    hide() {
      if (
        this._isShown() &&
        !I.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(Zi),
          "ontouchstart" in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            I.off(t, "mouseover", l)
        ;(this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                I.trigger(this._element, this.constructor.eventName("hidden")))
            },
            this.tip,
            this._isAnimated()
          )
      }
    }
    update() {
      this._popper && this._popper.update()
    }
    _isWithContent() {
      return Boolean(this._getTitle())
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      )
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml()
      if (!e) return null
      e.classList.remove(Ji, Zi),
        e.classList.add(`bs-${this.constructor.NAME}-auto`)
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t))
        return t
      })(this.constructor.NAME).toString()
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ji), e
      )
    }
    setContent(t) {
      ;(this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Ui({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      )
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() }
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      )
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      )
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Ji))
      )
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Zi)
    }
    _createPopper(t) {
      const e = p(this._config.placement, [this, t, this._element]),
        i = on[e.toUpperCase()]
      return qe(this._element, t, this._getPopperConfig(i))
    }
    _getOffset() {
      const { offset: t } = this._config
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t
    }
    _resolvePossibleFunction(t) {
      return p(t, [this._element])
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              )
            },
          },
        ],
      }
      return { ...e, ...p(this._config.popperConfig, [e]) }
    }
    _setListeners() {
      const t = this._config.trigger.split(" ")
      for (const e of t)
        if ("click" === e)
          I.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle()
            }
          )
        else if ("manual" !== e) {
          const t =
              e === nn
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === nn
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout")
          I.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t)
            ;(e._activeTrigger["focusin" === t.type ? sn : nn] = !0), e._enter()
          }),
            I.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t)
              ;(e._activeTrigger["focusout" === t.type ? sn : nn] =
                e._element.contains(t.relatedTarget)),
                e._leave()
            })
        }
      ;(this._hideModalHandler = () => {
        this._element && this.hide()
      }),
        I.on(this._element.closest(tn), en, this._hideModalHandler)
    }
    _fixTitle() {
      const t = this._element.getAttribute("title")
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"))
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show()
          }, this._config.delay.show))
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide()
        }, this._config.delay.hide))
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e))
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
      const e = H.getDataAttributes(this._element)
      for (const t of Object.keys(e)) Gi.has(t) && delete e[t]
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      )
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : s(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      )
    }
    _getDelegateConfig() {
      const t = {}
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i)
      return (t.selector = !1), (t.trigger = "manual"), t
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null))
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ln.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
          e[t]()
        }
      })
    }
  }
  f(ln)
  const cn = {
      ...ln.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    hn = { ...ln.DefaultType, content: "(null|string|element|function)" }
  class dn extends ln {
    static get Default() {
      return cn
    }
    static get DefaultType() {
      return hn
    }
    static get NAME() {
      return "popover"
    }
    _isWithContent() {
      return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      }
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = dn.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
          e[t]()
        }
      })
    }
  }
  f(dn)
  const un = "click.bs.scrollspy",
    fn = "active",
    pn = "[href]",
    mn = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    gn = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    }
  class _n extends W {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh()
    }
    static get Default() {
      return mn
    }
    static get DefaultType() {
      return gn
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver())
      for (const t of this._observableSections.values())
        this._observer.observe(t)
    }
    dispose() {
      this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(t) {
      return (
        (t.target = s(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      )
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (I.off(this._config.target, un),
        I.on(this._config.target, un, pn, (t) => {
          const e = this._observableSections.get(t.target.hash)
          if (e) {
            t.preventDefault()
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" })
            i.scrollTop = n
          }
        }))
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      }
      return new IntersectionObserver((t) => this._observerCallback(t), t)
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          ;(this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t))
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop
      this._previousScrollData.parentScrollTop = n
      for (const o of t) {
        if (!o.isIntersecting) {
          ;(this._activeTarget = null), this._clearActiveClass(e(o))
          continue
        }
        const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop
        if (s && t) {
          if ((i(o), !n)) return
        } else s || t || i(o)
      }
    }
    _initializeTargetsAndObservables() {
      ;(this._targetLinks = new Map()), (this._observableSections = new Map())
      const t = z.find(pn, this._config.target)
      for (const e of t) {
        if (!e.hash || r(e)) continue
        const t = z.findOne(e.hash, this._element)
        o(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t))
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(fn),
        this._activateParents(t),
        I.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t }))
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(fn)
      else
        for (const e of z.parents(t, ".nav, .list-group"))
          for (const t of z.prev(
            e,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            t.classList.add(fn)
    }
    _clearActiveClass(t) {
      t.classList.remove(fn)
      const e = z.find("[href].active", t)
      for (const t of e) t.classList.remove(fn)
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = _n.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`)
          e[t]()
        }
      })
    }
  }
  I.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of z.find('[data-bs-spy="scroll"]')) _n.getOrCreateInstance(t)
  }),
    f(_n)
  const bn = "ArrowLeft",
    vn = "ArrowRight",
    yn = "ArrowUp",
    wn = "ArrowDown",
    An = "active",
    En = "fade",
    Tn = "show",
    Cn =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    On = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`
  class xn extends W {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          I.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)))
    }
    static get NAME() {
      return "tab"
    }
    show() {
      const t = this._element
      if (this._elemIsActive(t)) return
      const e = this._getActiveElem(),
        i = e ? I.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null
      I.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e))
    }
    _activate(t, e) {
      t &&
        (t.classList.add(An),
        this._activate(z.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                I.trigger(t, "shown.bs.tab", { relatedTarget: e }))
              : t.classList.add(Tn)
          },
          t,
          t.classList.contains(En)
        ))
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(An),
        t.blur(),
        this._deactivate(z.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                I.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
              : t.classList.remove(Tn)
          },
          t,
          t.classList.contains(En)
        ))
    }
    _keydown(t) {
      if (![bn, vn, yn, wn].includes(t.key)) return
      t.stopPropagation(), t.preventDefault()
      const e = [vn, wn].includes(t.key),
        i = g(
          this._getChildren().filter((t) => !r(t)),
          t.target,
          e,
          !0
        )
      i && (i.focus({ preventScroll: !0 }), xn.getOrCreateInstance(i).show())
    }
    _getChildren() {
      return z.find(On, this._parent)
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist")
      for (const t of e) this._setInitialAttributesOnChild(t)
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t)
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t)
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = z.getElementFromSelector(t)
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t)
      if (!i.classList.contains("dropdown")) return
      const n = (t, n) => {
        const s = z.findOne(t, i)
        s && s.classList.toggle(n, e)
      }
      n(".dropdown-toggle", An),
        n(".dropdown-menu", Tn),
        i.setAttribute("aria-expanded", e)
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i)
    }
    _elemIsActive(t) {
      return t.classList.contains(An)
    }
    _getInnerElement(t) {
      return t.matches(On) ? t : z.findOne(On, t)
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xn.getOrCreateInstance(this)
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`)
          e[t]()
        }
      })
    }
  }
  I.on(document, "click.bs.tab", Cn, function (t) {
    ;["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      r(this) || xn.getOrCreateInstance(this).show()
  }),
    I.on(window, "load.bs.tab", () => {
      for (const t of z.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        xn.getOrCreateInstance(t)
    }),
    f(xn)
  const kn = "hide",
    Ln = "show",
    Sn = "showing",
    Dn = { animation: "boolean", autohide: "boolean", delay: "number" },
    In = { animation: !0, autohide: !0, delay: 5e3 }
  class Nn extends W {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners()
    }
    static get Default() {
      return In
    }
    static get DefaultType() {
      return Dn
    }
    static get NAME() {
      return "toast"
    }
    show() {
      I.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(kn),
        c(this._element),
        this._element.classList.add(Ln, Sn),
        this._queueCallback(
          () => {
            this._element.classList.remove(Sn),
              I.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide()
          },
          this._element,
          this._config.animation
        ))
    }
    hide() {
      this.isShown() &&
        (I.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Sn),
          this._queueCallback(
            () => {
              this._element.classList.add(kn),
                this._element.classList.remove(Sn, Ln),
                I.trigger(this._element, "hidden.bs.toast")
            },
            this._element,
            this._config.animation
          )))
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Ln),
        super.dispose()
    }
    isShown() {
      return this._element.classList.contains(Ln)
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide()
          }, this._config.delay)))
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e
          break
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e
      }
      if (e) return void this._clearTimeout()
      const i = t.relatedTarget
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide()
    }
    _setListeners() {
      I.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        I.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        I.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        I.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        )
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null)
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Nn.getOrCreateInstance(this, t)
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
          e[t](this)
        }
      })
    }
  }
  return (
    R(Nn),
    f(Nn),
    {
      Alert: q,
      Button: K,
      Carousel: rt,
      Collapse: ft,
      Dropdown: ci,
      Modal: Ii,
      Offcanvas: Bi,
      Popover: dn,
      ScrollSpy: _n,
      Tab: xn,
      Toast: Nn,
      Tooltip: ln,
    }
  )
})
//# sourceMappingURL=bootstrap.bundle.min.js.map

!(function (t) {
  "use strict"
  t.fn.countUp = function (e) {
    var a = t.extend({ time: 2e3, delay: 10 }, e)
    return this.each(function () {
      var e = t(this),
        n = a,
        u = function () {
          e.data("counterupTo") || e.data("counterupTo", e.text())
          var t =
              parseInt(e.data("counter-time")) > 0
                ? parseInt(e.data("counter-time"))
                : n.time,
            a =
              parseInt(e.data("counter-delay")) > 0
                ? parseInt(e.data("counter-delay"))
                : n.delay,
            u = t / a,
            r = e.data("counterupTo"),
            o = [r],
            c = /[0-9]+,[0-9]+/.test(r)
          r = r.replace(/,/g, "")
          for (
            var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)),
              s = d ? (r.split(".")[1] || []).length : 0,
              i = u;
            i >= 1;
            i--
          ) {
            var p = parseInt(Math.round((r / u) * i))
            if ((d && (p = parseFloat((r / u) * i).toFixed(s)), c))
              for (; /(\d+)(\d{3})/.test(p.toString()); )
                p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2")
            o.unshift(p)
          }
          e.data("counterup-nums", o), e.text("0")
          var f = function () {
            e.text(e.data("counterup-nums").shift()),
              e.data("counterup-nums").length
                ? setTimeout(e.data("counterup-func"), a)
                : (delete e.data("counterup-nums"),
                  e.data("counterup-nums", null),
                  e.data("counterup-func", null))
          }
          e.data("counterup-func", f), setTimeout(e.data("counterup-func"), a)
        }
      e.waypoint(u, { offset: "100%", triggerOnce: !0 })
    })
  }
})(jQuery)

;(function (factory) {
  "use strict"
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"))
  } else {
    factory(jQuery)
  }
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
        $this = $(this),
        $marqueeWrapper,
        containerWidth,
        animationCss,
        verticalDir,
        elWidth,
        loopCount = 3,
        playState = "animation-play-state",
        css3AnimationIsSupported = false,
        _prefixedEvent = function (element, type, callback) {
          var pfx = ["webkit", "moz", "MS", "o", ""]
          for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase()
            element.addEventListener(pfx[p] + type, callback, false)
          }
        },
        _objToString = function (obj) {
          var tabjson = []
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
              tabjson.push(p + ":" + obj[p])
            }
          }
          tabjson.push()
          return "{" + tabjson.join(",") + "}"
        },
        _startAnimationWithDelay = function () {
          $this.timer = setTimeout(animate, o.delayBeforeStart)
        },
        methods = {
          pause: function () {
            if (css3AnimationIsSupported && o.allowCss3Support) {
              $marqueeWrapper.css(playState, "paused")
            } else {
              if ($.fn.pause) {
                $marqueeWrapper.pause()
              }
            }
            $this.data("runningStatus", "paused")
            $this.trigger("paused")
          },
          resume: function () {
            if (css3AnimationIsSupported && o.allowCss3Support) {
              $marqueeWrapper.css(playState, "running")
            } else {
              if ($.fn.resume) {
                $marqueeWrapper.resume()
              }
            }
            $this.data("runningStatus", "resumed")
            $this.trigger("resumed")
          },
          toggle: function () {
            methods[
              $this.data("runningStatus") === "resumed" ? "pause" : "resume"
            ]()
          },
          destroy: function () {
            clearTimeout($this.timer)
            $this.find("*").addBack().off()
            $this.html($this.find(".js-marquee:first").html())
          },
        }
      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper")
          }
          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true
          }
          methods[options]()
        }
        return
      }
      var dataAttributes = {},
        attr
      $.each(o, function (key) {
        attr = $this.attr("data-" + key)
        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true
              break
            case "false":
              attr = false
              break
          }
          o[key] = attr
        }
      })
      if (o.speed) {
        o.duration = (parseInt($this.width(), 10) / o.speed) * 1e3
      }
      verticalDir = o.direction === "up" || o.direction === "down"
      o.gap = o.duplicated ? parseInt(o.gap) : 0
      $this.wrapInner('<div class="js-marquee"></div>')
      var $el = $this
        .find(".js-marquee")
        .css({ "margin-right": o.gap, float: "left" })
      if (o.duplicated) {
        $el.clone(true).appendTo($this)
      }
      $this.wrapInner(
        '<div style="width:100000px" class="js-marquee-wrapper"></div>'
      )
      $marqueeWrapper = $this.find(".js-marquee-wrapper")
      if (verticalDir) {
        var containerHeight = $this.height()
        $marqueeWrapper.removeAttr("style")
        $this.height(containerHeight)
        $this
          .find(".js-marquee")
          .css({ float: "none", "margin-bottom": o.gap, "margin-right": 0 })
        if (o.duplicated) {
          $this.find(".js-marquee:last").css({ "margin-bottom": 0 })
        }
        var elHeight = $this.find(".js-marquee:first").height() + o.gap
        if (o.startVisible && !o.duplicated) {
          o._completeDuration =
            ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) /
              parseInt(containerHeight, 10)) *
            o.duration
          o.duration =
            (parseInt(elHeight, 10) / parseInt(containerHeight, 10)) *
            o.duration
        } else {
          o.duration =
            ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) /
              parseInt(containerHeight, 10)) *
            o.duration
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap
        containerWidth = $this.width()
        if (o.startVisible && !o.duplicated) {
          o._completeDuration =
            ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) /
              parseInt(containerWidth, 10)) *
            o.duration
          o.duration =
            (parseInt(elWidth, 10) / parseInt(containerWidth, 10)) * o.duration
        } else {
          o.duration =
            ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) /
              parseInt(containerWidth, 10)) *
            o.duration
        }
      }
      if (o.duplicated) {
        o.duration = o.duration / 2
      }
      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
          animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
          domPrefixes = "Webkit Moz O ms Khtml".split(" "),
          animationString = "animation",
          animationCss3Str = "",
          keyframeString = ""
        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " "
          css3AnimationIsSupported = true
        }
        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-"
              animationString = prefix + animationString
              playState = prefix + playState
              keyframeString = "@" + prefix + "keyframes " + animationName + " "
              css3AnimationIsSupported = true
              break
            }
          }
        }
        if (css3AnimationIsSupported) {
          animationCss3Str =
            animationName +
            " " +
            o.duration / 1e3 +
            "s " +
            o.delayBeforeStart / 1e3 +
            "s infinite " +
            o.css3easing
          $this.data("css3AnimationIsSupported", true)
        }
      }
      var _rePositionVertically = function () {
          $marqueeWrapper.css(
            "transform",
            "translateY(" +
              (o.direction === "up"
                ? containerHeight + "px"
                : "-" + elHeight + "px") +
              ")"
          )
        },
        _rePositionHorizontally = function () {
          $marqueeWrapper.css(
            "transform",
            "translateX(" +
              (o.direction === "left"
                ? containerWidth + "px"
                : "-" + elWidth + "px") +
              ")"
          )
        }
      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)")
          } else {
            $marqueeWrapper.css(
              "transform",
              "translateY(" +
                (o.direction === "up"
                  ? containerHeight + "px"
                  : "-" + (elHeight * 2 - o.gap) + "px") +
                ")"
            )
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)")
          } else {
            $marqueeWrapper.css(
              "transform",
              "translateX(" +
                (o.direction === "left"
                  ? containerWidth + "px"
                  : "-" + (elWidth * 2 - o.gap) + "px") +
                ")"
            )
          }
        }
        if (!o.startVisible) {
          loopCount = 1
        }
      } else if (o.startVisible) {
        loopCount = 2
      } else {
        if (verticalDir) {
          _rePositionVertically()
        } else {
          _rePositionHorizontally()
        }
      }
      var animate = function () {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration
            if (verticalDir) {
              o.duration =
                o.direction === "up"
                  ? o.duration + containerHeight / (elHeight / o.duration)
                  : o.duration * 2
            } else {
              o.duration =
                o.direction === "left"
                  ? o.duration + containerWidth / (elWidth / o.duration)
                  : o.duration * 2
            }
            if (animationCss3Str) {
              animationCss3Str =
                animationName +
                " " +
                o.duration / 1e3 +
                "s " +
                o.delayBeforeStart / 1e3 +
                "s " +
                o.css3easing
            }
            loopCount++
          } else if (loopCount === 2) {
            o.duration = o._originalDuration
            if (animationCss3Str) {
              animationName = animationName + "0"
              keyframeString = $.trim(keyframeString) + "0 "
              animationCss3Str =
                animationName +
                " " +
                o.duration / 1e3 +
                "s 0s infinite " +
                o.css3easing
            }
            loopCount++
          }
        }
        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css(
                "transform",
                "translateY(" +
                  (o.direction === "up" ? 0 : "-" + elHeight + "px") +
                  ")"
              )
            }
            animationCss = {
              transform:
                "translateY(" +
                (o.direction === "up" ? "-" + elHeight + "px" : 0) +
                ")",
            }
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str =
                  animationName +
                  " " +
                  o.duration / 1e3 +
                  "s " +
                  o.delayBeforeStart / 1e3 +
                  "s " +
                  o.css3easing
              }
              animationCss = {
                transform:
                  "translateY(" +
                  (o.direction === "up"
                    ? "-" + elHeight + "px"
                    : containerHeight + "px") +
                  ")",
              }
              loopCount++
            } else if (loopCount === 3) {
              o.duration = o._completeDuration
              if (animationCss3Str) {
                animationName = animationName + "0"
                keyframeString = $.trim(keyframeString) + "0 "
                animationCss3Str =
                  animationName +
                  " " +
                  o.duration / 1e3 +
                  "s 0s infinite " +
                  o.css3easing
              }
              _rePositionVertically()
            }
          } else {
            _rePositionVertically()
            animationCss = {
              transform:
                "translateY(" +
                (o.direction === "up"
                  ? "-" + $marqueeWrapper.height() + "px"
                  : containerHeight + "px") +
                ")",
            }
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css(
                "transform",
                "translateX(" +
                  (o.direction === "left" ? 0 : "-" + elWidth + "px") +
                  ")"
              )
            }
            animationCss = {
              transform:
                "translateX(" +
                (o.direction === "left" ? "-" + elWidth + "px" : 0) +
                ")",
            }
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str =
                  animationName +
                  " " +
                  o.duration / 1e3 +
                  "s " +
                  o.delayBeforeStart / 1e3 +
                  "s " +
                  o.css3easing
              }
              animationCss = {
                transform:
                  "translateX(" +
                  (o.direction === "left"
                    ? "-" + elWidth + "px"
                    : containerWidth + "px") +
                  ")",
              }
              loopCount++
            } else if (loopCount === 3) {
              o.duration = o._completeDuration
              if (animationCss3Str) {
                animationName = animationName + "0"
                keyframeString = $.trim(keyframeString) + "0 "
                animationCss3Str =
                  animationName +
                  " " +
                  o.duration / 1e3 +
                  "s 0s infinite " +
                  o.css3easing
              }
              _rePositionHorizontally()
            }
          } else {
            _rePositionHorizontally()
            animationCss = {
              transform:
                "translateX(" +
                (o.direction === "left"
                  ? "-" + elWidth + "px"
                  : containerWidth + "px") +
                ")",
            }
          }
        }
        $this.trigger("beforeStarting")
        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str)
          var keyframeCss =
              keyframeString + " { 100%  " + _objToString(animationCss) + "}",
            $styles = $marqueeWrapper.find("style")
          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss)
          } else {
            $("head").append("<style>" + keyframeCss + "</style>")
          }
          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished")
          })
          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate()
            $this.trigger("finished")
          })
        } else {
          $marqueeWrapper.animate(
            animationCss,
            o.duration,
            o.easing,
            function () {
              $this.trigger("finished")
              if (o.pauseOnCycle) {
                _startAnimationWithDelay()
              } else {
                animate()
              }
            }
          )
        }
        $this.data("runningStatus", "resumed")
      }
      $this.on("pause", methods.pause)
      $this.on("resume", methods.resume)
      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause)
        $this.on("mouseleave", methods.resume)
      }
      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate()
      } else {
        _startAnimationWithDelay()
      }
    })
  }
  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false,
  }
})

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict"
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor")
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor")
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor")
    ;(this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1)
  }
  var e = 0,
    i = {}
  ;(t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t)
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key]
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this
    }),
    (t.prototype.next = function () {
      return this.group.next(this)
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this)
    }),
    (t.invokeAll = function (t) {
      var e = []
      for (var o in i) e.push(i[o])
      for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy")
    }),
    (t.disableAll = function () {
      t.invokeAll("disable")
    }),
    (t.enableAll = function () {
      t.invokeAll("enable")
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll()
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth()
      },
    }),
    (window.Waypoint = t)
})(),
  (function () {
    "use strict"
    function t(t) {
      window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
      ;(this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload
    ;(e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical"
      ;(this.waypoints[e][t.key] = t), this.refresh()
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical)
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1)
        }
        var e = this
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t))
        })
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1)
        }
        var e = this
        this.adapter.on("scroll.waypoints", function () {
          ;(!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t))
        })
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll()
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          }
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h
            ;(p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group))
          }
        }
        for (var c in t) t[c].flushTriggers()
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight()
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth()
      }),
      (e.prototype.destroy = function () {
        var t = []
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i])
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {}
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          })
        for (var r in t) {
          var s = t[r]
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
          }),
          this
        )
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh()
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey]
      }),
      (window.onload = function () {
        r && r(), e.refreshAll()
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        i.call(window, e)
      }),
      (n.Context = e)
  })(),
  (function () {
    "use strict"
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
      ;(this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this)
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint
    ;(i.prototype.add = function (t) {
      this.waypoints.push(t)
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i
          o.sort(n ? e : t)
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r]
            ;(a.options.continuous || r === o.length - 1) && a.trigger([i])
          }
        }
        this.clearTriggerQueues()
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t)
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1
        return o ? null : this.waypoints[i + 1]
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t)
        var i = n.Adapter.inArray(e, this.waypoints)
        return i ? this.waypoints[i - 1] : null
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints)
        e > -1 && this.waypoints.splice(e, 1)
      }),
      (i.prototype.first = function () {
        return this.waypoints[0]
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
      }),
      (n.Group = i)
  })(),
  (function () {
    "use strict"
    function t(t) {
      this.$element = e(t)
    }
    var e = window.jQuery,
      i = window.Waypoint
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments)
          return this.$element[i].apply(this.$element, t)
        }
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t)
  })(),
  (function () {
    "use strict"
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0]
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this })
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n))
          }),
          i
        )
      }
    }
    var e = window.Waypoint
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
  })()

;(function (factory) {
  "use strict"
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"))
  } else {
    factory(jQuery)
  }
})(function ($) {
  "use strict"
  var Slick = window.Slick || {}
  Slick = (function () {
    var instanceUid = 0
    function Slick(element, settings) {
      var _ = this,
        dataSettings
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1)
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3,
      }
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false,
      }
      $.extend(_, _.initials)
      _.activeBreakpoint = null
      _.animType = null
      _.animProp = null
      _.breakpoints = []
      _.breakpointSettings = []
      _.cssTransitions = false
      _.focussed = false
      _.interrupted = false
      _.hidden = "hidden"
      _.paused = true
      _.positionProp = null
      _.respondTo = null
      _.rowCount = 1
      _.shouldClick = true
      _.$slider = $(element)
      _.$slidesCache = null
      _.transformType = null
      _.transitionType = null
      _.visibilityChange = "visibilitychange"
      _.windowWidth = 0
      _.windowTimer = null
      dataSettings = $(element).data("slick") || {}
      _.options = $.extend({}, _.defaults, settings, dataSettings)
      _.currentSlide = _.options.initialSlide
      _.originalSettings = _.options
      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden"
        _.visibilityChange = "mozvisibilitychange"
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden"
        _.visibilityChange = "webkitvisibilitychange"
      }
      _.autoPlay = $.proxy(_.autoPlay, _)
      _.autoPlayClear = $.proxy(_.autoPlayClear, _)
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _)
      _.changeSlide = $.proxy(_.changeSlide, _)
      _.clickHandler = $.proxy(_.clickHandler, _)
      _.selectHandler = $.proxy(_.selectHandler, _)
      _.setPosition = $.proxy(_.setPosition, _)
      _.swipeHandler = $.proxy(_.swipeHandler, _)
      _.dragHandler = $.proxy(_.dragHandler, _)
      _.keyHandler = $.proxy(_.keyHandler, _)
      _.instanceUid = instanceUid++
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/
      _.registerBreakpoints()
      _.init(true)
    }
    return Slick
  })()
  Slick.prototype.activateADA = function () {
    var _ = this
    _.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" })
  }
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
    markup,
    index,
    addBefore
  ) {
    var _ = this
    if (typeof index === "boolean") {
      addBefore = index
      index = null
    } else if (index < 0 || index >= _.slideCount) {
      return false
    }
    _.unload()
    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack)
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index))
      } else {
        $(markup).insertAfter(_.$slides.eq(index))
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack)
      } else {
        $(markup).appendTo(_.$slideTrack)
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide)
    _.$slideTrack.children(this.options.slide).detach()
    _.$slideTrack.append(_.$slides)
    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index)
    })
    _.$slidesCache = _.$slides
    _.reinit()
  }
  Slick.prototype.animateHeight = function () {
    var _ = this
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true)
      _.$list.animate({ height: targetHeight }, _.options.speed)
    }
  }
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this
    _.animateHeight()
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate(
          { left: targetLeft },
          _.options.speed,
          _.options.easing,
          callback
        )
      } else {
        _.$slideTrack.animate(
          { top: targetLeft },
          _.options.speed,
          _.options.easing,
          callback
        )
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft
        }
        $({ animStart: _.currentLeft }).animate(
          { animStart: targetLeft },
          {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function (now) {
              now = Math.ceil(now)
              if (_.options.vertical === false) {
                animProps[_.animType] = "translate(" + now + "px, 0px)"
                _.$slideTrack.css(animProps)
              } else {
                animProps[_.animType] = "translate(0px," + now + "px)"
                _.$slideTrack.css(animProps)
              }
            },
            complete: function () {
              if (callback) {
                callback.call()
              }
            },
          }
        )
      } else {
        _.applyTransition()
        targetLeft = Math.ceil(targetLeft)
        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)"
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)"
        }
        _.$slideTrack.css(animProps)
        if (callback) {
          setTimeout(function () {
            _.disableTransition()
            callback.call()
          }, _.options.speed)
        }
      }
    }
  }
  Slick.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider)
    }
    return asNavFor
  }
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget()
    if (asNavFor !== null && typeof asNavFor === "object") {
      asNavFor.each(function () {
        var target = $(this).slick("getSlick")
        if (!target.unslicked) {
          target.slideHandler(index, true)
        }
      })
    }
  }
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {}
    if (_.options.fade === false) {
      transition[_.transitionType] =
        _.transformType + " " + _.options.speed + "ms " + _.options.cssEase
    } else {
      transition[_.transitionType] =
        "opacity " + _.options.speed + "ms " + _.options.cssEase
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition)
    } else {
      _.$slides.eq(slide).css(transition)
    }
  }
  Slick.prototype.autoPlay = function () {
    var _ = this
    _.autoPlayClear()
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed)
    }
  }
  Slick.prototype.autoPlayClear = function () {
    var _ = this
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer)
    }
  }
  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll
          if (_.currentSlide - 1 === 0) {
            _.direction = 1
          }
        }
      }
      _.slideHandler(slideTo)
    }
  }
  Slick.prototype.buildArrows = function () {
    var _ = this
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow")
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow")
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex")
        _.$nextArrow
          .removeClass("slick-hidden")
          .removeAttr("aria-hidden tabindex")
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows)
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows)
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
        }
      } else {
        _.$prevArrow
          .add(_.$nextArrow)
          .addClass("slick-hidden")
          .attr({ "aria-disabled": "true", tabindex: "-1" })
      }
    }
  }
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dot
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass("slick-dotted")
      dot = $("<ul />").addClass(_.options.dotsClass)
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($("<li />").append(_.options.customPaging.call(this, _, i)))
      }
      _.$dots = dot.appendTo(_.options.appendDots)
      _.$dots.find("li").first().addClass("slick-active")
    }
  }
  Slick.prototype.buildOut = function () {
    var _ = this
    _.$slides = _.$slider
      .children(_.options.slide + ":not(.slick-cloned)")
      .addClass("slick-slide")
    _.slideCount = _.$slides.length
    _.$slides.each(function (index, element) {
      $(element)
        .attr("data-slick-index", index)
        .data("originalStyling", $(element).attr("style") || "")
    })
    _.$slider.addClass("slick-slider")
    _.$slideTrack =
      _.slideCount === 0
        ? $('<div class="slick-track"/>').appendTo(_.$slider)
        : _.$slides.wrapAll('<div class="slick-track"/>').parent()
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent()
    _.$slideTrack.css("opacity", 0)
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1
    }
    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading")
    _.setupInfinite()
    _.buildArrows()
    _.buildDots()
    _.updateDots()
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0)
    if (_.options.draggable === true) {
      _.$list.addClass("draggable")
    }
  }
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection
    newSlides = document.createDocumentFragment()
    originalSlides = _.$slider.children()
    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection)
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div")
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div")
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c)
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target))
            }
          }
          slide.appendChild(row)
        }
        newSlides.appendChild(slide)
      }
      _.$slider.empty().append(newSlides)
      _.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / _.options.slidesPerRow + "%",
          display: "inline-block",
        })
    }
  }
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false
    var sliderWidth = _.$slider.width()
    var windowWidth = window.innerWidth || $(window).width()
    if (_.respondTo === "window") {
      respondToWidth = windowWidth
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth
    } else if (_.respondTo === "min") {
      respondToWidth = Math.min(windowWidth, sliderWidth)
    }
    if (
      _.options.responsive &&
      _.options.responsive.length &&
      _.options.responsive !== null
    ) {
      targetBreakpoint = null
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint]
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint]
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint
            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint)
            } else {
              _.options = $.extend(
                {},
                _.originalSettings,
                _.breakpointSettings[targetBreakpoint]
              )
              if (initial === true) {
                _.currentSlide = _.options.initialSlide
              }
              _.refresh(initial)
            }
            triggerBreakpoint = targetBreakpoint
          }
        } else {
          _.activeBreakpoint = targetBreakpoint
          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint)
          } else {
            _.options = $.extend(
              {},
              _.originalSettings,
              _.breakpointSettings[targetBreakpoint]
            )
            if (initial === true) {
              _.currentSlide = _.options.initialSlide
            }
            _.refresh(initial)
          }
          triggerBreakpoint = targetBreakpoint
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null
          _.options = _.originalSettings
          if (initial === true) {
            _.currentSlide = _.options.initialSlide
          }
          _.refresh(initial)
          triggerBreakpoint = targetBreakpoint
        }
      }
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint])
      }
    }
  }
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset
    if ($target.is("a")) {
      event.preventDefault()
    }
    if (!$target.is("li")) {
      $target = $target.closest("li")
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0
    indexOffset = unevenOffset
      ? 0
      : (_.slideCount - _.currentSlide) % _.options.slidesToScroll
    switch (event.data.message) {
      case "previous":
        slideOffset =
          indexOffset === 0
            ? _.options.slidesToScroll
            : _.options.slidesToShow - indexOffset
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate)
        }
        break
      case "next":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate)
        }
        break
      case "index":
        var index =
          event.data.index === 0
            ? 0
            : event.data.index || $target.index() * _.options.slidesToScroll
        _.slideHandler(_.checkNavigable(index), false, dontAnimate)
        $target.children().trigger("focus")
        break
      default:
        return
    }
  }
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable
    navigables = _.getNavigableIndexes()
    prevNavigable = 0
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1]
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable
          break
        }
        prevNavigable = navigables[n]
      }
    }
    return index
  }
  Slick.prototype.cleanUpEvents = function () {
    var _ = this
    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots)
        .off("click.slick", _.changeSlide)
        .off("mouseenter.slick", $.proxy(_.interrupt, _, true))
        .off("mouseleave.slick", $.proxy(_.interrupt, _, false))
      if (_.options.accessibility === true) {
        _.$dots.off("keydown.slick", _.keyHandler)
      }
    }
    _.$slider.off("focus.slick blur.slick")
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide)
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide)
      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler)
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler)
      }
    }
    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler)
    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler)
    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler)
    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler)
    _.$list.off("click.slick", _.clickHandler)
    $(document).off(_.visibilityChange, _.visibility)
    _.cleanUpSlideEvents()
    if (_.options.accessibility === true) {
      _.$list.off("keydown.slick", _.keyHandler)
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off("click.slick", _.selectHandler)
    }
    $(window).off(
      "orientationchange.slick.slick-" + _.instanceUid,
      _.orientationChange
    )
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize)
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault)
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition)
  }
  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this
    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true))
    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false))
  }
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides
    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children()
      originalSlides.removeAttr("style")
      _.$slider.empty().append(originalSlides)
    }
  }
  Slick.prototype.clickHandler = function (event) {
    var _ = this
    if (_.shouldClick === false) {
      event.stopImmediatePropagation()
      event.stopPropagation()
      event.preventDefault()
    }
  }
  Slick.prototype.destroy = function (refresh) {
    var _ = this
    _.autoPlayClear()
    _.touchObject = {}
    _.cleanUpEvents()
    $(".slick-cloned", _.$slider).detach()
    if (_.$dots) {
      _.$dots.remove()
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "")
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove()
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", "")
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove()
      }
    }
    if (_.$slides) {
      _.$slides
        .removeClass(
          "slick-slide slick-active slick-center slick-visible slick-current"
        )
        .removeAttr("aria-hidden")
        .removeAttr("data-slick-index")
        .each(function () {
          $(this).attr("style", $(this).data("originalStyling"))
        })
      _.$slideTrack.children(this.options.slide).detach()
      _.$slideTrack.detach()
      _.$list.detach()
      _.$slider.append(_.$slides)
    }
    _.cleanUpRows()
    _.$slider.removeClass("slick-slider")
    _.$slider.removeClass("slick-initialized")
    _.$slider.removeClass("slick-dotted")
    _.unslicked = true
    if (!refresh) {
      _.$slider.trigger("destroy", [_])
    }
  }
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {}
    transition[_.transitionType] = ""
    if (_.options.fade === false) {
      _.$slideTrack.css(transition)
    } else {
      _.$slides.eq(slide).css(transition)
    }
  }
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex })
      _.$slides
        .eq(slideIndex)
        .animate({ opacity: 1 }, _.options.speed, _.options.easing, callback)
    } else {
      _.applyTransition(slideIndex)
      _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex })
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex)
          callback.call()
        }, _.options.speed)
      }
    }
  }
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this
    if (_.cssTransitions === false) {
      _.$slides
        .eq(slideIndex)
        .animate(
          { opacity: 0, zIndex: _.options.zIndex - 2 },
          _.options.speed,
          _.options.easing
        )
    } else {
      _.applyTransition(slideIndex)
      _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 })
    }
  }
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
    filter
  ) {
    var _ = this
    if (filter !== null) {
      _.$slidesCache = _.$slides
      _.unload()
      _.$slideTrack.children(this.options.slide).detach()
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack)
      _.reinit()
    }
  }
  Slick.prototype.focusHandler = function () {
    var _ = this
    _.$slider
      .off("focus.slick blur.slick")
      .on("focus.slick", "*", function (event) {
        var $sf = $(this)
        setTimeout(function () {
          if (_.options.pauseOnFocus) {
            if ($sf.is(":focus")) {
              _.focussed = true
              _.autoPlay()
            }
          }
        }, 0)
      })
      .on("blur.slick", "*", function (event) {
        var $sf = $(this)
        if (_.options.pauseOnFocus) {
          _.focussed = false
          _.autoPlay()
        }
      })
  }
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this
    return _.currentSlide
  }
  Slick.prototype.getDotCount = function () {
    var _ = this
    var breakPoint = 0
    var counter = 0
    var pagerQty = 0
    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty
          breakPoint = counter + _.options.slidesToScroll
          counter +=
            _.options.slidesToScroll <= _.options.slidesToShow
              ? _.options.slidesToScroll
              : _.options.slidesToShow
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount
    } else if (!_.options.asNavFor) {
      pagerQty =
        1 +
        Math.ceil(
          (_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll
        )
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty
        breakPoint = counter + _.options.slidesToScroll
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow
      }
    }
    return pagerQty - 1
  }
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef
    _.slideOffset = 0
    verticalHeight = _.$slides.first().outerHeight(true)
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1
        coef = -1
        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5
          } else if (_.options.slidesToShow === 1) {
            coef = -2
          }
        }
        verticalOffset = verticalHeight * _.options.slidesToShow * coef
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (
          slideIndex + _.options.slidesToScroll > _.slideCount &&
          _.slideCount > _.options.slidesToShow
        ) {
          if (slideIndex > _.slideCount) {
            _.slideOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              _.slideWidth *
              -1
            verticalOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              verticalHeight *
              -1
          } else {
            _.slideOffset =
              (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1
            verticalOffset =
              (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth
        verticalOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0
      verticalOffset = 0
    }
    if (
      _.options.centerMode === true &&
      _.slideCount <= _.options.slidesToShow
    ) {
      _.slideOffset =
        (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
        (_.slideWidth * _.slideCount) / 2
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset +=
        _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset
    }
    if (_.options.variableWidth === true) {
      if (
        _.slideCount <= _.options.slidesToShow ||
        _.options.infinite === false
      ) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex)
      } else {
        targetSlide = _.$slideTrack
          .children(".slick-slide")
          .eq(slideIndex + _.options.slidesToShow)
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft =
            (_.$slideTrack.width() -
              targetSlide[0].offsetLeft -
              targetSlide.width()) *
            -1
        } else {
          targetLeft = 0
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
      }
      if (_.options.centerMode === true) {
        if (
          _.slideCount <= _.options.slidesToShow ||
          _.options.infinite === false
        ) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex)
        } else {
          targetSlide = _.$slideTrack
            .children(".slick-slide")
            .eq(slideIndex + _.options.slidesToShow + 1)
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft =
              (_.$slideTrack.width() -
                targetSlide[0].offsetLeft -
                targetSlide.width()) *
              -1
          } else {
            targetLeft = 0
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2
      }
    }
    return targetLeft
  }
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
    option
  ) {
    var _ = this
    return _.options[option]
  }
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max
    if (_.options.infinite === false) {
      max = _.slideCount
    } else {
      breakPoint = _.options.slidesToScroll * -1
      counter = _.options.slidesToScroll * -1
      max = _.slideCount * 2
    }
    while (breakPoint < max) {
      indexes.push(breakPoint)
      breakPoint = counter + _.options.slidesToScroll
      counter +=
        _.options.slidesToScroll <= _.options.slidesToShow
          ? _.options.slidesToScroll
          : _.options.slidesToShow
    }
    return indexes
  }
  Slick.prototype.getSlick = function () {
    return this
  }
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      swipeTarget,
      centerOffset
    centerOffset =
      _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0
    swipeTarget = _.swipeLeft * -1 + centerOffset
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary
        slideOuterWidth = $(slide).outerWidth()
        slideOffset = slide.offsetLeft
        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2
        }
        slideRightBoundary = slideOffset + slideOuterWidth
        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide
          return false
        }
      })
      slidesTraversed =
        Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1
      return slidesTraversed
    } else {
      return _.options.slidesToScroll
    }
  }
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
    slide,
    dontAnimate
  ) {
    var _ = this
    _.changeSlide(
      { data: { message: "index", index: parseInt(slide) } },
      dontAnimate
    )
  }
  Slick.prototype.init = function (creation) {
    var _ = this
    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized")
      _.buildRows()
      _.buildOut()
      _.setProps()
      _.startLoad()
      _.loadSlider()
      _.initializeEvents()
      _.updateArrows()
      _.updateDots()
      _.checkResponsive(true)
      _.focusHandler()
    }
    if (creation) {
      _.$slider.trigger("init", [_])
    }
    if (_.options.accessibility === true) {
      _.initADA()
    }
    if (_.options.autoplay) {
      _.paused = false
      _.autoPlay()
    }
  }
  Slick.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount
      })
    _.$slides
      .add(_.$slideTrack.find(".slick-cloned"))
      .attr({ "aria-hidden": "true", tabindex: "-1" })
      .find("a, input, button, select")
      .attr({ tabindex: "-1" })
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i)
        $(this).attr({
          role: "tabpanel",
          id: "slick-slide" + _.instanceUid + i,
          tabindex: -1,
        })
        if (slideControlIndex !== -1) {
          var ariaButtonControl =
            "slick-slide-control" + _.instanceUid + slideControlIndex
          if ($("#" + ariaButtonControl).length) {
            $(this).attr({ "aria-describedby": ariaButtonControl })
          }
        }
      })
      _.$dots
        .attr("role", "tablist")
        .find("li")
        .each(function (i) {
          var mappedSlideIndex = tabControlIndexes[i]
          $(this).attr({ role: "presentation" })
          $(this)
            .find("button")
            .first()
            .attr({
              role: "tab",
              id: "slick-slide-control" + _.instanceUid + i,
              "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
              "aria-label": i + 1 + " of " + numDotGroups,
              "aria-selected": null,
              tabindex: "-1",
            })
        })
        .eq(_.currentSlide)
        .find("button")
        .attr({ "aria-selected": "true", tabindex: "0" })
        .end()
    }
    for (
      var i = _.currentSlide, max = i + _.options.slidesToShow;
      i < max;
      i++
    ) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({ tabindex: "0" })
      } else {
        _.$slides.eq(i).removeAttr("tabindex")
      }
    }
    _.activateADA()
  }
  Slick.prototype.initArrowEvents = function () {
    var _ = this
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow
        .off("click.slick")
        .on("click.slick", { message: "previous" }, _.changeSlide)
      _.$nextArrow
        .off("click.slick")
        .on("click.slick", { message: "next" }, _.changeSlide)
      if (_.options.accessibility === true) {
        _.$prevArrow.on("keydown.slick", _.keyHandler)
        _.$nextArrow.on("keydown.slick", _.keyHandler)
      }
    }
  }
  Slick.prototype.initDotEvents = function () {
    var _ = this
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("click.slick", { message: "index" }, _.changeSlide)
      if (_.options.accessibility === true) {
        _.$dots.on("keydown.slick", _.keyHandler)
      }
    }
    if (
      _.options.dots === true &&
      _.options.pauseOnDotsHover === true &&
      _.slideCount > _.options.slidesToShow
    ) {
      $("li", _.$dots)
        .on("mouseenter.slick", $.proxy(_.interrupt, _, true))
        .on("mouseleave.slick", $.proxy(_.interrupt, _, false))
    }
  }
  Slick.prototype.initSlideEvents = function () {
    var _ = this
    if (_.options.pauseOnHover) {
      _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true))
      _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false))
    }
  }
  Slick.prototype.initializeEvents = function () {
    var _ = this
    _.initArrowEvents()
    _.initDotEvents()
    _.initSlideEvents()
    _.$list.on(
      "touchstart.slick mousedown.slick",
      { action: "start" },
      _.swipeHandler
    )
    _.$list.on(
      "touchmove.slick mousemove.slick",
      { action: "move" },
      _.swipeHandler
    )
    _.$list.on(
      "touchend.slick mouseup.slick",
      { action: "end" },
      _.swipeHandler
    )
    _.$list.on(
      "touchcancel.slick mouseleave.slick",
      { action: "end" },
      _.swipeHandler
    )
    _.$list.on("click.slick", _.clickHandler)
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _))
    if (_.options.accessibility === true) {
      _.$list.on("keydown.slick", _.keyHandler)
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler)
    }
    $(window).on(
      "orientationchange.slick.slick-" + _.instanceUid,
      $.proxy(_.orientationChange, _)
    )
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _))
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault)
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition)
    $(_.setPosition)
  }
  Slick.prototype.initUI = function () {
    var _ = this
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show()
      _.$nextArrow.show()
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show()
    }
  }
  Slick.prototype.keyHandler = function (event) {
    var _ = this
    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: { message: _.options.rtl === true ? "next" : "previous" },
        })
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: { message: _.options.rtl === true ? "previous" : "next" },
        })
      }
    }
  }
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd
    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr("data-lazy"),
          imageSrcSet = $(this).attr("data-srcset"),
          imageSizes =
            $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
          imageToLoad = document.createElement("img")
        imageToLoad.onload = function () {
          image.animate({ opacity: 0 }, 100, function () {
            if (imageSrcSet) {
              image.attr("srcset", imageSrcSet)
              if (imageSizes) {
                image.attr("sizes", imageSizes)
              }
            }
            image
              .attr("src", imageSource)
              .animate({ opacity: 1 }, 200, function () {
                image
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading")
              })
            _.$slider.trigger("lazyLoaded", [_, image, imageSource])
          })
        }
        imageToLoad.onerror = function () {
          image
            .removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error")
          _.$slider.trigger("lazyLoadError", [_, image, imageSource])
        }
        imageToLoad.src = imageSource
      })
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1)
        rangeEnd = rangeStart + _.options.slidesToShow + 2
      } else {
        rangeStart = Math.max(
          0,
          _.currentSlide - (_.options.slidesToShow / 2 + 1)
        )
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide
      }
    } else {
      rangeStart = _.options.infinite
        ? _.options.slidesToShow + _.currentSlide
        : _.currentSlide
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow)
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--
        if (rangeEnd <= _.slideCount) rangeEnd++
      }
    }
    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd)
    if (_.options.lazyLoad === "anticipated") {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find(".slick-slide")
      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1
        loadRange = loadRange.add($slides.eq(prevSlide))
        loadRange = loadRange.add($slides.eq(nextSlide))
        prevSlide--
        nextSlide++
      }
    }
    loadImages(loadRange)
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide")
      loadImages(cloneRange)
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(0, _.options.slidesToShow)
      loadImages(cloneRange)
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider
        .find(".slick-cloned")
        .slice(_.options.slidesToShow * -1)
      loadImages(cloneRange)
    }
  }
  Slick.prototype.loadSlider = function () {
    var _ = this
    _.setPosition()
    _.$slideTrack.css({ opacity: 1 })
    _.$slider.removeClass("slick-loading")
    _.initUI()
    if (_.options.lazyLoad === "progressive") {
      _.progressiveLazyLoad()
    }
  }
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this
    _.changeSlide({ data: { message: "next" } })
  }
  Slick.prototype.orientationChange = function () {
    var _ = this
    _.checkResponsive()
    _.setPosition()
  }
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this
    _.autoPlayClear()
    _.paused = true
  }
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this
    _.autoPlay()
    _.options.autoplay = true
    _.paused = false
    _.focussed = false
    _.interrupted = false
  }
  Slick.prototype.postSlide = function (index) {
    var _ = this
    if (!_.unslicked) {
      _.$slider.trigger("afterChange", [_, index])
      _.animating = false
      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition()
      }
      _.swipeLeft = null
      if (_.options.autoplay) {
        _.autoPlay()
      }
      if (_.options.accessibility === true) {
        _.initADA()
        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide))
          $currentSlide.attr("tabindex", 0).focus()
        }
      }
    }
  }
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this
    _.changeSlide({ data: { message: "previous" } })
  }
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault()
  }
  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1
    var _ = this,
      $imgsToLoad = $("img[data-lazy]", _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first()
      imageSource = image.attr("data-lazy")
      imageSrcSet = image.attr("data-srcset")
      imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes")
      imageToLoad = document.createElement("img")
      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr("srcset", imageSrcSet)
          if (imageSizes) {
            image.attr("sizes", imageSizes)
          }
        }
        image
          .attr("src", imageSource)
          .removeAttr("data-lazy data-srcset data-sizes")
          .removeClass("slick-loading")
        if (_.options.adaptiveHeight === true) {
          _.setPosition()
        }
        _.$slider.trigger("lazyLoaded", [_, image, imageSource])
        _.progressiveLazyLoad()
      }
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1)
          }, 500)
        } else {
          image
            .removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error")
          _.$slider.trigger("lazyLoadError", [_, image, imageSource])
          _.progressiveLazyLoad()
        }
      }
      imageToLoad.src = imageSource
    } else {
      _.$slider.trigger("allImagesLoaded", [_])
    }
  }
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex
    lastVisibleIndex = _.slideCount - _.options.slidesToShow
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0
    }
    currentSlide = _.currentSlide
    _.destroy(true)
    $.extend(_, _.initials, { currentSlide: currentSlide })
    _.init()
    if (!initializing) {
      _.changeSlide({ data: { message: "index", index: currentSlide } }, false)
    }
  }
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null
    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window"
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1)
            }
            l--
          }
          _.breakpoints.push(currentBreakpoint)
          _.breakpointSettings[currentBreakpoint] =
            responsiveSettings[breakpoint].settings
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a
      })
    }
  }
  Slick.prototype.reinit = function () {
    var _ = this
    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide")
    _.slideCount = _.$slides.length
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0
    }
    _.registerBreakpoints()
    _.setProps()
    _.setupInfinite()
    _.buildArrows()
    _.updateArrows()
    _.initArrowEvents()
    _.buildDots()
    _.updateDots()
    _.initDotEvents()
    _.cleanUpSlideEvents()
    _.initSlideEvents()
    _.checkResponsive(false, true)
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler)
    }
    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0)
    _.setPosition()
    _.focusHandler()
    _.paused = !_.options.autoplay
    _.autoPlay()
    _.$slider.trigger("reInit", [_])
  }
  Slick.prototype.resize = function () {
    var _ = this
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay)
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width()
        _.checkResponsive()
        if (!_.unslicked) {
          _.setPosition()
        }
      }, 50)
    }
  }
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
    index,
    removeBefore,
    removeAll
  ) {
    var _ = this
    if (typeof index === "boolean") {
      removeBefore = index
      index = removeBefore === true ? 0 : _.slideCount - 1
    } else {
      index = removeBefore === true ? --index : index
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false
    }
    _.unload()
    if (removeAll === true) {
      _.$slideTrack.children().remove()
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove()
    }
    _.$slides = _.$slideTrack.children(this.options.slide)
    _.$slideTrack.children(this.options.slide).detach()
    _.$slideTrack.append(_.$slides)
    _.$slidesCache = _.$slides
    _.reinit()
  }
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y
    if (_.options.rtl === true) {
      position = -position
    }
    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px"
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px"
    positionProps[_.positionProp] = position
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps)
    } else {
      positionProps = {}
      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")"
        _.$slideTrack.css(positionProps)
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)"
        _.$slideTrack.css(positionProps)
      }
    }
  }
  Slick.prototype.setDimensions = function () {
    var _ = this
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({ padding: "0px " + _.options.centerPadding })
      }
    } else {
      _.$list.height(
        _.$slides.first().outerHeight(true) * _.options.slidesToShow
      )
      if (_.options.centerMode === true) {
        _.$list.css({ padding: _.options.centerPadding + " 0px" })
      }
    }
    _.listWidth = _.$list.width()
    _.listHeight = _.$list.height()
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow)
      _.$slideTrack.width(
        Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length)
      )
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount)
    } else {
      _.slideWidth = Math.ceil(_.listWidth)
      _.$slideTrack.height(
        Math.ceil(
          _.$slides.first().outerHeight(true) *
            _.$slideTrack.children(".slick-slide").length
        )
      )
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width()
    if (_.options.variableWidth === false)
      _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset)
  }
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1
      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        })
      } else {
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        })
      }
    })
    _.$slides
      .eq(_.currentSlide)
      .css({ zIndex: _.options.zIndex - 1, opacity: 1 })
  }
  Slick.prototype.setHeight = function () {
    var _ = this
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === true &&
      _.options.vertical === false
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true)
      _.$list.css("height", targetHeight)
    }
  }
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
      l,
      item,
      option,
      value,
      refresh = false,
      type
    if ($.type(arguments[0]) === "object") {
      option = arguments[0]
      refresh = arguments[1]
      type = "multiple"
    } else if ($.type(arguments[0]) === "string") {
      option = arguments[0]
      value = arguments[1]
      refresh = arguments[2]
      if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
        type = "responsive"
      } else if (typeof arguments[1] !== "undefined") {
        type = "single"
      }
    }
    if (type === "single") {
      _.options[option] = value
    } else if (type === "multiple") {
      $.each(option, function (opt, val) {
        _.options[opt] = val
      })
    } else if (type === "responsive") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]]
        } else {
          l = _.options.responsive.length - 1
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1)
            }
            l--
          }
          _.options.responsive.push(value[item])
        }
      }
    }
    if (refresh) {
      _.unload()
      _.reinit()
    }
  }
  Slick.prototype.setPosition = function () {
    var _ = this
    _.setDimensions()
    _.setHeight()
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide))
    } else {
      _.setFade()
    }
    _.$slider.trigger("setPosition", [_])
  }
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style
    _.positionProp = _.options.vertical === true ? "top" : "left"
    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical")
    } else {
      _.$slider.removeClass("slick-vertical")
    }
    if (
      bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined
    ) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3
        }
      } else {
        _.options.zIndex = _.defaults.zIndex
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform"
      _.transformType = "-o-transform"
      _.transitionType = "OTransition"
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform"
      _.transformType = "-moz-transform"
      _.transitionType = "MozTransition"
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.MozPerspective === undefined
      )
        _.animType = false
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform"
      _.transformType = "-webkit-transform"
      _.transitionType = "webkitTransition"
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = false
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform"
      _.transformType = "-ms-transform"
      _.transitionType = "msTransition"
      if (bodyStyle.msTransform === undefined) _.animType = false
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform"
      _.transformType = "transform"
      _.transitionType = "transition"
    }
    _.transformsEnabled =
      _.options.useTransform && _.animType !== null && _.animType !== false
  }
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder
    allSlides = _.$slider
      .find(".slick-slide")
      .removeClass("slick-active slick-center slick-current")
      .attr("aria-hidden", "true")
    _.$slides.eq(index).addClass("slick-current")
    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0
      centerOffset = Math.floor(_.options.slidesToShow / 2)
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides
            .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        } else {
          indexOffset = _.options.slidesToShow + index
          allSlides
            .slice(
              indexOffset - centerOffset + 1 + evenCoef,
              indexOffset + centerOffset + 2
            )
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        }
        if (index === 0) {
          allSlides
            .eq(allSlides.length - 1 - _.options.slidesToShow)
            .addClass("slick-center")
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass("slick-center")
        }
      }
      _.$slides.eq(index).addClass("slick-center")
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides
          .slice(index, index + _.options.slidesToShow)
          .addClass("slick-active")
          .attr("aria-hidden", "false")
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false")
      } else {
        remainder = _.slideCount % _.options.slidesToShow
        indexOffset =
          _.options.infinite === true ? _.options.slidesToShow + index : index
        if (
          _.options.slidesToShow == _.options.slidesToScroll &&
          _.slideCount - index < _.options.slidesToShow
        ) {
          allSlides
            .slice(
              indexOffset - (_.options.slidesToShow - remainder),
              indexOffset + remainder
            )
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        } else {
          allSlides
            .slice(indexOffset, indexOffset + _.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        }
      }
    }
    if (
      _.options.lazyLoad === "ondemand" ||
      _.options.lazyLoad === "anticipated"
    ) {
      _.lazyLoad()
    }
  }
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount
    if (_.options.fade === true) {
      _.options.centerMode = false
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1
        } else {
          infiniteCount = _.options.slidesToShow
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex - _.slideCount)
            .prependTo(_.$slideTrack)
            .addClass("slick-cloned")
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i
          $(_.$slides[slideIndex])
            .clone(true)
            .attr("id", "")
            .attr("data-slick-index", slideIndex + _.slideCount)
            .appendTo(_.$slideTrack)
            .addClass("slick-cloned")
        }
        _.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            $(this).attr("id", "")
          })
      }
    }
  }
  Slick.prototype.interrupt = function (toggle) {
    var _ = this
    if (!toggle) {
      _.autoPlay()
    }
    _.interrupted = toggle
  }
  Slick.prototype.selectHandler = function (event) {
    var _ = this
    var targetElement = $(event.target).is(".slick-slide")
      ? $(event.target)
      : $(event.target).parents(".slick-slide")
    var index = parseInt(targetElement.attr("data-slick-index"))
    if (!index) index = 0
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true)
      return
    }
    _.slideHandler(index)
  }
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget
    sync = sync || false
    if (_.animating === true && _.options.waitForAnimate === true) {
      return
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return
    }
    if (sync === false) {
      _.asNavFor(index)
    }
    targetSlide = index
    targetLeft = _.getLeft(targetSlide)
    slideLeft = _.getLeft(_.currentSlide)
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft
    if (
      _.options.infinite === false &&
      _.options.centerMode === false &&
      (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide)
          })
        } else {
          _.postSlide(targetSlide)
        }
      }
      return
    } else if (
      _.options.infinite === false &&
      _.options.centerMode === true &&
      (index < 0 || index > _.slideCount - _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide)
          })
        } else {
          _.postSlide(targetSlide)
        }
      }
      return
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer)
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll)
      } else {
        animSlide = _.slideCount + targetSlide
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0
      } else {
        animSlide = targetSlide - _.slideCount
      }
    } else {
      animSlide = targetSlide
    }
    _.animating = true
    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide])
    oldSlide = _.currentSlide
    _.currentSlide = animSlide
    _.setSlideClasses(_.currentSlide)
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget()
      navTarget = navTarget.slick("getSlick")
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide)
      }
    }
    _.updateDots()
    _.updateArrows()
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide)
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide)
        })
      } else {
        _.postSlide(animSlide)
      }
      _.animateHeight()
      return
    }
    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide)
      })
    } else {
      _.postSlide(animSlide)
    }
  }
  Slick.prototype.startLoad = function () {
    var _ = this
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide()
      _.$nextArrow.hide()
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide()
    }
    _.$slider.addClass("slick-loading")
  }
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this
    xDist = _.touchObject.startX - _.touchObject.curX
    yDist = _.touchObject.startY - _.touchObject.curY
    r = Math.atan2(yDist, xDist)
    swipeAngle = Math.round((r * 180) / Math.PI)
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle)
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? "left" : "right"
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? "left" : "right"
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? "right" : "left"
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down"
      } else {
        return "up"
      }
    }
    return "vertical"
  }
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction
    _.dragging = false
    _.swiping = false
    if (_.scrolling) {
      _.scrolling = false
      return false
    }
    _.interrupted = false
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true
    if (_.touchObject.curX === undefined) {
      return false
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger("edge", [_, _.swipeDirection()])
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection()
      switch (direction) {
        case "left":
        case "down":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide + _.getSlideCount())
            : _.currentSlide + _.getSlideCount()
          _.currentDirection = 0
          break
        case "right":
        case "up":
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide - _.getSlideCount())
            : _.currentSlide - _.getSlideCount()
          _.currentDirection = 1
          break
        default:
      }
      if (direction != "vertical") {
        _.slideHandler(slideCount)
        _.touchObject = {}
        _.$slider.trigger("swipe", [_, direction])
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide)
        _.touchObject = {}
      }
    }
  }
  Slick.prototype.swipeHandler = function (event) {
    var _ = this
    if (
      _.options.swipe === false ||
      ("ontouchend" in document && _.options.swipe === false)
    ) {
      return
    } else if (
      _.options.draggable === false &&
      event.type.indexOf("mouse") !== -1
    ) {
      return
    }
    _.touchObject.fingerCount =
      event.originalEvent && event.originalEvent.touches !== undefined
        ? event.originalEvent.touches.length
        : 1
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold
    }
    switch (event.data.action) {
      case "start":
        _.swipeStart(event)
        break
      case "move":
        _.swipeMove(event)
        break
      case "end":
        _.swipeEnd(event)
        break
    }
  }
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches,
      verticalSwipeLength
    touches =
      event.originalEvent !== undefined ? event.originalEvent.touches : null
    if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
      return false
    }
    curLeft = _.getLeft(_.currentSlide)
    _.touchObject.curX =
      touches !== undefined ? touches[0].pageX : event.clientX
    _.touchObject.curY =
      touches !== undefined ? touches[0].pageY : event.clientY
    _.touchObject.swipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
    )
    verticalSwipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
    )
    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true
      return false
    }
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength
    }
    swipeDirection = _.swipeDirection()
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true
      event.preventDefault()
    }
    positionOffset =
      (_.options.rtl === false ? 1 : -1) *
      (_.touchObject.curX > _.touchObject.startX ? 1 : -1)
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1
    }
    swipeLength = _.touchObject.swipeLength
    _.touchObject.edgeHit = false
    if (_.options.infinite === false) {
      if (
        (_.currentSlide === 0 && swipeDirection === "right") ||
        (_.currentSlide >= _.getDotCount() && swipeDirection === "left")
      ) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction
        _.touchObject.edgeHit = true
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset
    } else {
      _.swipeLeft =
        curLeft +
        swipeLength * (_.$list.height() / _.listWidth) * positionOffset
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false
    }
    if (_.animating === true) {
      _.swipeLeft = null
      return false
    }
    _.setCSS(_.swipeLeft)
  }
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches
    _.interrupted = true
    if (
      _.touchObject.fingerCount !== 1 ||
      _.slideCount <= _.options.slidesToShow
    ) {
      _.touchObject = {}
      return false
    }
    if (
      event.originalEvent !== undefined &&
      event.originalEvent.touches !== undefined
    ) {
      touches = event.originalEvent.touches[0]
    }
    _.touchObject.startX = _.touchObject.curX =
      touches !== undefined ? touches.pageX : event.clientX
    _.touchObject.startY = _.touchObject.curY =
      touches !== undefined ? touches.pageY : event.clientY
    _.dragging = true
  }
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this
    if (_.$slidesCache !== null) {
      _.unload()
      _.$slideTrack.children(this.options.slide).detach()
      _.$slidesCache.appendTo(_.$slideTrack)
      _.reinit()
    }
  }
  Slick.prototype.unload = function () {
    var _ = this
    $(".slick-cloned", _.$slider).remove()
    if (_.$dots) {
      _.$dots.remove()
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove()
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove()
    }
    _.$slides
      .removeClass("slick-slide slick-active slick-visible slick-current")
      .attr("aria-hidden", "true")
      .css("width", "")
  }
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this
    _.$slider.trigger("unslick", [_, fromBreakpoint])
    _.destroy()
  }
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset
    centerOffset = Math.floor(_.options.slidesToShow / 2)
    if (
      _.options.arrows === true &&
      _.slideCount > _.options.slidesToShow &&
      !_.options.infinite
    ) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
        _.$nextArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false")
      } else if (
        _.currentSlide >= _.slideCount - _.options.slidesToShow &&
        _.options.centerMode === false
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true")
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false")
      } else if (
        _.currentSlide >= _.slideCount - 1 &&
        _.options.centerMode === true
      ) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true")
        _.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false")
      }
    }
  }
  Slick.prototype.updateDots = function () {
    var _ = this
    if (_.$dots !== null) {
      _.$dots.find("li").removeClass("slick-active").end()
      _.$dots
        .find("li")
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass("slick-active")
    }
  }
  Slick.prototype.visibility = function () {
    var _ = this
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true
      } else {
        _.interrupted = false
      }
    }
  }
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret
    for (i = 0; i < l; i++) {
      if (typeof opt == "object" || typeof opt == "undefined")
        _[i].slick = new Slick(_[i], opt)
      else ret = _[i].slick[opt].apply(_[i].slick, args)
      if (typeof ret != "undefined") return ret
    }
    return _
  }
})

/**
 * [jQuery-stickit]{@link https://github.com/emn178/jquery-stickit}
 *
 * @version 0.2.14
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ !(function (t) {
  var e,
    i,
    s = "jquery-stickit",
    o = s + "-spacer",
    n = ":" + s,
    h = -1 != navigator.userAgent.indexOf("MSIE 7.0"),
    r = h ? -2 : 0,
    a = void 0 !== window.MutationObserver,
    l = (window.StickScope = { Parent: 0, Document: 1 }),
    c = { None: 0, Fixed: 1, Absolute: 2 },
    p = !1,
    d = !1
  function f(e, i) {
    ;(this.element = t(e)),
      (this.lastValues = {}),
      t.isArray(i) || (i = [i || {}]),
      i.length || i.push({}),
      (this.optionList = i)
    var s = this.element.css("transform") || ""
    ;(this.defaultZIndex = this.element.css("z-index") || 100),
      "auto" == this.defaultZIndex
        ? (this.defaultZIndex = 100)
        : "0" == this.defaultZIndex &&
          "none" != s &&
          (this.defaultZIndex = 100),
      this.updateOptions(),
      (this.offsetY = 0),
      (this.lastY = 0),
      (this.stick = c.None),
      (this.spacer = t("<div />")),
      (this.spacer[0].id = e.id),
      (this.spacer[0].className = e.className),
      (this.spacer[0].style.cssText = e.style.cssText),
      this.spacer.addClass(o),
      (this.spacer[0].style.cssText +=
        ";visibility: hidden !important;display: none !important"),
      this.spacer.insertAfter(this.element),
      "static" == this.element.parent().css("position") &&
        this.element.parent().css("position", "relative"),
      (this.origWillChange = this.element.css("will-change")),
      "auto" == this.origWillChange &&
        this.element.css("will-change", "transform"),
      "none" == s
        ? this.element.css("transform", "translateZ(0)")
        : -1 == s.indexOf("matrix3d") &&
          this.element.css(
            "transform",
            this.element.css("transform") + " translateZ(0)"
          ),
      this.bound(),
      this.precalculate(),
      this.store()
  }
  function g() {
    ;(e = window.innerHeight || document.documentElement.clientHeight),
      (i = window.innerWidth || document.documentElement.clientWidth),
      u()
  }
  function u() {
    ;(d = !0),
      t(n).each(function () {
        t(this).data(s).refresh()
      }),
      setTimeout(function () {
        d = !1
      })
  }
  function m() {
    ;(d = !0),
      t(n).each(function () {
        t(this).data(s).locate()
      }),
      setTimeout(function () {
        d = !1
      })
  }
  function b() {
    var e = !!(
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    )
    t(n).each(function () {
      t(this).data(s).enableWillChange(!e)
    })
  }
  function x(t) {
    d || u()
  }
  ;(t.expr[":"][s] = function (e) {
    return !!t(e).data(s)
  }),
    (f.prototype.trigger = function (t) {
      var e = "on" + t.charAt(0).toUpperCase() + t.slice(1)
      this.options[e] && this.options[e].call(this.element),
        this.element.trigger("stickit:" + t)
    }),
    (f.prototype.isActive = function (t) {
      return (
        (void 0 === t.screenMinWidth || i >= t.screenMinWidth) &&
        (void 0 === t.screenMaxWidth || i <= t.screenMaxWidth)
      )
    }),
    (f.prototype.updateCss = function (t) {
      this.element.hasClass(this.options.className) &&
        t.className != this.options.className &&
        this.element.removeClass(this.options.className).addClass(t.className)
      var e = {}
      this.stick == c.Absolute
        ? this.options.extraHeight != t.extraHeight &&
          (e.bottom = -this.options.extraHeight + "px")
        : this.options.top != t.top && (e.top = t.top + this.offsetY + "px"),
        this.options.zIndex != t.zIndex && (e.zIndex = this.getZIndex(t)),
        this.element.css(e)
    }),
    (f.prototype.updateOptions = function () {
      var t = this.getActiveOptionsKey()
      if (this.activeKey != t) {
        this.activeKey = t
        var e = this.getActiveOptions()
        this.options &&
          (t
            ? this.stick != c.None &&
              (e.scope == this.options.scope
                ? this.updateCss(e)
                : (this.reset(), setTimeout(this.locate.bind(this))))
            : this.reset()),
          (this.options = e),
          (this.zIndex = this.getZIndex(e))
      }
    }),
    (f.prototype.getZIndex = function (t) {
      return void 0 === t.zIndex ? this.defaultZIndex : t.zIndex
    }),
    (f.prototype.getActiveOptionsKey = function () {
      for (var t = [], e = 0; e < this.optionList.length; ++e)
        this.isActive(this.optionList[e]) && t.push(e)
      return t.join("_")
    }),
    (f.prototype.getActiveOptions = function () {
      for (var e = {}, i = 0; i < this.optionList.length; ++i) {
        var s = this.optionList[i]
        this.isActive(s) && t.extend(e, s)
      }
      return (
        (e.scope = e.scope || l.Parent),
        (e.className = e.className || "stick"),
        (e.top = e.top || 0),
        (e.extraHeight = e.extraHeight || 0),
        void 0 === e.overflowScrolling && (e.overflowScrolling = !0),
        e
      )
    }),
    (f.prototype.store = function () {
      var t = this.element[0]
      this.origStyle = {
        width: t.style.width,
        position: t.style.position,
        left: t.style.left,
        top: t.style.top,
        bottom: t.style.bottom,
        zIndex: t.style.zIndex,
      }
    }),
    (f.prototype.restore = function () {
      this.element.css(this.origStyle)
    }),
    (f.prototype.bound = function () {
      var t = this.element
      if (h || "border-box" != t.css("box-sizing")) this.extraWidth = 0
      else {
        var e = parseFloat(t.css("border-left-width")) || 0,
          i = parseFloat(t.css("border-right-width")) || 0,
          s = parseFloat(t.css("padding-left")) || 0,
          o = parseFloat(t.css("padding-right")) || 0
        this.extraWidth = e + i + s + o
      }
      ;(this.margin = {
        top: parseFloat(t.css("margin-top")) || 0,
        bottom: parseFloat(t.css("margin-bottom")) || 0,
        left: parseFloat(t.css("margin-left")) || 0,
        right: parseFloat(t.css("margin-right")) || 0,
      }),
        (this.parent = {
          border: {
            bottom: parseFloat(t.parent().css("border-bottom-width")) || 0,
          },
        })
    }),
    (f.prototype.precalculate = function () {
      ;(this.baseTop = this.margin.top + this.options.top),
        (this.basePadding = this.baseTop + this.margin.bottom),
        (this.baseParentOffset =
          this.options.extraHeight - this.parent.border.bottom),
        (this.offsetHeight = this.options.overflowScrolling
          ? Math.max(this.element.outerHeight(!1) + this.basePadding - e, 0)
          : 0),
        (this.minOffsetHeight = -this.offsetHeight)
    }),
    (f.prototype.reset = function () {
      this.stick == c.Absolute
        ? (this.trigger("unend"), this.trigger("unstick"))
        : this.stick == c.Fixed && this.trigger("unstick"),
        (this.stick = c.None),
        this.spacer.css("width", this.origStyle.width),
        (this.spacer[0].style.cssText += ";display: none !important"),
        this.restore(),
        this.element.removeClass(this.options.className)
    }),
    (f.prototype.setAbsolute = function (t) {
      this.stick == c.None &&
        (this.element.addClass(this.options.className), this.trigger("stick")),
        this.trigger("end"),
        (this.stick = c.Absolute),
        this.element.css({
          width: this.element.width() + this.extraWidth + "px",
          position: "absolute",
          top: this.origStyle.top,
          left: t + "px",
          bottom: -this.options.extraHeight + "px",
          "z-index": this.zIndex,
        })
    }),
    (f.prototype.setFixed = function (t, e, i) {
      this.stick == c.None
        ? (this.element.addClass(this.options.className), this.trigger("stick"))
        : this.trigger("unend"),
        this.options.overflowScrolling || (i = 0),
        (this.stick = c.Fixed),
        (this.lastY = e),
        (this.offsetY = i),
        this.element.css({
          width: this.element.width() + this.extraWidth + "px",
          position: "fixed",
          top: this.options.top + i + "px",
          left: t + "px",
          bottom: this.origStyle.bottom,
          "z-index": this.zIndex,
        })
    }),
    (f.prototype.updateScroll = function (t) {
      if (0 != this.offsetHeight && this.options.overflowScrolling) {
        var e = Math.max(this.offsetY + t - this.lastY, this.minOffsetHeight)
        ;(e = Math.min(e, 0)),
          (this.lastY = t),
          this.offsetY != e &&
            ((this.offsetY = e),
            this.element.css("top", this.options.top + this.offsetY + "px"))
      }
    }),
    (f.prototype.isHeigher = function () {
      return (
        this.options.scope == l.Parent &&
        this.element.parent().height() <=
          this.element.outerHeight(!1) + this.margin.bottom
      )
    }),
    (f.prototype.locate = function () {
      if (this.activeKey) {
        var t,
          e,
          i,
          s = this.element,
          o = this.spacer
        switch (this.stick) {
          case c.Fixed:
            ;(e = (t = o[0].getBoundingClientRect()).top - this.baseTop) >= 0 ||
            this.isHeigher()
              ? this.reset()
              : this.options.scope == l.Parent &&
                (t = s.parent()[0].getBoundingClientRect()).bottom +
                  this.baseParentOffset +
                  this.offsetHeight <=
                  s.outerHeight(!1) + this.basePadding
              ? this.setAbsolute(this.spacer.position().left)
              : this.updateScroll(t.bottom)
            break
          case c.Absolute:
            ;(e = (t = o[0].getBoundingClientRect()).top - this.baseTop),
              (i = t.left - this.margin.left),
              e >= 0 || this.isHeigher()
                ? this.reset()
                : (t = s.parent()[0].getBoundingClientRect()).bottom +
                    this.baseParentOffset +
                    this.offsetHeight >
                    s.outerHeight(!1) + this.basePadding &&
                  this.setFixed(i + r, t.bottom, -this.offsetHeight)
            break
          case c.None:
          default:
            if (
              (e = (t = s[0].getBoundingClientRect()).top - this.baseTop) >=
                0 ||
              this.isHeigher()
            )
              return
            var n = s.parent()[0].getBoundingClientRect()
            o.height(s.height()),
              o.show(),
              (i = t.left - this.margin.left),
              this.options.scope == l.Document
                ? this.setFixed(i, t.bottom, 0)
                : n.bottom + this.baseParentOffset + this.offsetHeight <=
                  s.outerHeight(!1) + this.basePadding
                ? this.setAbsolute(this.element.position().left)
                : this.setFixed(i + r, t.bottom, 0),
              o.width() || o.width(s.width())
        }
      }
    }),
    (f.prototype.refresh = function () {
      if (
        (this.updateOptions(),
        this.bound(),
        this.precalculate(),
        this.stick == c.None)
      ) {
        this.locate()
        return
      }
      var t = this.element,
        e = this.spacer
      if (
        (this.lastValues.width != e.width() &&
          t.width((this.lastValues.width = e.width())),
        this.lastValues.height != t.height() &&
          e.height((this.lastValues.height = t.height())),
        this.stick == c.Fixed)
      ) {
        var i = this.spacer[0].getBoundingClientRect().left - this.margin.left
        this.lastValues.left != i + "px" &&
          t.css("left", (this.lastValues.left = i + "px"))
      }
      this.locate()
    }),
    (f.prototype.destroy = function () {
      this.reset(), this.spacer.remove(), this.element.removeData(s)
    }),
    (f.prototype.enableWillChange = function (t) {
      "auto" == this.origWillChange &&
        this.element.css("will-change", t ? "transform" : this.origWillChange)
    })
  var $ = ["destroy", "refresh"]
  ;(t.fn.stickit = function (e, i) {
    if ("string" == typeof e) {
      if (-1 != t.inArray(e, $)) {
        var o = arguments
        this.each(function () {
          var i = t(this).data(s)
          i && i[e].apply(i, Array.prototype.slice.call(o, 1))
        })
      }
    } else
      !p &&
        ((p = !0),
        g(),
        t(document).ready(function () {
          t(window).bind("resize", g).bind("scroll", m),
            t(document.body).bind(
              "animationend webkitAnimationEnd oAnimationEnd transitionend webkitTransitionEnd oTransitionEnd",
              m
            ),
            t(document).bind(
              "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",
              b
            )
        }),
        a) &&
        new MutationObserver(x).observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        }),
        (i = t.isArray(e) ? e : Array.prototype.slice.call(arguments, 0)),
        this.each(function () {
          var e = new f(this, i)
          t(this).data(s, e), e.locate()
        })
    return this
  }),
    (t.stickit = { refresh: u })
})(jQuery)

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      )
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div")
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      )
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      )
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b))
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"]
      if (void 0 !== a.transition) return !0
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0
      return !1
    }
  ;(t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion
      ;(b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {})
    },
    open: function (c) {
      var e
      if (c.isObj === !1) {
        ;(b.items = c.items.toArray()), (b.index = 0)
        var g,
          h = c.items
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e
            break
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0)
      if (b.isOpen) return void b.updateItemHTML()
      ;(b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close()
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close()
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading))
      var i = a.magnificPopup.modules
      for (e = 0; e < i.length; e++) {
        var j = i[e]
        ;(j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b)
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close()
          }),
        v.on("resize" + p, function () {
          b.updateSize()
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f)
      var k = (b.wH = v.height()),
        n = {}
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize()
        o && (n.marginRight = o)
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"))
      var r = b.st.mainClass
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn)
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      )
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close()
            }, b.st.removalDelay))
          : b._close())
    },
    _close: function () {
      y(h)
      var c = r + " " + q + " "
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" }
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c
        b.wrap.css("height", d), (b.wH = d)
      } else b.wH = a || v.height()
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function () {
      var c = b.items[b.index]
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index))
      var d = c.type
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0)
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder")
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      )
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange")
    },
    appendContent: function (a, c) {
      ;(b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d,
        e = b.items[c]
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g]
            break
          }
        ;(e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"))
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      )
    },
    addGroup: function (a, c) {
      var d = function (d) {
        ;(d.mfpEl = this), b._openClick(d, a, c)
      }
      c || (c = {})
      var e = "click.magnificPopup"
      ;(c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading)
        var e = { status: a, text: d }
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation()
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a)
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick
        if (d && e) return !0
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      )
    },
    _setFocus: function () {
      ;(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0])
            if (f.length > 0) {
              var g = e[1]
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d)
            }
          } else b.find(p + "-" + c).html(d)
        })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div")
        ;(a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a)
      }
      return b.scrollbarSize
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        )
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close()
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A()
      var d = a(this)
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f)
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1))
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c)
      return d
    })
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null))
    }
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G()
          })
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src)
          if (f.length) {
            var g = f[0].parentNode
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"))
          return (c.inlineElement = f), f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      },
    },
  })
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    }
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading")
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f }
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q)
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded")
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                )
            },
          },
          b.st.ajax.settings
        )
        return (b.req = a.ajax(d)), ""
      },
    },
  })
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title
      var d = b.st.image.titleSrc
      if (d) {
        if (a.isFunction(d)) return d.call(b, c)
        if (c.el) return c.el.attr(d) || ""
      }
      return ""
    }
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image"
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor)
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p)
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)))
              }, f))
          }
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0))
          },
          h = b.st.image,
          i = d.find(".mfp-img")
        if (i.length) {
          var j = document.createElement("img")
          ;(j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1)
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        )
      },
    },
  })
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      )
    }
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom"
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition"
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              )
            },
            k = function () {
              b.content.css("visibility", "visible")
            }
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k()
              ;(f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded")
                        }, 16)
                    }, g))
                }, 16))
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return
                  f = j(a)
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset())
                  }, 16)
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null))
            })
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem)
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10)
        e.top -= a(window).scrollTop() - f
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        }
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        )
      },
    },
  })
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe")
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    }
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0))
          }),
          w(h + "." + P, function () {
            R()
          })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0
        })
        var g = {}
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        )
      },
    },
  })
  var S = function (a) {
      var c = b.items.length
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    }
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery"
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                  })
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s))
                  e.click(function () {
                    b.prev()
                  }),
                    f.click(function () {
                      b.next()
                    }),
                    b.container.append(e.add(f))
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null)
                  }, 16))
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null)
              }))
            : !1
        )
      },
      next: function () {
        ;(b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML()
      },
      prev: function () {
        ;(b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML()
      },
      goTo: function (a) {
        ;(b.direction = a >= b.index), (b.index = a), b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length)
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a)
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c]
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0
                })
                .on("error.mfploader", function () {
                  ;(d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d)
                })
                .attr("src", d.src)),
            (d.preloaded = !0)
        }
      },
    },
  })
  var U = "retina"
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio
          ;(c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                })
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c)
              }))
        }
      },
    },
  }),
    A()
})
