<template>
  <button
    class="
      shadow-xl
      border-2 border-purple-500
      rounded-lg
      font-bold
      text-purple-500
      px-4
      py-3
      transition
      duration-300
      ease-in-out
      hover:bg-purple-500 hover:text-white
      mr-6
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
