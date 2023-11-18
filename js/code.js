window.onload = () => {

    document.getElementById("AddExpRowButton").onclick = addExpRow;
    document.getElementById("AddIncRowButton").onclick = addIncomeRow;
    document.getElementById('addSavingsRowButton').onclick = addSavingsRow;

}

function addExpRow() {
    // Get input values
    var expense = document.getElementById('expense').value;
    var plannedCost = document.getElementById('plannedCost').value;
    var actualCost = document.getElementById('actualCost').value;

    // Get table reference
    var table = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];

    // Create a new row
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Add values to the cells
    cell1.innerHTML = expense;
    cell2.innerHTML = plannedCost;
    cell3.innerHTML = actualCost;

    // Compare planned and actual costs to change font color
    if (parseFloat(actualCost) > parseFloat(plannedCost)) {
      cell3.classList.add('red');
    } else if (parseFloat(actualCost) < parseFloat(plannedCost)) {
      cell3.classList.add('green');
    }

    document.getElementById('expense').value = '';
      document.getElementById('plannedCost').value = '';
      document.getElementById('actualCost').value = '';
  }
  function addIncomeRow() {
    var income = document.getElementById('income').value;
    var plannedAmount = document.getElementById('plannedAmount').value;
    var actualAmount = document.getElementById('actualAmount').value;
  
    var tableBody = document.getElementById('incomeTable').getElementsByTagName('tbody')[0];
  
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
  
    cell1.innerHTML = income;
    cell2.innerHTML = plannedAmount;
    cell3.innerHTML = actualAmount;
  
    if (parseFloat(actualAmount) < parseFloat(plannedAmount)) {
      cell3.classList.add('red');
    } else if (parseFloat(actualAmount) > parseFloat(plannedAmount)) {
      cell3.classList.add('green');
    }
  
    // Clear input fields after adding row
    document.getElementById('income').value = '';
    document.getElementById('plannedAmount').value = '';
    document.getElementById('actualAmount').value = '';
  }

  function addSavingsRow() {
    var reservedFor = document.getElementById('reservedFor').value;
    var goalAmount = document.getElementById('goalAmount').value;
    var currentAmount = document.getElementById('currentAmount').value;
  
    var tableBody = document.querySelector('#savingsTable tbody');
  
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
  
    cell1.innerHTML = reservedFor;
    cell2.innerHTML = goalAmount;
    cell3.innerHTML = currentAmount;
  
    var leftToGo = parseFloat(goalAmount) - parseFloat(currentAmount);
    cell4.innerHTML = leftToGo.toFixed(2);
  
    // Clear input fields after adding row
    document.getElementById('reservedFor').value = '';
    document.getElementById('goalAmount').value = '';
    document.getElementById('currentAmount').value = '';
  }