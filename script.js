function addtask(){
    let input= document.querySelector(".input")
    let date =document.querySelector("#date")
    let value = input.value
    let dateValue= date.value

    if(value==""){
        alert('brother type to task')
        return
    }
    console.log(value)

  

    // let html =`
    // <li class="list-item">
    //         <span>${value}</span>
    //         <button onclick="remove(this)">x</button>
    //     </li>
     //   lis.innerHTML +=html
        
    // `
    let li =document.createElement("li")
    let span =document.createElement("span")
    let spen =document.createElement("span")
    let button =document.createElement("button")

    li.classList.add("list-item")
    span.innerText=value
    span.innerText+=dateValue
    button.innerText="x"
    button.setAttribute("onclick","remove(this)")

    li.append(span)
    li.append(spen)
    li.append(button)
    let lis = document.querySelector(".list")
      lis.append(li)
   

input.value=""
date.value=""
      
      



    }
//     function cut(){
//     let del = document.querySelector("#date")
//     del.remove()
// }
// function cute(){
//     let del = document.querySelector("#date")
//     del.show()
// }

    function remove(btn){
        
        console.log('remove')
        btn.parentNode.remove()
        // let  del  = document.querySelector("#date")
        // del.innerHTML=`<input  id="date" type="date">`    
        // let date = new Date()
        // let d = date.getDate()
        // let month = date.getMonth()
        // let year = date.getFullYear()
        // console.log(d,-month,-year)dcfdscsds
    }
   