<template>
  <div @click="selectEvent" class="w-full p-4">
    <label
      class="flex flex-col rounded-lg shadow-lg group relative hover:shadow-2xl"
    >
      <div
        :class="[
          { 'bg-purple-700': active && token.price },
          { 'bg-red-200': !token.price }
        ]"
        class="w-full py-6 rounded-t-lg card-section-1"
      >
        <h3
          :class="
            active && token.price
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="mx-auto text-base font-semibold text-center"
        >
          {{ token.name }} - USD
        </h3>
        <p
          :class="
            active && token.price
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="my-8 font-bold"
        >
          <template v-if="token.price">
            <span class="text-3xl text-left"
              >${{ Math.trunc(token.price) }}.</span
            ><span class="text-xl text-center">{{ frac(token.price) }}</span>
          </template>
          <template v-if="!token.price"
            ><span class="text-3xl text-center">-</span></template
          >
        </p>
        <p
          :class="
            active && token.price
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="text-xs text-center uppercase"
        >
          Hot Price!
        </p>
      </div>
      <div
        :class="active && token.price ? 'bg-purple-900' : 'bg-purple-700'"
        class="
          flex flex-col
          items-center
          justify-center
          w-full
          h-full
          py-6
          rounded-b-lg
        "
      >
        <div
          @click.stop="removeEvent"
          class="
            cursor-pointer
            flex
            justify-center
            items-center
            w-5/6
            py-2
            mt-2
            font-semibold
            text-center
            uppercase
            bg-white
            border border-transparent
            rounded
            text-purple-700
          "
        >
          <BaseIcon class="mr-1" name="trash-2" />
          Remove
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { frac } from "@/composables/useNumbers";

export default defineComponent({
  name: "BaseCard",
  props: {
    token: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    function selectEvent() {
      emit("selectToken");
    }
    function removeEvent() {
      emit("removeToken");
    }
    return {
      selectEvent,
      removeEvent,
      frac
    };
  }
});
</script>
