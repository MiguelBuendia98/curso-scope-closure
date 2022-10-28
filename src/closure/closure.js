function greeting ()
{
    let userName = 'Miguel Buendia';

    function displayUserName ()
    {
        return `Hola ${userName} bienvenido al curso`;
    }

    return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());