const modal=document.getElementById('modal');
const vid=document.getElementById('video');
document.querySelectorAll('.card').forEach(c=>{
c.onclick=()=>{
vid.src=c.dataset.video;
modal.style.display='flex';
vid.play().catch(()=>{});
}
});
document.getElementById('close').onclick=()=>{vid.pause();modal.style.display='none';};
modal.onclick=e=>{if(e.target===modal){vid.pause();modal.style.display='none';}};