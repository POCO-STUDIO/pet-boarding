function calculateTotals() {
  // $10 per day for a small cage; $15 for a large; add $2 for a dog per day

  function getSelectedValue(radioGroup) {
    for (var i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) return radioGroup[i].value;
    }
  }

  var selectedPetType = getSelectedValue(document.getElementsByName("petType"));
  var selectedCageSize = getSelectedValue(
    document.getElementsByName("cageSize")
  );
  var numberOfDays = document.getElementById("numberOfDays").value;

  var totalPerDay;
  var grandTotal;

  if (selectedCageSize === "small") {
    totalPerDay = 10;
  } else {
    totalPerDay = 15;
  }

  if (selectedPetType === "dog") {
    totalPerDay = totalPerDay + 2;
  }

  grandTotal = totalPerDay * numberOfDays;

  document.getElementById("totalPerDay").value = totalPerDay;
  document.getElementById("grandTotal").value = grandTotal;
}
