// rollup.config.js
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss'
export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [typescript(),postcss({
    plugins: []
  })]
};
