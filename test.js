(() => {
  "use strict";
  var X = function (N) {
    if (!N)
      throw new Error("Path\x20must\x20be\x20a\x20non-empty\x20strin" + "g");
    var J = N["startsWith"]("/") ? N["substring"](0x1) : N;
    return ""
      ["concat"]("https://jb-mcm.s3.ap-south-1.a" + "mazonaws.com", "/")
      ["concat"](J);
  };
  const U = {
    getConstructor: function (N) {
      return null != N ? N["constructor"] : null;
    },
    instanceOf: function (N, J) {
      return Boolean(N && J && N instanceof J);
    },
    nullOrUndefined: function (N) {
      return null == N;
    },
    boolean: function (N) {
      return this["getConstructor"](N) === Boolean;
    },
    string: function (N) {
      return this["getConstructor"](N) === String;
    },
    number: function (N) {
      return this["getConstructor"](N) === Number && !Number["isNaN"](N);
    },
    object: function (N) {
      return this["getConstructor"](N) === Object;
    },
    fn: function (N) {
      return "function" == typeof N;
    },
    array: function (N) {
      return Array["isArray"](N);
    },
    nodeList: function (N) {
      return this["instanceOf"](N, NodeList);
    },
    empty: function (N) {
      return (
        this["nullOrUndefined"](N) ||
        ((this["string"](N) || this["array"](N) || this["nodeList"](N)) &&
          !N["length"]) ||
        (this["object"](N) && !Object["keys"](N)["length"])
      );
    },
  };
  X("publishers");

  function H() {
    for (
      var N =
          arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
            ? arguments[0x0]
            : 0x8,
        J =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcd" +
          "efghijklmnopqrstuvwxyz01234567" +
          "89",
        G = "",
        E = 0x0;
      E < N;
      E++
    ) {
      var x = Math["floor"](0x3e * Math["random"]());
      G += J["charAt"](x);
    }
    return G;
  }

  function F() {
    var N,
      J,
      G =
        !(arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]) ||
        arguments[0x0],
      E = window["location"]["hostname"]["match"](
        /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\/\n?]+)$/i
      ),
      x = (E && E[0x1])["split"](".");
    return (
      x["pop"](),
      x["includes"]("localhost") || 0x0 === x["length"]
        ? (N = G ? "worldnewscorp" : "localhost")
        : x["length"] > 0x2
        ? ((J = x[0x0]),
          (N = x["slice"](0x1)["join"]("_")),
          (N = ""["concat"](J, "_")["concat"](N)))
        : (N = x["join"]("_")),
      N
    );
  }

  function R(N) {
    var J =
      arguments["length"] > 0x1 && void 0x0 !== arguments[0x1]
        ? arguments[0x1]
        : document;
    return new Promise(function (G, E) {
      if (J["querySelector"]("script[src=\x22"["concat"](N["src"], "\x22]")))
        return N["cb"] && U["fn"](N["cb"]) && N["cb"](), void G();
      var x = document["createElement"]("script");
      (x["type"] = "text/javascript"),
        (x["src"] = N["src"]),
        N["id"] && (x["id"] = N["id"]),
        N["async"] && (x["async"] = !0x0),
        N["defer"] && (x["defer"] = !0x0),
        N["attributes"] &&
          Object["keys"](N["attributes"])["forEach"](function (D) {
            x["setAttribute"](D, N["attributes"][D]);
          }),
        (x["onload"] = function () {
          N["cb"] && U["fn"](N["cb"]) && N["cb"](), G();
        }),
        (x["onerror"] = function () {
          return E(
            new Error("Script\x20load\x20error\x20for\x20"["concat"](N["src"]))
          );
        }),
        J === document
          ? J["head"]["appendChild"](x)
          : J instanceof HTMLElement
          ? J["appendChild"](x)
          : E(
              new Error(
                "Invalid\x20appendor:\x20must\x20be\x20docu" +
                  "ment\x20or\x20an\x20HTML\x20element"
              )
            );
    });
  }

  function O(N, J) {
    var G = ["__comment"],
      E = N;
    for (var x in E)
      if (
        E["hasOwnProperty"](x) &&
        (G["includes"](x) && delete E[x],
        J["hasOwnProperty"](x) && null !== J[x] && void 0x0 !== J[x])
      ) {
        if (!0x0 === U["object"](J[x])) O(E[x], J[x]);
        else E[x] = U["empty"](J[x]) ? E[x] : J[x];
      }
    return E;
  }

  function q() {
    q = function () {
      return J;
    };
    var N,
      J = {},
      G = Object["prototype"],
      D = G["hasOwnProperty"],
      K =
        Object["defineProperty"] ||
        function (tz, tv, tu) {
          tz[tv] = tu["value"];
        },
      M = "function" == typeof Symbol ? Symbol : {},
      Y = M["iterator"] || "@@iterator",
      Q = M["asyncIterator"] || "@@asyncIterator",
      T = M["toStringTag"] || "@@toStringTag";

    function t0(tz, tv, tu) {
      return (
        Object["defineProperty"](tz, tv, {
          value: tu,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        }),
        tz[tv]
      );
    }
    try {
      t0({}, "");
    } catch (tz) {
      t0 = function (tv, tu, tZ) {
        return (tv[tu] = tZ);
      };
    }

    function t1(tv, tu, tZ, tk) {
      var tB = tu && tu["prototype"] instanceof t8 ? tu : t8,
        tV = Object["create"](tB["prototype"]),
        tm = new tC(tk || []);
      return (
        K(tV, "_invoke", {
          value: tR(tv, tZ, tm),
        }),
        tV
      );
    }

    function t2(tv, tu, tZ) {
      try {
        return {
          type: "normal",
          arg: tv["call"](tu, tZ),
        };
      } catch (tk) {
        return {
          type: "throw",
          arg: tk,
        };
      }
    }
    J["wrap"] = t1;
    var t3 = "suspendedStart",
      t4 = "suspendedYield",
      t5 = "executing",
      t6 = "completed",
      t7 = {};

    function t8() {}

    function t9() {}

    function tt() {}
    var tn = {};
    t0(tn, Y, function () {
      return this;
    });
    var tX = Object["getPrototypeOf"],
      tU = tX && tX(tX(tW([])));
    tU && tU !== G && D["call"](tU, Y) && (tn = tU);
    var tH = (tt["prototype"] = t8["prototype"] = Object["create"](tn));

    function tf(tv) {
      ["next", "throw", "return"]["forEach"](function (tu) {
        t0(tv, tu, function (tZ) {
          return this["_invoke"](tu, tZ);
        });
      });
    }

    function tF(tv, tu) {
      function tZ(tB, tV, tm, tN) {
        var tc = t2(tv[tB], tv, tV);
        if ("throw" !== tc["type"]) {
          var ti = tc["arg"],
            tJ = ti["value"];
          return tJ && "object" == W(tJ) && D["call"](tJ, "__await")
            ? tu["resolve"](tJ["__await"])["then"](
                function (tG) {
                  tZ("next", tG, tm, tN);
                },
                function (tG) {
                  tZ("throw", tG, tm, tN);
                }
              )
            : tu["resolve"](tJ)["then"](
                function (tG) {
                  (ti["value"] = tG), tm(ti);
                },
                function (tG) {
                  return tZ("throw", tG, tm, tN);
                }
              );
        }
        tN(tc["arg"]);
      }
      var tk;
      K(this, "_invoke", {
        value: function (tB, tV) {
          function tm() {
            return new tu(function (tN, tc) {
              tZ(tB, tV, tN, tc);
            });
          }
          return (tk = tk ? tk["then"](tm, tm) : tm());
        },
      });
    }

    function tR(tv, tu, tZ) {
      var tk = t3;
      return function (tB, tV) {
        if (tk === t5) throw Error("Generator\x20is\x20already\x20running");
        if (tk === t6) {
          if ("throw" === tB) throw tV;
          return {
            value: N,
            done: !0x0,
          };
        }
        for (tZ["method"] = tB, tZ["arg"] = tV; ; ) {
          var tm = tZ["delegate"];
          if (tm) {
            var tN = tO(tm, tZ);
            if (tN) {
              if (tN === t7) continue;
              return tN;
            }
          }
          if ("next" === tZ["method"]) tZ["sent"] = tZ["_sent"] = tZ["arg"];
          else {
            if ("throw" === tZ["method"]) {
              if (tk === t3) throw ((tk = t6), tZ["arg"]);
              tZ["dispatchException"](tZ["arg"]);
            } else
              "return" === tZ["method"] && tZ["abrupt"]("return", tZ["arg"]);
          }
          tk = t5;
          var tc = t2(tv, tu, tZ);
          if ("normal" === tc["type"]) {
            if (((tk = tZ["done"] ? t6 : t4), tc["arg"] === t7)) continue;
            return {
              value: tc["arg"],
              done: tZ["done"],
            };
          }
          "throw" === tc["type"] &&
            ((tk = t6), (tZ["method"] = "throw"), (tZ["arg"] = tc["arg"]));
        }
      };
    }

    function tO(tv, tu) {
      var tZ = tu["method"],
        tk = tv["iterator"][tZ];
      if (tk === N)
        return (
          (tu["delegate"] = null),
          ("throw" === tZ &&
            tv["iterator"]["return"] &&
            ((tu["method"] = "return"),
            (tu["arg"] = N),
            tO(tv, tu),
            "throw" === tu["method"])) ||
            ("return" !== tZ &&
              ((tu["method"] = "throw"),
              (tu["arg"] = new TypeError(
                "The\x20iterator\x20does\x20not\x20provide\x20" +
                  "a\x20\x27" +
                  tZ +
                  "\x27\x20method"
              )))),
          t7
        );
      var tB = t2(tk, tv["iterator"], tu["arg"]);
      if ("throw" === tB["type"])
        return (
          (tu["method"] = "throw"),
          (tu["arg"] = tB["arg"]),
          (tu["delegate"] = null),
          t7
        );
      var tV = tB["arg"];
      return tV
        ? tV["done"]
          ? ((tu[tv["resultName"]] = tV["value"]),
            (tu["next"] = tv["nextLoc"]),
            "return" !== tu["method"] &&
              ((tu["method"] = "next"), (tu["arg"] = N)),
            (tu["delegate"] = null),
            t7)
          : tV
        : ((tu["method"] = "throw"),
          (tu["arg"] = new TypeError(
            "iterator\x20result\x20is\x20not\x20an\x20obje" + "ct"
          )),
          (tu["delegate"] = null),
          t7);
    }

    function tq(tv) {
      var tu = {
        tryLoc: tv[0x0],
      };
      0x1 in tv && (tu["catchLoc"] = tv[0x1]),
        0x2 in tv && ((tu["finallyLoc"] = tv[0x2]), (tu["afterLoc"] = tv[0x3])),
        this["tryEntries"]["push"](tu);
    }

    function tI(tv) {
      var tu = tv["completion"] || {};
      (tu["type"] = "normal"), delete tu["arg"], (tv["completion"] = tu);
    }

    function tC(tv) {
      (this["tryEntries"] = [
        {
          tryLoc: "root",
        },
      ]),
        tv["forEach"](tq, this),
        this["reset"](!0x0);
    }

    function tW(tv) {
      if (tv || "" === tv) {
        var tu = tv[Y];
        if (tu) return tu["call"](tv);
        if ("function" == typeof tv["next"]) return tv;
        if (!isNaN(tv["length"])) {
          var tZ = -0x1,
            tk = function tB() {
              for (; ++tZ < tv["length"]; )
                if (D["call"](tv, tZ))
                  return (tB["value"] = tv[tZ]), (tB["done"] = !0x1), tB;
              return (tB["value"] = N), (tB["done"] = !0x0), tB;
            };
          return (tk["next"] = tk);
        }
      }
      throw new TypeError(W(tv) + "\x20is\x20not\x20iterable");
    }
    return (
      (t9["prototype"] = tt),
      K(tH, "constructor", {
        value: tt,
        configurable: !0x0,
      }),
      K(tt, "constructor", {
        value: t9,
        configurable: !0x0,
      }),
      (t9["displayName"] = t0(tt, T, "GeneratorFunction")),
      (J["isGeneratorFunction"] = function (tv) {
        var tu = "function" == typeof tv && tv["constructor"];
        return (
          !!tu &&
          (tu === t9 ||
            "GeneratorFunction" === (tu["displayName"] || tu["name"]))
        );
      }),
      (J["mark"] = function (tv) {
        return (
          Object["setPrototypeOf"]
            ? Object["setPrototypeOf"](tv, tt)
            : ((tv["__proto__"] = tt), t0(tv, T, "GeneratorFunction")),
          (tv["prototype"] = Object["create"](tH)),
          tv
        );
      }),
      (J["awrap"] = function (tv) {
        return {
          __await: tv,
        };
      }),
      tf(tF["prototype"]),
      t0(tF["prototype"], Q, function () {
        return this;
      }),
      (J["AsyncIterator"] = tF),
      (J["async"] = function (tv, tu, tZ, tk, tB) {
        void 0x0 === tB && (tB = Promise);
        var tV = new tF(t1(tv, tu, tZ, tk), tB);
        return J["isGeneratorFunction"](tu)
          ? tV
          : tV["next"]()["then"](function (tm) {
              return tm["done"] ? tm["value"] : tV["next"]();
            });
      }),
      tf(tH),
      t0(tH, T, "Generator"),
      t0(tH, Y, function () {
        return this;
      }),
      t0(tH, "toString", function () {
        return "[object\x20Generator]";
      }),
      (J["keys"] = function (tv) {
        var tu = Object(tv),
          tZ = [];
        for (var tk in tu) tZ["push"](tk);
        return (
          tZ["reverse"](),
          function tB() {
            for (; tZ["length"]; ) {
              var tV = tZ["pop"]();
              if (tV in tu) return (tB["value"] = tV), (tB["done"] = !0x1), tB;
            }
            return (tB["done"] = !0x0), tB;
          }
        );
      }),
      (J["values"] = tW),
      (tC["prototype"] = {
        constructor: tC,
        reset: function (tv) {
          if (
            ((this["prev"] = 0x0),
            (this["next"] = 0x0),
            (this["sent"] = this["_sent"] = N),
            (this["done"] = !0x1),
            (this["delegate"] = null),
            (this["method"] = "next"),
            (this["arg"] = N),
            this["tryEntries"]["forEach"](tI),
            !tv)
          ) {
            for (var tu in this)
              "t" === tu["charAt"](0x0) &&
                D["call"](this, tu) &&
                !isNaN(+tu["slice"](0x1)) &&
                (this[tu] = N);
          }
        },
        stop: function () {
          this["done"] = !0x0;
          var tv = this["tryEntries"][0x0]["completion"];
          if ("throw" === tv["type"]) throw tv["arg"];
          return this["rval"];
        },
        dispatchException: function (tv) {
          if (this["done"]) throw tv;
          var tu = this;

          function tZ(tc, ti) {
            return (
              (tV["type"] = "throw"),
              (tV["arg"] = tv),
              (tu["next"] = tc),
              ti && ((tu["method"] = "next"), (tu["arg"] = N)),
              !!ti
            );
          }
          for (var tk = this["tryEntries"]["length"] - 0x1; tk >= 0x0; --tk) {
            var tB = this["tryEntries"][tk],
              tV = tB["completion"];
            if ("root" === tB["tryLoc"]) return tZ("end");
            if (tB["tryLoc"] <= this["prev"]) {
              var tm = D["call"](tB, "catchLoc"),
                tN = D["call"](tB, "finallyLoc");
              if (tm && tN) {
                if (this["prev"] < tB["catchLoc"])
                  return tZ(tB["catchLoc"], !0x0);
                if (this["prev"] < tB["finallyLoc"])
                  return tZ(tB["finallyLoc"]);
              } else {
                if (tm) {
                  if (this["prev"] < tB["catchLoc"])
                    return tZ(tB["catchLoc"], !0x0);
                } else {
                  if (!tN)
                    throw Error(
                      "try\x20statement\x20without\x20catch\x20or" +
                        "\x20finally"
                    );
                  if (this["prev"] < tB["finallyLoc"])
                    return tZ(tB["finallyLoc"]);
                }
              }
            }
          }
        },
        abrupt: function (tv, tu) {
          for (var tZ = this["tryEntries"]["length"] - 0x1; tZ >= 0x0; --tZ) {
            var tk = this["tryEntries"][tZ];
            if (
              tk["tryLoc"] <= this["prev"] &&
              D["call"](tk, "finallyLoc") &&
              this["prev"] < tk["finallyLoc"]
            ) {
              var tB = tk;
              break;
            }
          }
          tB &&
            ("break" === tv || "continue" === tv) &&
            tB["tryLoc"] <= tu &&
            tu <= tB["finallyLoc"] &&
            (tB = null);
          var tV = tB ? tB["completion"] : {};
          return (
            (tV["type"] = tv),
            (tV["arg"] = tu),
            tB
              ? ((this["method"] = "next"),
                (this["next"] = tB["finallyLoc"]),
                t7)
              : this["complete"](tV)
          );
        },
        complete: function (tv, tu) {
          if ("throw" === tv["type"]) throw tv["arg"];
          return (
            "break" === tv["type"] || "continue" === tv["type"]
              ? (this["next"] = tv["arg"])
              : "return" === tv["type"]
              ? ((this["rval"] = this["arg"] = tv["arg"]),
                (this["method"] = "return"),
                (this["next"] = "end"))
              : "normal" === tv["type"] && tu && (this["next"] = tu),
            t7
          );
        },
        finish: function (tv) {
          for (var tu = this["tryEntries"]["length"] - 0x1; tu >= 0x0; --tu) {
            var tZ = this["tryEntries"][tu];
            if (tZ["finallyLoc"] === tv)
              return (
                this["complete"](tZ["completion"], tZ["afterLoc"]), tI(tZ), t7
              );
          }
        },
        catch: function (tv) {
          for (var tu = this["tryEntries"]["length"] - 0x1; tu >= 0x0; --tu) {
            var tZ = this["tryEntries"][tu];
            if (tZ["tryLoc"] === tv) {
              var tk = tZ["completion"];
              if ("throw" === tk["type"]) {
                var tB = tk["arg"];
                tI(tZ);
              }
              return tB;
            }
          }
          throw Error("illegal\x20catch\x20attempt");
        },
        delegateYield: function (tv, tu, tZ) {
          return (
            (this["delegate"] = {
              iterator: tW(tv),
              resultName: tu,
              nextLoc: tZ,
            }),
            "next" === this["method"] && (this["arg"] = N),
            t7
          );
        },
      }),
      J
    );
  }

  function I(N, J, G, E, x, D, K) {
    try {
      var M = N[D](K),
        w = M["value"];
    } catch (L) {
      return void G(L);
    }
    M["done"] ? J(w) : Promise["resolve"](w)["then"](E, x);
  }

  function C(N) {
    return function () {
      var J = this,
        G = arguments;
      return new Promise(function (E, x) {
        var D = N["apply"](J, G);

        function K(w) {
          I(D, E, x, K, M, "next", w);
        }

        function M(w) {
          I(D, E, x, K, M, "throw", w);
        }
        K(void 0x0);
      });
    };
  }

  function W(N) {
    return (
      (W =
        "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"]
          ? function (J) {
              return typeof J;
            }
          : function (J) {
              return J &&
                "function" == typeof Symbol &&
                J["constructor"] === Symbol &&
                J !== Symbol["prototype"]
                ? "symbol"
                : typeof J;
            }),
      W(N)
    );
  }

  function z(N, J) {
    if (!(N instanceof J))
      throw new TypeError(
        "Cannot\x20call\x20a\x20class\x20as\x20a\x20funct" + "ion"
      );
  }

  function v(N, J) {
    for (var G = 0x0; G < J["length"]; G++) {
      var E = J[G];
      (E["enumerable"] = E["enumerable"] || !0x1),
        (E["configurable"] = !0x0),
        "value" in E && (E["writable"] = !0x0),
        Object["defineProperty"](N, k(E["key"]), E);
    }
  }

  function Z(N, J, G) {
    return (
      J && v(N["prototype"], J),
      G && v(N, G),
      Object["defineProperty"](N, "prototype", {
        writable: !0x1,
      }),
      N
    );
  }

  function k(N) {
    var J = (function (G, E) {
      if ("object" != W(G) || !G) return G;
      var x = G[Symbol["toPrimitive"]];
      if (void 0x0 !== x) {
        var D = x["call"](G, E || "default");
        if ("object" != W(D)) return D;
        throw new TypeError(
          "@@toPrimitive\x20must\x20return\x20a\x20pr" + "imitive\x20value."
        );
      }
      return ("string" === E ? String : Number)(G);
    })(N, "string");
    return "symbol" == W(J) ? J : J + "";
  }
  var B = (function () {
      return Z(
        function N(J, G, E) {
          if ((z(this, N), !J))
            throw new Error("Ad\x20unit\x20path\x20is\x20required.");
          (window["googletag"] = window["googletag"] || {
            cmd: [],
          }),
            (this["adUnitPath"] = J),
            (this["grantedCallback"] = G),
            (this["rejectedCallback"] = E),
            (this["boundRewardedSlotReady"] =
              this["onRewardedSlotReady"]["bind"](this)),
            (this["boundRewardedSlotClosed"] = this["dismissRewardedAd"][
              "bind"
            ](this, !0x0)),
            (this["boundRewardedSlotGranted"] =
              this["onRewardedSlotGranted"]["bind"](this)),
            (this["boundRewardedSlotUnfilled"] =
              this["onRewardedSlotUnfilled"]["bind"](this));
        },
        [
          {
            key: "initAd",
            value: function () {
              var J = this;
              googletag["cmd"]["push"](function () {
                try {
                  if (
                    ((J["rewardedSlot"] = googletag["defineOutOfPageSlot"](
                      J["adUnitPath"],
                      googletag["enums"]["OutOfPageFormat"]["REWARDED"]
                    )),
                    !J["rewardedSlot"])
                  )
                    return void console["error"](
                      "Failed\x20to\x20define\x20out-of-page\x20s" + "lot."
                    );
                  J["rewardedSlot"]["addService"](googletag["pubads"]()),
                    J["setupAdEvents"](),
                    googletag["enableServices"](),
                    googletag["display"](J["rewardedSlot"]),
                    googletag["pubads"]()["isInitialLoadDisabled"]() &&
                      googletag["pubads"]()["refresh"]([J["rewardedSlot"]]);
                } catch (G) {
                  console["error"]("Error\x20initializing\x20ad:\x20", G);
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
            value: function (J) {
              J["makeRewardedVisible"]();
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
            value: function (J) {
              J["slot"] === this["rewardedSlot"] &&
                J["isEmpty"] &&
                this["grantedCallback"]();
            },
          },
          {
            key: "dismissRewardedAd",
            value: function () {
              var J =
                !(arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]) ||
                arguments[0x0];
              this["removeAdEvents"](),
                this["rewardedSlot"] &&
                  googletag["destroySlots"]([this["rewardedSlot"]]),
                J &&
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
        ]
      );
    })(),
    V = (function () {
      return Z(
        function N(J, G, E) {
          z(this, N),
            (this["config"] = J),
            (this["triggerAdGranted"] = G),
            (this["triggerAdRejected"] = E),
            this["initialize"]();
        },
        [
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
              var J = document["getElementsByTagName"]("head")[0x0],
                G = document["createElement"]("link");
              (G["rel"] = "stylesheet"),
                (G["href"] =
                  "https://fonts.googleapis.com/c" +
                  "ss2?family=Roboto:wght@400;700" +
                  "&display=swap"),
                (G["onload"] = function () {
                  document["querySelectorAll"]("div.jb-rewd__modal\x20*")[
                    "forEach"
                  ](function (E) {
                    E["style"]["fontFamily"] = "Roboto,\x20sans-serif";
                  });
                }),
                J["appendChild"](G);
            },
          },
          {
            key: "addStylesToDocument",
            value: function () {
              var J = document["createElement"]("style");
              J["appendChild"](
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
                document["head"]["appendChild"](J);
            },
          },
          {
            key: "createModal",
            value: function () {
              var J = document["createElement"]("div");
              (J["id"] = "jb-rewd__modal__"["concat"](
                this["config"]["instanceId"]
              )),
                J["classList"]["add"]("jb-rewd__modal"),
                (J["innerHTML"] = this["getModalContentHtml"]()),
                document["body"]["appendChild"](J),
                this["addEventListeners"](),
                (this["modal"] = J);
            },
          },
          {
            key: "getModalContentHtml",
            value: function () {
              var J, G;
              return ("\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22jb-re" +
                "wd__modal-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                "\x20\x20\x20\x20\x20\x20<div\x20class=\x22jb-rewd__mod" +
                "al-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                "\x20\x20\x20")
                ["concat"](
                  null !== (J = this["config"]) &&
                    void 0x0 !== J &&
                    null !== (J = J["modalUI"]) &&
                    void 0x0 !== J &&
                    J["imageUrl"]
                    ? ("<img\x20width=\x22120\x22\x20height=\x22120\x22\x20" +
                        "src=")["concat"](
                        null === (G = this["config"]) ||
                          void 0x0 === G ||
                          null === (G = G["modalUI"]) ||
                          void 0x0 === G
                          ? void 0x0
                          : G["imageUrl"],
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
              (this["rewardedAd"] = new B(
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
        ]
      );
    })(),
    m = (function () {
      return Z(
        function E() {
          var x =
            arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
              ? arguments[0x0]
              : null;
          z(this, E),
            (this["defaultConfig"] = {
              hostActivatorBtn: {
                enabled: !0x1,
                text: "View\x20Rewarded\x20Ad",
              },
              modalUI: {
                enabled: !0x0,
                imageUrl:
                  "https://reports.magicbid.ai/im" + "g/cloud-computing.png",
                title:
                  "Unlock\x20a\x20free\x20download\x20by\x20watc" +
                  "hing\x20an\x20ad",
                showAdBtnText: "Continue",
              },
              adUnit: [
                {
                  id: "/22639388115/rewarded_web_exam" + "ple",
                },
              ],
              CTA: {
                onSuccess: {
                  action: "REDIRECT",
                  redirectUrl: "https://google.com",
                  target: "_blank",
                },
                onReject: {
                  action: "REDIRECT",
                  redirectUrl: "",
                },
              },
            }),
            (this["onPluginReadyCallbacks"] = []),
            this["initialize"](x);
        },
        [
          {
            key: "getConfig",
            value:
              ((G = C(
                q()["mark"](function x() {
                  var D, K, M, w, L;
                  return q()["wrap"](
                    function (P) {
                      for (;;)
                        switch ((P["prev"] = P["next"])) {
                          case 0x0:
                            return (
                              (P["prev"] = 0x0),
                              (D = F(!0x1)),
                              (K =
                                "localhost" != D
                                  ? "https://localhost:8080/rewarde" +
                                    "d-ad/rewarded-ad-config.json"
                                  : X(
                                      "publishers/"["concat"](
                                        D,
                                        "/rewarded-ad-config.json"
                                      )
                                    )),
                              (M = null),
                              (P["prev"] = 0x4),
                              (P["next"] = 0x7),
                              fetch(K)
                            );
                          case 0x7:
                            if ((M = P["sent"])["ok"]) {
                              P["next"] = 0xa;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                M["status"],
                                "\x20at\x20primary\x20URL"
                              )
                            );
                          case 0xa:
                            P["next"] = 0x1b;
                            break;
                          case 0xc:
                            return (
                              (P["prev"] = 0xc),
                              (P["t0"] = P["catch"](0x4)),
                              (w = window["location"]["hostname"]["replace"](
                                /\./g,
                                "_"
                              )),
                              (L = X(
                                "publishers/"["concat"](
                                  w,
                                  "/rewarded-ad-config.json"
                                )
                              )),
                              (P["prev"] = 0x10),
                              (P["next"] = 0x13),
                              fetch(L)
                            );
                          case 0x13:
                            if ((M = P["sent"])["ok"]) {
                              P["next"] = 0x16;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                M["status"],
                                "\x20at\x20backup\x20URL"
                              )
                            );
                          case 0x16:
                            P["next"] = 0x1b;
                            break;
                          case 0x18:
                            throw (
                              ((P["prev"] = 0x18),
                              (P["t1"] = P["catch"](0x10)),
                              P["t1"])
                            );
                          case 0x1b:
                            if (M["ok"]) {
                              P["next"] = 0x1d;
                              break;
                            }
                            throw new Error(
                              "HTTP\x20error!\x20status:\x20"["concat"](
                                M["status"]
                              )
                            );
                          case 0x1d:
                            return (P["next"] = 0x1f), M["json"]();
                          case 0x1f:
                            (this["config"] = P["sent"]),
                              (this["config"]["hostname"] = D),
                              (P["next"] = 0x26);
                            break;
                          case 0x23:
                            (P["prev"] = 0x23),
                              (P["t2"] = P["catch"](0x0)),
                              console["error"](
                                "JB:\x20Error\x20fetching\x20config",
                                P["t2"]
                              );
                          case 0x26:
                          case "end":
                            return P["stop"]();
                        }
                    },
                    x,
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
                return G["apply"](this, arguments);
              }),
          },
          {
            key: "setupAd",
            value:
              ((J = C(
                q()["mark"](function D() {
                  var K;
                  return q()["wrap"](
                    function (M) {
                      for (;;)
                        switch ((M["prev"] = M["next"])) {
                          case 0x0:
                            return (
                              (M["next"] = 0x2),
                              R({
                                src:
                                  "https://securepubads.g.doublec" +
                                  "lick.net/tag/js/gpt.js",
                                async: !0x0,
                              })
                            );
                          case 0x2:
                            null !== (K = this["config"]) &&
                            void 0x0 !== K &&
                            null !== (K = K["modalUI"]) &&
                            void 0x0 !== K &&
                            K["enabled"]
                              ? (this["adModalRenderer"] = new V(
                                  this["config"],
                                  this["triggerAdGranted"]["bind"](this),
                                  this["triggerAdRejected"]["bind"](this)
                                ))
                              : (this["rewardedAd"] = new B(
                                  this["config"]["adUnit"][0x0]["id"],
                                  this["triggerAdGranted"]["bind"](this),
                                  this["triggerAdRejected"]["bind"](this)
                                ));
                          case 0x3:
                          case "end":
                            return M["stop"]();
                        }
                    },
                    D,
                    this
                  );
                })
              )),
              function () {
                return J["apply"](this, arguments);
              }),
          },
          {
            key: "initialize",
            value:
              ((N = C(
                q()["mark"](function K(M) {
                  return q()["wrap"](
                    function (w) {
                      for (;;)
                        switch ((w["prev"] = w["next"])) {
                          case 0x0:
                            if (((w["prev"] = 0x0), !M)) {
                              w["next"] = 0x5;
                              break;
                            }
                            (this["config"] = M), (w["next"] = 0x7);
                            break;
                          case 0x5:
                            return (w["next"] = 0x7), this["getConfig"]();
                          case 0x7:
                            if (this["config"]) {
                              w["next"] = 0x9;
                              break;
                            }
                            return w["abrupt"]("return");
                          case 0x9:
                            return (
                              (this["config"] = O(
                                this["defaultConfig"],
                                this["config"]
                              )),
                              (this["config"]["instanceId"] = H(0x8)),
                              (w["next"] = 0xd),
                              this["setupAd"]()
                            );
                          case 0xd:
                            (this["pluginReady"] = !0x0),
                              this["triggerPluginReady"](),
                              (w["next"] = 0x14);
                            break;
                          case 0x11:
                            (w["prev"] = 0x11),
                              (w["t0"] = w["catch"](0x0)),
                              console["error"](
                                "JB:\x20Error\x20initializing\x20Rewarde" +
                                  "d\x20Ads",
                                w["t0"]
                              );
                          case 0x14:
                          case "end":
                            return w["stop"]();
                        }
                    },
                    K,
                    this,
                    [[0x0, 0x11]]
                  );
                })
              )),
              function (M) {
                return N["apply"](this, arguments);
              }),
          },
          {
            key: "renderAd",
            value: function () {
              var M =
                arguments["length"] > 0x0 && void 0x0 !== arguments[0x0]
                  ? arguments[0x0]
                  : null;
              M && (this["renderPassbackConfig"] = M),
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
            value: function (M) {
              this["onAdGrantedCallback"] = M;
            },
          },
          {
            key: "onAdRejected",
            value: function (M) {
              this["onAdRejectedCallback"] = M;
            },
          },
          {
            key: "onReady",
            value: function (M) {
              this["pluginReady"]
                ? M()
                : this["onPluginReadyCallbacks"]["push"](M);
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
              this["onPluginReadyCallbacks"]["forEach"](function (M) {
                "function" == typeof M && M();
              }),
                (this["onPluginReadyCallbacks"] = []);
            },
          },
        ]
      );
      var N, J, G;
    })();
  window["JbRewardedAdHandler"] = m;
})();
