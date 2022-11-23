// alert('いいね。この調子だ')
//文字列削除とボタンの自動アクティブ化を目指したが失敗
// function checkText() {
//   const text = document.getElementById("text");
//   const button = document.getElementById("button");
//   console.log(text)
//   if (text.value && text.value.length) {
//     //入力欄が空ならdisabled解除
//     button.disabled = false;
//   } else {
//     //入力されていればdisabled付与
//     button.disabled = true;
//   }
// }
//11/20submit未入力時不活性化処理
const inputName = document.getElementById('uname');
const inputText = document.getElementById('text');
const button = document.getElementById('send');

//１ フォームが入力された場合のイベントをセットする 失敗
// $('.form-control').on('keyup', function () {
//   // フォームの中身を取得して中身が入っているか確認
//   // if文では値が入っていればtrue, 空ならfalseが返ってくる
//   if ($(this).val()) {
//     console.log($(this).val());
//     // テキストが入っていなければsubmit活性
//     $('js-disabled-submit').prop('disabled', false);
//   } else {
//     //ノンテキストなら非活性化
//     $('js-disabled-submit').prop('disabled', true);

//   }
// });

//2　成功
inputName.addEventListener('keyup', (e) => {
  if (1 <= e.target.value.length && 1 <= inputText.value.length) {
    //入力文字が１字以上なら実行
    console.log(inputText.value.length);

    button.disabled = false;
  } else {
    button.disabled = true;
    //参考 https://magazine.techacademy.jp/magazine/22310
  }
})

inputText.addEventListener('keyup', (e) => {
  if (1 <= e.target.value.length && 1 <= inputName.value.length) {
    //入力文字が１字以上なら実行

    button.disabled = false;
  } else {
    button.disabled = true;
  }
})
//質問：button.disabled = false or true で書き換えができるのは表記を変えているのではなくdisabledにプロパティが存在して切り替えているイメージ？



// コンテナ削除
// $(".delete").on("click", function () {
//   console.log("絶好調");
//   // console.log($(this).val());
// });

//2
// function removeExample(button) {
//   let parent = button.parentNode;
//   // console.log(parent);
//   parent.remove();
//   //https://tech-fill.net/javascript_remove_element_dynamically/

//   //firebase-delete
//   // const deleteDb = ref(db, "comment/www/" + key);
//   // document.querySelector(this).addEventListener("click", function () {
//   //   remove(deleteDb);
//   // });
// }
