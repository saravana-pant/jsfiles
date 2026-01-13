var over_lay = document.querySelector(".overlay")
var pop_up = document.querySelector(".popup")


//selecting all buttons
var add_button = document.querySelector(".add-button")
var cancel_button = document.querySelector("#cancel-button")
var create_button = document.querySelector("#add_button")
var delete_button = document.querySelector("#delete-button")

var book_title = document.querySelector(".book-title")
var book_author = document.querySelector(".book-author")
var description = document.querySelector(".description")

var main_box = document.querySelector("main")

add_button.addEventListener("click",function(){
    over_lay.style.display="flex"
    pop_up.style.display="flex"
})

cancel_button.addEventListener("click",function(){
    over_lay.style.display="none"
    pop_up.style.display="none"
})

create_button.addEventListener("click",function(){
    if(book_title.value=="" || book_author.value=="" || description.value=="")
    {
        alert("Please Kindly fill all Details")
    }
    else{
    var new_div = document.createElement("div")
    var new_h2 = document.createElement("h2")
    var new_h5 = document.createElement("h5")
    var new_para = document.createElement("p")
    var new_del = document.createElement("button")

    new_h2.textContent=book_title.value
    new_h5.textContent=book_author.value
    new_para.textContent=description.value
    new_del.textContent="Delete"
    new_del.setAttribute("onclick","clearing(event)")

    new_div.setAttribute("class","book-details")
    new_div.insertAdjacentElement("beforeend",new_h2)
    new_div.insertAdjacentElement("beforeend",new_h5)
    new_div.insertAdjacentElement("beforeend",new_para)
    new_div.insertAdjacentElement("beforeend",new_del)
    main_box.insertAdjacentElement("beforeend",new_div)

    over_lay.style.display="none"
    pop_up.style.display="none"
    }
})

delete_button.addEventListener("click",() =>
{
    event.target.parentElement.remove()
})