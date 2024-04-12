function changeView(myvar, itemid) {

  alldivs = document.getElementsByClassName("basic shown")

  for (let divvy of alldivs) {
    console.log(divvy.id)
    document.getElementById(divvy.id).className = "basic hide";
  }

  document.getElementById(myvar).className = "basic shown";



  // now for making the selected menu item stay underlined and big while you're viewing the associated div

  itemdivs = document.getElementsByClassName("itemselected")

  for (let z of itemdivs) {
    document.getElementById(z.id).className = "items";
  }

  document.getElementById(itemid).className = "itemselected";
}


// okayyy, now what about making ONLY the one that's currently selected be big and underlined? After I click between a couple, they currently just all stay changed to underlined.
//^got it





//TIC TAC TOE JS CODE INCOMING





var count = 0;


// Top row functions


function changeTL() {
var currentClass = document.getElementById("topldiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
  document.getElementById("topldiv").className = "xTurn";
      document.getElementById("topldiv").innerHTML = 'X';
    }

    else if (count === 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("topldiv").className = "oTurn";
      document.getElementById("topldiv").innerHTML = 'O';
    }

    count += 1;
  }
}


function changeTM() {
var currentClass = document.getElementById("topmdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
  document.getElementById("topmdiv").className = "xTurn";
      document.getElementById("topmdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("topmdiv").className = "oTurn";
      document.getElementById("topmdiv").innerHTML = 'O';
    }

    count +=1;
  }
}



function changeTR() {
var currentClass = document.getElementById("toprdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("toprdiv").className = "xTurn";
      document.getElementById("toprdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("toprdiv").className = "oTurn";
      document.getElementById("toprdiv").innerHTML = 'O';
    }

    count +=1;
  }
}




// Middle row functions

function changeML() {
var currentClass = document.getElementById("midldiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("midldiv").className = "xTurn";
      document.getElementById("midldiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("midldiv").className = "oTurn";
      document.getElementById("midldiv").innerHTML = 'O';
    }

    count +=1;
  }
}


function changeMM() {
var currentClass = document.getElementById("midmdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("midmdiv").className = "xTurn";
      document.getElementById("midmdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("midmdiv").className = "oTurn";
      document.getElementById("midmdiv").innerHTML = 'O';
    }

    count +=1;
  }
}


function changeMR() {
var currentClass = document.getElementById("midrdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("midrdiv").className = "xTurn";
      document.getElementById("midrdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9) {
      document.getElementById("midrdiv").className = "oTurn";
      document.getElementById("midrdiv").innerHTML = 'O';
    }

    count +=1;
  }
}


// Bottom row functions

function changeBL() {
var currentClass = document.getElementById("bottomldiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("bottomldiv").className = "xTurn";
      document.getElementById("bottomldiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("bottomldiv").className = "oTurn";
      document.getElementById("bottomldiv").innerHTML = 'O';
    }

    count +=1;
  }
}


function changeBM() {
var currentClass = document.getElementById("bottommdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("bottommdiv").className = "xTurn";
      document.getElementById("bottommdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("bottommdiv").className = "oTurn";
      document.getElementById("bottommdiv").innerHTML = 'O';
    }

    count +=1;
  }
}


function changeBR() {
var currentClass = document.getElementById("bottomrdiv").className;

  if (currentClass === "blank") {

    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8 || count === 10) {
      document.getElementById("bottomrdiv").className = "xTurn";
      document.getElementById("bottomrdiv").innerHTML = 'X';
    }

    else if (count == 1 || count === 3 || count === 5 || count === 7 || count === 9 || count === 11) {
      document.getElementById("bottomrdiv").className = "oTurn";
      document.getElementById("bottomrdiv").innerHTML = 'O';
    }

    count +=1;
  }
}
// End of tic tac toe javascript




