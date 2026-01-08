var name_var = document.querySelector("#name")
var age_var = document.querySelector("#age")
var course_var = document.querySelector("#courses")
var email_var = document.querySelector("#email-input")
var table_var = document.querySelector("#bottom-table")

function update()
{
    let gender_value = document.querySelector("input[name='gender']:checked")?.value || "";


    console.log(gender_value)
    if(name_var.value=="" || age_var.value=="" || course_var.value=="" || email_var.value=="" || gender_value=="")
    {
        alert("Please Kindly fill All boxes")
    }
    else
    {
        var row_var = document.createElement("tr")
        var data_var_name = document.createElement("td")
        var data_var_age = document.createElement("td")
        var data_var_gender = document.createElement("td")
        var data_var_course = document.createElement("td")
        var data_var_email = document.createElement("td")
        var delete_var_button = document.createElement("td")
        var delete_var = document.createElement("button")

        data_var_name.innerText=name_var.value
        data_var_age.innerText=age_var.value
        data_var_gender.innerText=gender_value
        data_var_course.innerText=course_var.value
        data_var_email.innerText=email_var.value

        delete_var.textContent="Delete"
        delete_var.setAttribute("class","delete-button")
        delete_var.setAttribute("onclick","delete_function(event)")
        delete_var_button.insertAdjacentElement("beforeend",delete_var)

        table_var.insertAdjacentElement("beforeend",row_var)
        row_var.insertAdjacentElement("beforeend",data_var_name)
        row_var.insertAdjacentElement("beforeend",data_var_age)
        row_var.insertAdjacentElement("beforeend",data_var_gender)
        row_var.insertAdjacentElement("beforeend",data_var_course)
        row_var.insertAdjacentElement("beforeend",data_var_email)
        row_var.insertAdjacentElement("beforeend",delete_var_button)

        name_var.value=""
        age_var.value=""
        course_var.value=""
        email_var.value=""
    }
}

function delete_function(event)
{
    event.target.parentElement.parentElement.remove()

}

