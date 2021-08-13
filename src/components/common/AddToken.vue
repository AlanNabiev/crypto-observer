<template>
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddToken",
  setup(_, { emit }) {
    const store = useStore();
    const tokens = computed(() => {
      return store.getters["tokens/tokens"];
    }).value;

    console.log(tokens.find((t) => t.Symbol === "ETH"));

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
      tokens,
      add
    };
  }
});
</script>
