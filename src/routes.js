import Vue from 'vue';
import VueRouter from 'vue-router';

import Router from 'vue-router'

Router.prototype.open = function (routeObject) {
    let processo = routeObject.params
    const {href} = this.resolve(routeObject)
    window.open(href, '_blank',{processo})}

import FormularioDefault from './components/FormularioDefault.vue';
import FormularioProps from './components/FormularioProps.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: FormularioDefault,
    },
    {
      path: '/:id',
      name:'FormularioProps',
      component: FormularioProps,
        props:true
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   components: Home,
    // },
  ],
});
// console.log(router);
export default router;
