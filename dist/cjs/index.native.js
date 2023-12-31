"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("./themes"), module.exports);
__reExport(src_exports, require("./tokens"), module.exports);
__reExport(src_exports, require("./masks"), module.exports);
__reExport(src_exports, require("./componentThemeDefinitions"), module.exports);
__reExport(src_exports, require("./palettes"), module.exports);
__reExport(src_exports, require("./templates"), module.exports);
__reExport(src_exports, require("./shadows"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./themes"),
  ...require("./tokens"),
  ...require("./masks"),
  ...require("./componentThemeDefinitions"),
  ...require("./palettes"),
  ...require("./templates"),
  ...require("./shadows")
});
//# sourceMappingURL=index.js.map
