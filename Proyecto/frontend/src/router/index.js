import { createRouter, createWebHistory } from 'vue-router'
import CrearUsuarioForm from '../components/CrearUsuarioForm.vue'


const routes = [
  {
    path: '/',
    redirect: '/crear-usuario'
  },
  {
    path: '/crear-usuario',
    name: 'CrearUsuario',
    component: CrearUsuarioForm
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
