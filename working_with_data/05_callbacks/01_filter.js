var list = [5,8,9,2,7,6,3,1,4];

function callback(list){
    // to be done
    var newlist = [];
    for(var i=0; i<list.length; i++){
        if(list[i]<5) newlist.push(list[i]);
    }
    return newlist;
}

function filter(list, callback){
    return callback(list);
    // to be done
}
 
var filtered = filter(list, callback);
console.log(filtered);