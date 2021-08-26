const findKey = (object , callBack)=>{
    for (let key in object){
        if(callBack(object[key])){
            return key;
        }
    }
    return undefined;
};

  module.exports =  findKey;