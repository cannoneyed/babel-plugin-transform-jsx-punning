"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluginSyntaxJsx = require("@babel/plugin-syntax-jsx");

var _pluginSyntaxJsx2 = _interopRequireDefault(_pluginSyntaxJsx);

var _babelCore = require("babel-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This transforms value-omitted boolean jsx props into punned props with a corresponding value.
 *
 *
 * == JSX Literals ==
 *
 * <sometag someAttribute />
 *
 * becomes:
 *
 * <sometag someAttribute={someAttribute} />
 */
exports.default = function (api) {
  var visitor = {
    // JSXOpeningElement({ node }) {
    // //   const id = t.jsxIdentifier(TRACE_ID);
    // //   const trace = t.thisExpression();

    //   // node.attributes = node.attributes.map(attribute => {
    //   //   console.log(attribute);
    //   // })
    // //   node.attributes.push(t.jsxAttribute(id, t.jsxExpressionContainer(trace)));
    //   console.log('visit');
    // },
  };

  return {
    inherits: _pluginSyntaxJsx2.default,
    visitor: visitor
  };
};
// import { declare } from "@babel/helper-plugin-utils";