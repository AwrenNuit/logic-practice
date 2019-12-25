let isLarger=(f,g)=>{return f()>g()?'f':f()<g()?'g':'neither'}

console.log(isLarger(()=>5, ()=>10));
console.log(isLarger(()=>23, ()=>10));
console.log(isLarger(()=>6, ()=>6));
console.log(isLarger(()=>-4, ()=>-8));
console.log(isLarger(()=>1, ()=>1.01));
