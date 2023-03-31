function count(){
  let from=0;
  let to=10;
  let step=to>from ? 1 : -1
  let interval=110

  if(from==to){
    document.querySelector("#output-left").textContent = from
    return
  }

  let counter=setInterval(function(){
    from +=step
    document.querySelector("#output-left").textContent=from

    if(from==to){
      clearInterval(counter)
    }
  },interval)
}

function countHorse(){
  let from=0;
  let to=20;
  let step=to>from ? 1 : -1
  let interval=110

  if(from==to){
    document.querySelector("#output-mid").textContent = from
    return
  }

  let counter=setInterval(function(){
    from +=step
    document.querySelector("#output-mid").textContent=from

    if(from==to){
      clearInterval(counter)
    }
  },interval)
}

function countPackage(){
  let from=0;
  let to=50;
  let step=to>from ? 1 : -1
  let interval=120

  if(from==to){
    document.querySelector("#output-right").textContent = from
    return
  }
  

  let counter=setInterval(function(){
    from +=step
    document.querySelector("#output-right").textContent=from

    if(from==to){
      clearInterval(counter)
    }
  },interval)
}

count()
countHorse()
countPackage()