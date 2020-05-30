import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },

  ]
})

export default router
// função para permitir acesso ao usuário somente se estiver logado
