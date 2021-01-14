function triangle()
{
    for(var i=1; i<=6; i++){
     console.log("$".repeat(i));
    }
}
function toCapitalCase(str){
    var arr = str.split(" ");
    var result = arr.map(
        function(value){
            return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
        })
    return result.join(" ");   
}