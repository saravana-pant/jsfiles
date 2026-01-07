var input_var = document.querySelector("input")
var ul_var = document.getElementById ("ul")
function add()
{
    var contents = input_var.value

    if(input_var.value!="")
    {
        var create_new_list = document.createElement("li")
    
        var para_var = document.createElement("p")
        para_var.textContent=contents
        para_var.setAttribute("class","task")

        create_new_list.append(para_var)

        var delete_button = document.createElement("button")
        delete_button.textContent="Delete"
        delete_button.setAttribute("onclick","delete_function(event)")
        delete_button.setAttribute("class","delete-button")
        
        create_new_list.insertAdjacentElement("beforeend",delete_button)
        ul_var.insertAdjacentElement("beforeend",create_new_list)

        input_var.value=""
    }
}
function delete_function(event)
{
    event.target.parentElement.remove()
}