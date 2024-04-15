<template>
  <div class="capitalize">
    <Input
      placeholder="search"
      type="text"
      id="search"
      :is-border-info="true"
      :is-curve="true"
      :is-placeholder-primary="true"
      
    />
  </div>
</template>

<script setup>
import Input from "@/components/base/Input.vue";
</script>
