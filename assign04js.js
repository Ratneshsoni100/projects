
let panels = document.querySelectorAll('.panel')
console.log(panels);

panels.forEach((ele)=>{
ele.addEventListener('click',function(){
console.log(152);
removeActiveClass()
ele.classList.add('active')
})
})

function removeActiveClass(){
panels.forEach(ele=>{
    ele.classList.remove('active')
})
}