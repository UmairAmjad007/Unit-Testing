

function Rev(str)
{
    
 let reverse ="";
 for (let i=str.lenght-1; i>=0;i-- ){
    reverse+=str[i]
 }
    return reverse;
}
module.exports= Rev;