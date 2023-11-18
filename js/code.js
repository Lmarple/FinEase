window.onload = () => {

    document.getElementById("AddRowButton").onclick = addRow;


}

function addRow() {
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