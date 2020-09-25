import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRWnp3x-FaYL8VDBmB0tQS4Ry1ZUnQEPE",
    authDomain: "workshop-76db5.firebaseapp.com",
    databaseURL: "https://workshop-76db5.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base