let expenseForm = document.getElementById('expense-form');
let expenseList = document.getElementById('expense-list');

expenseForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const description = document.getElementById('description');
    const category = document.getElementById('category');
    const amount = document.getElementById('amount');

    if(description && category && amount !== NaN){
        let newRow = document.createElement('tr');
        // description.value = description.value.trim()
        newRow.innerHTML = 
        `<td>${description.value}</td>
        <td>${category.value}</td>
        <td>${amount.value}</td>`;
        
        expenseList.appendChild(newRow);
        description.value = "";
        category.value = "";
        amount.value = "";
    }
    // else{
    //     alert("Please enter all the fields")
    // }
})