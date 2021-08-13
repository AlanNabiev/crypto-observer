<template>
  <div class="bg-purple-800">
    <button
      class="
        transition
        ease-in-out
        delay-150
        duration-700
        transform
        -translate-x-2.5 -translate-y-2.5
        hover:translate-x-0 hover:translate-y-0
        py-4
        w-full
        font-bold
        text-white
        bg-purple-500
        hover:bg-purple-800 hover:text-white
      "
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
