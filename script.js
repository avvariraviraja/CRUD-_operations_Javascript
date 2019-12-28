var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["proName"] = document.getElementById("proName").value;
    formData["proType"] = document.getElementById("proType").value;
    formData["price"] = document.getElementById("price").value;
    formData["desc"] = document.getElementById("desc").value;
	formData["fssai"] = document.getElementById("fssai").value;
	formData["mfd"] = document.getElementById("mfd").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.proName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.proType;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.desc;
	cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fssai;
	cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.mfd;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)"><button style="text-decoration:none; border-radius:25px;background: linear-gradient(#ffdd7f 5%, #ffbc00 100%);size:25px;cursor:pointer;">Edit</button></a>
                       <a onClick="onDelete(this)"><button style="text-decoration:none; border-radius:25px;background: linear-gradient(#ffdd7f 5%, #ffbc00 100%); size:25px; cursor:pointer;">Delete</button></a>`;
}

function resetForm() {
    document.getElementById("proName").value = "";
    document.getElementById("proType").value = "";
    document.getElementById("price").value = "";
    document.getElementById("desc").value = "";
	document.getElementById("fssai").value = "";
	document.getElementById("mfd").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("proName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("proType").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("desc").value = selectedRow.cells[3].innerHTML;
	document.getElementById("fssai").value = selectedRow.cells[4].innerHTML;
	document.getElementById("mfd").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.proName;
    selectedRow.cells[1].innerHTML = formData.proType;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.desc;
	selectedRow.cells[4].innerHTML = formData.fssai;
	selectedRow.cells[5].innerHTML = formData.mfd;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("proName").value == "") {
        isValid = false;
        document.getElementById("proNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("proNameValidationError").classList.contains("hide"))
            document.getElementById("proNameValidationError").classList.add("hide");
    }
    return isValid;
}