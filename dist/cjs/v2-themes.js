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
var v2_themes_exports = {};
__export(v2_themes_exports, {
  themes: () => themes
});
module.exports = __toCommonJS(v2_themes_exports);
var import_theme_builder = require("@tamagui/theme-builder"), import_componentThemeDefinitions = require("./componentThemeDefinitions"), import_masks = require("./masks"), import_palettes = require("./palettes"), import_shadows = require("./shadows"), import_templates = require("./templates"), import_tokens = require("./tokens");
const colorThemeDefinition = (colorName) => [
  {
    parent: "light",
    palette: colorName,
    template: "colorLight"
  },
  {
    parent: "dark",
    palette: colorName,
    template: "base"
  }
], nonInherited = {
  light: {
    ...import_tokens.lightColors,
    ...import_shadows.shadows.light
  },
  dark: {
    ...import_tokens.darkColors,
    ...import_shadows.shadows.dark
  }
}, themesBuilder = (0, import_theme_builder.createThemeBuilder)().addPalettes(import_palettes.palettes).addTemplates(import_templates.templates).addMasks(import_masks.masks).addThemes({
  light: {
    template: "base",
    palette: "light",
    nonInheritedValues: nonInherited.light
  },
  dark: {
    template: "base",
    palette: "dark",
    nonInheritedValues: nonInherited.dark
  }
}).addChildThemes({
  orange: colorThemeDefinition("orange"),
  yellow: colorThemeDefinition("yellow"),
  green: colorThemeDefinition("green"),
  blue: colorThemeDefinition("blue"),
  purple: colorThemeDefinition("purple"),
  pink: colorThemeDefinition("pink"),
  red: colorThemeDefinition("red"),
  gray: colorThemeDefinition("gray")
}).addChildThemes({
  alt1: {
    mask: "soften",
    ...import_templates.maskOptions.alt
  },
  alt2: {
    mask: "soften2Border1",
    ...import_templates.maskOptions.alt
  },
  active: {
    mask: "soften3FlatBorder",
    skip: {
      color: 1
    }
  }
}).addChildThemes(
  {
    ListItem: [
      {
        parent: "light",
        avoidNestingWithin: ["active"],
        mask: "identity",
        ...import_templates.maskOptions.component
      },
      {
        parent: "dark",
        avoidNestingWithin: ["active"],
        mask: "identity",
        ...import_templates.maskOptions.component
      }
    ],
    Card: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    Button: {
      mask: "soften2Border1",
      ...import_templates.maskOptions.component
    },
    Checkbox: {
      mask: "softenBorder2",
      ...import_templates.maskOptions.component
    },
    Switch: {
      mask: "soften2Border1",
      ...import_templates.maskOptions.component
    },
    SwitchThumb: {
      mask: "inverseStrengthen2",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    TooltipContent: {
      mask: "soften2Border1",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    DrawerFrame: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    Progress: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    RadioGroupItem: {
      mask: "softenBorder2",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    TooltipArrow: {
      mask: "soften",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    SliderTrackActive: {
      mask: "inverseSoften",
      ...import_templates.maskOptions.component
    },
    SliderTrack: {
      mask: "soften2Border1",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    SliderThumb: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    Tooltip: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    ProgressIndicator: {
      mask: "inverse",
      avoidNestingWithin: ["active"],
      ...import_templates.maskOptions.component
    },
    SheetOverlay: import_componentThemeDefinitions.overlayThemeDefinitions,
    DialogOverlay: import_componentThemeDefinitions.overlayThemeDefinitions,
    ModalOverlay: import_componentThemeDefinitions.overlayThemeDefinitions,
    Input: {
      mask: "softenBorder2",
      ...import_templates.maskOptions.component
    },
    TextArea: {
      mask: "softenBorder2",
      ...import_templates.maskOptions.component
    }
  },
  {
    // to save bundle size but make alt themesNew not work on components
    // avoidNestingWithin: ['alt1', 'alt2'],
  }
), themesIn = themesBuilder.build(), themes = themesIn;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  themes
});
//# sourceMappingURL=v2-themes.js.map
