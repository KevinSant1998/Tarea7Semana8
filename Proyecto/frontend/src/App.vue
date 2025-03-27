<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div class="md:flex h-screen">
    
    <div class="m:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>

