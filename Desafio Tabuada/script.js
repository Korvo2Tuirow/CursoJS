function calcular() {

    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let c = 1
    let n = Number(num.value)

    tab.innerHTML = " "

    while (c <= 10) {
       let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++



    }




}

