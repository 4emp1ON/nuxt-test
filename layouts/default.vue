<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <Header />
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: {Header},
};
</script>

<style lang="sass" scoped>
</style>
