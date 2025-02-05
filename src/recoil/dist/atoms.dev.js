"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortOrderState = void 0;

var _recoil = require("recoil");

var sortOrderState = (0, _recoil.atom)({
  key: "sortOrderState",
  // 고유키 (필수)
  "default": "oldest" // 오래된순

});
exports.sortOrderState = sortOrderState;