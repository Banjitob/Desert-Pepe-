// Copy Contract
function copyContract(){
  const input = document.getElementById('contractInput');
  input.select();
  document.execCommand('copy');
  alert('Contract address copied!');
}

// Meme Generator
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
let image=new Image();

document.getElementById("imageInput").addEventListener("change",function(e){
  const reader=new FileReader();
  reader.onload=function(event){
    image.src=event.target.result;
    image.onload=function(){ctx.drawImage(image,0,0,canvas.width,canvas.height);}
  }
  reader.readAsDataURL(e.target.files[0]);
});

function generateMeme(){
  ctx.drawImage(image,0,0,canvas.width,canvas.height);
  ctx.font="40px Impact";
  ctx.fillStyle="white";
  ctx.strokeStyle="black";
  ctx.lineWidth=3;
  ctx.textAlign="center";
  ctx.fillText(document.getElementById("topText").value,canvas.width/2,50);
  ctx.strokeText(document.getElementById("topText").value,canvas.width/2,50);
  ctx.fillText(document.getElementById("bottomText").value,canvas.width/2,canvas.height-20);
  ctx.strokeText(document.getElementById("bottomText").value,canvas.width/2,canvas.height-20);
}

function downloadMeme(){
  const link=document.createElement("a");
  link.download="desertpepe.png";
  link.href=canvas.toDataURL();
  link.click();
}

// Floating Pepe emojis
const body=document.body;
for(let i=0;i<15;i++){
  const pepe=document.createElement('div');
  pepe.textContent='🐸';
  pepe.style.position='absolute';
  pepe.style.fontSize=Math.random()*40+20+'px';
  pepe.style.left=Math.random()*window.innerWidth+'px';
  pepe.style.top=Math.random()*window.innerHeight+'px';
  pepe.style.opacity=Math.random();
  pepe.style.transition='all 10s linear';
  body.appendChild(pepe);
  animatePepe(pepe);
}

function animatePepe(pepe){
  const x=Math.random()*window.innerWidth;
  const y=Math.random()*window.innerHeight;
  pepe.style.left=x+'px';
  pepe.style.top=y+'px';
  setTimeout(()=>animatePepe(pepe),10000);
}