// rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner: `
// ==UserScript==
// @name         ${pkg.name}
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}`,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
    resolve(),
  ],
}
