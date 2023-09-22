# 实践：在 React 项目中使用 Rust

### 环境配置

1. 安装 [rust 工具链](https://www.rust-lang.org/tools/install)（rustup，rustc，cargo）；
2. 安装 [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)。用于构建、测试和发布 WASM 的 Rust CLI 工具，该项目将使用 wasm-pack 相关的命令来构建 WASM 二进制内容；

### 纯净版本案例验证步骤

1. 执行 `cd fibonacci` 进入 fibonacci 目录，执行 `wasm-pack build`；
2. 执行 `cd pure` 进入 pure 目录 ，执行 `node server.js`；
3. 浏览器访问 `http://localhost:8081/`；

此时可以在浏览器控制台看到基于 Rust 书写的斐波那契函数所执行的结果。

控制台会输出以下内容：

```js
rust output:  10946
rust output:  10946
```

### 结合 Webpack 使用

1. 执行 `cd webpack` 进入 webpack 目录 ，执行 `yarn && yarn server`；
2. 浏览器访问 `http://localhost:8082/`

此时可以在浏览器控制台看到基于 Rust 书写的斐波那契函数所执行的结果。

控制台会输出以下内容：

```js
rust output:  10946
```

### 参考链接

* [使用 Rust + WASM 进行 Web 开发](https://juejin.cn/post/7156102433581383716)