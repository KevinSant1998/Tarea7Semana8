<script setup>
   import { formatCurrency } from '@/helpers';
import SelectedService from '../../components/SelectedService.vue'
   import { useAppointmentsStore } from '../../stores/appointments'

   const appointments = useAppointmentsStore()
</script>

<template>
  <h2 class="text-4xl font-extrabold text-white">Detalles Cita y Resumen</h2>
  <p class="text-white text-lg">A Continuación verifica y confirmación de tu cita</p>

  <h3 class="text-3xl font-extrabold text-white">Servicios</h3>

  <p v-if="appointments.noServicesSelected" 
  class="text-white text-2xl text-center">No hay servicios Seleccionados</p>

  <div v-else class="grid gap-5">
    <SelectedService
        v-for="service in appointments.services"
        :key="service._id"
        :service="service"

    />

    <p class="text-right text-white text-2xl">Total a Pagar: 
      <span class="font-black">{{ formatCurrency(appointments.totalAmount) }}</span>
    </p>
  </div>

</template>


