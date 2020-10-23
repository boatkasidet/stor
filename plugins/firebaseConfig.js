import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyAQUE8p9b4LTW7fvR1SvRFIMVsXEIEKqlk',
    authDomain: 'stor-e8aaa.firebaseapp.com',
    databaseURL: 'https://stor-e8aaa.firebaseio.com',
    projectId: 'stor-e8aaa',
    storageBucket: 'stor-e8aaa.appspot.com',
    messagingSenderId: '780067692153',
    appId: '1:780067692153:web:7c5d793ac536c245023ea8',
    measurementId: 'G-ECJ4KERP1B',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
