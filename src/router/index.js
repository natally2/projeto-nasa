import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse from '../views/Browse.vue'
import Perfil from '../views/Perfil.vue'
import Resultado from '../views/Resultado-Busca.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Video from '../views/Video.vue'
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
      path: '/browse',
      name: 'browse',
      component: Browse
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
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
  ]
})

export default router
// função para permitir acesso ao usuário somente se estiver logado
