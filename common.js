 var a = 0.1,b = 0.2;
        console.log(fn());//undefined
        console.log(c)//.03000000000000004
        console.log(d);//d is not defined
        function fn(){
            c = a + b;
            console.log(+ "0.1" == a);//true
            console.log(c === 0.3)//fasle
        }
