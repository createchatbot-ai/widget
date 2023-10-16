import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/chatbot.js',
      format: 'iife',
      name: 'Chatbot',
      plugins: [],
    },
    {
      file: 'dist/chatbot.min.js',
      format: 'iife',
      name: 'Chatbot',
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    typescript(),
    postcss(),
  ],
};
