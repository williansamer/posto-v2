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

function changeSearch(bandeiras, bairros){
  let selectBusca1 =  document.querySelector("select");

  if(selectBusca1.value == "opened"){
    changeToOpened();
  } else if(selectBusca1.value == "best-price"){
    changeToBestPrice();
  } else if(selectBusca1.value === "flag"){
    changeToFlag(bandeiras);
  } else if(selectBusca1.value === "name"){
    changeToName();
  } else if(selectBusca1.value === "neigh"){
    changeToNeigh(bairros);
  } else if(selectBusca1.value === "convenience"){
    changeToConv();
  }
}

function changeToOpened(){
  let selectBusca2 = document.querySelector(".busca-2");
  let inpText = document.querySelector(".inp-name");
  let selectNeigh = document.querySelector(".busca-neigh");
  let selectFlag = document.querySelector(".busca-flag");

  selectBusca2.style.display = "none";
  if(selectFlag !== null){
    selectFlag.style.display = "none";
  }
  if(selectNeigh !== null){
    selectNeigh.style.display = "none";
  }
  if(inpText !== null){
    inpText.style.display = "none";
  }
}
function changeToBestPrice(){
  let selectBusca2 = document.querySelector(".busca-2");
  let inpText = document.querySelector(".inp-name");
  let selectNeigh = document.querySelector(".busca-neigh");
  let selectFlag = document.querySelector(".busca-flag");

  selectBusca2.style.display = "block";
  if(selectFlag !== null){
    selectFlag.style.display = "none";
  }
  if(selectNeigh !== null){
    selectNeigh.style.display = "none";
  }
  if(inpText !== null){
    inpText.style.display = "none";
  }
}
function changeToFlag(bandeiras){
  let selectBusca2 = document.querySelector(".busca-2");
  let inpText = document.querySelector(".inp-name");
  let selectNeigh = document.querySelector(".busca-neigh");

  selectBusca2.style.display = "none";
  if(selectNeigh !== null){
    selectNeigh.style.display = "none";
  }
  if(inpText !== null){
    inpText.style.display = "none";
  }

  let selectBusca1 =  document.querySelector("select");
  let selectBuscaFlag = document.createElement("select");
  let selectFlag = document.querySelector(".busca-flag");
  
  if(selectFlag == null){
    selectBuscaFlag.classList.add("busca-flag");
    selectBuscaFlag.name = "search";
    selectBusca1.parentElement.insertBefore(selectBuscaFlag, selectBusca1.nextElementSibling);

    bandeiras.forEach((bandeira)=>{
      let op = document.createElement("option");

      op.value = bandeira.value;
      op.innerHTML = bandeira.name;
      selectBuscaFlag.appendChild(op);
    })
  }
  if(selectFlag !== null){
    selectFlag.style.display = "block";
  }

}
function changeToName(){
  let inpText = document.querySelector(".inp-name");
  let selectBusca1 =  document.querySelector("select");
  let selectBusca2 = document.querySelector(".busca-2");
  let selectNeigh = document.querySelector(".busca-neigh");
  let selectFlag = document.querySelector(".busca-flag");

  selectBusca2.style.display = "none";
  if(selectFlag !== null){
    selectFlag.style.display = "none";
  }
  if(selectNeigh !== null){
    selectNeigh.style.display = "none";
  }
  if(inpText == null){
    let inpName = document.createElement("input");

    inpName.classList.add("inp-name");
    inpName.type = "text";
    inpName.name = "name";
    inpName.placeholder = "Ex: auto posto tupinambá";

    selectBusca1.parentElement.insertBefore(inpName, selectBusca1.nextElementSibling);

  }
  if(inpText !== null && selectBusca1.value == "name"){
    inpText.style.display = "inline";
  }

}
function changeToNeigh(bairros){
  let selectBusca2 = document.querySelector(".busca-2");
  let inpText = document.querySelector(".inp-name");
  let selectFlag = document.querySelector(".busca-flag");

  selectBusca2.style.display = "none";
  if(selectFlag !== null){
    selectFlag.style.display = "none";
  }
  if(inpText !== null){
    inpText.style.display = "none";
  }

    let selectBusca1 =  document.querySelector("select");
    let selectBuscaNeigh = document.createElement("select");
    let selectNeigh = document.querySelector(".busca-neigh");
    
    if(selectNeigh == null){
      selectBuscaNeigh.classList.add("busca-neigh");
      selectBuscaNeigh.name = "search";
      selectBusca1.parentElement.insertBefore(selectBuscaNeigh, selectBusca1.nextElementSibling);

      bairros.forEach((bairro)=>{
        let op = document.createElement("option");

        op.value = bairro.value;
        op.innerHTML = bairro.name;
        selectBuscaNeigh.appendChild(op);
      })
    }
    if(selectNeigh !== null){
      selectNeigh.style.display = "block";
    }
}
function changeToConv(){
  let selectBusca2 = document.querySelector(".busca-2");
  let inpText = document.querySelector(".inp-name");
  let selectNeigh = document.querySelector(".busca-neigh");
  let selectFlag = document.querySelector(".busca-flag");

  selectBusca2.style.display = "none";
  if(selectFlag !== null){
    selectFlag.style.display = "none";
  }
  if(selectNeigh !== null){
    selectNeigh.style.display = "none";
  }
  if(inpText !== null){
    inpText.style.display = "none";
  }
}