<template>
    <input :type="type" :placeholder="placeholder" :id="id"/>
</template>

<script setup>
    import { defineProps,computed } from 'vue';
    import { string,bool } from 'vue-types';

    defineProps({
        type:string(),
        placeholder:string(),
        id:string(),
        isBorderB:bool().def(false),
        isBorder:bool().def(false),
        isPlaceholderMd:bool().def(false),
        isPlaceholderLg:bool().def(false),

    })


    const elementClass = computed(() =>({
        'is-border-bottom': props.isBorderB,
        'is-border': props.isBorder,
        'placeholder-md': props.isPlaceholderMd,
        'placeholder-lg':  props.isPlaceholderLg
    }))
</script>