const NBIMAGES = 9

function normalize(i){
  while (i>NBIMAGES){
    i = i-NBIMAGES
  }
  while (i<1){
    i = i+NBIMAGES
  }
  return i
}

function setImage(element, i){

  i = normalize(i)
  
  img = 'cali'+i
  im = "<img id='im0' src='Img/ArtGallery/"+img+".jpg'>"
  element.innerHTML = im;
}

function getCurrentImage(){
  e = document.getElementById("im0")
  path = e.src
  l = path.length
  index = path.indexOf('cali')
  return path[index+4]
}

function clicknext(i){
  current = getCurrentImage()
  c = Number(current)
  next = i+c
  if (next>NBIMAGES){
    next = next-NBIMAGES
  }
  imnext = next
  e = document.getElementsByClassName("active")[0]
  setImage(e, imnext)
  enext = document.getElementsByClassName("next")[0]
  setImage(enext, (next+1))
  enextprime = document.getElementsByClassName("nextprime")[0]
  setImage(enextprime, (next+2))
  eprev = document.getElementsByClassName("prev")[0]
  setImage(eprev, (next-1))
  eprevprime = document.getElementsByClassName("prevprime")[0]
  setImage(eprevprime, (next-2))  
}

function clickprev(i){
  current = getCurrentImage()
  c = Number(current)
  next = -i+c
  if (next>NBIMAGES){
    next = next-NBIMAGES
  }
  imnext = next
  e = document.getElementsByClassName("active")[0]
  setImage(e, imnext)
  enext = document.getElementsByClassName("next")[0]
  setImage(enext, (next+1))
  enextprime = document.getElementsByClassName("nextprime")[0]
  setImage(enextprime, (next+2))
  eprev = document.getElementsByClassName("prev")[0]
  setImage(eprev, (next-1))
  eprevprime = document.getElementsByClassName("prevprime")[0]
  setImage(eprevprime, (next-2))  
}

function testFunction(){
  e = document.getElementsByClassName("active")[0]
  setImage(e, 3)
}