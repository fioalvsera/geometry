const filter = (list, filterFn) => {
    let ret = []
    for(let i = 0; i < list.length; i = i+1){
        if( filterFn(list[i], i, list) ){
            ret.push(list[i])
        }
    }
    return ret
}

module.exports = filter