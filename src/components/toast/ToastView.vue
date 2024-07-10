<script setup>
import './styles.scss'
const props = defineProps({
  message: { type: String, default: '' }
})
</script>
<template>
  <div>
    <div class="popup" :class="{ hidden: props.message.length === 0 }">
      <div class="popup-content">
        <p>{{ props.message }}</p>
      </div>
    </div>
  </div>
</template>
