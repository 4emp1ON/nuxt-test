<template>
    <v-app-bar
            color="primary"
            absolute
            dense
            dark
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Вход</v-toolbar-title>

        <v-spacer></v-spacer>

        <nuxt-link to="/" no-prefetch>
            <v-btn icon v-if="!authorised">
                <v-icon>mdi-login</v-icon>
            </v-btn>
        </nuxt-link>

        <nuxt-link to="/profile" no-prefetch>
            <v-btn icon v-if="authorised">
                <v-icon>mdi-face</v-icon>
            </v-btn>
        </nuxt-link>
        <v-btn icon @click="$nuxt.$emit('logout')" v-if="authorised">
            Выход
        </v-btn>

        <v-menu
                left
                bottom
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {
        computed: {
            authorised() {
                return this.$store.state.authorised;
            }
        },
        created() {
            this.$nuxt.$on('logout', function () {
                    this.$store
                        .dispatch("logout")
                        .then(() => {
                            if ($nuxt.$router.name !== "/") {
                                $nuxt.$router.replace({path: "/"})
                                    .catch(() => {
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            );
        }
    }
</script>

<style lang="css" scoped>
    .header {
        font-family: "Lato", sans-serif;
    }
</style>