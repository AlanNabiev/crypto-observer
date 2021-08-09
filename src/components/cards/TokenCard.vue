<template>
  <div @click="selectEvent" class="w-full p-4">
    <label
      class="
        flex flex-col
        rounded-lg
        shadow-lg
        group
        relative
        cursor-pointer
        hover:shadow-2xl
      "
    >
      <div
        :class="{ 'bg-purple-700': active }"
        class="w-full px-4 py-6 rounded-t-lg card-section-1"
      >
        <h3
          :class="
            active
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="mx-auto text-base font-semibold text-center"
        >
          {{ token.symbol }} - USD
        </h3>
        <p
          :class="
            active
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="my-8 text-5xl font-bold text-center"
        >
          ${{ Math.trunc(token.price)
          }}<span class="text-3xl">{{ token.price }}</span>
        </p>
        <p
          :class="
            active
              ? 'text-white group-hover:text-purple-100'
              : 'text-purple-700 group-hover:text-purple-500'
          "
          class="text-xs text-center uppercase"
        >
          Hot Price!
        </p>
      </div>
      <div
        :class="active ? 'bg-purple-900' : 'bg-purple-700'"
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
        <button
          class="
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
        </button>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    token: Object,
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
      removeEvent
    };
  }
});
</script>
