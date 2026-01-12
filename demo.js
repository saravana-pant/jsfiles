var regex = "1/2*2-10+20";

function tokenization(reg)
{
    let array = reg.match(/\d+|[+\-*/]/g);
    return array;
}

function calculate(reg)
{
    let n = reg.length
    for(i=0;i<n;i+=1)
    {
        if(reg[i]=='/' || reg[i]=='*')
        {
            let a = Number(reg[i-1]);
            let b = Number(reg[i+1]);
            let result =0;
            if(reg[i]=='*')
                result = a*b;
            else
                result=a/b;

            reg.splice(i-1,3,result.toString());
            i--;
        }
    }

    for(i=1;i<reg.length;i+=1)
    {
        let op = Number(reg[0]);
        let sum , diff =0;
        if(reg[i]=='+')
        {
            let a = Number(reg[i+1]);
            sum = op+a;
            reg.splice(i-1,3,sum.toString());
            i--;
        }
        else{
            let a = Number(reg[i+1]);
            diff = op-a;
            reg.splice(i-1,3,diff.toString());
            i--;
        }
    }
    return Number(reg);
}
var x = tokenization(regex);
console.log(x);
var y = calculate(x)
console.log(y);