<template>
  <div class="relative">
    <transition tag="template" name="scale">
      <BaseIcon
        v-if="page > 1"
        @click="backPage"
        size="xl"
        name="chevron-left"
        class="
          text-black
          hover:text-purple-800
          absolute
          -left-8
          top-80
          cursor-pointer
        "
      />
    </transition>
    <transition tag="template" name="scale">
      <span
        class="text-purple-800 font-medium text-xl absolute -top-4"
        v-if="tokens.length > 6"
        >Page: <span class="text-2xl font-bold">{{ page }}</span></span
      >
    </transition>
    <transition-group
      class="grid grid-flow-cols grid-cols-3 grid-row-2 gap-4"
      name="scale"
      tag="div"
    >
      <TokenCard
        @selectToken="SelectToken(token)"
        @removeToken="removeToken(token)"
        v-for="(token, idx) in paginatedTokens"
        :key="idx"
        :token="token"
        :active="token === selectedToken"
      />
    </transition-group>
    <transition tag="template" name="scale">
      <BaseIcon
        v-if="hasNextPage"
        @click="nextPage"
        size="xl"
        name="chevron-right"
        class="
          text-black
          hover:text-purple-800
          absolute
          -right-8
          bottom-80
          cursor-pointer
        "
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from "vue";
import TokenCard from "@/components/cards/TokenCard.vue";
export default defineComponent({
  name: "CardList",
  components: { TokenCard },
  props: {
    tokens: Array
  },
  setup(props, { emit }) {
    let selectedToken = ref(null);
    function SelectToken(token) {
      selectedToken.value = token;
      emit("selectToken", selectedToken);
    }

    function removeToken(token) {
      emit("removeToken", token);
    }

    const page = ref(1);

    const startIndex = computed(() => {
      return (page.value - 1) * 6;
    });
    const endIndex = computed(() => {
      return page.value * 6;
    });

    const paginatedTokens = computed(() => {
      //@ts-ignore
      return props.tokens.slice(startIndex.value, endIndex.value);
    });

    const hasNextPage = computed(() => {
      //@ts-ignore
      return props.tokens.length > endIndex.value;
    });

    function nextPage() {
      page.value++;
    }
    function backPage() {
      page.value--;
    }

    watchEffect(() => {
      if (paginatedTokens.value.length === 0 && page.value > 1) {
        page.value -= 1;
      }
    });

    return {
      selectedToken,
      SelectToken,
      startIndex,
      endIndex,
      page,
      paginatedTokens,
      hasNextPage,
      nextPage,
      backPage,
      removeToken
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
