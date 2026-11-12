// evidenzia la categoria visibile nella barra di navigazione
const links=[...document.querySelectorAll('nav a')];
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
      const act=links.find(a=>a.classList.contains('active'));
      if(act) act.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s=>obs.observe(s));
