
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_QP94MN3SVqLdl_3bGxOfpT3l4w9bkwY",
    authDomain: "formcontacto-153d8.firebaseapp.com",
    databaseURL: "https://formcontacto-153d8-default-rtdb.firebaseio.com",
    projectId: "formcontacto-153d8",
    storageBucket: "formcontacto-153d8.appspot.com",
    messagingSenderId: "365549296665",
    appId: "1:365549296665:web:23062f9cba65c14f391e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = getDatabase();

// /* Referencias */
// let namebox = document.getElementById("NameBox");
// let rollbox = document.getElementById("RollBox");
// let secbox = document.getElementById("SecBox");
// let genbox = document.getElementById("GenBox");

// let insBtn = document.getElementById("Insbtn");
// let selBtn = document.getElementById("Selbtn");
// let updBtn = document.getElementById("Updbtn");
// let delBtn = document.getElementById("Delbtn");

/* Referencias form contacto */
    /* Variables inputs */
let nombreaApellidos = document.getElementById("nombresApellidos");
let correoElectronico = document.getElementById("correoElectronico");
let telefono = document.getElementById("telefono");
let comentarios = document.getElementById("comentarios");
    /* Boton Enviar */
let enviarBtn = document.getElementById("enviarBtn");

// function InsertData() {
//     set(ref(db,"TheStudents/"+rollbox.value),{
//         NameOfStd: namebox.value,
//         RollNo: rollbox.value,
//         Section: secbox.value,
//         Gender: genbox.value,

//     })
//     .then(()=>{
//         alert("Data Guardada")
//     })
//     .catch((error)=>{
//         alert("Error" + error)
//     })
// }
// /* Eventos para botones */
// insBtn.addEventListener("click" , InsertData);

function InsertData() {
    set(ref(db,"Contacto/"+nombreaApellidos.value),{
        NombresyApellidos: nombreaApellidos.value,
        CorreoElectronico: correoElectronico.value,
        Telefono: telefono.value,
        Comentarios: comentarios.value,
    })
    .then(()=>{
        alert("Data Guardada")
    })
    .catch((error)=>{
        alert("Error" + error)
    })
}
enviarBtn.addEventListener("click" , InsertData);




