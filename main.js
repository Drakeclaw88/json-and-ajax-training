let pageCounter = 1;
let buttonFetchAnimals = document.getElementById("fetchAnimals");
let animalView = document.getElementById("animalInfo");

buttonFetchAnimals.addEventListener("click", function () {

    let request = new XMLHttpRequest();
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    request.onload = function () {

        if(request.status >= 200 && request.status < 400){
            let petData = JSON.parse(request.responseText);
            addHTML(petData);

        }
        else{
            console.log("we connected to the server but it returned error")
        }


    };

    request.onerror = function(){

        console.log("connection error")
    }
    request.send();
    pageCounter++;
    if (pageCounter > 3) {

        buttonFetchAnimals.classList.add("hide-me");
        
    }
});

function addHTML(data) {
    let htmlString = "";

    for (i= 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name +  " is a " + data[i].species + " that likes to eat ";

        for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0){
                htmlString += data[i].foods.likes[ii];
            }
            else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';
        for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            }
            else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }
        htmlString += '.</p>';
    };
    animalView.insertAdjacentHTML('beforeend', htmlString);
}


