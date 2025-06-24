window.onload = () => {
  google.accounts.id.initialize({
    client_id: "287460611306-r657t83lo11cjuim68ednnojetnpjg0s.apps.googleusercontent.com",
    callback: () => {
      document.getElementById("signinDiv").style.display = "none";
      document.getElementById("logForm").style.display = "block";
    }
  });

  google.accounts.id.renderButton(document.getElementById("signinDiv"), {
    theme: "outline", size: "large"
  });
};

document.getElementById("earnings").addEventListener("input", () => {
  const earnings = parseFloat(document.getElementById("earnings").value) || 0;
  let payPercent = 0;
  if (earnings >= 3000 && earnings < 4500) payPercent = 60;
  else if (earnings < 5500) payPercent = 65;
  else if (earnings < 7001) payPercent = 70;
  document.getElementById("payPercent").value = payPercent;

  const salary = (earnings * payPercent) / 100;
  document.getElementById("salary").value = salary.toFixed(2);
});

document.getElementById("cashCollection").addEventListener("input", () => {
  const cash = parseFloat(document.getElementById("cashCollection").value) || 0;
  const earnings = parseFloat(document.getElementById("earnings").value) || 0;
  const commission = cash - earnings;
  document.getElementById("uberCommission").value = commission.toFixed(2);
});

function calculatePL() {
  const earnings = parseFloat(document.getElementById("earnings").value) || 0;
  const salary = parseFloat(document.getElementById("salary").value) || 0;
  const other = parseFloat(document.getElementById("otherExpense").value) || 0;
  const toll = parseFloat(document.getElementById("toll").value) || 0;

  const pl = earnings - salary - other - 1080 + toll;
  document.getElementById("pl").value = pl.toFixed(2);

  const cash = parseFloat(document.getElementById("cashCollection").value) || 0;
  const crfd = cash - salary - other;
  document.getElementById("crfd").value = crfd.toFixed(2);
}

["earnings", "salary", "otherExpense", "toll"].forEach(id => {
  document.getElementById(id).addEventListener("input", calculatePL);
});
