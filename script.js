onload = ()=>{
  let box = document.querySelector(".box");
  let busca = document.querySelector(".busca");

  search.creatingSearch1(busca);
  search.creatingSearch2(busca);
  search.creatingSearchBtn(busca);

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

function changeSearch(){
  let selectBusca1 =  document.querySelector(".busca");
  let opened = document.querySelector("#op1");
  let bestPrice = document.querySelector("#op2");
  let flag = document.querySelector("#op3");
  let name = document.querySelector("#op4");
  let neigh = document.querySelector("#op5");
  let conv = document.querySelector("#op6");

  if(selectBusca1.value == "opened"){
    console.log("1");
  } else if(selectBusca1.value == "best-price"){
    console.log("2");
  } else if(selectBusca1.value == "flag"){
    console.log("3");
  } else if(selectBusca1.value == "name"){
    console.log("4");
  } else if(selectBusca1.value == "neigh"){
    console.log("5");
  } else if(selectBusca1.value == "convenience"){
    console.log("6");
  }
}