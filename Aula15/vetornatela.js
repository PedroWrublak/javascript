let valores = [8, 9 ,3, 5, 6]

/*for(let pos = 0; pos <= valores.length; pos++ ) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
