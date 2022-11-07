


function inArray(val,inputArr)
{
   
    for(var i=0;i<inputArr.length;i++)
    {
        if(inputArr[i]===val){return true;}
    }
    return false;
}

module.exports.inArray = inArray;