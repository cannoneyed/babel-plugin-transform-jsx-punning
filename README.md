# babel-plugin-transform-jsx-punning

> Transforms value-omitted boolean jsx props into punned props with a corresponding value, ala ReasonML.

```javascript
<Component someAttribute />

// becomes

<Component someAttribute={someAttribute} />
```

## Install

Using npm:

```sh
npm install --save-dev babel-plugin-transform-jsx-punning
```

or using yarn:

```sh
yarn add babel-plugin-transform-jsx-punning --dev
```