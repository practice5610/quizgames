(() => {
  "use strict";
  var q = function (Z) {
    if (!Z)
      throw new Error("Path\x20must\x20be\x20a\x20non-empty\x20strin" + "g");
    var m = Z["startsWith"]("/") ? Z["substring"](0x1) : Z;
    return ""
      ["concat"]("https://jb-mcm.s3.ap-south-1.a" + "mazonaws.com", "/")
      ["concat"](m);
  };
  const Y = {
    getConstructor: function (Z) {
      return null != Z ? Z["constructor"] : null;
    },
    instanceOf: function (Z, m) {
      return Boolean(Z && m && Z instanceof m);
    },
    nullOrUndefined: function (Z) {
      return null == Z;
    },
    boolean: function (Z) {
      return this["getConstructor"](Z) === Boolean;
    },
    string: function (Z) {
      return this["getConstructor"](Z) === String;
    },
    number: function (Z) {
      return this["getConstructor"](Z) === Number && !Number["isNaN"](Z);
    },
    object: function (Z) {
      return this["getConstructor"](Z) === Object;
    },
    fn: function (Z) {
      return "function" == typeof Z;
    },
    array: function (Z) {
      return Array["isArray"](Z);
    },
    nodeList: function (Z) {
      return this["instanceOf"](Z, NodeList);
    },
    empty: function (Z) {
      return (
        this["nullOrUndefined"](Z) ||
        ((this["string"](Z) || this["array"](Z) || this["nodeList"](Z)) &&
          !Z["length"]) ||
        (this["object"](Z) && !Object["keys"](Z)["length"])
      );
    },
  };
  q("publishers");
  function E() {
    for (
      var Z =
          arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
            ? arguments[0x0]
            : 0x8,
        m =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcd" +
          "efghijklmnopqrstuvwxyz01234567" +
          "89",
        W = "",
        y = 0x0;
      y < Z;
      y++
    ) {
      var K = Math["floor"](0x3e * Math["random"]());
      W += m["charAt"](K);
    }
    return W;
  }
  function I() {
    var Z,
      m,
      W =
        !(arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]) ||
        arguments[0x0],
      y = window["location"]["hostname"]["match"](
        /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\/\n?]+)$/i
      ),
      K = (y && y[0x1])["split"](".");
    return (
      K["pop"](),
      K["includes"]("localhost") || 0x0 === K["length"]
        ? (Z = W ? "worldnewscorp" : "localhost")
        : K["length"] > 0x2
        ? ((m = K[0x0]),
          (Z = K["slice"](0x1)["join"]("_")),
          (Z = ""["concat"](m, "_")["concat"](Z)))
        : (Z = K["join"]("_")),
      Z
    );
  }
  function C(Z) {
    var m =
      arguments["length"] > 0x1 && void 0x0 !== arguments[0x1]
        ? arguments[0x1]
        : document;
    return new Promise(function (W, y) {
      if (m["querySelector"]("script[src=\x22"["concat"](Z["src"], "\x22]")))
        return Z["cb"] && Y["fn"](Z["cb"]) && Z["cb"](), void W();
      var K = m["createElement"]("script");
      (K["type"] = "text/javascript"),
        (K["src"] = Z["src"]),
        Z["async"] && (K["async"] = !0x0),
        Z["defer"] && (K["defer"] = !0x0),
        Z["attributes"] &&
          Object["keys"](Z["attributes"])["forEach"](function (b) {
            K["setAttribute"](b, Z["attributes"][b]);
          }),
        (K["onload"] = function () {
          Z["cb"] && Y["fn"](Z["cb"]) && Z["cb"](), W();
        }),
        (K["onerror"] = function () {
          return y(
            new Error("Script\x20load\x20error\x20for\x20"["concat"](Z["src"]))
          );
        }),
        m["head"]["appendChild"](K);
    });
  }
  function x(Z, m) {
    var W = ["__comment"],
      y = Z;
    for (var K in y)
      if (
        y["hasOwnProperty"](K) &&
        (W["includes"](K) && delete y[K],
        m["hasOwnProperty"](K) && null !== m[K] && void 0x0 !== m[K])
      ) {
        if (!0x0 === Y["object"](m[K])) x(y[K], m[K]);
        else y[K] = Y["empty"](m[K]) ? y[K] : m[K];
      }
    return y;
  }
  function G() {
    G = function () {
      return W;
    };
    var Z,
      W = {},
      K = Object["prototype"],
      B = K["hasOwnProperty"],
      V =
        Object["defineProperty"] ||
        function (lA, lr, lL) {
          lA[lr] = lL["value"];
        },
      N = "function" == typeof Symbol ? Symbol : {},
      Q = N["iterator"] || "@@iterator",
      J = N["asyncIterator"] || "@@asyncIterator",
      X = N["toStringTag"] || "@@toStringTag";
    function T(lA, lr, lL) {
      return (
        Object["defineProperty"](lA, lr, {
          value: lL,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        }),
        lA[lr]
      );
    }
    try {
      T({}, "");
    } catch (lA) {
      T = function (lr, lL, lD) {
        return (lr[lL] = lD);
      };
    }
    function F(lr, lL, lD, lH) {
      var li = lL && lL["prototype"] instanceof l6 ? lL : l6,
        lM = Object["create"](li["prototype"]),
        lj = new la(lH || []);
      return V(lM, "_invoke", { value: lI(lr, lD, lj) }), lM;
    }
    function l0(lr, lL, lD) {
      try {
        return { type: "normal", arg: lr["call"](lL, lD) };
      } catch (lH) {
        return { type: "throw", arg: lH };
      }
    }
    W["wrap"] = F;
    var l1 = "suspendedStart",
      l2 = "suspendedYield",
      l3 = "executing",
      l4 = "completed",
      l5 = {};
    function l6() {}
    function l7() {}
    function l8() {}
    var l9 = {};
    T(l9, Q, function () {
      return this;
    });
    var ll = Object["getPrototypeOf"],
      lq = ll && ll(ll(lw([])));
    lq && lq !== K && B["call"](lq, Q) && (l9 = lq);
    var lY = (l8["prototype"] = l6["prototype"] = Object["create"](l9));
    function lf(lr) {
      ["next", "throw", "return"]["forEach"](function (lL) {
        T(lr, lL, function (lD) {
          return this["_invoke"](lL, lD);
        });
      });
    }
    function lE(lr, lL) {
      function lD(li, lM, lj, lz) {
        var lo = l0(lr[li], lr, lM);
        if ("throw" !== lo["type"]) {
          var ln = lo["arg"],
            lU = ln["value"];
          return lU && "object" == L(lU) && B["call"](lU, "__await")
            ? lL["resolve"](lU["__await"])["then"](
                function (lZ) {
                  lD("next", lZ, lj, lz);
                },
                function (lZ) {
                  lD("throw", lZ, lj, lz);
                }
              )
            : lL["resolve"](lU)["then"](
                function (lZ) {
                  (ln["value"] = lZ), lj(ln);
                },
                function (lZ) {
                  return lD("throw", lZ, lj, lz);
                }
              );
        }
        lz(lo["arg"]);
      }
      var lH;
      V(this, "_invoke", {
        value: function (li, lM) {
          function lj() {
            return new lL(function (lz, lo) {
              lD(li, lM, lz, lo);
            });
          }
          return (lH = lH ? lH["then"](lj, lj) : lj());
        },
      });
    }
    function lI(lr, lL, lD) {
      var lH = l1;
      return function (li, lM) {
        if (lH === l3) throw new Error("Generator\x20is\x20already\x20running");
        if (lH === l4) {
          if ("throw" === li) throw lM;
          return { value: Z, done: !0x0 };
        }
        for (lD["method"] = li, lD["arg"] = lM; ; ) {
          var lj = lD["delegate"];
          if (lj) {
            var lz = lC(lj, lD);
            if (lz) {
              if (lz === l5) continue;
              return lz;
            }
          }
          if ("next" === lD["method"]) lD["sent"] = lD["_sent"] = lD["arg"];
          else {
            if ("throw" === lD["method"]) {
              if (lH === l1) throw ((lH = l4), lD["arg"]);
              lD["dispatchException"](lD["arg"]);
            } else
              "return" === lD["method"] && lD["abrupt"]("return", lD["arg"]);
          }
          lH = l3;
          var lo = l0(lr, lL, lD);
          if ("normal" === lo["type"]) {
            if (((lH = lD["done"] ? l4 : l2), lo["arg"] === l5)) continue;
            return { value: lo["arg"], done: lD["done"] };
          }
          "throw" === lo["type"] &&
            ((lH = l4), (lD["method"] = "throw"), (lD["arg"] = lo["arg"]));
        }
      };
    }
    function lC(lr, lL) {
      var lD = lL["method"],
        lH = lr["iterator"][lD];
      if (lH === Z)
        return (
          (lL["delegate"] = null),
          ("throw" === lD &&
            lr["iterator"]["return"] &&
            ((lL["method"] = "return"),
            (lL["arg"] = Z),
            lC(lr, lL),
            "throw" === lL["method"])) ||
            ("return" !== lD &&
              ((lL["method"] = "throw"),
              (lL["arg"] = new TypeError(
                "The\x20iterator\x20does\x20not\x20provide\x20" +
                  "a\x20\x27" +
                  lD +
                  "\x27\x20method"
              )))),
          l5
        );
      var li = l0(lH, lr["iterator"], lL["arg"]);
      if ("throw" === li["type"])
        return (
          (lL["method"] = "throw"),
          (lL["arg"] = li["arg"]),
          (lL["delegate"] = null),
          l5
        );
      var lM = li["arg"];
      return lM
        ? lM["done"]
          ? ((lL[lr["resultName"]] = lM["value"]),
            (lL["next"] = lr["nextLoc"]),
            "return" !== lL["method"] &&
              ((lL["method"] = "next"), (lL["arg"] = Z)),
            (lL["delegate"] = null),
            l5)
          : lM
        : ((lL["method"] = "throw"),
          (lL["arg"] = new TypeError(
            "iterator\x20result\x20is\x20not\x20an\x20obje" + "ct"
          )),
          (lL["delegate"] = null),
          l5);
    }
    function lx(lr) {
      var lL = { tryLoc: lr[0x0] };
      0x1 in lr && (lL["catchLoc"] = lr[0x1]),
        0x2 in lr && ((lL["finallyLoc"] = lr[0x2]), (lL["afterLoc"] = lr[0x3])),
        this["tryEntries"]["push"](lL);
    }
    function lG(lr) {
      var lL = lr["completion"] || {};
      (lL["type"] = "normal"), delete lL["arg"], (lr["completion"] = lL);
    }
    function la(lr) {
      (this["tryEntries"] = [{ tryLoc: "root" }]),
        lr["forEach"](lx, this),
        this["reset"](!0x0);
    }
    function lw(lr) {
      if (lr || "" === lr) {
        var lL = lr[Q];
        if (lL) return lL["call"](lr);
        if ("function" == typeof lr["next"]) return lr;
        if (!isNaN(lr["length"])) {
          var lD = -0x1,
            lH = function li() {
              for (; ++lD < lr["length"]; )
                if (B["call"](lr, lD))
                  return (li["value"] = lr[lD]), (li["done"] = !0x1), li;
              return (li["value"] = Z), (li["done"] = !0x0), li;
            };
          return (lH["next"] = lH);
        }
      }
      throw new TypeError(L(lr) + "\x20is\x20not\x20iterable");
    }
    return (
      (l7["prototype"] = l8),
      V(lY, "constructor", { value: l8, configurable: !0x0 }),
      V(l8, "constructor", { value: l7, configurable: !0x0 }),
      (l7["displayName"] = T(l8, X, "GeneratorFunction")),
      (W["isGeneratorFunction"] = function (lr) {
        var lL = "function" == typeof lr && lr["constructor"];
        return (
          !!lL &&
          (lL === l7 ||
            "GeneratorFunction" === (lL["displayName"] || lL["name"]))
        );
      }),
      (W["mark"] = function (lr) {
        return (
          Object["setPrototypeOf"]
            ? Object["setPrototypeOf"](lr, l8)
            : ((lr["__proto__"] = l8), T(lr, X, "GeneratorFunction")),
          (lr["prototype"] = Object["create"](lY)),
          lr
        );
      }),
      (W["awrap"] = function (lr) {
        return { __await: lr };
      }),
      lf(lE["prototype"]),
      T(lE["prototype"], J, function () {
        return this;
      }),
      (W["AsyncIterator"] = lE),
      (W["async"] = function (lr, lL, lD, lH, li) {
        void 0x0 === li && (li = Promise);
        var lM = new lE(F(lr, lL, lD, lH), li);
        return W["isGeneratorFunction"](lL)
          ? lM
          : lM["next"]()["then"](function (lj) {
              return lj["done"] ? lj["value"] : lM["next"]();
            });
      }),
      lf(lY),
      T(lY, X, "Generator"),
      T(lY, Q, function () {
        return this;
      }),
      T(lY, "toString", function () {
        return "[object\x20Generator]";
      }),
      (W["keys"] = function (lr) {
        var lL = Object(lr),
          lD = [];
        for (var lH in lL) lD["push"](lH);
        return (
          lD["reverse"](),
          function li() {
            for (; lD["length"]; ) {
              var lM = lD["pop"]();
              if (lM in lL) return (li["value"] = lM), (li["done"] = !0x1), li;
            }
            return (li["done"] = !0x0), li;
          }
        );
      }),
      (W["values"] = lw),
      (la["prototype"] = {
        constructor: la,
        reset: function (lr) {
          if (
            ((this["prev"] = 0x0),
            (this["next"] = 0x0),
            (this["sent"] = this["_sent"] = Z),
            (this["done"] = !0x1),
            (this["delegate"] = null),
            (this["method"] = "next"),
            (this["arg"] = Z),
            this["tryEntries"]["forEach"](lG),
            !lr)
          ) {
            for (var lL in this)
              "t" === lL["charAt"](0x0) &&
                B["call"](this, lL) &&
                !isNaN(+lL["slice"](0x1)) &&
                (this[lL] = Z);
          }
        },
        stop: function () {
          this["done"] = !0x0;
          var lr = this["tryEntries"][0x0]["completion"];
          if ("throw" === lr["type"]) throw lr["arg"];
          return this["rval"];
        },
        dispatchException: function (lr) {
          if (this["done"]) throw lr;
          var lL = this;
          function lD(lo, ln) {
            return (
              (lM["type"] = "throw"),
              (lM["arg"] = lr),
              (lL["next"] = lo),
              ln && ((lL["method"] = "next"), (lL["arg"] = Z)),
              !!ln
            );
          }
          for (var lH = this["tryEntries"]["length"] - 0x1; lH >= 0x0; --lH) {
            var li = this["tryEntries"][lH],
              lM = li["completion"];
            if ("root" === li["tryLoc"]) return lD("end");
            if (li["tryLoc"] <= this["prev"]) {
              var lj = B["call"](li, "catchLoc"),
                lz = B["call"](li, "finallyLoc");
              if (lj && lz) {
                if (this["prev"] < li["catchLoc"])
                  return lD(li["catchLoc"], !0x0);
                if (this["prev"] < li["finallyLoc"])
                  return lD(li["finallyLoc"]);
              } else {
                if (lj) {
                  if (this["prev"] < li["catchLoc"])
                    return lD(li["catchLoc"], !0x0);
                } else {
                  if (!lz)
                    throw new Error(
                      "try\x20statement\x20without\x20catch\x20or" +
                        "\x20finally"
                    );
                  if (this["prev"] < li["finallyLoc"])
                    return lD(li["finallyLoc"]);
                }
              }
            }
          }
        },
        abrupt: function (lr, lL) {
          for (var lD = this["tryEntries"]["length"] - 0x1; lD >= 0x0; --lD) {
            var lH = this["tryEntries"][lD];
            if (
              lH["tryLoc"] <= this["prev"] &&
              B["call"](lH, "finallyLoc") &&
              this["prev"] < lH["finallyLoc"]
            ) {
              var li = lH;
              break;
            }
          }
          li &&
            ("break" === lr || "continue" === lr) &&
            li["tryLoc"] <= lL &&
            lL <= li["finallyLoc"] &&
            (li = null);
          var lM = li ? li["completion"] : {};
          return (
            (lM["type"] = lr),
            (lM["arg"] = lL),
            li
              ? ((this["method"] = "next"),
                (this["next"] = li["finallyLoc"]),
                l5)
              : this["complete"](lM)
          );
        },
        complete: function (lr, lL) {
          if ("throw" === lr["type"]) throw lr["arg"];
          return (
            "break" === lr["type"] || "continue" === lr["type"]
              ? (this["next"] = lr["arg"])
              : "return" === lr["type"]
              ? ((this["rval"] = this["arg"] = lr["arg"]),
                (this["method"] = "return"),
                (this["next"] = "end"))
              : "normal" === lr["type"] && lL && (this["next"] = lL),
            l5
          );
        },
        finish: function (lr) {
          for (var lL = this["tryEntries"]["length"] - 0x1; lL >= 0x0; --lL) {
            var lD = this["tryEntries"][lL];
            if (lD["finallyLoc"] === lr)
              return (
                this["complete"](lD["completion"], lD["afterLoc"]), lG(lD), l5
              );
          }
        },
        catch: function (lr) {
          for (var lL = this["tryEntries"]["length"] - 0x1; lL >= 0x0; --lL) {
            var lD = this["tryEntries"][lL];
            if (lD["tryLoc"] === lr) {
              var lH = lD["completion"];
              if ("throw" === lH["type"]) {
                var li = lH["arg"];
                lG(lD);
              }
              return li;
            }
          }
          throw new Error("illegal\x20catch\x20attempt");
        },
        delegateYield: function (lr, lL, lD) {
          return (
            (this["delegate"] = {
              iterator: lw(lr),
              resultName: lL,
              nextLoc: lD,
            }),
            "next" === this["method"] && (this["arg"] = Z),
            l5
          );
        },
      }),
      W
    );
  }
  function w(Z, m, W, y, K, b, B) {
    try {
      var V = Z[b](B),
        R = V["value"];
    } catch (k) {
      return void W(k);
    }
    V["done"] ? m(R) : Promise["resolve"](R)["then"](y, K);
  }
  function A(Z) {
    return function () {
      var m = this,
        W = arguments;
      return new Promise(function (y, K) {
        var b = Z["apply"](m, W);
        function B(R) {
          w(b, y, K, B, V, "next", R);
        }
        function V(R) {
          w(b, y, K, B, V, "throw", R);
        }
        B(void 0x0);
      });
    };
  }
  function L(Z) {
    return (
      (L =
        "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"]
          ? function (m) {
              return typeof m;
            }
          : function (m) {
              return m &&
                "function" == typeof Symbol &&
                m["constructor"] === Symbol &&
                m !== Symbol["prototype"]
                ? "symbol"
                : typeof m;
            }),
      L(Z)
    );
  }
  function D(Z, m) {
    if (!(Z instanceof m))
      throw new TypeError(
        "Cannot\x20call\x20a\x20class\x20as\x20a\x20funct" + "ion"
      );
  }
  function H(Z, m) {
    for (var W = 0x0; W < m["length"]; W++) {
      var y = m[W];
      (y["enumerable"] = y["enumerable"] || !0x1),
        (y["configurable"] = !0x0),
        "value" in y && (y["writable"] = !0x0),
        Object["defineProperty"](
          Z,
          ((K = y["key"]),
          (b = void 0x0),
          (b = (function (B, V) {
            if ("object" !== L(B) || null === B) return B;
            var R = B[Symbol["toPrimitive"]];
            if (void 0x0 !== R) {
              var k = R["call"](B, V || "default");
              if ("object" !== L(k)) return k;
              throw new TypeError(
                "@@toPrimitive\x20must\x20return\x20a\x20pr" +
                  "imitive\x20value."
              );
            }
            return ("string" === V ? String : Number)(B);
          })(K, "string")),
          "symbol" === L(b) ? b : String(b)),
          y
        );
    }
    var K, b;
  }
  function M(Z, m, W) {
    return (
      m && H(Z["prototype"], m),
      W && H(Z, W),
      Object["defineProperty"](Z, "prototype", { writable: !0x1 }),
      Z
    );
  }
  var j = (function () {
      function Z(m, W, y) {
        if ((D(this, Z), !m))
          throw new Error("Ad\x20unit\x20path\x20is\x20required.");
        (window["googletag"] = window["googletag"] || { cmd: [] }),
          (this["adUnitPath"] = m),
          (this["grantedCallback"] = W),
          (this["rejectedCallback"] = y),
          (this["boundRewardedSlotReady"] =
            this["onRewardedSlotReady"]["bind"](this)),
          (this["boundRewardedSlotClosed"] = this["dismissRewardedAd"]["bind"](
            this,
            !0x0
          )),
          (this["boundRewardedSlotGranted"] =
            this["onRewardedSlotGranted"]["bind"](this)),
          (this["boundRewardedSlotUnfilled"] =
            this["onRewardedSlotUnfilled"]["bind"](this));
      }
      return (
        M(Z, [
          {
            key: "initAd",
            value: function () {
              var m = this;
              googletag["cmd"]["push"](function () {
                try {
                  if (
                    ((m["rewardedSlot"] = googletag["defineOutOfPageSlot"](
                      m["adUnitPath"],
                      googletag["enums"]["OutOfPageFormat"]["REWARDED"]
                    )),
                    !m["rewardedSlot"])
                  )
                    return void console["error"](
                      "Failed\x20to\x20define\x20out-of-page\x20s" + "lot."
                    );
                  m["rewardedSlot"]["addService"](googletag["pubads"]()),
                    m["setupAdEvents"](),
                    googletag["enableServices"](),
                    googletag["display"](m["rewardedSlot"]),
                    googletag["pubads"]()["isInitialLoadDisabled"]() &&
                      googletag["pubads"]()["refresh"]([m["rewardedSlot"]]);
                } catch (W) {
                  console["error"]("Error\x20initializing\x20ad:\x20", W);
                  console.log("file loaded");
                }
              });
            },
          },
          {
            key: "setupAdEvents",
            value: function () {
              this["rewardedSlot"] &&
                (googletag["pubads"]()["addEventListener"](
                  "rewardedSlotReady",
                  this["boundRewardedSlotReady"]
                ),
                googletag["pubads"]()["addEventListener"](
                  "rewardedSlotClosed",
                  this["boundRewardedSlotClosed"]
                ),
                googletag["pubads"]()["addEventListener"](
                  "rewardedSlotGranted",
                  this["boundRewardedSlotGranted"]
                ),
                googletag["pubads"]()["addEventListener"](
                  "slotRenderEnded",
                  this["boundRewardedSlotUnfilled"]
                ));
            },
          },
          {
            key: "removeAdEvents",
            value: function () {
              this["rewardedSlot"] &&
                (googletag["pubads"]()["removeEventListener"](
                  "rewardedSlotReady",
                  this["boundRewardedSlotReady"]
                ),
                googletag["pubads"]()["removeEventListener"](
                  "rewardedSlotClosed",
                  this["boundRewardedSlotClosed"]
                ),
                googletag["pubads"]()["removeEventListener"](
                  "rewardedSlotGranted",
                  this["boundRewardedSlotGranted"]
                ),
                googletag["pubads"]()["removeEventListener"](
                  "slotRenderEnded",
                  this["boundRewardedSlotUnfilled"]
                ));
            },
          },
          {
            key: "onRewardedSlotReady",
            value: function (m) {
              m["makeRewardedVisible"]();
            },
          },
          {
            key: "onRewardedSlotGranted",
            value: function () {
              this["dismissRewardedAd"](!0x1),
                "function" == typeof this["grantedCallback"] &&
                  this["grantedCallback"]();
            },
          },
          {
            key: "onRewardedSlotUnfilled",
            value: function (m) {
              m["slot"] === this["rewardedSlot"] &&
                m["isEmpty"] &&
                this["grantedCallback"]();
            },
          },
          {
            key: "dismissRewardedAd",
            value: function () {
              var m =
                !(arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]) ||
                arguments[0x0];
              this["removeAdEvents"](),
                this["rewardedSlot"] &&
                  googletag["destroySlots"]([this["rewardedSlot"]]),
                m &&
                  "function" == typeof this["rejectedCallback"] &&
                  this["rejectedCallback"]();
            },
          },
          {
            key: "render",
            value: function () {
              this["initAd"]();
            },
          },
        ]),
        Z
      );
    })(),
    z = (function () {
      function Z(m, W, y) {
        D(this, Z),
          (this["config"] = m),
          (this["triggerAdGranted"] = W),
          (this["triggerAdRejected"] = y),
          this["initialize"]();
      }
      return (
        M(Z, [
          {
            key: "initialize",
            value: function () {
              (this["config"]["ids"] = {
                adRenderBtnId: "jb-rewd__ad-render-btn__"["concat"](
                  this["config"]["instanceId"]
                ),
                modalCloseBtnId: "jb-rewd__modal-close-btn__"["concat"](
                  this["config"]["instanceId"]
                ),
              }),
                this["addFontFamily"](),
                this["addStylesToDocument"]();
            },
          },
          {
            key: "addFontFamily",
            value: function () {
              var m = document["getElementsByTagName"]("head")[0x0],
                W = document["createElement"]("link");
              (W["rel"] = "stylesheet"),
                (W["href"] =
                  "https://fonts.googleapis.com/c" +
                  "ss2?family=Roboto:wght@400;700" +
                  "&display=swap"),
                (W["onload"] = function () {
                  document["querySelectorAll"]("div.jb-rewd__modal\x20*")[
                    "forEach"
                  ](function (y) {
                    y["style"]["fontFamily"] = "Roboto,\x20sans-serif";
                  });
                }),
                m["appendChild"](W);
            },
          },
          {
            key: "addStylesToDocument",
            value: function () {
              var m = document["createElement"]("style");
              m["appendChild"](
                document["createTextNode"](
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20jbFadeIn\x20{" +
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{opacity:\x200;" +
                    "}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{opacity:\x201;}" +
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.jb-rewd__" +
                    "modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20n" +
                    "one;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fix" +
                    "ed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999" +
                    "9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20widt" +
                    "h:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x201" +
                    "00%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20aut" +
                    "o;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-colo" +
                    "r:\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20backdrop-filter:\x20blur(3px);\x0a" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20jbFadeI" +
                    "n\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.jb" +
                    "-rewd__modal-wrapper\x20{\x0a\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20disp" +
                    "lay:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify" +
                    "-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}" +
                    "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.jb-rewd__modal-cont" +
                    "ent\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20" +
                    "center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20" +
                    "relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x203" +
                    "00px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x20" +
                    "400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20fl" +
                    "ex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-flow:\x20col" +
                    "umn\x20wrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20place-co" +
                    "ntent:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ali" +
                    "gn-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "gap:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backgro" +
                    "und-color:" +
                    ("\x20rgb(10,\x2020,\x2078);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                      "color:\x20rgb(255,\x20255,\x20255);\x0a\x20\x20\x20" +
                      "\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a" +
                      "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2044px\x2010px" +
                      ";\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20soli" +
                      "d\x20rgb(255,\x20255,\x20255);\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
                      "}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20.jb-rewd__d" +
                      "wld-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:" +
                      "\x2016px\x2025px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backgr" +
                      "ound-image:\x20linear-gradient(#f" +
                      "fdb00,\x20#ffdb00,\x20#776c18\x20103%);" +
                      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050" +
                      "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#255d9c" +
                      ";\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2026px;" +
                      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;" +
                      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20" +
                      "\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x202px\x204px\x201" +
                      "0px\x202px\x20#17191b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20c" +
                      "ursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20" +
                      "\x20\x20\x20\x20\x20.jb-rewd__modal-close-btn" +
                      "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20cen" +
                      "ter;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decorati" +
                      "on:\x20underline;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20col" +
                      "or:\x20#8592ff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20curso" +
                      "r:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-s" +
                      "ize:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20")
                )
              ),
                document["head"]["appendChild"](m);
            },
          },
          {
            key: "createModal",
            value: function () {
              var m = document["createElement"]("div");
              (m["id"] = "jb-rewd__modal__"["concat"](
                this["config"]["instanceId"]
              )),
                m["classList"]["add"]("jb-rewd__modal"),
                (m["innerHTML"] = this["getModalContentHtml"]()),
                document["body"]["appendChild"](m),
                this["addEventListeners"](),
                (this["modal"] = m);
            },
          },
          {
            key: "getModalContentHtml",
            value: function () {
              var m, W;
              return ("\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22jb-re" +
                "wd__modal-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                "\x20\x20\x20\x20\x20\x20<div\x20class=\x22jb-rewd__mod" +
                "al-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                "\x20\x20\x20")
                ["concat"](
                  null !== (m = this["config"]) &&
                    void 0x0 !== m &&
                    null !== (m = m["modalUI"]) &&
                    void 0x0 !== m &&
                    m["imageUrl"]
                    ? ("<img\x20width=\x22120\x22\x20height=\x22120\x22\x20" +
                        "src=")["concat"](
                        null === (W = this["config"]) ||
                          void 0x0 === W ||
                          null === (W = W["modalUI"]) ||
                          void 0x0 === W
                          ? void 0x0
                          : W["imageUrl"],
                        "\x20alt=\x22modal_hero_image\x22>"
                      )
                    : "",
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-" +
                    "size:\x2029px;\x20font-family:\x20inher" +
                    "it;\x20text-align:\x20center;\x22>\x0a\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                )
                ["concat"](
                  this["config"]["modalUI"]["title"],
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x0a" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style" +
                    "=\x22border-radius:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22wi" +
                    "dth:\x20100%;\x20height:\x2018px;\x20margi" +
                    "n:\x200;\x20text-align:\x20end;\x20color:\x20" +
                    "#ffdb00;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20Ad\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20<button\x20id=\x22"
                )
                ["concat"](
                  this["config"]["ids"]["adRenderBtnId"],
                  "\x22\x20class=\x22jb-rewd__dwld-btn\x22>\x0a\x20" +
                    "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                )
                ["concat"](
                  this["config"]["modalUI"]["showAdBtnText"],
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</but" +
                    "ton>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div" +
                    ">\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20i" +
                    "d=\x22"
                )
                ["concat"](
                  this["config"]["ids"]["modalCloseBtnId"],
                  "\x22\x20class=\x22jb-rewd__modal-close-" +
                    "btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "Close\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</sp" +
                    "an>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span" +
                    "\x20class=\x22ourPowerOf\x22>Powered\x20By" +
                    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<spa" +
                    "n\x20style=\x22color:\x20#66d4ff;\x22>Just" +
                    "baat.ai</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    "\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<" +
                    "/div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>"
                );
            },
          },
          {
            key: "addEventListeners",
            value: function () {
              document["getElementById"](
                this["config"]["ids"]["adRenderBtnId"]
              )["addEventListener"]("click", this["renderAd"]["bind"](this)),
                document["getElementById"](
                  this["config"]["ids"]["modalCloseBtnId"]
                )["addEventListener"](
                  "click",
                  this["destroyModal"]["bind"](this)
                );
            },
          },
          {
            key: "renderAd",
            value: function () {
              (this["rewardedAd"] = new j(
                this["config"]["adUnit"][0x0]["id"],
                this["triggerAdGranted"]["bind"](this),
                this["triggerAdRejected"]["bind"](this)
              )),
                this["rewardedAd"]
                  ? (this["rewardedAd"]["render"](), this["destroyModal"]())
                  : console["error"](
                      "RewardedAdModal\x20is\x20not\x20initial" + "ized."
                    );
            },
          },
          {
            key: "removeEventListeners",
            value: function () {
              document["getElementById"](config["activatorId"])[
                "removeEventListener"
              ]("click", showModal);
            },
          },
          {
            key: "showModal",
            value: function () {
              this["createModal"](),
                (this["modal"]["style"]["display"] = "block");
            },
          },
          {
            key: "destroyModal",
            value: function () {
              this["modal"] &&
                this["modal"]["parentNode"] &&
                this["modal"]["parentNode"]["removeChild"](this["modal"]);
            },
          },
          {
            key: "render",
            value: function () {
              this["showModal"]();
            },
          },
        ]),
        Z
      );
    })(),
    U = (function () {
      function Z() {
        var K =
          arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
            ? arguments[0x0]
            : null;
        D(this, Z),
          (this["defaultConfig"] = {
            hostActivatorBtn: { enabled: !0x1, text: "View\x20Rewarded\x20Ad" },
            modalUI: {
              enabled: !0x0,
              imageUrl:
                "https://reports.magicbid.ai/im" + "g/cloud-computing.png",
              title:
                "Unlock\x20a\x20free\x20download\x20by\x20watc" +
                "hing\x20an\x20ad",
              showAdBtnText: "Continue",
            },
            adUnit: [{ id: "/22639388115/rewarded_web_exam" + "ple" }],
            CTA: {
              onSuccess: {
                action: "REDIRECT",
                redirectUrl: "https://google.com",
                target: "_blank",
              },
              onReject: { action: "REDIRECT", redirectUrl: "" },
            },
          }),
          (this["onPluginReadyCallbacks"] = []),
          this["initialize"](K);
      }
      var m, W, y;
      return (
        M(Z, [
          {
            key: "getConfig",
            value:
              ((y = A(
                G()["mark"](function K() {
                  var b, B, V, R, k;
                  return G()["wrap"](
                    function (v) {
                      for (;;)
                        switch ((v["prev"] = v["next"])) {
                          case 0x0:
                            return (
                              (v["prev"] = 0x0),
                              (b = I(!0x1)),
                              (B =
                                "localhost" === b
                                  ? "https://localhost:8080/rewarde" +
                                    "d-ad/rewarded-ad-config.json"
                                  : q(
                                      "publishers/"["concat"](
                                        b,
                                        "/rewarded-ad-config2.json"
                                      )
                                    )),
                              (V = null),
                              (v["prev"] = 0x4),
                              (v["next"] = 0x7),
                              fetch(B)
                            );
                          case 0x7:
                            if ((V = v["sent"])["ok"]) {
                              v["next"] = 0xa;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                V["status"],
                                "\x20at\x20primary\x20URL"
                              )
                            );
                          case 0xa:
                            v["next"] = 0x1b;
                            break;
                          case 0xc:
                            return (
                              (v["prev"] = 0xc),
                              (v["t0"] = v["catch"](0x4)),
                              (R = window["location"]["hostname"]["replace"](
                                /\./g,
                                "_"
                              )),
                              (k = q(
                                "publishers/"["concat"](
                                  "airbytegames_com",
                                  "/rewarded-ad-config.json"
                                )
                              )),
                              (v["prev"] = 0x10),
                              (v["next"] = 0x13),
                              fetch(k)
                            );
                          case 0x13:
                            if ((V = v["sent"])["ok"]) {
                              v["next"] = 0x16;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                V["status"],
                                "\x20at\x20backup\x20URL"
                              )
                            );
                          case 0x16:
                            v["next"] = 0x1b;
                            break;
                          case 0x18:
                            throw (
                              ((v["prev"] = 0x18),
                              (v["t1"] = v["catch"](0x10)),
                              v["t1"])
                            );
                          case 0x1b:
                            if (V["ok"]) {
                              v["next"] = 0x1d;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                V["status"]
                              )
                            );
                          case 0x1d:
                            return (v["next"] = 0x1f), V["json"]();
                          case 0x1f:
                            (this["config"] = v["sent"]),
                              (this["config"]["hostname"] = b),
                              (v["next"] = 0x26);
                            break;
                          case 0x23:
                            (v["prev"] = 0x23),
                              (v["t2"] = v["catch"](0x0)),
                              console["error"](
                                "JB:\x20Error\x20fetching\x20config",
                                v["t2"]
                              );
                          case 0x26:
                          case "end":
                            return v["stop"]();
                        }
                    },
                    K,
                    this,
                    [
                      [0x0, 0x23],
                      [0x4, 0xc],
                      [0x10, 0x18],
                    ]
                  );
                })
              )),
              function () {
                return y["apply"](this, arguments);
              }),
          },
          {
            key: "setupAd",
            value:
              ((W = A(
                G()["mark"](function b() {
                  var B;
                  return G()["wrap"](
                    function (V) {
                      for (;;)
                        switch ((V["prev"] = V["next"])) {
                          case 0x0:
                            return (
                              (V["next"] = 0x2),
                              C({
                                src:
                                  "https://securepubads.g.doublec" +
                                  "lick.net/tag/js/gpt.js",
                                async: !0x0,
                              })
                            );
                          case 0x2:
                            null !== (B = this["config"]) &&
                            void 0x0 !== B &&
                            null !== (B = B["modalUI"]) &&
                            void 0x0 !== B &&
                            B["enabled"]
                              ? (this["adModalRenderer"] = new z(
                                  this["config"],
                                  this["triggerAdGranted"]["bind"](this),
                                  this["triggerAdRejected"]["bind"](this)
                                ))
                              : (this["rewardedAd"] = new j(
                                  this["config"]["adUnit"][0x0]["id"],
                                  this["triggerAdGranted"]["bind"](this),
                                  this["triggerAdRejected"]["bind"](this)
                                ));
                          case 0x3:
                          case "end":
                            return V["stop"]();
                        }
                    },
                    b,
                    this
                  );
                })
              )),
              function () {
                return W["apply"](this, arguments);
              }),
          },
          {
            key: "initialize",
            value:
              ((m = A(
                G()["mark"](function B(V) {
                  return G()["wrap"](
                    function (R) {
                      for (;;)
                        switch ((R["prev"] = R["next"])) {
                          case 0x0:
                            if (((R["prev"] = 0x0), !V)) {
                              R["next"] = 0x5;
                              break;
                            }
                            (this["config"] = V), (R["next"] = 0x7);
                            break;
                          case 0x5:
                            return (R["next"] = 0x7), this["getConfig"]();
                          case 0x7:
                            if (this["config"]) {
                              R["next"] = 0x9;
                              break;
                            }
                            return R["abrupt"]("return");
                          case 0x9:
                            return (
                              (this["config"] = x(
                                this["defaultConfig"],
                                this["config"]
                              )),
                              (this["config"]["instanceId"] = E(0x8)),
                              (R["next"] = 0xd),
                              this["setupAd"]()
                            );
                          case 0xd:
                            (this["pluginReady"] = !0x0),
                              this["triggerPluginReady"](),
                              (R["next"] = 0x14);
                            break;
                          case 0x11:
                            (R["prev"] = 0x11),
                              (R["t0"] = R["catch"](0x0)),
                              console["error"](
                                "JB:\x20Error\x20initializing\x20Rewarde" +
                                  "d\x20Ads",
                                R["t0"]
                              );
                          case 0x14:
                          case "end":
                            return R["stop"]();
                        }
                    },
                    B,
                    this,
                    [[0x0, 0x11]]
                  );
                })
              )),
              function (V) {
                return m["apply"](this, arguments);
              }),
          },
          {
            key: "renderAd",
            value: function () {
              var V =
                arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
                  ? arguments[0x0]
                  : null;
              V && (this["renderPassbackConfig"] = V),
                this["config"]["modalUI"]["enabled"]
                  ? this["adModalRenderer"]
                    ? this["adModalRenderer"]["render"]()
                    : console["error"](
                        "RewardedAdModal\x20is\x20not\x20initial" + "ized."
                      )
                  : this["rewardedAd"]
                  ? this["rewardedAd"]["render"]()
                  : console["error"]("RewardedAd\x20is\x20not\x20initialized.");
            },
          },
          {
            key: "onAdGranted",
            value: function (V) {
              this["onAdGrantedCallback"] = V;
            },
          },
          {
            key: "onAdRejected",
            value: function (V) {
              this["onAdRejectedCallback"] = V;
            },
          },
          {
            key: "onReady",
            value: function (V) {
              this["pluginReady"]
                ? V()
                : this["onPluginReadyCallbacks"]["push"](V);
            },
          },
          {
            key: "triggerAdGranted",
            value: function () {
              "function" == typeof this["onAdGrantedCallback"] &&
                this["onAdGrantedCallback"](this["renderPassbackConfig"]);
            },
          },
          {
            key: "triggerAdRejected",
            value: function () {
              "function" == typeof this["onAdRejectedCallback"] &&
                this["onAdRejectedCallback"](this["renderPassbackConfig"]);
            },
          },
          {
            key: "triggerPluginReady",
            value: function () {
              this["onPluginReadyCallbacks"]["forEach"](function (V) {
                "function" == typeof V && V();
              }),
                (this["onPluginReadyCallbacks"] = []);
            },
          },
        ]),
        Z
      );
    })();
  window["JbRewardedAdHandler"] = U;
})();
