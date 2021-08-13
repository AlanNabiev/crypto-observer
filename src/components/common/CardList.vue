<template>
  <div class="grid grid-flow-cols grid-cols-3 grid-row-2 gap-4">
    <TokenCard
      @selectToken="SelectToken(token)"
      @removeToken="removeToken(token)"
      v-for="(token, idx) in tokens"
      :key="idx"
      :token="token"
      :active="token === selectedToken"
    />
  </div>
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
