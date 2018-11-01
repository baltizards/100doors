function getFinalOpenedDoors (numDoors) {
    // Good luck!
  let doors = [];
  let finalDoor = [];
   for(let i = 0;i<numDoors;i++){
  // doors.push(false);
  doors[i] = false;
  }
  for(let j=0; j,numDoors; j++){
  for(let i=j;i<numDoors;i+=(j+1)){
  doors[i] = !doors[i];
  }
  }
  for(let i = 0;i<numDoors; i++){
    if(doors[i]){
      finalDoor.push(i+1);
    }
  }
  return finalDoor;  
  }
  
  
  // for(let i=0;i<=numDoors;i++){
  //   if(door[i]){
  //   //   door[i] = false;
  //   // }else{
  //   //   door[i] = true;
  //   // }Toogle Idioma
  //   door[i] = !door[i];
  // }
  // // Tagad visas durvis ir atvertas
  
  // for(let i=1;i<numDoors;i+=2){
  //   door[i] = !door[i];
  // }
  
  //  for(let i=2;i<numDoors;i+=3){
  //    door[i] = !door[i];
  //  }
  