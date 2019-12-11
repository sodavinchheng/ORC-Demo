<template>
  <v-app>
    <!-- <v-tooltip bottom close-delay="500">
            <template v-slot:activator="{ on }">
                <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" text v-on="on">
                    <v-icon :class="$vuetify.theme.dark ? 'd-none' : 'd-flex'">mdi-white-balance-sunny</v-icon>
                    <v-icon :class="$vuetify.theme.dark ? 'd-flex' : 'd-none'">mdi-moon-waning-crescent</v-icon>
                </v-btn>
            </template>
            <span :class="$vuetify.theme.dark ? 'd-flex' : 'd-none'">Enable Light Theme</span>
            <span :class="$vuetify.theme.dark ? 'd-none' : 'd-flex'">Enable Dark Theme</span>
    </v-tooltip>-->
    <v-card width="300" class="mx-auto mt-12" elevation="20" transition="scale-transition">
      <v-row justify="space-around">
        <v-avatar color size="150" class="my-7">
          <img src="../assets/Zeal.png" alt="Zeal Logo" />
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
              <v-text-field label="Email" prepend-icon="mdi-email" v-model="email" />
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
            <p class="red--text" v-if="hasError">**Email or Password Is Incorrect</p>
            <v-row justify="space-around" v-if="isLoading">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-row justify="space-around">
            <v-btn color="info" class="my-2" @click="login()">Login</v-btn>
          </v-row>

          <v-row justify="space-around">
            <p class="my-2">--or--</p>
          </v-row>

          <v-row justify="space-around">
            <v-btn color="info" class="my-2" @click="googleSignIn()">Sign In With Google</v-btn>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" prepend-icon="mdi-account" v-model="name" />
              <v-text-field label="Email" prepend-icon="mdi-email" v-model="signUpEmail" />
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                v-model="signUpPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-row justify="space-around" class="my-2">
            <v-btn color="success" class="my-3" @click="signUp()">Sign Up</v-btn>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  name: "loginbox",
  data() {
    return {
      showPassword: false,
      name: "",
      email: "",
      password: "",
      signUpEmail: "",
      signUpPassword: "",
      hasError: false,
      isLoading: false
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.isLoading = false;
            this.$router.replace("home");
            location.reload();
          },
          err => {
            this.isLoading = false;
            this.hasError = true;
            console.log("Oops, Something Went Wrong...\n" + err.message);
          }
        );
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword)
        .then(
          () => {
            this.$router.replace("home");
          },
          err => {
            console.log("Oops, Something Went Wrong...\n" + err.message);
          }
        );
    },
    googleSignIn() {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.isLoading = true;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          this.isLoading = false;
          this.$router.replace("home");
          location.reload();
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
          this.isLoading = false;
        });
    }
  }
};
</script>