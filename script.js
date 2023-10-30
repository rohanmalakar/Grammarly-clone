

const e1=document.querySelector("#email1")
const e2=document.querySelector("#email2")
const  e1contain=document.querySelector(".page4-part2-email1")
const e2contain=document.querySelector(".page4-part2-email2")
const cursor=document.querySelector("#cursor")
const mouse=document.querySelector(".main")
const for_work=document.querySelector("#for-work")
const for_work_contain=document.querySelector(".for-work-contain")
const for_education=document.querySelector("#for-education")
const for_education_contain=document.querySelector(".for-education-contain")

const que_page_que=document.querySelectorAll(".que-page-que")
const que_page_que_i=document.querySelectorAll(".que-page-que>div>i")
const que_page_que_p=document.querySelectorAll(".que-page-que>p")

e1.addEventListener("click",()=>{
  e1contain.style.display="inline"
  e2contain.style.display="none"
  e1.id="email1"
  e2.id="email2"
})
e2.addEventListener("click",()=>{
  e2contain.style.display="inline"
  e1contain.style.display="none"
  e2.id="email1"
  e1.id="email2"
})
mouse.addEventListener("mousemove",(e)=>{ 
  
  cursor.style.top=`${e.y}px`
  cursor.style.left=`${e.x}px`

})
  for_work.addEventListener("click",()=>{
    if (for_work_contain.style.display === "none" ) {
    for_work_contain.style.display="flex" 
  }
 else {
    for_work_contain.style.display="none" 
 }
})
  for_education.addEventListener("click",()=>{
    if (for_education_contain.style.display === "none") {
    for_education_contain.style.display="flex" 
  }
 else {
  for_education_contain.style.display="none" 
  }
})

que_page_que.forEach((e)=>{
  e.addEventListener("click",()=>{

    const p=e.querySelector("p")
    const i=e.querySelector("div>i")
    const h3=e.querySelector("div>h3")
     
    console.log(h3);
     e.style.height="fit-content"
    
     if (i.className==="fa-solid fa-chevron-down") {
      i.className="fa-solid fa-chevron-up"
     } else {
      i.className="fa-solid fa-chevron-down"
     }

     if (p.style.display==="none") {
      p.style.display="inline"
      e.style.paddingBottom="20px"
      h3.style.color="black"
      h3.style.fontWeight="600"

     } else {
      p.style.display="none"
      e.style.paddingBottom="0px"
      h3.style.color=""
      h3.style.fontWeight="300"
     }
     
     
  })
})

