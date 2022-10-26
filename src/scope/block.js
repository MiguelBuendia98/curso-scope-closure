
function fruits ()
{
    if (true)
    {
        var fruit1 = 'pera'; // function scope
        let fruit2 = 'manzana'; // block scope
        const fruit3 = 'mango'; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();