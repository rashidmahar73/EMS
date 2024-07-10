<script setup lang="ts">
import { RouterLink } from 'vue-router'
import styles from './styles.module.scss'
</script>

<template>
  <header>
    <nav :class="styles.navbarContainer">
      <div :class="styles.subContainer">
        <div :class="styles.navItems">
          <RouterLink to="/">Home</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
