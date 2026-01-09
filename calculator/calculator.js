var res = document.getElementById("result-id") //select the output screen


//function that updates the output screen while pressing the number-buttons and operator-buttons
function update(event)
{
    res.append(event.target.textContent) //updates the content inside the button which one is clicked
}


//function for ac-button
function ac_function()
{
    res.textContent="" //deletes all content in output screen 
}


//function for erase (or) delete button
function delete_function()
{
    res.textContent=res.textContent.slice(0,-1) //deletes the last data in the output screen if press the delete button
}

//function that work when press the operator button
function operator_function(event)
{
    var text=res.textContent.trim() // trims the exceeding white spaces of the data in the output screen
    var last_letter = text.slice(-1) // takes the last data (number or operator) of the output screen

    //this if condition checks the last letter is a operator
    if(last_letter=="-" || last_letter=="+" || last_letter=="x" || last_letter=="/" )
    {
        res.innerText=res.innerText.slice(0,-1) //if the last letter is a then delete it here
        res.append(event.target.textContent) //replace the operator that was pressed
    }
    else if(last_letter==".") //if the last letter is dot then add 0 after the dot and add the operator also
    {
        res.append("0"+event.target.textContent)
    }
    
    else if(last_letter=="") //if there is no numbers then don't add any operator
    {
        res.textContent==""
    }
    else  //add operator if above if conditions becomes fail
    {
        res.append(event.target.textContent) 
    } 
}

function dot_button() //function for dot button
{
    var last_letter = res.textContent.slice(-1)
    if(last_letter=="-" || last_letter=="+" || last_letter=="x" || last_letter=="/" || last_letter=="") //if any operator or empty data in the output screen then add '0.' in the output screen
    {
        res.append("0.")
    }
    else if(last_letter==".") //if already there is dot then delete the previous dot and add new one
    {
        res.textContent=res.textContent.slice(0,-1)
        res.append(".")
    }
    else //adds dot if above if condition fails
    {
        res.append(".")
    }
}


//function for solve the problem
function solve_function()
{
    
}