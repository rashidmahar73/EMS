<script setup>
import styles from './styles.module.scss'
const props = defineProps(['isTrue'])
</script>

<template>
  <div :class="styles.spinnerContainer" v-if="props.isTrue">
    <div :class="styles.spinner" v-if="props.isTrue" />
  </div>
</template>
