import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  external: ['@grpc/grpc-js', '@grpc/proto-loader', 'google-protobuf'],
  treeshake: false,
  output: {
    dir: 'dist',
    format: 'cjs',
    compact: true,
    sourcemap: true,
  },
  plugins: [
    typescript({
      outDir: 'dist',
    }),
    commonjs(),
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
