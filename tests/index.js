import * as babel from 'babel-core';
import plugin from '../src';

const canonicalExample = `
<someTag someAttribute someOtherAttribute={hey} />
`;

it('matches snapshot', () => {
  const {code} = babel.transform(canonicalExample, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});

it('transforms boolean attributes with no value', () => {
  const input = '<someTag someAttribute />;'
  const output = '<someTag someAttribute={someAttribute} />;'
  const {code} = babel.transform(input, {plugins: [plugin]});
  expect(code).toEqual(output);
});

it('transforms boolean attributes with no value, leaving those with values alone', () => {
  const input = '<someTag someAttribute somethingElse={10} />;'
  const output = '<someTag someAttribute={someAttribute} somethingElse={10} />;'
  const {code} = babel.transform(input, {plugins: [plugin]});
  expect(code).toEqual(output);
});

it('doesn\'t transform attributes with values', () => {
  const input = '<someTag someAttribute={something} />;'
  const output = '<someTag someAttribute={something} />;'
  const {code} = babel.transform(input, {plugins: [plugin]});
  expect(code).toEqual(output);
});

it('doesn\'t transform attributes with boolean values', () => {
  const input = '<someTag someAttribute={false} />;'
  const output = '<someTag someAttribute={false} />;'
  const {code} = babel.transform(input, {plugins: [plugin]});
  expect(code).toEqual(output);
});