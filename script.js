document.addEventListener('DOMContentLoaded', () => {
const cards=[...document.querySelectorAll('.card')];
cards.forEach((card,i)=>{
  card.style.opacity='0';
  card.style.transform='translateY(20px)';
  setTimeout(()=>{
    card.style.transition='all .5s ease';
    card.style.opacity='1';
    card.style.transform='translateY(0)';
  },150*i);
});

const search=document.createElement('input');
search.placeholder='Search tools...';
search.style.cssText='display:block;width:min(500px,90%);margin:20px auto;padding:12px;border-radius:10px;border:none;';
const hero=document.querySelector('.hero');
if(hero) hero.appendChild(search);

search.addEventListener('input',()=>{
 const q=search.value.toLowerCase();
 cards.forEach(c=>{
   c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none';
 });
});

const topBtn=document.createElement('button');
topBtn.textContent='↑';
topBtn.style.cssText='position:fixed;right:20px;bottom:20px;padding:12px 16px;border:none;border-radius:50%;display:none;cursor:pointer;';
document.body.appendChild(topBtn);
window.addEventListener('scroll',()=>{
 topBtn.style.display=window.scrollY>300?'block':'none';
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

document.querySelectorAll('.card a').forEach(a=>{
 a.addEventListener('click',e=>{
   if(a.getAttribute('href')==='#'){
     e.preventDefault();
     alert('Replace this button with your affiliate link.');
   }
 });
});
});