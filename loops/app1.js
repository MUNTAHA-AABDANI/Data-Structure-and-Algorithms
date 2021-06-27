let array = [1, 8, 7, 3, 2, 9, 10, 12];

 for(i=0;i<array.length; i++){
    let isPrime = true;
    // Check if number is 1
    if (array[i]=== 1){
        isPrime = false;
        console.log(array[i] + "  is prime number");
    }
     // Check if number is 2
    else if(array[i]=== 2){
        console.log(array[i] + "  is prime number");
    }
     // Check if number is 3
    else if(array[i]=== 3){
        console.log(array[i] + "  is prime number");
    }
     // Check all other numbers
    else if (array[i] % 2 == 0) {
        console.log(array[i] + "  is not prime number");
        }
    else if(array[i] % 3 == 0){
        console.log(array[i] + "  is not prime number");
    }
    else{
        console.log(array[i] + "  is prime number");
    }
    }