<script setup lang="ts">
import { ref } from 'vue'
import './styles.scss'
// Define the events data
const events = ref([
  {
    id: 0,
    src: '/src/assets/images/event-1.jpeg',
    alt: 'Image 1'
  }
])
</script>

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" v-for="event in events" :key="event.id">
        <img :src="event.src" :alt="event.alt" />
      </div>
    </div>
  </div>
</template>
