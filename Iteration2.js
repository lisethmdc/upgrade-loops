const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved = false

for (var i = 0; i < alumns.length; i++) {
        if (alumns[i].T1 === true && alumns[i].T2 === true) {
            isApproved = true
            console.log(alumns[i])
        } else if (alumns[i].T1 === true && alumns[i].T3 === true) {
            isApproved = true
            console.log(alumns[i])
        } else if (alumns[i].T2 === true && alumns[i].T3 === true) {
            isApproved = true
            console.log(alumns[i])
        } else {
            isApproved = false
        }
        
    }

   








/* let isApproved = false
let pass = [] */

/* for (let i in alumns) {
  /*   if (alumns.T1 && alumns.T2 === true){
        isApproved = true   
    }  */
    

    

   /*  } else if (alumns.T2 && alumns.T3 === true) {
        isApproved = true    
    } else if (alumns.T1 && alumns.T3 === true) {
        isApproved = true
    } */