let input = prompt('What would you like to do?');

//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];

//start with a while loop that checks for quit input
while(input !== "quit"){
    //if else conditions
    if(input === "new"){

        let adding = prompt("Insert new TODO");
        todos.push(adding);

        input = prompt("ADDED! Now what would you like to do?");

    }else if(input === "list"){
        console.log();
        console.log("    Your list of TO DOs:");
        for(let i = 0; i < todos.length; i++){
            console.log((i+1), todos[i]);
        }
        
        input = prompt('NOW what would you like to do?');

    } else if(input === "delete"){
        let deleting = prompt('Type a number to delete from the list');
        todos.splice((deleting-1), 1);

        input = prompt("DELETED! Now what would you like to do?");

    } else {
        input = prompt("INSERT a valid command:");
    }

}

console.log('OK QUIT THE APP');