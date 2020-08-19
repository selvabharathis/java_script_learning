let king = 'john'

if(true){
    let king = 'selva'
    if(true){
        // let king = 'ram'
        queen = 'jumbo'// undefined data type, will be taken as global, and leads to data leak while inside scope.
        // always use var for global, and let for perfect scope.
        console.log(king)
        console.log(queen)
    }
}

if(true){
    console.log('I am second part '+king)
    console.log(queen)
}