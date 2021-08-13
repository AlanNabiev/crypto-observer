<template>
  <div class="flex flex-col relative">
    <label
      class="absolute left-0 -top-8 p-2 text-base text-gray-600 font-bold"
      >{{ label }}</label
    >
    <div
      :class="{ 'border-purple-800': focusStatus }"
      class="
        flex
        justify-between
        items-center
        p-1
        text-gray-600
        border-2
        rounded-xl
        transition
        delay-150
        duration-700
        ease-in-out
      "
    >
      <input
        :value="modelValue"
        @focus="focusChange"
        @blur="focusChange"
        @keydown.enter="$emit('keydown')"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full bg-white h-10 rounded-lg text-sm outline-none"
        :type="type"
        :placeholder="placeholder"
      />
      <BaseIcon
        :class="{ 'text-purple-800': focusStatus }"
        class="
          text-gray-400
          cursor-pointer
          mr-2
          transition
          delay-150
          duration-700
          ease-in-out
        "
        name="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
  },
  setup() {
    let focusStatus = ref(false);
    function focusChange() {
      focusStatus.value = !focusStatus.value;
    }
    return {
      focusStatus,
      focusChange
    };
  }
});
</script>

<style></style>
