let a = document.getElementById("input")
let b = document.getElementById("infinity")


    function square(n) {
        let row1 = "~".repeat(n) + "\n";
        let row2 = "(" + " ".repeat(n - 1) + ")" + "\n";
        let result = row1;
        console.log(row1);
        for (let j = 1; j <= n - 3; j++) {
            result += row2;
           
    
        }
        result += row1;
        return result;

      }   