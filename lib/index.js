"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelPluginSyntaxJsx = require("babel-plugin-syntax-jsx");

var _babelPluginSyntaxJsx2 = _interopRequireDefault(_babelPluginSyntaxJsx);

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
    JSXOpeningElement: function JSXOpeningElement(_ref) {
      var node = _ref.node;

      node.attributes = node.attributes.map(function (attribute) {
        if (attribute.value === null) {
          var name = attribute.name.name;
          var id = _babelCore.types.jSXIdentifier(name);
          var expression = _babelCore.types.jSXExpressionContainer(_babelCore.types.identifier(name));
          var nextAttribute = _babelCore.types.jSXAttribute(id, expression);
          return nextAttribute;
        } else {
          return attribute;
        }
      });
    }
  };

  return {
    inherits: _babelPluginSyntaxJsx2.default,
    visitor: visitor
  };
};