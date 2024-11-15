const tabsBtnColumn = document.querySelectorAll(".benefits-selector__item");

tabsBtnColumn.forEach(onTabColumnClick);

function onTabColumnClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    if (currentBtn.classList.contains("active")) {
      console.log("true");
    }
  });
}

$('select[name="price"]').on("change", function () {
  $("#priceDisplay").html(document.getElementById("r").value);
});
