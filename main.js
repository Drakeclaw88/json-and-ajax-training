let pageCounter = 1;
let buttonFetchAnimals = document.getElementById("fetchAnimals");
let animalView = document.getElementById("animalInfo");

buttonFetchAnimals.addEventListener("click", function () {

    let request = new XMLHttpRequest();
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    request.onload = function () {
        let petData = JSON.parse(request.responseText);
        addHTML(petData);

    };
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
            htmlString += data[i].foods.likes[ii];
            
        }

    };
        
    animalView.insertAdjacentHTML('beforeend', htmlString);



}


