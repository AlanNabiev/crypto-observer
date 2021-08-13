<template>
  <transition-group
    class="grid grid-flow-cols grid-cols-3 grid-row-2 gap-4"
    name="scale"
    tag="div"
  >
    <TokenCard
      @selectToken="SelectToken(token)"
      @removeToken="removeToken(token)"
      v-for="(token, idx) in tokens"
      :key="idx"
      :token="token"
      :active="token === selectedToken"
    />
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TokenCard from "@/components/cards/TokenCard.vue";
export default defineComponent({
  name: "CardList",
  components: { TokenCard },
  props: {
    tokens: Array
  },
  setup(_, { emit }) {
    let selectedToken = ref(null);
    function SelectToken(token) {
      selectedToken.value = token;
      emit("selectToken", selectedToken);
    }

    function removeToken(token) {
      emit("removeToken", token);
    }

    return {
      selectedToken,
      SelectToken,
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
