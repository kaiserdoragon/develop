// let _click = window.ontouchstart === undefined ? "click" : "touchstart";
// radioPrice = 0;
// checkPrice = 0;
// selectPrice = 0;
// function resultPrice() {
//   let totalPrice = radioPrice + checkPrice + selectPrice;
//   $(".result").html(totalPrice.toLocaleString());
//   $(".result").val(totalPrice.toLocaleString());
// }
// $(".radio").on(_click, function () {
//   if ($(this).closest(".section-radio").find(".checked").length > 0) {
//     radioPrice = radioPrice - $(this).closest(".section-radio").find(".checked").data("price");
//     radioPrice = radioPrice + $(this).data("price");
//     $(this).closest(".section-radio").find(".checked").toggleClass("checked");
//     $(this).toggleClass("checked");
//   } else {
//     radioPrice = radioPrice + $(this).data("price");
//     $(this).toggleClass("checked");
//   }
//   resultPrice();
// });
// $(".check").on(_click, function () {
//   if ($(this).hasClass("checked")) {
//     if (checkPrice > 0) {
//       checkPrice = checkPrice - $(this).data("price");
//     }
//   } else {
//     checkPrice = checkPrice + $(this).data("price");
//   }
//   $(this).toggleClass("checked");
//   resultPrice();
// });
// $("[name=transport]").change(function () {
//   selectPrice = $("[name=transport] option:selected").data("price");
//   resultPrice();
// });
// $(".btn").on(_click, function () {
//   $(".check").removeClass("checked");
//   $(".radio").removeClass("checked");
//   radioPrice = 0;
//   checkPrice = 0;
//   selectPrice = 0;
//   $("select").val("地域をお選びください");
// });

const select = document.getElementById("select");
const keisan = document.getElementById("keisan");
const houzinrieki = document.getElementById("houzinrieki");
const resultElement = document.getElementById("selectValue");

keisan.addEventListener("click", () => {
  console.log("計算実行結果");
  var number1 = parseFloat(houzinrieki.value);
  var number2 = parseFloat(yakuinhoushu.value);
  console.log(result01);
  if (select.value == "1000000") {
    var result01 = number1 + number2;
    console.log("資本金:" + select.value);
    console.log("役員報酬支給前の法人利益:" + number1);
    console.log("年間の役員報酬:" + number2);
    console.log("すべて足す場合:" + result01);
    document.getElementById("result01").textContent = result01;
  } else if (select.value == "10000000") {
    var result01 = number1 * number2;
    console.log("資本金:" + select.value);
    console.log("役員報酬支給前の法人利益:" + number1);
    console.log("年間の役員報酬:" + number2);
    console.log("すべて足す場合:" + result01);
    document.getElementById("result01").textContent = result01;
  } else {
    var result01 = number1 - number2;
    console.log("資本金:" + select.value);
    console.log("役員報酬支給前の法人利益:" + number1);
    console.log("年間の役員報酬:" + number2);
    console.log("すべて足す場合:" + result01);
    document.getElementById("result01").textContent = result01;
  }
});

// function calculateFee(category) {
//   // 入力値を数値に変換
//   let baseAmount = 0;

//   switch (category) {
//     case "1oku_ika":
//       // 1億円以下の場合の計算
//       baseAmount = 100000000; // 1億円
//       console.log(houzinrieki.value);
//       return Math.floor(baseAmount * 0.1); // 例: 10%の手数料

//     case "1000man_ika":
//       // 1000万円以下の場合の計算
//       baseAmount = 10000000; // 1000万円
//       return Math.floor(baseAmount * 0.08); // 例: 8%の手数料

//     case "100man_ika":
//       // 100万円以下の場合の計算
//       baseAmount = 1000000; // 100万円
//       return Math.floor(baseAmount * 0.05); // 例: 5%の手数料

//     default:
//       return null;
//   }
// }

// select.addEventListener("change", () => {
//   const selectedValue = select.value;
//   const amount = calculateFee(selectedValue);

//   if (amount) {
//     resultElement.innerHTML = `計算結果: ${amount.toLocaleString()}円`;
//   } else {
//     resultElement.innerHTML = "金額を選択してください";
//   }
// });

// // 金額をフォーマットするユーティリティ関数
// function formatCurrency(amount) {
//   return amount.toLocaleString("ja-JP", {
//     style: "currency",
//     currency: "JPY",
//   });
// }
