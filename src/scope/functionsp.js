
function greeting ()
{
    let userName = 'Jose';
    console.log(userName);

    if( userName === 'Miguel' )
    {
        console.log( `Hola ${userName}` );
    }
    else
    {
        console.log( `${userName} no es tu nombre` );
    }
}

greeting();