let calc = function () {
  let bill = Number(document.getElementById("bill").value);
  let split = Number(document.getElementById("split").value);
  let tip = bill * 0.15;
  let totalBill = bill + tip;
  let splitPerPerson = totalBill / split;
  document.getElementById("tip").innerHTML = "₹" + Number(tip).toFixed(2);
  document.getElementById("total").innerHTML =
    "₹" + Number(totalBill).toFixed(2);
  document.getElementById("splitTotal").innerHTML =
    "₹" + Number(splitPerPerson).toFixed(2);
};
