

function selectPlan(planNumber){
    let plan1 = document.getElementById("plan1")
    let plan2 = document.getElementById("plan2")
    let plan3 = document.getElementById("plan3")

    if(planNumber === 1){
      
        plan1.classList.add("plan--selected")
        plan2.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    }
   
    if(planNumber === 2){

        plan2.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")
        plan3.classList.remove("plan--selected")
    }

    if(planNumber === 3){
        
        plan3.classList.add("plan--selected")
        plan1.classList.remove("plan--selected")
        plan2.classList.remove("plan--selected")
    }
        
}

console.log(selectPlan())




/*
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

*/