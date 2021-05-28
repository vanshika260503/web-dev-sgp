var a;
var b;
a = prompt('Enter the 1st no.',);
b = prompt('Enter the 2nd no.','0');
var operator; 
while(true)
{   operator = prompt('Enter the operator(any one from +,-,* or / : '); 
    if(operator === '+')
        alert(+a + +b);
         
    else if(operator === '-')
        alert(+a - +b);
          
    else if(operator === '*') 
        alert(+a * +b);
         
    else if(operator === '/')
         alert(+a / +b);
             
    else alert('Enter a valid operator');
}              