var res = document.getElementById("result-id");
var solve_button = document.querySelector(".equal-button")
var ac_button = document.querySelector(".ac-button");
function update(event)
{
    res.append(event.target.textContent) 
}


ac_button.addEventListener("click",() =>
{
    res.textContent="";
})




function delete_function()
{
    res.textContent=res.textContent.slice(0,-1) 
}


function operator_function(event)
{
    var text=res.textContent.trim() 
    var last_letter = text.slice(-1) 

    
    if(last_letter=="-" || last_letter=="+" || last_letter=="x" || last_letter=="/" )
    {
        res.innerText=res.innerText.slice(0,-1) 
        res.append(event.target.textContent) 
    }
    else if(last_letter==".") 
    {
        res.append("0"+event.target.textContent)
    }
    
    else if(last_letter=="") 
    {
        res.textContent==""
    }
    else  
    {
        res.append(event.target.textContent) 
    } 
}

function dot_button() 
{
    var last_letter = res.textContent.slice(-1)
    if(last_letter=="-" || last_letter=="+" || last_letter=="x" || last_letter=="/" || last_letter=="") 
    {
        res.append("0.")
    }
    else if(last_letter==".") 
    {
        res.textContent=res.textContent.slice(0,-1)
        res.append(".")
    }
    else 
    {
        res.append(".")
    }
}


solve_button.addEventListener("click",() => 
{
    var regex = res.textContent;

    regex = regex.match(/\d+|[+\-*/]|x|./g);
    console.log(regex);

    for(i=0;i<regex.length;i+=1)
    {
        if(regex[i]=='x' || regex[i]=='/')
        {
            let a = Number(regex[i-1]);
            let b = Number(regex[i+1]);
            let result=0;
            if(regex[i]=='x')
                result=(a*b).toFixed(1);
            else 
                result=a/b;
            regex.splice(i-1,3,result.toString());
            i--;
        }
        else if(regex[i]=='.')
        {
            let a = regex[i-1];
            let b = regex[i+1];
            let result = a+"."+b;
            regex.splice(i-1,3,result.toString());
            i--;
            console.log(regex);

        }
    }
    console.log(regex);

    for(i=1;i<regex.length;i+=1)
    {
        let intial = Number(regex[0]);
        let sum ,diff =0;
        if(regex[i]=='+')
        {
            let a = Number(regex[i+1])
            sum = intial+a;
            regex.splice(i-1,3,sum.toString());
            i--;
        }
        else if(regex[i]=='-')
        {
            let a = Number(regex[i+1])
            diff = intial-a;
            regex.splice(i-1,3,diff.toString());
            i--;
        }
    }
    console.log(regex);
    console.log((2.3*6));
    res.textContent=Number(regex);
})
