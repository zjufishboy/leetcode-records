# leetcode-records

my records in leetcode

# quick skill

1. js 开发环境准备

```
    npm install -g ts-node
    npm install -g typescript
```

2. 编译 ts 文件到 js

```
    tsc ./questions/_id_/index.ts --lib es2015
```

PS：es5 不支持的功能（也就是说需要 tsc 转译 --target es5）

```javascript
// 1.const ... of 语法 [ES6/ES2015才支持]
for(const a of aList)
```

3. 本地测试

```
    ts-node ./questions/_id_/test.ts
```

4. tips

有些写法在 polyfill 后会消耗一些内存

比如

```javascript
// ??用法：当b===undefined 就用c
const a = b ?? c;
```
