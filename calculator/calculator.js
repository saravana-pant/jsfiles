var res = document.getElementById("result-id");
var solve_button = document.querySelector(".equal-button")
var ac_button = document.querySelector(".ac-button");
var dot = document.querySelector("#dot");
var num = document.querySelectorAll(".number-button");
var delete_button = document.querySelector(".delete-button");
var operator = document.querySelectorAll(".operator");
num.forEach(x => {
    x.addEventListener("click",(event)=>{
        res.append(event.target.textContent);
    })
})

ac_button.addEventListener("click",() =>
{
    res.textContent=null;
})

delete_button.addEventListener("click",() =>
{
    res.textContent=res.textContent.slice(0,-1);
})

operator.forEach(x =>{ 
    x.addEventListener("click",() => {
    var text=res.textContent.trim();
    var last_letter = text.slice(-1); 
    switch(last_letter)
    {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '%':
            res.innerText=res.innerText.slice(0,-1);
            res.append(event.target.textContent) ;
            break;
        case '.':
            res.append("0"+event.target.textContent);
            break;
        case "":
            res.textContent==null;
            break;
        default:
            res.append(event.target.textContent);
            break;
    }
    })
})

dot.addEventListener("click",() =>
{
    var last_letter = res.textContent.trim().slice(-1);
    switch(last_letter){
        case '-':
        case '+':
        case 'x':
        case '/':
        case '':
        case '%':
            res.append("0.");
            break;
        case '.':
            res.textContent=res.textContent.slice(0,-1)
            res.append(".")
            break;
        default :
            res.append(".")
    }
})

solve_button.addEventListener("click",() => 
{
    var regex = res.textContent;
    regex = regex.match(/\d+|[+\-*/%]|x|./g);
    let dot_op = regex.indexOf(".");
    if (dot_op>0){
        let a = (regex[dot_op-1]);
        let b = regex[dot_op+1];
        let result = a+'.'+b;
        regex.splice(dot_op-1,3,result);
    } 
    for(i=0;i<regex.length;i+=1)
    {
        if(regex[i]=='x' || regex[i]=='/' || regex[i]=='%')
        {
            let a = Number(regex[i-1]);
            let b = Number(regex[i+1]);
            let result=0;
            if(regex[i]=='x')
                result=(a*b).toFixed(1);
            else if (regex[i]=='/') 
                result=a/b;
            else
            {
                a/=100;
                let b = regex[i+1];
                b=(b===undefined)? 1: Number(b);
                result=a*b;
            }
            regex.splice(i-1,3,result.toString());
            i--;
        }
    }
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
    res.textContent=Number(regex);
})

