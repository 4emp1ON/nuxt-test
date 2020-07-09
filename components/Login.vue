<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                <v-form @submit.prevent="authAction" v-if="!authorised">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Вход</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                                label="Login"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                                v-model.trim="login"
                                :error-messages="loginError"
                        ></v-text-field>

                        <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model.trim="password"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="primary">Login</v-btn>
                    </v-card-actions>
                </v-form>
                <v-card-text v-else>
                    Вы успешно авторизованы.
                    <p>Переход в профиль в верхнем правом углу экрана</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                login: "",
                password: "",
                loginError: ""
            };
        },
        computed: {
            authorised() {
                return this.$store.state.authorised;
            }
        },
        mounted() {
            $nuxt.$emit('logout', function () {
                this.login = this.password = "";
            })
        },
        methods: {
            authAction() {
                this.$store
                    .dispatch("login", {username: this.login, password: this.password})
                    .catch(err => {
                        if (err.code === 401) {
                            this.loginError = err.message;
                        }
                    });
            }
        }
    };
</script>