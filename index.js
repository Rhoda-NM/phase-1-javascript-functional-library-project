
const checkCollection = (collection) => {
    return (Array.isArray(collection) ? collection.slice(): Object.values(collection));
}
function myEach(collection, callback) {
    let newCollection = checkCollection(collection);
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}
function myMap(collection, callback) {
    let newCollection = checkCollection(collection);
    let newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = checkCollection(collection);// check typeOf collection

    if(!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc
}
function myFind(collection, predicate) {
    let newCollection = checkCollection(collection);
    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])){
            return newCollection[i];
            continue
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    let newCollection = checkCollection(collection);
    let newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) {
            newArray.push(newCollection[i]);
        }
    }
    return newArray;
}
function mySize(collection) {
    let newCollection = checkCollection(collection);
    let count = 0;
    for (let i = 0; i < newCollection.length; i++) {
        count ++ ;
    }
    return count;
}
function myFirst(array, n) {
    if (!n) {
        return array[0]
    }
    else {
        return array.slice(0, 3);
    }
}
function myLast(array, n) {
    let len = array.length;
    return (!n)? array[len-1]: array.slice(len-3);
}
function myKeys(object) {
    let keys = [];
    for (let key in  object) {
        keys.push(key);
    }
    return keys;
    //return Object.keys(object);
}
function myValues(object) {
    let values = [];
    for(let key in object) {
        values.push(object[key]);
    }
    return values;
    //return Object.values(object);
}