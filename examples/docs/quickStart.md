## 快速上手

本节将介绍如何在项目中使用组件库。

### 引入 yjui

你可以引入整个 yjui，或是根据需要仅引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import yjui from 'yjui'
import App from './App.vue'

Vue.use(yjui)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：样式文件需要单独引入。


#### 按需引入

```javascript
import Vue from 'vue'
import { Button } from 'yjui'
import App from './App.vue'

Vue.component(Button.name, Button)
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```
