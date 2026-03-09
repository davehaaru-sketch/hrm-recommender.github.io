document.addEventListener("DOMContentLoaded", init);

let ideas = [];

async function init(){

await loadIdeas();
bindEvents();

}

async function loadIdeas(){

try{

const res = await fetch("./ideas.json");
const text = await res.text();
ideas = JSON.parse(text);

}catch(e){

console.error("ideas.json 오류",e);

}

}

function bindEvents(){

const recommendBtn = document.getElementById("recommendBtn");

if(recommendBtn){
recommendBtn.addEventListener("click", recommendIdea);
}

const openBtn = document.getElementById("openAllIdeasBtn");

if(openBtn){
openBtn.addEventListener("click", openAllIdeas);
}

const closeBtn = document.getElementById("closeModalBtn");

if(closeBtn){
closeBtn.addEventListener("click", closeModal);
}

}

function recommendIdea(){

if(ideas.length===0){
alert("아이디어 없음");
return;
}

const r = ideas[Math.floor(Math.random()*ideas.length)];

document.getElementById("result").innerHTML = `

<h3>${r.title}</h3>
<p>${r.summary}</p>
`;

}

function openAllIdeas(){

const modal = document.getElementById("allIdeasModal");
const list = document.getElementById("allIdeasList");

list.innerHTML = ideas.map(i=>`<p>${i.title}</p>`).join("");

modal.style.display="block";

}

function closeModal(){

document.getElementById("allIdeasModal").style.display="none";

}
