<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useStore} from 'vuex'

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore()
    store.dispatch('tokens/fetchTokens')
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
}
</style>
