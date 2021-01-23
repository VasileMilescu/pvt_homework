function calculate(x){
    return function(a){
        return function(b){
            if ( x === '+' ){
                return( a + b )
            }
            if ( x === '*' ){
                return( a * b )
            }
        }
    }
}