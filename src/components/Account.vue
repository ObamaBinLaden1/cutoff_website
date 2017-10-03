<template>
  <div >
    <h1>Sign In/ Register</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
require('../../node_modules/firebaseui/dist/firebaseui.css')
import firebase from 'firebase'
import firebaseui from 'firebaseui'

var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/terms-of-service'
}
 // Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth())
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig)
      console.log(uiConfig)
      // console.log(firebaseApp)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
