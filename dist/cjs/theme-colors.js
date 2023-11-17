var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var theme_colors_exports = {};
__export(theme_colors_exports, {
  ptThemeColors: () => ptThemeColors
});
module.exports = __toCommonJS(theme_colors_exports);
var import_colors = require("@radix-ui/colors");
const ptThemeColors = {
  pinkDark: {
    pink1: "#141821",
    pink2: "#161C2E",
    pink3: "#192540",
    pink4: "#1C2C4F",
    pink5: "#1F3157",
    pink6: "#223866",
    pink7: "#25417A",
    pink8: "#2B5099",
    pink9: "#3963B8",
    pink10: "#336CD6",
    pink11: "#70A0FF",
    pink12: "#EDF2FC"
  },
  pink: {
    pink1: "#FDFDFE",
    pink2: "#F8FBFF",
    pink3: "#F0F5FF",
    pink4: "#E6EFFE",
    pink5: "#D9E5FC",
    pink6: "#C6D9F9",
    pink7: "#ACC5F2",
    pink8: "#819FDB",
    pink9: "#3963B8",
    pink10: "#294D94",
    pink11: "#213C73",
    pink12: "#091326"
  },
  grayDark: {
    gray1: "#151718",
    gray2: "#1A1C1E",
    gray3: "#202325",
    gray4: "#26282B",
    gray5: "#26282B",
    gray6: "#313438",
    gray7: "#3A3E42",
    gray8: "#4C4F55",
    gray9: "#696F77",
    gray10: "#787D85",
    gray11: "#9B9FA6",
    gray12: "#ECEDEE"
  },
  gray: {
    gray1: "#FBFCFD",
    gray2: "#F8F9FA",
    gray3: "#F1F2F5",
    gray4: "#ECEDF0",
    gray5: "#E6E7EB",
    gray6: "#DFE2E6",
    gray7: "#D7DADF",
    gray8: "#C1C6CD",
    gray9: "#888E96",
    gray10: "#7E848C",
    gray11: "#686E76",
    gray12: "#11161C"
  },
  greenDark: import_colors.greenDark,
  green: import_colors.green,
  redDark: {
    red1: import_colors.tomatoDark.tomato1,
    red2: import_colors.tomatoDark.tomato2,
    red3: import_colors.tomatoDark.tomato3,
    red4: import_colors.tomatoDark.tomato4,
    red5: import_colors.tomatoDark.tomato5,
    red6: import_colors.tomatoDark.tomato6,
    red7: import_colors.tomatoDark.tomato7,
    red8: import_colors.tomatoDark.tomato8,
    red9: import_colors.tomatoDark.tomato9,
    red10: import_colors.tomatoDark.tomato10,
    red11: import_colors.tomatoDark.tomato11,
    red12: import_colors.tomatoDark.tomato12
  },
  red: {
    red1: import_colors.tomato.tomato1,
    red2: import_colors.tomato.tomato2,
    red3: import_colors.tomato.tomato3,
    red4: import_colors.tomato.tomato4,
    red5: import_colors.tomato.tomato5,
    red6: import_colors.tomato.tomato6,
    red7: import_colors.tomato.tomato7,
    red8: import_colors.tomato.tomato8,
    red9: import_colors.tomato.tomato9,
    red10: import_colors.tomato.tomato10,
    red11: import_colors.tomato.tomato11,
    red12: import_colors.tomato.tomato12
  },
  blueDark: import_colors.blueDark,
  blue: import_colors.blue,
  yellowDark: {
    yellow1: import_colors.amberDark.amber1,
    yellow2: import_colors.amberDark.amber2,
    yellow3: import_colors.amberDark.amber3,
    yellow4: import_colors.amberDark.amber4,
    yellow5: import_colors.amberDark.amber5,
    yellow6: import_colors.amberDark.amber6,
    yellow7: import_colors.amberDark.amber7,
    yellow8: import_colors.amberDark.amber8,
    yellow9: import_colors.amberDark.amber9,
    yellow10: import_colors.amberDark.amber10,
    yellow11: import_colors.amberDark.amber11,
    yellow12: import_colors.amberDark.amber12
  },
  yellow: {
    yellow1: import_colors.amber.amber1,
    yellow2: import_colors.amber.amber2,
    yellow3: import_colors.amber.amber3,
    yellow4: import_colors.amber.amber4,
    yellow5: import_colors.amber.amber5,
    yellow6: import_colors.amber.amber6,
    yellow7: import_colors.amber.amber7,
    yellow8: import_colors.amber.amber8,
    yellow9: import_colors.amber.amber9,
    yellow10: import_colors.amber.amber10,
    yellow11: import_colors.amber.amber11,
    yellow12: import_colors.amber.amber12
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ptThemeColors
});
//# sourceMappingURL=theme-colors.js.map
