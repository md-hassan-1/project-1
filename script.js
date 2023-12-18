function addtask(){
    let input  = document.querySelector("input")
    let value = input.value

    if(value==""){
        alert("type to text ")
        return

    }
    console.log(value)
    // let html = ` 
    // <li class="list-item">
    // <span>${value}</span>
    // <button onclick="remove(this)">x</button>
    // </li>
    // list.innerHTML += html
    // `

let li = document.createElement('li')
let span = document.createElement('span')
let button = document.createElement('button')

li.classList.add('list-item')
span.innerText = value
button.innerText = "x"
button.setAttribute("onclick","remove(this)")

li.append(span)
li.append(button)

let list = document.querySelector(".list")
list.append(li)


input.value = ''

}

function remove(bn){
    console.log('remove')
    bn.parentNode.remove()
}