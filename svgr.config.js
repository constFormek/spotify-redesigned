import template from "./svgr-template.js";

export default {
  typescript: true,
  expandProps: false,
  icon: true,
  replaceAttrValues: {
    "#898989": "currentColor",
    "#000": "currentColor",
  },
  template,
};
