<template>
    <div class="form-wrapper">
      <div class="form-card">
        <h2 class="form-title">Registrar Nuevo Usuario</h2>
  
        <form @submit.prevent="handleSubmit" class="form-body">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              v-model="name"
              type="text"
              id="name"
              placeholder="Ej. Juan Pérez"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
  
          <button type="submit" class="form-button">Crear Usuario</button>
        </form>
  
        <p v-if="mensaje" class="form-message">{{ mensaje }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../stores/userStore'
  
  const store = useUserStore()
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const mensaje = ref('')
  
  const handleSubmit = async () => {
    await store.crearUsuario({
      name: name.value,
      email: email.value,
      password: password.value
    })
  
    mensaje.value = store.mensaje
    name.value = ''
    email.value = ''
    password.value = ''
  }
  </script>
  
  <style scoped>
  .form-wrapper {
    min-height: 100vh;
    background: #f3f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .form-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 450px;
  }
  
  .form-title {
    font-size: 24px;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    font-weight: 600;
    margin-bottom: 6px;
    color: #374151;
  }
  
  .form-group input {
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.2s;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  .form-button {
    background: #3b82f6;
    color: white;
    padding: 12px;
    font-weight: 600;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .form-button:hover {
    background: #2563eb;
  }
  
  .form-message {
    margin-top: 20px;
    text-align: center;
    color: #16a34a;
    font-weight: 500;
  }
  </style>
  