use wasm_bindgen::prelude::*; // 用于加载 Prelude（预导入）模块

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
    if n == 0 || n == 1 {
        return 1;
    }
    fib(n - 1) + fib(n - 2)
}
