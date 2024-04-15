<template>
  <div class="capitalize">
    <Input placeholder="search" type="text" id="search" :is-placeholder-warning="true" :is-border="false" :is-curve="false" :is-border-danger="true"/>
  </div>
</template>

<script setup>
  import Input from '@/components/base/Input.vue'
</script>