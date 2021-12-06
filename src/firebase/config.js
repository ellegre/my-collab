import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDWU6OqptigvwyUqx7gne_SGNF494-XZUk",
  authDomain: "my-collab-d059b.firebaseapp.com",
  projectId: "my-collab-d059b",
  storageBucket: "my-collab-d059b.appspot.com",
  messagingSenderId: "982978224026",
  appId: "1:982978224026:web:175e2dd847a4a9c72de423"
};

// init firebase
firebase.initializedApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }