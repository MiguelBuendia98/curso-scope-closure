// SIN EL USO DEL STRIC
pi = 3.1416;
console.log(pi);

function myFunction ()
{

    po = 4.1416;
    return po;
}

console.log(myFunction());

// CON EL USO DEL STRIC
'use strict';  // usar en minuscula
pi = 3.1416;
console.log(pi);

function myFunction ()
{
    'use strict' // usar en minuscula
    po = 4.1416;
    return po;
}

console.log(myFunction());