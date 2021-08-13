<template>
  <section class="px-44">
    <BaseInput
      class="mt-10"
      @keydown.enter="add"
      v-model="token"
      label="Add token"
      placeholder="Enter name or symbol..."
    />
    <BaseWarning
      class="mr-96 mt-2"
      v-if="!filteredTokens.length"
      name="alert-triangle"
      position="horizontal"
      >Invalid token</BaseWarning
    >
    <ul class="mt-2 grid grid-flow-col grid-cols-4 grid-rows-1 gap-x-4">
      <li
        v-for="(tokenItem, idx) in filteredTokens"
        :key="idx"
        @click="addFromTokensList(tokenItem)"
        class="
          p-2
          flex
          justify-arouund
          items-center
          font-bold
          text-white
          shadow-xl
          rounded-xl
          hover:shadow-none
          bg-purple-500
          transition
          delay-150
          duration-300
          ease-in-out
          hover:bg-purple-800 hover:text-white
          cursor-pointer
        "
      >
        <img class="w-8 h-8 mr-2" :src="tokenItem.image" alt="" />
        <span class="font-bold text-right">{{
          tokenItem.symbol.toUpperCase()
        }}</span>
      </li>
    </ul>
    <BaseButton class="flex items-center m-10" @click="add">
      <BaseIcon class="mr-2" name="plus-circle" />Add Token
    </BaseButton>
  </section>
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

    const token = ref("");

    const filteredTokens = computed(() => {
      return tokens
        .filter(
          (el) =>
            el.name.toLowerCase().includes(token.value.toLowerCase()) ||
            el.symbol.toLowerCase().includes(token.value.toLowerCase())
        )
        .slice(0, 4);
    });

    function add(): void {
      if (token.value === "") {
        return;
      }
      emit("addToken", token);
      token.value = "";
    }

    function addFromTokensList(tokenItem) {
      token.value = tokenItem.symbol.toUpperCase();
      add();
    }

    return {
      token,
      tokens,
      add,
      addFromTokensList,
      filteredTokens
    };
  }
});
</script>
