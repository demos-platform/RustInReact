// 因为 webpack 的 bug（webpack/webpack#6615），这里暂时只能使用动态导入 import
const rust = import('../fibonacci/pkg');

rust
  .then(m => {
    const out = m.fib(20);
    console.log("rust output: ", out);
  })
  .catch(console.error)
