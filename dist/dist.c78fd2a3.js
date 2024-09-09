// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9NxRF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e26f8265c78fd2a3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5opOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfigCtrl", ()=>y);
parcelHelpers.export(exports, "CoreUtil", ()=>a);
parcelHelpers.export(exports, "EventsCtrl", ()=>R);
parcelHelpers.export(exports, "ExplorerCtrl", ()=>te);
parcelHelpers.export(exports, "ModalCtrl", ()=>se);
parcelHelpers.export(exports, "OptionsCtrl", ()=>p);
parcelHelpers.export(exports, "RouterCtrl", ()=>T);
parcelHelpers.export(exports, "ThemeCtrl", ()=>ne);
parcelHelpers.export(exports, "ToastCtrl", ()=>oe);
var _vanilla = require("valtio/vanilla");
const o = (0, _vanilla.proxy)({
    history: [
        "ConnectWallet"
    ],
    view: "ConnectWallet",
    data: void 0
}), T = {
    state: o,
    subscribe (e) {
        return (0, _vanilla.subscribe)(o, ()=>e(o));
    },
    push (e, t) {
        e !== o.view && (o.view = e, t && (o.data = t), o.history.push(e));
    },
    reset (e) {
        o.view = e, o.history = [
            e
        ];
    },
    replace (e) {
        o.history.length > 1 && (o.history[o.history.length - 1] = e, o.view = e);
    },
    goBack () {
        if (o.history.length > 1) {
            o.history.pop();
            const [e] = o.history.slice(-1);
            o.view = e;
        }
    },
    setData (e) {
        o.data = e;
    }
}, a = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile () {
        return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
    },
    isAndroid () {
        return a.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isIos () {
        const e = navigator.userAgent.toLowerCase();
        return a.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl (e) {
        return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray (e) {
        return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl (e, t, s) {
        if (a.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
        let n = e;
        n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
        const i = encodeURIComponent(t);
        return `${n}wc?uri=${i}`;
    },
    formatUniversalUrl (e, t, s) {
        if (!a.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
        let n = e;
        n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
        const i = encodeURIComponent(t);
        return `${n}wc?uri=${i}`;
    },
    async wait (e) {
        return new Promise((t)=>{
            setTimeout(t, e);
        });
    },
    openHref (e, t) {
        window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink (e, t) {
        try {
            localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                href: e,
                name: t
            }));
        } catch  {
            console.info("Unable to set WalletConnect deep link");
        }
    },
    setWalletConnectAndroidDeepLink (e) {
        try {
            const [t] = e.split("?");
            localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                href: t,
                name: "Android"
            }));
        } catch  {
            console.info("Unable to set WalletConnect android deep link");
        }
    },
    removeWalletConnectDeepLink () {
        try {
            localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE);
        } catch  {
            console.info("Unable to remove WalletConnect deep link");
        }
    },
    setModalVersionInStorage () {
        try {
            typeof localStorage < "u" && localStorage.setItem(a.WCM_VERSION, "2.6.2");
        } catch  {
            console.info("Unable to set Web3Modal version in storage");
        }
    },
    getWalletRouterData () {
        var e;
        const t = (e = T.state.data) == null ? void 0 : e.Wallet;
        if (!t) throw new Error('Missing "Wallet" view data');
        return t;
    }
}, _ = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), r = (0, _vanilla.proxy)({
    enabled: _,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0
}), R = {
    state: r,
    subscribe (e) {
        return (0, _vanilla.subscribe)(r.events, ()=>e((0, _vanilla.snapshot)(r.events[r.events.length - 1])));
    },
    initialize () {
        r.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (r.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId (e) {
        r.connectedWalletId = e;
    },
    click (e) {
        if (r.enabled) {
            const t = {
                type: "CLICK",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    },
    track (e) {
        if (r.enabled) {
            const t = {
                type: "TRACK",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    },
    view (e) {
        if (r.enabled) {
            const t = {
                type: "VIEW",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    }
}, c = (0, _vanilla.proxy)({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1
}), p = {
    state: c,
    subscribe (e) {
        return (0, _vanilla.subscribe)(c, ()=>e(c));
    },
    setChains (e) {
        c.chains = e;
    },
    setWalletConnectUri (e) {
        c.walletConnectUri = e;
    },
    setIsCustomDesktop (e) {
        c.isCustomDesktop = e;
    },
    setIsCustomMobile (e) {
        c.isCustomMobile = e;
    },
    setIsDataLoaded (e) {
        c.isDataLoaded = e;
    },
    setIsUiLoaded (e) {
        c.isUiLoaded = e;
    },
    setIsAuth (e) {
        c.isAuth = e;
    }
}, W = (0, _vanilla.proxy)({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0
}), y = {
    state: W,
    subscribe (e) {
        return (0, _vanilla.subscribe)(W, ()=>e(W));
    },
    setConfig (e) {
        var t, s;
        R.initialize(), p.setChains(e.chains), p.setIsAuth(Boolean(e.enableAuthMode)), p.setIsCustomMobile(Boolean((t = e.mobileWallets) == null ? void 0 : t.length)), p.setIsCustomDesktop(Boolean((s = e.desktopWallets) == null ? void 0 : s.length)), a.setModalVersionInStorage(), Object.assign(W, e);
    }
};
var V = Object.defineProperty, D = Object.getOwnPropertySymbols, H = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable, M = (e, t, s)=>t in e ? V(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, K = (e, t)=>{
    for(var s in t || (t = {}))H.call(t, s) && M(e, s, t[s]);
    if (D) for (var s of D(t))B.call(t, s) && M(e, s, t[s]);
    return e;
};
const L = "https://explorer-api.walletconnect.com", E = "wcm", O = "js-2.6.2";
async function w(e, t) {
    const s = K({
        sdkType: E,
        sdkVersion: O
    }, t), n = new URL(e, L);
    return n.searchParams.append("projectId", y.state.projectId), Object.entries(s).forEach(([i, l])=>{
        l && n.searchParams.append(i, String(l));
    }), (await fetch(n)).json();
}
const m = {
    async getDesktopListings (e) {
        return w("/w3m/v1/getDesktopListings", e);
    },
    async getMobileListings (e) {
        return w("/w3m/v1/getMobileListings", e);
    },
    async getInjectedListings (e) {
        return w("/w3m/v1/getInjectedListings", e);
    },
    async getAllListings (e) {
        return w("/w3m/v1/getAllListings", e);
    },
    getWalletImageUrl (e) {
        return `${L}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
    },
    getAssetImageUrl (e) {
        return `${L}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
    }
};
var z = Object.defineProperty, j = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable, k = (e, t, s)=>t in e ? z(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, F = (e, t)=>{
    for(var s in t || (t = {}))J.call(t, s) && k(e, s, t[s]);
    if (j) for (var s of j(t))q.call(t, s) && k(e, s, t[s]);
    return e;
};
const N = a.isMobile(), d = (0, _vanilla.proxy)({
    wallets: {
        listings: [],
        total: 0,
        page: 1
    },
    search: {
        listings: [],
        total: 0,
        page: 1
    },
    recomendedWallets: []
}), te = {
    state: d,
    async getRecomendedWallets () {
        const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = y.state;
        if (e === "NONE" || t === "ALL" && !e) return d.recomendedWallets;
        if (a.isArray(e)) {
            const s = {
                recommendedIds: e.join(",")
            }, { listings: n } = await m.getAllListings(s), i = Object.values(n);
            i.sort((l, v)=>{
                const b = e.indexOf(l.id), f = e.indexOf(v.id);
                return b - f;
            }), d.recomendedWallets = i;
        } else {
            const { chains: s, isAuth: n } = p.state, i = s?.join(","), l = a.isArray(t), v = {
                page: 1,
                sdks: n ? "auth_v1" : void 0,
                entries: a.RECOMMENDED_WALLET_AMOUNT,
                chains: i,
                version: 2,
                excludedIds: l ? t.join(",") : void 0
            }, { listings: b } = N ? await m.getMobileListings(v) : await m.getDesktopListings(v);
            d.recomendedWallets = Object.values(b);
        }
        return d.recomendedWallets;
    },
    async getWallets (e) {
        const t = F({}, e), { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } = y.state, { recomendedWallets: i } = d;
        if (n === "ALL") return d.wallets;
        i.length ? t.excludedIds = i.map((x)=>x.id).join(",") : a.isArray(s) && (t.excludedIds = s.join(",")), a.isArray(n) && (t.excludedIds = [
            t.excludedIds,
            n
        ].filter(Boolean).join(",")), p.state.isAuth && (t.sdks = "auth_v1");
        const { page: l, search: v } = e, { listings: b, total: f } = N ? await m.getMobileListings(t) : await m.getDesktopListings(t), A = Object.values(b), U = v ? "search" : "wallets";
        return d[U] = {
            listings: [
                ...d[U].listings,
                ...A
            ],
            total: f,
            page: l ?? 1
        }, {
            listings: A,
            total: f
        };
    },
    getWalletImageUrl (e) {
        return m.getWalletImageUrl(e);
    },
    getAssetImageUrl (e) {
        return m.getAssetImageUrl(e);
    },
    resetSearch () {
        d.search = {
            listings: [],
            total: 0,
            page: 1
        };
    }
}, I = (0, _vanilla.proxy)({
    open: !1
}), se = {
    state: I,
    subscribe (e) {
        return (0, _vanilla.subscribe)(I, ()=>e(I));
    },
    async open (e) {
        return new Promise((t)=>{
            const { isUiLoaded: s, isDataLoaded: n } = p.state;
            if (a.removeWalletConnectDeepLink(), p.setWalletConnectUri(e?.uri), p.setChains(e?.chains), T.reset("ConnectWallet"), s && n) I.open = !0, t();
            else {
                const i = setInterval(()=>{
                    const l = p.state;
                    l.isUiLoaded && l.isDataLoaded && (clearInterval(i), I.open = !0, t());
                }, 200);
            }
        });
    },
    close () {
        I.open = !1;
    }
};
var G = Object.defineProperty, $ = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, S = (e, t, s)=>t in e ? G(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, Y = (e, t)=>{
    for(var s in t || (t = {}))Q.call(t, s) && S(e, s, t[s]);
    if ($) for (var s of $(t))X.call(t, s) && S(e, s, t[s]);
    return e;
};
function Z() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const C = (0, _vanilla.proxy)({
    themeMode: Z() ? "dark" : "light"
}), ne = {
    state: C,
    subscribe (e) {
        return (0, _vanilla.subscribe)(C, ()=>e(C));
    },
    setThemeConfig (e) {
        const { themeMode: t, themeVariables: s } = e;
        t && (C.themeMode = t), s && (C.themeVariables = Y({}, s));
    }
}, g = (0, _vanilla.proxy)({
    open: !1,
    message: "",
    variant: "success"
}), oe = {
    state: g,
    subscribe (e) {
        return (0, _vanilla.subscribe)(g, ()=>e(g));
    },
    openToast (e, t) {
        g.open = !0, g.message = e, g.variant = t;
    },
    closeToast () {
        g.open = !1;
    }
};

},{"valtio/vanilla":"gyoEY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyoEY":[function(require,module,exports) {
"use strict";
var proxyCompare = require("d4fb8480fa3c5685");
var isObject = function isObject(x) {
    return typeof x === "object" && x !== null;
};
var proxyStateMap = new WeakMap();
var refSet = new WeakSet();
var buildProxyFunction = function buildProxyFunction(objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder, _proxyFunction) {
    if (objectIs === void 0) objectIs = Object.is;
    if (newProxy === void 0) newProxy = function newProxy(target, handler) {
        return new Proxy(target, handler);
    };
    if (canProxy === void 0) canProxy = function canProxy(x) {
        return isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
    };
    if (defaultHandlePromise === void 0) defaultHandlePromise = function defaultHandlePromise(promise) {
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    };
    if (snapCache === void 0) snapCache = new WeakMap();
    if (createSnapshot === void 0) createSnapshot = function(_createSnapshot) {
        function createSnapshot(_x, _x2, _x3) {
            return _createSnapshot.apply(this, arguments);
        }
        createSnapshot.toString = function() {
            return _createSnapshot.toString();
        };
        return createSnapshot;
    }(function(target, version, handlePromise) {
        if (handlePromise === void 0) handlePromise = defaultHandlePromise;
        var cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) return cache[1];
        var snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        proxyCompare.markToTrack(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach(function(key) {
            if (Object.getOwnPropertyDescriptor(snap, key)) return;
            var value = Reflect.get(target, key);
            var desc = {
                value: value,
                enumerable: true,
                configurable: true
            };
            if (refSet.has(value)) proxyCompare.markToTrack(value, false);
            else if (value instanceof Promise) {
                delete desc.value;
                desc.get = function() {
                    return handlePromise(value);
                };
            } else if (proxyStateMap.has(value)) {
                var _ref = proxyStateMap.get(value), _target = _ref[0], _ensureVersion = _ref[1];
                desc.value = createSnapshot(_target, _ensureVersion(), handlePromise);
            }
            Object.defineProperty(snap, key, desc);
        });
        return Object.preventExtensions(snap);
    });
    if (proxyCache === void 0) proxyCache = new WeakMap();
    if (versionHolder === void 0) versionHolder = [
        1,
        1
    ];
    if (_proxyFunction === void 0) _proxyFunction = function proxyFunction(initialObject) {
        if (!isObject(initialObject)) throw new Error("object required");
        var found = proxyCache.get(initialObject);
        if (found) return found;
        var version = versionHolder[0];
        var listeners = new Set();
        var notifyUpdate = function notifyUpdate(op, nextVersion) {
            if (nextVersion === void 0) nextVersion = ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach(function(listener) {
                    return listener(op, nextVersion);
                });
            }
        };
        var checkVersion = versionHolder[1];
        var ensureVersion = function ensureVersion(nextCheckVersion) {
            if (nextCheckVersion === void 0) nextCheckVersion = ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach(function(_ref2) {
                    var propProxyState = _ref2[0];
                    var propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) version = propVersion;
                });
            }
            return version;
        };
        var createPropListener = function createPropListener(prop) {
            return function(op, nextVersion) {
                var newOp = [].concat(op);
                newOp[1] = [
                    prop
                ].concat(newOp[1]);
                notifyUpdate(newOp, nextVersion);
            };
        };
        var propProxyStates = new Map();
        var addPropListener = function addPropListener(prop, propProxyState) {
            if (propProxyStates.has(prop)) throw new Error("prop listener already exists");
            if (listeners.size) {
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else propProxyStates.set(prop, [
                propProxyState
            ]);
        };
        var removePropListener = function removePropListener(prop) {
            var entry = propProxyStates.get(prop);
            if (entry) {
                var _entry$;
                propProxyStates.delete(prop);
                (_entry$ = entry[1]) == null || _entry$.call(entry);
            }
        };
        var addListener = function addListener(listener) {
            listeners.add(listener);
            if (listeners.size === 1) propProxyStates.forEach(function(_ref3, prop) {
                var propProxyState = _ref3[0], prevRemove = _ref3[1];
                if (prevRemove) throw new Error("remove already exists");
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            });
            var removeListener = function removeListener() {
                listeners.delete(listener);
                if (listeners.size === 0) propProxyStates.forEach(function(_ref4, prop) {
                    var propProxyState = _ref4[0], remove = _ref4[1];
                    if (remove) {
                        remove();
                        propProxyStates.set(prop, [
                            propProxyState
                        ]);
                    }
                });
            };
            return removeListener;
        };
        var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        var handler = {
            deleteProperty: function deleteProperty(target, prop) {
                var prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                var deleted = Reflect.deleteProperty(target, prop);
                if (deleted) notifyUpdate([
                    "delete",
                    [
                        prop
                    ],
                    prevValue
                ]);
                return deleted;
            },
            set: function set(target, prop, value, receiver) {
                var hasPrevValue = Reflect.has(target, prop);
                var prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) return true;
                removePropListener(prop);
                if (isObject(value)) value = proxyCompare.getUntracked(value) || value;
                var nextValue = value;
                if (value instanceof Promise) value.then(function(v) {
                    value.status = "fulfilled";
                    value.value = v;
                    notifyUpdate([
                        "resolve",
                        [
                            prop
                        ],
                        v
                    ]);
                }).catch(function(e) {
                    value.status = "rejected";
                    value.reason = e;
                    notifyUpdate([
                        "reject",
                        [
                            prop
                        ],
                        e
                    ]);
                });
                else {
                    if (!proxyStateMap.has(value) && canProxy(value)) nextValue = _proxyFunction(value);
                    var childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                    if (childProxyState) addPropListener(prop, childProxyState);
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        var proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        var proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach(function(key) {
            var desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if ("value" in desc) {
                proxyObject[key] = initialObject[key];
                delete desc.value;
                delete desc.writable;
            }
            Object.defineProperty(baseObject, key, desc);
        });
        return proxyObject;
    };
    return [
        _proxyFunction,
        proxyStateMap,
        refSet,
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
var _buildProxyFunction = buildProxyFunction(), defaultProxyFunction = _buildProxyFunction[0];
function proxy(initialObject) {
    if (initialObject === void 0) initialObject = {};
    return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
    var proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    var proxyState = proxyStateMap.get(proxyObject);
    if (!proxyState) console.warn("Please use proxy object");
    var promise;
    var ops = [];
    var addListener = proxyState[3];
    var isListenerActive = false;
    var listener = function listener(op) {
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) promise = Promise.resolve().then(function() {
            promise = undefined;
            if (isListenerActive) callback(ops.splice(0));
        });
    };
    var removeListener = addListener(listener);
    isListenerActive = true;
    return function() {
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    var proxyState = proxyStateMap.get(proxyObject);
    if (!proxyState) console.warn("Please use proxy object");
    var _ref5 = proxyState, target = _ref5[0], ensureVersion = _ref5[1], createSnapshot = _ref5[2];
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
var unstable_buildProxyFunction = buildProxyFunction;
exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;
exports.unstable_buildProxyFunction = unstable_buildProxyFunction;

},{"d4fb8480fa3c5685":"d0ziJ"}],"d0ziJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "affectedToPathList", ()=>w);
parcelHelpers.export(exports, "createProxy", ()=>a);
parcelHelpers.export(exports, "getUntracked", ()=>y);
parcelHelpers.export(exports, "isChanged", ()=>p);
parcelHelpers.export(exports, "markToTrack", ()=>h);
parcelHelpers.export(exports, "replaceNewProxy", ()=>O);
parcelHelpers.export(exports, "trackMemo", ()=>g);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = (e)=>{
    if (Array.isArray(e)) return Array.from(e);
    const t = Object.getOwnPropertyDescriptors(e);
    return Object.values(t).forEach((e)=>{
        e.configurable = !0;
    }), Object.create(s(e), t);
}, u = (e)=>e[t] || e, a = (s, c, f, p)=>{
    if (!l(s)) return s;
    let g = p && p.get(s);
    if (!g) {
        const e = u(s);
        g = ((e)=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.configurable && !e.writable))(e) ? [
            e,
            i(e)
        ] : [
            e
        ], null == p || p.set(s, g);
    }
    const [y, h] = g;
    let w = f && f.get(y);
    return w && w[1].f === !!h || (w = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), a(Reflect.get(e, n), c[r], c.c, c.t)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, !!h), w[1].p = o(h || y, w[0]), f && f.set(y, w)), w[1][r] = c, w[1].c = f, w[1].t = p, w[1].p;
}, p = (e, t, r, o)=>{
    if (Object.is(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const s = r.get(u(e));
    if (!s) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let c = null;
    try {
        for (const r of s.h || [])if (c = Reflect.has(e, r) !== Reflect.has(t, r), c) return c;
        if (!0 === s[n]) {
            if (c = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), c) return c;
        } else for (const r of s.o || [])if (c = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), c) return c;
        for (const n of s.k || [])if (c = p(e[n], t[n], r, o), c) return c;
        return null === c && (c = !0), c;
    } finally{
        o && o.set(e, {
            n: t,
            g: c
        });
    }
}, g = (t)=>!!l(t) && e in t, y = (e)=>l(e) && e[t] || null, h = (e, t = !0)=>{
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(u(e));
        if (i) {
            var a, p;
            if (null == (a = i.h) || a.forEach((e)=>{
                const t = `:has(${String(e)})`;
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var g;
                null == (g = i.o) || g.forEach((e)=>{
                    const t = `:hasOwn(${String(e)})`;
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9NxRF"], null, "parcelRequire22df")

//# sourceMappingURL=dist.c78fd2a3.js.map
