<template>
    <v-app>
        <v-card width="300" class="mx-auto mt-12" elevation="20">
            <v-row justify="space-around">
                <v-avatar color="" size="150" class="my-7">
                    <img src="../assets/Zeal.png" alt="Zeal Logo">
                </v-avatar>
            </v-row>

            <v-row justify="space-around">
                <h3>Online Remote Classroom</h3>
            </v-row>

            <v-tabs grow>
                <v-tab>Login</v-tab>
                <v-tab>Sign Up</v-tab>
            
                <v-tab-item>
                    <v-card-text>
                        <v-form>
                        <v-text-field label="Email" prepend-icon="mdi-email" v-model="email"/>
                        <v-text-field label="Password" prepend-icon="mdi-lock" 
                                        v-model="password"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                        :type="showPassword ? 'text' : 'password'" 
                                        @click:append="showPassword = !showPassword" />
                        </v-form>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-row justify="space-around" class="my-2">
                        <v-btn color="info" class="my-3" @click="show()">Login</v-btn>
                    </v-row>
                </v-tab-item>

                <v-tab-item>
                    <v-card-text>
                        <v-form>
                        <v-text-field label="Email" prepend-icon="mdi-email" v-model="email"/>
                        <v-text-field label="Password" prepend-icon="mdi-lock" 
                                        v-model="password"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                        :type="showPassword ? 'text' : 'password'" 
                                        @click:append="showPassword = !showPassword" />
                        <v-text-field label="Confirm Password" prepend-icon="mdi-lock" 
                                        v-model="confirmPassword"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                        :type="showPassword ? 'text' : 'password'" 
                                        @click:append="showPassword = !showPassword" />
                        </v-form>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-row justify="space-around" class="my-2">
                        <v-btn color="success" class="my-3">Sign Up</v-btn>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name: 'login',
    data() {
        return{
            showPassword: false,
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        show(){
            console.log(`${this.email},${this.password}`)
        }
    }
}
</script>