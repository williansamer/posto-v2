let search = {
  creatingSearch1: (busca)=>{
    let divOrdenar = document.createElement("div");
    let selectBusca1 = document.createElement("select");

    divOrdenar.classList.add("ordenar");
    divOrdenar.innerHTML = "Filtrar por:";    

    selectBusca1.classList.add("busca");
    selectBusca1.name = "search";
    selectBusca1.setAttribute("onclick", "changeSearch(bandeiras, bairros)");
    selectBusca1.setAttribute("onfocusout", "changeSearch(bandeiras, bairros)");
    
    selectLeft.forEach((search1)=>{
      let op = document.createElement("option");

      op.id = search1.id;
      op.value = search1.value;
      op.innerHTML = search1.text;
      if(search1.value == "best-price"){
        op.selected = true;
      }
      selectBusca1.appendChild(op);
    })

    busca.appendChild(divOrdenar);
    busca.appendChild(selectBusca1);
  },

  creatingSearch2: (busca)=>{
    let selectBusca2 = document.createElement("select");

    selectBusca2.classList.add("busca-2");
    selectBusca2.name = "search";

    precos.forEach((preco)=>{
      let op = document.createElement("option");

      op.value = preco.value;
      op.innerHTML = preco.text;
      if(preco.value == "gas-comum"){
        op.selected = true;
      }
      selectBusca2.appendChild(op);
    })

    busca.appendChild(selectBusca2);
  },
  
  creatingSearchBtn: (busca)=>{
    let btnSearch = document.createElement("div");
   
    btnSearch.classList.add("button");
    btnSearch.setAttribute("onclick", "filteringSearch(bandeiras, bairros, postos)");
    btnSearch.setAttribute("onfocusout", "filteringSearch(bandeiras, bairros, postos)");
    btnSearch.innerHTML = "Ok";
    busca.appendChild(btnSearch);
  }
}


