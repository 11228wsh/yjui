# yjui

> 基于Vue一套UI组件

## 安装

``` bash
$ npm install yjui -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import yjui from 'yjui'
Vue.use(yjui)
```

在项目中使用 yjui

```js
<template>
  <yj-button size="small">默认按钮</yj-button>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
```

