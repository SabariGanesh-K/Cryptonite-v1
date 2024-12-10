const formatCommaNumber = (input:any) =>{
    if(input==null) return ""
    const floatval = parseFloat(input)
    if (isNaN(floatval) || (floatval<1000 && floatval>-1000) ) return input
    let ans=""
    let numb = String(input)
    console.log(numb)
    var ct=0;
    for(let i=numb.length-1;i>=0;i--){
        console.log(numb[i],ans)
        if(numb[i]=="-") continue
        if(ct==2 && i!=0){
            ct=0;
            ans+=(numb[i]+",")
        }
        else{
            ct++;
            ans+=(numb[i])
        }
    }
    console.log(ans.split("").reverse().join(""))
    if(floatval<0) return ("-"+ans.split("").reverse().join(""));

return ans.split("").reverse().join("")
}

export default formatCommaNumber;