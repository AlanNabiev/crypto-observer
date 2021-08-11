<template>
  <div>
    <BaseInput
      class="mt-10"
      @keydown="add"
      v-model="token"
      label="Add token"
      placeholder="Enter name or symbol..."
    />
    <BaseButton class="flex items-center my-10" @click="add">
      <BaseIcon class="mr-2" name="plus-circle" />Add Token
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddToken",
  setup(_, { emit }) {
    const token = ref("");

    function add(): void {
      if (token.value === "") {
        return;
      }
      emit("addToken", token);
      token.value = "";
    }

    return {
      token,
      add
    };
  }
});
</script>
