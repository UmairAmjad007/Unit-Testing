
function sss(a,b,n)
{
    var total = 0;
    for (var i =1;i<n;i++)
    {
        if(i%a == 0 || i%b == 0){
            total = total + i;
        }

    }

    return total;
}
module.exports= sss;