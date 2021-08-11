<template>
  <label class="p-2 text-base text-left text-gray-600 font-medium">{{
    label
  }}</label>
  <div
    class="
      flex
      justify-between
      items-center
      p-1
      text-gray-600
      border-2
      rounded-xl
    "
  >
    <input
      :value="modelValue"
      @keydown.enter="$emit('keydown')"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full bg-white h-10 rounded-lg text-sm outline-none"
      :type="type"
      :placeholder="placeholder"
    />
    <BaseIcon class="text-gray-600 mr-2" name="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: [String, Number],
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    }
  }
});
</script>

<style></style>
