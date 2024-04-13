// Create Table

let rowsInput = document.querySelector(".rows");
let columnsInput = document.querySelector(".columns");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (rowsInput.value <= 0 || columnsInput.value <= 0) {
    createMsg();
  } else {
    removeMsg();
    removeTable();
    createTable();
  }
});

function createMsg() {
  removeTable();
  if (!document.body.contains(document.querySelector("p"))) {
    let msg = document.createElement("p");
    msg.innerHTML = "Rows and Columns Should Be Greater Then Zero.";

    document.body.appendChild(msg);
  }
}

function removeMsg() {
  if (document.body.contains(document.querySelector("p"))) {
    document.querySelector("p").remove();
  }
}

function createTable() {
  let table = document.createElement("table");

  for (let i = 0; i < rowsInput.value; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < columnsInput.value; j++) {
      let td = document.createElement("td");
      td.innerHTML = "Element";
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

function removeTable() {
  let table = document.querySelector("table");
  if (table) {
    table.remove();
  }
}
