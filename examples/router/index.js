import Vue from 'vue'
import Router from 'vue-router'
import Install from '../docs/install.md'
import QuikeStart from '../docs/quickStart.md'
import Button from '../docs/button.md'
import Input from '../docs/input.md'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Install
    },
    {
      path: '/guide/install',
      name: 'install',
      component: Install
    },
    {
      path: '/guide/quickStart',
      name: 'quikeStart',
      component: QuikeStart
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    }
  ]
})