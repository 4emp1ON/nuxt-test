<template>
  <v-card
      class="mx-auto"
      max-width="344"
      v-if="authorised"
    >
      <v-card-text>
        <div>Добро пожаловать</div>
        <p class="display-1 text--primary">
          {{ user.name }}     <v-avatar>
                        <img
                          :src="user.avatar"
                          alt="John"
                        >
    </v-avatar>
        </p>
        <p>email: {{user.email}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="$nuxt.$emit('logout')"
        >
          Exit
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "profile",
    methods: {
      debug() {
          console.dir(this.$root);
      }
    },
    computed: {
    user() {
      return this.$store.state.profile;
    },
    authorised() {
      return this.$store.state.authorised;
    }
  }
};
</script>

<style scoped>
</style>
