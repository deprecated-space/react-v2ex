# react-v2ex

## overview

个人学习 React 的练手 demo，尚有很多 Bug 以及细节之处待完善。

脚手架采用官方的 [create-react-app](https://github.com/facebookincubator/create-react-app)

## usage

1.  install [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)
2. `npm intall`
3. `npm start`

## todo

A lot of things to do!

细节参照 todo 较少的 [vue-v2ex](https://github.com/hanzichi/vue-v2ex)

## React VS Vue

截止目前（2017.2.22），学习 Vue 大概总计一周，React 2 天，记一些两者之间的对比，个人笔记，基本不具备参考性。

- 个人感觉 react-router 比 vue-router 好用，react-router 更直观，而 vue-router 用 `<router-view>` 去寻找路由的节点，是寻找最近的节点？理解起来是 react-router 比较直观，当然首先要搞懂 `{this.props.children}` 的用法。当然这只是使用了两天后的想法，毕竟两者都不熟。

- JSX 和 .vue 文件的对比，当然 Vue 也支持 JSX，从最佳实践上来说，React 推荐 JSX，而 Vue 推荐 .vue 文件。整体来说偏爱后者，这样可以把 CSS 写在 .vue 文件中，一个 .vue 文件就是一个 component，比较容易维护，当然最佳实践是把 CSS 写在另外的文件。细节部分，个人感觉 JSX 更优，主要体现在 JSX 其实就是 JavaScript，而 Vue 中自带了更多的语法糖，比如 React 中数组遍历可以用 JS 原生的 `map` 函数，而 Vue 中要用 `v-for` 语法糖，这样感觉 JSX 更灵活，更底层；再比如 React 中方法直接写在对象中即可，而 Vue 要套一层 methods

- 对比 Vue 的单文件，React 也有 .jsx 的文件？

- Vue 版本在 .vue 文件中用了 scoped 的 css，非常爽，有效避免相同类名的冲突，React 应该如何优雅地实现 CSS module？

- Vue 需要在 components 中指出需要的组件，而 React 直接引入即可

- Vuex 和 Redux 都还没使用，等到进一步完善代码时加入，使之成为一个完整的全家桶 demo
