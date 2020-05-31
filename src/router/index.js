import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Resultado from '../views/Resultado-Busca.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Video from '../views/Video.vue'

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
