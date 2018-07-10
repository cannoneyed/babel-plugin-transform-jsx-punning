# babel-plugin-jsx-punning

> Transforms value-omitted boolean jsx props into punned props with a corresponding value 

```javascript
<Component someAttribute />

// becomes

<Component someAttribute={someAttribute} />
```

## Install

Using npm:

```sh
npm install --save-dev babel-plugin-jsx-punning
```

or using yarn:

```sh
yarn add babel-plugin-jsx-punning --dev
```