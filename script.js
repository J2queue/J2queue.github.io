function changeView(myvar, itemid) {

  alldivs = document.getElementsByClassName("basic shown")

  for (let divvy of alldivs) {
    console.log(divvy.id)
    document.getElementById(divvy.id).className = "basic hide";
  }

  document.getElementById(myvar).className = "basic shown";



  // now for making the selected menu item stay underlined and big while you're viewing the associated div

  document.getElementById(itemid).className = "itemselected"
}
