// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $('empCount')


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    
    let empId           = $('id').value
    let name            = $('name').value
    let ext             = $('extension').value
    let email           = $('email').value
    let department      = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.innerHTML = empId
    cell2.innerHTML = name
    cell3.innerHTML = ext
    cell4.innerHTML = email
    cell5.innerHTML = department


    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    row.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    let id = $('id').focus()


    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

    

})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this record?')) {
            // REMOVE THE SELECTED ROW
            row = e.target.parentElement.rowIndex
            table.deleteRow(row);
            
        }
    
})