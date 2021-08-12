<template>
  <main class="mx-20">
    <AddToken @addToken="addTokenHandler" />
    <CardList
      @selectToken="selectToken"
      @removeToken="deleteTokenHandler"
      :tokens="tokens"
      class="my-10"
    />
    <PriceGraph v-if="selectedToken" :selectedToken="selectedToken" @graphRemove="graphRemove" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import {useStore} from 'vuex'
import { subscribeToTicker, unsubscribeFromTicker } from "@/api/prices.api";
import { IToken } from "@/types/index";
import AddToken from "@/components/common/AddToken.vue";
import CardList from "@/components/common/CardList.vue";
import PriceGraph from "@/components/common/PriceGraph.vue";

export default defineComponent({
  name: "Main",
  components: { AddToken, CardList, PriceGraph },
  setup() {
    let selectedToken = ref(null);

    function selectToken(token) {
      selectedToken.value = token;
    }

    let tokens = ref<Array<IToken>>([]);

    function updateTicker(tokenName, price) {
      tokens.value
        .filter((t) => t.name === tokenName)
        .forEach((t) => {
          t.price = price;
        });
    }

    function addTokenHandler(token) {
      const currentToken: IToken = {
        name: token.value.toUpperCase(),
        price: 0
      };

      tokens.value = [...tokens.value, currentToken];
      subscribeToTicker(currentToken.name, (newPrice) =>
        updateTicker(currentToken.name, newPrice)
      );
    }

    function deleteTokenHandler(tokenToRemove) {
      tokens.value = tokens.value.filter((t) => t !== tokenToRemove);
      if (selectedToken.value === tokenToRemove) {
        selectedToken.value = null;
      }
      unsubscribeFromTicker(tokenToRemove.name);
    }

    function graphRemove() {
      selectedToken.value = null;
    }

    return {
      tokens,
      updateTicker,
      addTokenHandler,
      deleteTokenHandler,
      selectedToken,
      graphRemove,
      selectToken
    };
  }
});
</script>
