<template>
  <section class="px-44">
    <BaseInput
      class="mt-10 relative"
      @keydown.enter="add"
      v-model="token"
      label="Add token"
      placeholder="Enter name or symbol..."
    />
    <transition tag="template" name="scale">
      <BaseWarning
        class="absolute top-28"
        v-if="!filteredTokens.length"
        name="alert-triangle"
        position="horizontal"
        >Invalid token</BaseWarning
      >
    </transition>
    <transition-group
      name="scale"
      tag="ul"
      class="
        mt-2
        absolute
        top-15
        grid grid-flow-col grid-cols-4 grid-rows-1
        gap-x-4
      "
    >
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
    </transition-group>
    <BaseButton class="flex items-center mx-80 mt-20 my-10" @click="add">
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
<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
