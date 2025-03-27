// src/stores/userStore.js
import { defineStore } from 'pinia'
import api from '../lib/axios.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    mensaje: '',
  }),
  actions: {
    async crearUsuario({ name, email, password }) {
      this.loading = true
      try {
        const response = await api.post('/users', { name, email, password })
        this.mensaje = response.data.msg
      } catch (error) {
        console.error(error)
        this.mensaje = error.response?.data?.msg || 'Error al crear usuario'
      } finally {
        this.loading = false
      }
    }
  }
})
