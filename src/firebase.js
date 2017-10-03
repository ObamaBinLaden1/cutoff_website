import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyAZhMj4IRsJhhaC4_x7X6Pahwc90wFl5dw',
  authDomain: 'chopstitch-143cd.firebaseapp.com',
  databaseURL: 'https://chopstitch-143cd.firebaseio.com',
  projectId: 'chopstitch-143cd',
  storageBucket: 'chopstitch-143cd.appspot.com',
  messagingSenderId: '927237754072'
}
export let firebaseApp = firebase.initializeApp(config)
export let db = firebaseApp.database()
