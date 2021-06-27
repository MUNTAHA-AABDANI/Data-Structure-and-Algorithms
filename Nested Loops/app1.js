let array = [ [1, 2], [3, 4], [5, 6]  ];

  //using while loops
  let i=0;
  while(i<array.length){ 
    let j=0;
   while(j<2){
      console.log(array[i][j]);
      j++;
   }
   i++;
  }