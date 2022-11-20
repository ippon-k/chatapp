// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved }
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUOhmy641gr3kvno8UeVhAlp6jh6PrYdU",
  authDomain: "message-6224e.firebaseapp.com",
  projectId: "message-6224e",
  storageBucket: "message-6224e.appspot.com",
  messagingSenderId: "797668907869",
  appId: "1:797668907869:web:3e2facf394100c34c066b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);//RealtimeDBに接続
const dbRef = ref(db, "message");//RealtimeDB内のmessageを使う



//htmlからデータ取得
$("#send").on("click", function () {
  const msg = {
    uname: $("#uname").val(),
    text: $("#text").val()
  }
  // alert(uname + text); //取得確認
  const newPostRef = push(dbRef);//pushできる状況を作る
  set(newPostRef, msg); //dbに値をセットする
});

onChildAdded(dbRef, function (data) {
  const msg = data.val();
  const key = data.key;//データのユニークキー（削除や更新に使用可能）
  let h = '<p>';
  h += msg.uname;
  h += '<br>';
  h += msg.text;
  h += '<br>';
  h += '<button class="delete">×</button>';
  h += '</p>';
  $("#output").append(h);
  //デフォルトでスクロールを一番下にする
  const output = document.getElementById('output');
  output.scrollTo(0, output.scrollHeight);
});
