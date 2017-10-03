<template>
  <div id="app">
    <header>
      Cut Off
     <router-link v-if="!user":to="{path:'account'}">Sign In/Register</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { firebaseApp } from './firebase.js'
export default {
  name: 'app',
  data () {
    return {
      user: null,
      accountStatus: 'Signed Out'
    }
  },
  mounted () {
    console.log(firebaseApp)
    this.init()
  },
  methods: {
    init () {
      this.firebaseInit()
    },
    firebaseInit () {
      let vm = this
      firebaseApp.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          // var displayName = user.displayName;
          // var email = user.email;
          // var emailVerified = user.emailVerified;
          // var photoURL = user.photoURL;
          // var uid = user.uid;
          // var phoneNumber = user.phoneNumber;
          // var providerData = user.providerData;
          vm.user = user
          user.getToken().then(function (accessToken) {
            vm.accountStatus = 'Signed in'
            // document.getElementById('sign-in-status').textContent = 'Signed in';
            // document.getElementById('sign-in').textContent = 'Sign out';
            // document.getElementById('account-details').textContent = JSON.stringify({
            //   displayName: displayName,
            //   email: email,
            //   emailVerified: emailVerified,
            //   phoneNumber: phoneNumber,
            //   photoURL: photoURL,
            //   uid: uid,
            //   accessToken: accessToken,
            //   providerData: providerData
            // }, null, '  ');
          })
        } else {
          // User is signed out.
          // document.getElementById('sign-in-status').textContent = 'Signed out';
          // document.getElementById('sign-in').textContent = 'Sign in';
          // document.getElementById('account-details').textContent = 'null';
          vm.accountStatus = 'Signed out'
        }
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
