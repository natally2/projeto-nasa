import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Resultado from '../views/Resultado-Busca.vue'
import Chat from '../views/Chat.vue'

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
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/resultado-busca',
      name: 'resultado-busca',
      component: Resultado
    },

  ]
})

export default router
// função para permitir acesso ao usuário somente se estiver logado
