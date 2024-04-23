function changeView(myvar, itemid, ifc=0) {

  console.log(itemid)

  alldivs = document.getElementsByClassName("basic shown")

  for (let divvy of alldivs) {
    console.log(divvy.id)
    document.getElementById(divvy.id).className = "basic hide";
  }

  document.getElementById(myvar).className = "basic shown";

  
if (ifc === 1) {
  icondivs = document.getElementsByClassName("iconselected")

    for (let z of icondivs) {
      document.getElementById(z.id).className = "icons";
    }

    document.getElementById(itemid).className = "iconselected";

}

else {

  // now for making the selected menu item stay underlined and big while you're viewing the associated div
  
  itemdivs = document.getElementsByClassName("itemselected")

  for (let z of itemdivs) {
    document.getElementById(z.id).className = "items";
  }

  document.getElementById(itemid).className = "itemselected";

}

}


  

  // and repeat above function for icon version?
// Nope, if/else


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









//TIC TAC TOE 2.0 JAVASCRIPT INCOMING
var zcount = 1;

// playing function
function change(currentDiv) {
    if (currentDiv.className === "zblank") {

      //x-turn
      if (zcount % 2 === 1) {
        currentDiv.className = "zxTurn";
        currentDiv.innerHTML = 'X';

        // check top row all x's
        if (document.getElementById("ztopldiv").className === "zxTurn" && document.getElementById("ztopmdiv").className === "zxTurn" && document.getElementById("ztoprdiv").className === "zxTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("ztopmdiv").className = "won";
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        // check middle row all x's
        else if (document.getElementById("zmidldiv").className === "zxTurn" && document.getElementById("zmidmdiv").className === "zxTurn" && document.getElementById("zmidrdiv").className === "zxTurn") {
          document.getElementById("zmidldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zmidrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check bottom row all x's
        else if (document.getElementById("zbottomldiv").className === "zxTurn" && document.getElementById("zbottommdiv").className === "zxTurn" && document.getElementById("zbottomrdiv").className === "zxTurn") {
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zbottommdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check left column all x's
        else if (document.getElementById("ztopldiv").className === "zxTurn" && document.getElementById("zmidldiv").className === "zxTurn" && document.getElementById("zbottomldiv").className === "zxTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("zmidldiv").className = "won";
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check middle column all x's
        else if (document.getElementById("ztopmdiv").className === "zxTurn" && document.getElementById("zmidmdiv").className === "zxTurn" && document.getElementById("zbottommdiv").className === "zxTurn") {
          document.getElementById("ztopmdiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zbottommdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check right column all x's
        else if (document.getElementById("ztoprdiv").className === "zxTurn" && document.getElementById("zmidrdiv").className === "zxTurn" && document.getElementById("zbottomrdiv").className === "zxTurn") {
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zmidrdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check diagonal from top left all x's
        else if (document.getElementById("ztopldiv").className === "zxTurn" && document.getElementById("zmidmdiv").className === "zxTurn" && document.getElementById("zbottomrdiv").className === "zxTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check diagonal from bottom left all x's
        else if (document.getElementById("zbottomldiv").className === "zxTurn" && document.getElementById("zmidmdiv").className === "zxTurn" && document.getElementById("ztoprdiv").className === "zxTurn") {
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "X's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
      }

      //o-turn
      else {
        currentDiv.className = "zoTurn";
        currentDiv.innerHTML = 'O';

        // check top row all o's
        if (document.getElementById("ztopldiv").className === "zoTurn" && document.getElementById("ztopmdiv").className === "zoTurn" && document.getElementById("ztoprdiv").className === "zoTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("ztopmdiv").className = "won";
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        // check middle row all o's
        else if (document.getElementById("zmidldiv").className === "zoTurn" && document.getElementById("zmidmdiv").className === "zoTurn" && document.getElementById("zmidrdiv").className === "zoTurn") {
          document.getElementById("zmidldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zmidrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check bottom row all o's
        else if (document.getElementById("zbottomldiv").className === "zoTurn" && document.getElementById("zbottommdiv").className === "zoTurn" && document.getElementById("zbottomrdiv").className === "zoTurn") {
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zbottommdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check left column all o's
        else if (document.getElementById("ztopldiv").className === "zoTurn" && document.getElementById("zmidldiv").className === "zoTurn" && document.getElementById("zbottomldiv").className === "zoTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("zmidldiv").className = "won";
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check middle column all o's
        else if (document.getElementById("ztopmdiv").className === "zoTurn" && document.getElementById("zmidmdiv").className === "zoTurn" && document.getElementById("zbottommdiv").className === "zoTurn") {
          document.getElementById("ztopmdiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zbottommdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check right column all o's
        else if (document.getElementById("ztoprdiv").className === "zoTurn" && document.getElementById("zmidrdiv").className === "zoTurn" && document.getElementById("bottomrdiv").className === "zoTurn") {
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zmidrdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check diagonal from top left all o's
        else if (document.getElementById("ztopldiv").className === "zoTurn" && document.getElementById("zmidmdiv").className === "zoTurn" && document.getElementById("zbottomrdiv").className === "zoTurn") {
          document.getElementById("ztopldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("zbottomrdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
        //check diagonal from bottom left all o's
        else if (document.getElementById("zbottomldiv").className === "zoTurn" && document.getElementById("zmidmdiv").className === "zoTurn" && document.getElementById("ztoprdiv").className === "zoTurn") {
          document.getElementById("zbottomldiv").className = "won";
          document.getElementById("zmidmdiv").className = "won";
          document.getElementById("ztoprdiv").className = "won";
          document.getElementById("zsubheader").className = "winnerMessage";
          document.getElementById("zsubheader").innerHTML = "O's win!";

          document.getElementById("zgriddiv").className = "zsquare zmiddle unclickable";
        }
      }

      zcount += 1;
    }
}


// Begin again button
function Restart() {
  document.getElementById("ztopldiv").className = "zblank";
  document.getElementById("ztopldiv").innerHTML = '';

  document.getElementById("ztopmdiv").className = "zblank";
  document.getElementById("ztopmdiv").innerHTML = '';

  document.getElementById("ztoprdiv").className = "zblank";
  document.getElementById("ztoprdiv").innerHTML = '';

  document.getElementById("zmidldiv").className = "zblank";
  document.getElementById("zmidldiv").innerHTML = '';

  document.getElementById("zmidmdiv").className = "zblank";
  document.getElementById("zmidmdiv").innerHTML = '';

  document.getElementById("zmidrdiv").className = "zblank";
  document.getElementById("zmidrdiv").innerHTML = '';

  document.getElementById("zbottomldiv").className = "zblank";
  document.getElementById("zbottomldiv").innerHTML = '';

  document.getElementById("zbottommdiv").className = "zblank";
  document.getElementById("zbottommdiv").innerHTML = '';

  document.getElementById("zbottomrdiv").className = "zblank";
  document.getElementById("zbottomrdiv").innerHTML = '';


  document.getElementById("zsubheader").className = "zdirections";
  document.getElementById("zsubheader").innerHTML = 'Click a box to start';

  document.getElementById("zgriddiv").className = "zsquare zmiddle";

  zcount = 1;
  //^this count equals 1 makes it so x always goes first after hitting restart button. Could change that if I want.
}
//End of tic tac toe 2.0 javascript
