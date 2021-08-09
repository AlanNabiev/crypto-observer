<template>
  <main class="mx-20">
    <CardList class="my-10" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "@/components/common/CardList.vue";

export default defineComponent({
  name: "Main",
  components: { CardList }
});
</script>
