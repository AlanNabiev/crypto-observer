<template>
  <section v-if="selectedToken" class="relative">
    <h3 class="text-lg leading-6 font-bold text-purple-800 my-8">
      {{ selectedToken.value.name }} - USD
    </h3>
    <div
      class="flex items-end border-gray-600 border-b border-l h-64"
      ref="graphBlock"
    >
      <div
        v-for="(bar, idx) in normalizedGraph"
        :key="idx"
        :style="{ height: `${bar}%` }"
        class="bg-purple-800 border w-10"
      ></div>
    </div>
    <button @click="removeGraph" type="button" class="absolute top-0 right-0">
      <BaseIcon
        class="text-gray-700 hover:text-purple-800"
        size="xl"
        name="x-circle"
      />
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from "vue";
import { subscribeToTicker, unsubscribeFromTicker } from "@/api/prices.api";

export default defineComponent({
  name: "PriceGraph",
  props: {
    selectedToken: Object
  },
  setup(props, { emit }) {
    const graph = ref([]);

    const maxGraphElements = ref(1);
    const graphBlock = ref(null);
    watchEffect(() => {
      //@ts-ignore
      if (!graphBlock.value) {
        return;
      }
      //@ts-ignore
      maxGraphElements.value = graphBlock.value.clientWidth / 38;
    });

    function updateToken(price) {
      //@ts-ignore
      graph.value.push(price);
      while (graph.value.length > maxGraphElements.value) {
        graph.value.shift();
      }
    }

    watchEffect(() => {
      //@ts-ignore
      updateToken(props.selectedToken.value.price);
    });
    const normalizedGraph = computed(() => {
      const maxValue = Math.max(...graph.value);
      const minValue = Math.min(...graph.value);

      if (maxValue === minValue) {
        return graph.value.map(() => 50);
      }

      return graph.value.map(
        (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
      );
    });

    function removeGraph() {
      emit("graphRemove");
      //@ts-ignore
      unsubscribeFromTicker(props.selectedToken.value.name);
    }

    return {
      graphBlock,
      graph,
      maxGraphElements,
      removeGraph,
      normalizedGraph,
      updateToken,
      subscribeToTicker,
      unsubscribeFromTicker
    };
  }
});
</script>
