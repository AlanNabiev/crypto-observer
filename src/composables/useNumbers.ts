
export function frac(x) {
    
        var a = x.toString()
        var b = a.split('.')[1]
        var c = +b
        if (c === undefined) {
            return 0
        }
        return c;   
  }