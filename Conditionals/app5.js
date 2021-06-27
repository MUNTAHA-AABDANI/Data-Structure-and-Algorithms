function Animals()
{
    var animal = window. prompt("Enter an animal name: ");

    if (animal=='lion' || animal=='leopard')
    {
        alert('Wild Animals');
    }

     else if (animal=='cat' || animal=='rabbit'){
     alert('pet animals');
}
else {
  alert('unknown');
}
}