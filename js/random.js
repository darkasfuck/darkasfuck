// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD8f2yUfA0piABQRT1Yss6c5hhV-5ItA2Y",
authDomain: "darkasfuck.firebaseapp.com",
databaseURL: "https://darkasfuck-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "darkasfuck",
storageBucket: "darkasfuck.appspot.com",
messagingSenderId: "643134162854",
appId: "1:643134162854:web:bf94263f60bb282f6ef167",
measurementId: "G-RESVHDPV26"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import{getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"
const db = getDatabase();                

function callrandomjoke(){
    let Jnum = -1;
    const dbref = ref(db);
    get(child(dbref, "prop"))
    .then((snapshot)=>{
        if(snapshot.exists()){
            alert("לא עובד אחי סליחה")

            Jnum = snapshot.val().num;
            var ran = getRandomInt(Jnum+1);
            alert("moving")
            location.href= 'jokes.html?id=' + ran;
        }
    })
    .catch((error)=>{
        alert("לא עובד אחי סליחה")
    })
}
alert("לא עובד אחי סליחה")
callrandomjoke();

