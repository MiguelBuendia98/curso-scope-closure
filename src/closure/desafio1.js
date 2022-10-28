function sumWithClosure(firstNum) 
{
    return function (secondNum) 
    {
        if (secondNum) 
        {
            return secondNum + firstNum;
        }

        return firstNum;
    };
}

var suma = sumWithClosure(2)(3);
console.log(suma);

