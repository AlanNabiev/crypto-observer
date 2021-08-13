<template>
  <div :class="`base__warning--${name}`" class="base__warning">
    <div :class="`base__warning--${position}__container`">
      <BaseIcon :class="`base__warning--${position}__icon`" :name="name" />
      <span><slot /></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseWarning",
  props: {
    position: {
      type: String,
      default: "vertically",
      validator: (value: string) => ["vertically", "horizontal"].includes(value)
    },
    name: {
      type: String,
      default: "alert-triangle",
      validator: (value: string) =>
        ["alert-circle", "alert-triangle"].includes(value)
    }
  }
});
</script>

<style lang="scss">
.base__warning {
  @apply rounded-2xl p-2 text-base font-bold;
  &--vertically {
    &__container {
      @apply flex flex-col justify-center text-center;
    }
    &__icon {
      @apply w-8 h-8;
    }
  }
  &--horizontal {
    &__container {
      @apply flex items-center justify-center text-center;
    }
    &__icon {
      @apply w-8 h-8 mt-2 mx-2;
    }
  }
  &--alert-triangle {
    @apply bg-red-600 text-red-600 bg-opacity-20;
  }
  &--alert-circle {
    @apply bg-yellow-400 text-yellow-400 bg-opacity-20;
  }
}
</style>
