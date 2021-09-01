onload = ()=>{
  let box = document.querySelector(".box");
  let busca = document.querySelector(".busca");

  search.creatingSearch1(busca);
  search.creatingSearch2(busca);
  search.creatingSearchBtn(busca);

  filteringSearch();
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
  let selectBusca1 = document.querySelector("select");
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
    inpName.placeholder = "Ex: Auto Posto Tupinambá";
    inpName.setAttribute("onchange", "filteringByName()");

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

function filteringSearch(){
  let selectBusca1 =  document.querySelector("select");

  if(selectBusca1.value == "opened"){
    filteringByOpened();
  } else if(selectBusca1.value == "best-price"){
    filteringByBestPrice();
  } else if(selectBusca1.value == "flag"){
    filteringByFlag();
  } else if(selectBusca1.value == "name"){
    filteringByName();
  } else if(selectBusca1.value == "neigh"){
    filteringByNeigh();
  } else if(selectBusca1.value == "convenience"){
    filteringByConvenience();
  }
}

function filteringByOpened(){
  let box = document.querySelector(".box");
  //let postosOpened = postos.filter((posto)=>{return posto});

  box.innerHTML = '';
  //orderingPriceGas(postosOpened);
}

function filteringByBestPrice(){
  let box = document.querySelector(".box");
  let selectBusca2 = document.querySelector(".busca-2");
  let postosCombust = postos.filter((posto)=>{return posto});

  box.innerHTML = '';
  if(selectBusca2.value == "etanol"){

    postosCombust.sort((a,b)=>{
      if(a.etanol <b.etanol){
        return -1;
      }else{
        return true;
      }
    })

    postosCombust.forEach((posto, index)=>{
      let container = document.createElement("div");
  
      container.classList.add("item");
      container.classList.add("cor-fundo");
      
      creatingContainer(container, posto, index);
      box.appendChild(container);
    })

  } else if(selectBusca2.value == "gas-comum"){

    postosCombust.sort((a,b)=>{
      if(a.g_comum <b.g_comum){
        return -1;
      }else{
        return true;
      }
    })

    postosCombust.forEach((posto, index)=>{
      let container = document.createElement("div");
  
      container.classList.add("item");
      container.classList.add("cor-fundo");
      
      creatingContainer(container, posto, index);
      box.appendChild(container);
    })

  } else if(selectBusca2.value == "gas-aditivada"){

    postosCombust.sort((a,b)=>{
      if(a.g_aditivada <b.g_aditivada){
        return -1;
      }else{
        return true;
      }
    })

    postosCombust.forEach((posto, index)=>{
      let container = document.createElement("div");
  
      container.classList.add("item");
      container.classList.add("cor-fundo");
      
      creatingContainer(container, posto, index);
      box.appendChild(container);
    })

  } else if(selectBusca2.value == "diesel-500"){

    postosCombust.sort((a,b)=>{
      if(a.d_500 <b.d_500){
        return -1;
      }else{
        return true;
      }
    })

    postosCombust.forEach((posto, index)=>{
      let container = document.createElement("div");
  
      container.classList.add("item");
      container.classList.add("cor-fundo");
      
      creatingContainer(container, posto, index);
      box.appendChild(container);
    })

  } else if(selectBusca2.value == "diesel-s10"){

    postosCombust.sort((a,b)=>{
      if(a.d_s10 <b.d_s10){
        return -1;
      }else{
        return true;
      }
    })

    postosCombust.forEach((posto, index)=>{
      let container = document.createElement("div");
  
      container.classList.add("item");
      container.classList.add("cor-fundo");
      
      creatingContainer(container, posto, index);
      box.appendChild(container);
    })

  }
}

function filteringByFlag(){
  let box = document.querySelector(".box");
  let selectBusca2 = document.querySelector(".busca-flag");
  let postosBandeira = postos.filter((posto)=>{return posto.bandeira == selectBusca2.value});

  box.innerHTML = '';
  orderingPriceGas(postosBandeira);

  postosBandeira.forEach((posto, index)=>{
    let container = document.createElement("div");

    container.classList.add("item");
    container.classList.add("cor-fundo");
    
    creatingContainer(container, posto, index);
    box.appendChild(container);
  })

}

function filteringByName(){
  let box = document.querySelector(".box");
  let postosNome = postos.filter((posto)=>{
    let inp = document.querySelector(".inp-name");
      if(inp.value == posto.nome || inp.value == posto.nome.slice(5) ||inp.value == posto.nome.slice(11) || inp.value == ""){
      return posto
      }
    });

  box.innerHTML = '';
  orderingPriceGas(postosNome);
  
  postosNome.forEach((posto, index)=>{
    let container = document.createElement("div");

    container.classList.add("item");
    container.classList.add("cor-fundo");
    
    creatingContainer(container, posto, index);
    box.appendChild(container);
  })

}

function filteringByNeigh(){
  let box = document.querySelector(".box");
  let selectBusca2 = document.querySelector(".busca-neigh");
  let postosBairro = postos.filter((posto)=>{return posto.bairro == selectBusca2.value});

  box.innerHTML = '';
  orderingPriceGas(postosBairro);

  postosBairro.forEach((posto, index)=>{
    let container = document.createElement("div");

    container.classList.add("item");
    container.classList.add("cor-fundo");
    
    creatingContainer(container, posto, index);
    box.appendChild(container);
  })
}

function filteringByConvenience(){
  let box = document.querySelector(".box");
  let postosConv = postos.filter((posto)=>{return posto.conveniencia == true});

  box.innerHTML = '';
  orderingPriceGas(postosConv);

  postosConv.forEach((posto, index)=>{
    let container = document.createElement("div");

    container.classList.add("item");
    container.classList.add("cor-fundo");
    
    creatingContainer(container, posto, index);
    box.appendChild(container);
  })
}

function orderingPriceGas(filterElement){
  let selectCombust = document.querySelector(".busca-2");

  if(selectCombust.value == "etanol"){
    filterElement.sort((a,b)=>{
      if(a.etanol < b.etanol){
        return -1;
      }else{
        return true;
      }
    })
  } else if(selectCombust.value == "gas-comum"){
    filterElement.sort((a,b)=>{
      if(a.g_comum < b.g_comum){
        return -1;
      }else{
        return true;
      }
    })
  } else if(selectCombust.value == "gas-aditivada"){
    filterElement.sort((a,b)=>{
      if(a.g_aditivada < b.g_aditivada){
        return -1;
      }else{
        return true;
      }
    })
  } else if(selectCombust.value == "diesel-500"){
    filterElement.sort((a,b)=>{
      if(a.d_500 < b.d_500){
        return -1;
      }else{
        return true;
      }
    })
  } else if(selectCombust.value == "diesel-s10"){
    filterElement.sort((a,b)=>{
      if(a.d_s10 < b.d_s10){
        return -1;
      }else{
        return true;
      }
    })
  }
}