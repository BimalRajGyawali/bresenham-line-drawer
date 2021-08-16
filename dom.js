function createTable() {
  let table = document.createElement("table");

  let th = document.createElement("tr");
  th.appendChild(createTableData("p<sub>k+1</sub>"));
  th.appendChild(createTableData("x<sub>k+1<sub>"));
  th.appendChild(createTableData("y<sub>k+1<sub>"));

  table.appendChild(th);
  return table;
}

function showResult(table) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.appendChild(table);
  
}

function createTableData(value) {
  let td = document.createElement("td");
  td.innerHTML = value;
  return td;
}