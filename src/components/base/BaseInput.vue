<template>
  <div class="flex flex-col items-start">
    <label v-if="value" class="text-word-5 text-left font-medium">{{
      label
    }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        w-full
        bg-black
        border border-word-4 border-solid
        text-word-3
        px-5
        py-2.5
        outline-none
        rounded-2xl
        font-medium
      "
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: [String, Number],
    label: String,
    placeholder: String
  }
});
</script>

<style></style>