let gasStation = {
  creatingRightSide: (container, posto)=>{
                  let divItem2 = document.createElement("div");
                  let boxEtanol = document.createElement("div");
                  let boxEtanolImg = document.createElement("div");
                  let h3NameEtanol = document.createElement("h3");
                  let boxGasC = document.createElement("div");
                  let boxGasCImg = document.createElement("div");
                  let h3NameGasC = document.createElement("h3");
                  let boxGasA = document.createElement("div");
                  let boxGasAImg = document.createElement("div");
                  let h3NameGasA = document.createElement("h3");
                  let boxDiesel500 = document.createElement("div");
                  let boxDiesel500Img = document.createElement("div");
                  let h3NameDiesel500 = document.createElement("h3");
                  let boxDieselS10 = document.createElement("div");
                  let boxDieselS10Img = document.createElement("div");
                  let h3NameDieselS10 = document.createElement("h3");
                  let boxConv = document.createElement("div");
                  let boxConvImg = document.createElement("div");
                  let spanConv = document.createElement("span");
                  let imgConv = document.createElement("img");
/*                   let boxSite = document.createElement("div");
                  let boxSiteImg = document.createElement("div");
                  let spanSite = document.createElement("span");
                  let imgSite = document.createElement("img"); */
                
                  divItem2.classList.add("item-2");
                
                  boxEtanol.classList.add("box-combust");
                  boxEtanol.classList.add("etanol");
                  boxEtanolImg.classList.add("box-combust-in");
                  boxEtanolImg.classList.add("etanol-img");
                  boxEtanolImg.innerHTML = posto.etanol;
                  h3NameEtanol.classList.add("name-combust");
                  h3NameEtanol.innerHTML = "Etanol";
                  boxEtanol.appendChild(boxEtanolImg);
                  boxEtanol.appendChild(h3NameEtanol);
                  divItem2.appendChild(boxEtanol);
                
                  boxGasC.classList.add("box-combust");
                  boxGasC.classList.add("gasolina-c");
                  boxGasCImg.classList.add("box-combust-in");
                  boxGasCImg.classList.add("gasolina-c-img");
                  boxGasCImg.innerHTML = posto.g_comum;
                  h3NameGasC.classList.add("name-combust");
                  h3NameGasC.innerHTML = "Gasolina Comum";
                  boxGasC.appendChild(boxGasCImg);
                  boxGasC.appendChild(h3NameGasC);
                  divItem2.appendChild(boxGasC);
                
                  boxGasA.classList.add("box-combust");
                  boxGasA.classList.add("gasolina-a");
                  boxGasAImg.classList.add("box-combust-in");
                  boxGasAImg.classList.add("gasolina-a-img")
                  boxGasAImg.innerHTML = posto.g_aditivada;
                  h3NameGasA.classList.add("name-combust");
                  h3NameGasA.innerHTML = "Gasolina Aditivada";
                  boxGasA.appendChild(boxGasAImg);
                  boxGasA.appendChild(h3NameGasA);
                  divItem2.appendChild(boxGasA);
                
                  boxDiesel500.classList.add("box-combust");
                  boxDiesel500.classList.add("diesel-500");
                  boxDiesel500Img.classList.add("box-combust-in");
                  boxDiesel500Img.classList.add("diesel-500-img");
                  boxDiesel500Img.innerHTML = posto.d_500;
                  h3NameDiesel500.classList.add("name-combust");
                  h3NameDiesel500.innerHTML = "Diesel 500";
                  boxDiesel500.appendChild(boxDiesel500Img);
                  boxDiesel500.appendChild(h3NameDiesel500);
                  divItem2.appendChild(boxDiesel500);
                
                  boxDieselS10.classList.add("box-combust");
                  boxDieselS10.classList.add("diesel-s10");
                  boxDieselS10Img.classList.add("box-combust-in");
                  boxDieselS10Img.classList.add("diesel-s10-img");
                  boxDieselS10Img.innerHTML = posto.d_s10;
                  h3NameDieselS10.classList.add("name-combust");
                  h3NameDieselS10.innerHTML = "Diesel S10";
                  boxDieselS10.appendChild(boxDieselS10Img);
                  boxDieselS10.appendChild(h3NameDieselS10);
                  divItem2.appendChild(boxDieselS10);
                
                  boxConv.classList.add("box-adicionais");
                  boxConvImg.classList.add("conveniencia-img");
                  imgConv.classList.add("img-add");
                  if(posto.conveniencia == true){
                    imgConv.src = "./assets/convenienciaV.png";
                  } else{
                    imgConv.src = "./assets/convenienciaX.png";
                  }
                  spanConv.appendChild(imgConv);
                  boxConvImg.appendChild(spanConv);
                  boxConv.appendChild(boxConvImg);
                  divItem2.appendChild(boxConv);
                
/*                   boxSite.classList.add("box-adicionais");
                  boxSiteImg.classList.add("site-img");
                  imgSite.classList.add("img-add");
                  if(posto.site == true){
                    imgSite.src = "./assets/site+.png";
                  } else{
                    imgSite.src = "./assets/sitenone.png";
                  }
                  spanSite.appendChild(imgSite);
                  boxSiteImg.appendChild(spanSite);
                  boxSite.appendChild(boxSiteImg);
                  divItem2.appendChild(boxSite); */
                
                  container.appendChild(divItem2);
                },

  creatingLeftSide: (container, posto)=>{
                  let divItem1 = document.createElement("div");
                  let divFlag = document.createElement("div");
                  let spanFlag = document.createElement("span");
                  let aFlag = document.createElement("a");
                  let imgFlag = document.createElement("img");
                  let h2Title = document.createElement("h2");
                  let spanTitle = document.createElement("span");
                  let divAddress = document.createElement("div");
                  let h3Address = document.createElement("h3");
                  let spanAddress = document.createElement("span");
                  let h4Hour = document.createElement("h4");
                  let spanHour = document.createElement("span");
                  let spanOpened = document.createElement("span");

                  divItem1.classList.add("item-1");

                  divFlag.classList.add("flag");
                  aFlag.target = "_blank";
                  aFlag.href = posto.linkMap;
                  imgFlag.classList.add("flag-img");
                  imgFlag.src = `./assets/bandeira/${posto.bandeira}.png`
                  aFlag.appendChild(imgFlag);
                  spanFlag.appendChild(aFlag);
                  divFlag.appendChild(spanFlag);

                  spanTitle.classList.add("title");
                  spanTitle.innerHTML = posto.nome;
                  h2Title.appendChild(spanTitle);
                  divFlag.appendChild(h2Title);
                  divItem1.appendChild(divFlag);


                  divAddress.classList.add("address");
                  spanAddress.style.fontWeight = "400";
                  spanAddress.innerHTML = `${posto.endereco}<br>Bairro: ${posto.bairroInner}`;
                  h3Address.appendChild(spanAddress);
                  divAddress.appendChild(h3Address);

                  spanHour.innerHTML = posto.horario;
                  if(gasStation.openedOrClosed(posto.getInitialHour, posto.getFinalHour, posto.getDay)){
                    posto.opened = true;
                    spanOpened.classList.add("opened");
                    spanOpened.innerHTML = " - Aberto"
                  } else{
                    posto.opened = false;
                    spanOpened.classList.add("closed");
                    spanOpened.innerHTML = " - Fechado"
                  }
                  h4Hour.appendChild(spanHour);
                  h4Hour.appendChild(spanOpened);
                  divAddress.appendChild(h4Hour);
                  divItem1.appendChild(divAddress);

                  container.appendChild(divItem1);
                  },

  creatingIndice: (container, posto, index)=>{
                  let divIndice = document.createElement("div");
                  let spanIndice = document.createElement("span");

                  spanIndice.classList.add("num");
                  spanIndice.innerHTML = index+1;

                  divIndice.appendChild(spanIndice);
                  container.appendChild(divIndice);
                  },
  openedOrClosed: (inicial, final, getDay)=>{
    let d = new Date();

    //console.log(getDay)

    if((d.getHours() >= inicial && d.getHours() <= final) && gasStation.week(getDay)){
      return true;
    } else{
      return false;
    }
  },
  week: (getDay)=>{
    let d = new Date();
    let openedOk;

    getDay.forEach((i)=>{
      if(i == d.getDay()){
        openedOk = true;
      }
    })

    if(openedOk == true){
      return true;
    } else{
      return false;
    }
  },
}