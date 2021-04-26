function media3 (x,y,z){

    return (x+y+z)/3
}

console.log(media3(2,8,3));



function sumaMonedas (a,b,c,d,e){

    return (1*a)+(2*b)+(5*c)+(10*d)+(20*e)
}
console.log(sumaMonedas(1,1,1,1,1));


function volumenEsfera (r){
    var pi= 3.1416;
    var radio= r;
    return (4/3)*pi*(r*r*r)
}
console.log( volumenEsfera (2));



function areaConoCircular (r1,r2){
    var pi= 3.1416;
    return pi*(r2*r2 - r1*r1);
}
console.log( areaConoCircular (2,4));




function ultimaCifraConString(x){
    var mi_string = String(x);
    return mi_string[mi_string.length - 1];
}

function ultimaCifra(x){
    return x % 10;
}
