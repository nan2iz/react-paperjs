import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export const plugins = [
  scss({
    output: 'dist/styles.css',
  }),
  resolve({
    browser: true,
    preferBuiltins: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
];

export default {
  input: 'src/index.js',
  external: [
    'paper/dist/paper-core',
    'react',
    'react-dom',
    'react-is',
    'styled-components',
  ],
};
