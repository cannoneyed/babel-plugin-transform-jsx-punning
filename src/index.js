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
import jsx from "babel-plugin-syntax-jsx";
import { types as t } from "babel-core";

export default api => {
  const visitor = {
    JSXOpeningElement({ node }) {
      node.attributes = node.attributes.map(attribute => {
        if (attribute.value === null) {
          const name = attribute.name.name;
          const id = t.jSXIdentifier(name);
          const expression = t.jSXExpressionContainer(t.identifier(name))
          const nextAttribute = t.jSXAttribute(id, expression)
          return nextAttribute;
        } else {
          return attribute;
        }
      });
    },
  };

  return {
    inherits: jsx,
    visitor,
  };
};