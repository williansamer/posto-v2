onload = ()=>{
  let box = document.querySelector(".box");

  postos.forEach((posto, index)=>{
    let container = document.createElement("div");

    container.classList.add("item");
    container.classList.add("cor-fundo");
    
    creatingContainer(container, posto, index);
    box.appendChild(container);
  })
}

function creatingContainer(container, posto, index){

  gasStation.creatingIndice(container, posto, index);
  gasStation.creatingLeftSide(container, posto);
  gasStation.creatingRightSide(container, posto);
}