import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = ''

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA-vp1yYkJUjeyOey4XfYyMLEYMVpURFnc',
	authDomain: 'orc-demo-5fb15.firebaseapp.com',
	databaseURL: 'https://orc-demo-5fb15.firebaseio.com',
	projectId: 'orc-demo-5fb15',
	storageBucket: 'orc-demo-5fb15.appspot.com',
	messagingSenderId: '288853645474',
	appId: '1:288853645474:web:37d405fa5cf8a64bafdffb',
	measurementId: 'G-HX5G5PYXE4'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		new Vue({
			router,
			vuetify,
			render: h => h(App)
		}).$mount('#app')
	}
})
