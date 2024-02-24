
// section-main
let allMeals = [];
document.querySelector(".side-nav-menu").classList.remove("class", "d-none");
async function meal(url) {
  document.querySelector("#spinner").classList.remove("class", "d-none");
  var response = await fetch(url);
  allMeals = await response.json();
  console.log(allMeals);
  document.querySelector(".main-section").classList.remove("class", "d-none");
  // document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector(".side-nav-menu").classList.add("class", "d-flex");
  displayMeals();
}
meal(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);

function displayMeals() {
  let cartoona = ``;
  if (allMeals.meals != null) {
    for (let i = 0; i < allMeals.meals.length; i++) {
      cartoona += `
    <div class="col-md-3 " onclick="diplayDetails(${i})">
      <div class="items position position-relative rounded-3 overflow-hidden">
        <img src="${allMeals.meals[i].strMealThumb}" class="w-100 rounded-3" alt="#">
        <div class="layer position-absolute d-flex align-items-center rounded-3">
          <h2>${allMeals.meals[i].strMeal}</h2>
        </div>
      </div>
    </div>`;
    }
    document.querySelector("#spinner").classList.add("class", "d-none");
    document.querySelector(".main-section .row").innerHTML = cartoona;
  }else{
    document.querySelector(".main-section").classList.add("class", "d-none");
  }
  console.log(allMeals.meals);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-details
function diplayDetails(x) {
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.remove("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector("#spinner").classList.remove("class", "d-none");

  let section = `
      <div class="col-md-4">
        <div class="item">
          <img src="${allMeals.meals[x].strMealThumb}" class="w-100 rounded-3" alt="#">
          <h2>${allMeals.meals[x].strMeal}</h2>
        </div>
      </div>
      <div class="col-md-8">
        <div class="item">
          <h2>Instructions</h2>
          <p>${allMeals.meals[x].strInstructions}</p>
          <h4>Area : ${allMeals.meals[x].strArea} </h4>
          <h4>Category : ${allMeals.meals[x].strCategory}</h4>
          <h4>Recipes :</h4>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${recipes(x)}
          </ul> 
          <h4>Tags :</h4>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${tags(allMeals.meals[x].strTags)}
          </ul>
          <a target="_blank" href="${allMeals.meals[x].strSource}"
            class="btn btn-success">Source</a>
          <a target="_blank" href="${allMeals.meals[x].strYoutube}" class="btn btn-danger">Youtube</a>
        </div>
      </div>`
  document.querySelector(".section-details .row").innerHTML = section;
  document.querySelector("#spinner").classList.add("class", "d-none");
}
function recipes (x) {
  let y=``
  if(Number(allMeals.meals[x].strMeasure1) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure1 +"  "+allMeals.meals[x].strIngredient1+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure2) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure2 +"  "+allMeals.meals[x].strIngredient2+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure3) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure3 +"  "+allMeals.meals[x].strIngredient3+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure4) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure4 +"  "+allMeals.meals[x].strIngredient4+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure5) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure5 +"  "+allMeals.meals[x].strIngredient5+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure6) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure6 +"  "+allMeals.meals[x].strIngredient6+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure7) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure7 +"  "+allMeals.meals[x].strIngredient7+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure8) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure8 +"  "+allMeals.meals[x].strIngredient8+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure9) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure9 +"  "+allMeals.meals[x].strIngredient9+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure10) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure10 +"  "+allMeals.meals[x].strIngredient10+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure11) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure11 +"  "+allMeals.meals[x].strIngredient11+ `</li>`
  }
  if(Number(allMeals.meals[x].strMeasure12) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure12 +"  "+allMeals.meals[x].strIngredient12+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure13) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure13 +"  "+allMeals.meals[x].strIngredient13+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure14) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure14 +"  "+allMeals.meals[x].strIngredient14+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure15) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure15 +"  "+allMeals.meals[x].strIngredient15+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure16) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure16 +"  "+allMeals.meals[x].strIngredient16+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure17) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure17 +"  "+allMeals.meals[x].strIngredient17+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure18) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure18 +"  "+allMeals.meals[x].strIngredient18+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure19) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure19 +"  "+allMeals.meals[x].strIngredient19+ `</li>`
  }
  
  if(Number(allMeals.meals[x].strMeasure20) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ allMeals.meals[x].strMeasure20 +"  "+allMeals.meals[x].strIngredient20+ `</li>`
  }
  else{
    return y;
  }
  return y
}
function tags(tag) {
  if (tag != null) {
  let oneTag=tag.split(",");
  let y=``;
    for (let i = 0; i < oneTag.length; i++) {
      y += `<li class="alert alert-danger m-2 p-1">`+ oneTag[i] +`</li>`;
     }
     return y;
  }else{
    return ''
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// navbar
function navOpen() {
  document.querySelector(".open").classList.add("d-none");
  document.querySelector(".close").classList.remove("d-none");
  document.querySelector(".nav-tab").style.left=0;
  document.querySelector(".nav-header").style.left=0;
  document.querySelector(".nav-tab ul ").style.top=0;
  document.querySelector(".side-nav-menu ").style.zIndex= 9999;
}
function navClose() {
  document.querySelector(".open").classList.remove("d-none");
  document.querySelector(".close").classList.add("d-none");
  document.querySelector(".nav-tab").style.left=-260 + 'px';
  document.querySelector(".nav-header").style.left= -260 + 'px';
  document.querySelector(".nav-tab ul ").style.top=200 + 'px';
  document.querySelector(".side-nav-menu ").style.zIndex= 0;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-search
function searchBage(){
  navClose();
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.remove("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
}
function searchByName(name) {
  meal('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name) 
}
function searchByFLetter(name) {
  meal('https://www.themealdb.com/api/json/v1/1/search.php?f=' + name) 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-categories
let allCatego=[];
async function categories(){
  navClose();
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.remove("class", "d-none");
  document.querySelector("#spinner").classList.remove("class", "d-none");
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  allCatego = await response.json();
  document.querySelector("#spinner").classList.add("class", "d-none");
  displayCateg();
}
function displayCateg() {
  let cartoona = ``;
    for (let i = 0; i < allCatego.categories.length; i++) {
      cartoona += `
    <div class="col-md-3 " onclick="searchByName('${allCatego.categories[i].strCategory}')">
      <div class="items position position-relative rounded-3 overflow-hidden">
        <img src="${allCatego.categories[i].strCategoryThumb}" class="w-100 rounded-3" alt="#">
        <div class="layer position-absolute text-center rounded-3">
          <h2 class="pt-2">${allCatego.categories[i].strCategory}</h2>
          <p class="pb-2">${allCatego.categories[i].strCategoryDescription.split(" ").slice(0,20).join(' ')}</p>
        </div>
      </div>
    </div>`;
    }
    document.querySelector(".sectionCteg .row").innerHTML = cartoona;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-areas
let allAreas=[];
async function areas(){
  navClose();
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.remove("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector("#spinner").classList.add("class", "d-none");
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  allAreas = await response.json();
  displayAreas();
}
function displayAreas() {
  let cartoona =``;
  for (let i = 0; i <allAreas.meals.length ; i++) {
  cartoona+=`
  <div class="col-md-3" onclick="display">
  <div onclick="getAreaMeals('${allAreas.meals[i].strArea}')" class="rounded-2 text-center cursor-pointer">
    <i class="fa-solid fa-house-laptop fa-4x"></i>
    <h3>${allAreas.meals[i].strArea}</h3>
  </div>
</div>
  `
}
document.querySelector(".section-area .row").innerHTML=cartoona;
}
async function getAreaMeals(name) {
  document.querySelector("#spinner").classList.remove("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + name);
  allMeals = await response.json();
  console.log(allMeals);
  document.querySelector(".main-section").classList.remove("class", "d-none");
  // document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector(".side-nav-menu").classList.remove("class", "d-none");
  document.querySelector(".side-nav-menu").classList.add("class", "d-flex");
  displayAreasMeals(); 
}
function displayAreasMeals() {
  let cartoona = ``;
  if (allMeals.meals != null) {
    for (let i = 0; i < allMeals.meals.length; i++) {
      cartoona += `
    <div class="col-md-3 " onclick="diplayAreasDetails(${allMeals.meals[i].idMeal})">
      <div class="items position position-relative rounded-3 overflow-hidden">
        <img src="${allMeals.meals[i].strMealThumb}" class="w-100 rounded-3" alt="#">
        <div class="layer position-absolute d-flex align-items-center rounded-3">
          <h2>${allMeals.meals[i].strMeal}</h2>
        </div>
      </div>
    </div>`;
    }
    document.querySelector("#spinner").classList.add("class", "d-none");
    document.querySelector(".main-section .row").innerHTML = cartoona;
  }else{
    document.querySelector(".main-section").classList.add("class", "d-none");
  }
}
let oneArea=[];
async function diplayAreasDetails(x) {
 let d="https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +x;
 document.querySelector("#spinner").classList.remove("class", "d-none");
 document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
 var response = await fetch(d);
  oneArea = await response.json();
  getDetails();
  
}
function getDetails() {
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.remove("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector("#spinner").classList.remove("class", "d-none");
  let section = `
      <div class="col-md-4">
        <div class="item">
          <img src="${oneArea.meals[0].strMealThumb}" class="w-100 rounded-3" alt="#">
          <h2>${oneArea.meals[0].strMeal}</h2>
        </div>
      </div>
      <div class="col-md-8">
        <div class="item">
          <h2>Instructions</h2>
          <p>${oneArea.meals[0].strInstructions}</p>
          <h4>Area : ${oneArea.meals[0].strArea} </h4>
          <h4>Category : ${oneArea.meals[0].strCategory}</h4>
          <h4>Recipes :</h4>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${recipesArea(0)}
          </ul> 
          <h4>Tags :</h4>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${tags(oneArea.meals[0].strTags)}
          </ul>
          <a target="_blank" href="${oneArea.meals[0].strSource}"
            class="btn btn-success">Source</a>
          <a target="_blank" href="${oneArea.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
        </div>
      </div>`
  document.querySelector(".section-details .row").innerHTML = section;
  document.querySelector("#spinner").classList.add("class", "d-none");
}
function recipesArea (x) {
  let y=``
  if(Number(oneArea.meals[x].strMeasure1) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure1 +"  "+oneArea.meals[x].strIngredient1+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure2) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure2 +"  "+oneArea.meals[x].strIngredient2+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure3) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure3 +"  "+oneArea.meals[x].strIngredient3+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure4) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure4 +"  "+oneArea.meals[x].strIngredient4+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure5) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure5 +"  "+oneArea.meals[x].strIngredient5+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure6) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure6 +"  "+oneArea.meals[x].strIngredient6+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure7) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure7 +"  "+oneArea.meals[x].strIngredient7+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure8) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure8 +"  "+oneArea.meals[x].strIngredient8+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure9) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure9 +"  "+oneArea.meals[x].strIngredient9+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure10) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure10 +"  "+oneArea.meals[x].strIngredient10+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure11) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure11 +"  "+oneArea.meals[x].strIngredient11+ `</li>`
  }
  if(Number(oneArea.meals[x].strMeasure12) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure12 +"  "+oneArea.meals[x].strIngredient12+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure13) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure13 +"  "+oneArea.meals[x].strIngredient13+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure14) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure14 +"  "+oneArea.meals[x].strIngredient14+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure15) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure15 +"  "+oneArea.meals[x].strIngredient15+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure16) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure16 +"  "+oneArea.meals[x].strIngredient16+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure17) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure17 +"  "+oneArea.meals[x].strIngredient17+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure18) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure18 +"  "+oneArea.meals[x].strIngredient18+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure19) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure19 +"  "+oneArea.meals[x].strIngredient19+ `</li>`
  }
  
  if(Number(oneArea.meals[x].strMeasure20) != 0){
    y +=  `<li class="alert alert-info m-2 p-1">`+ oneArea.meals[x].strMeasure20 +"  "+oneArea.meals[x].strIngredient20+ `</li>`
  }
  else{
    return y;
  }
  return y
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-integredients
let allIngredients=[];
async function ingredients(){
  navClose();
  document.querySelector("#spinner").classList.remove("class", "d-none");
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  allIngredients = await response.json();
  document.querySelector("#spinner").classList.add("class", "d-none");
  displayIngredients();
}
function displayIngredients(){
  let cartoona =``;
  for (let i = 0; i <allIngredients.categories.length ; i++) {
  cartoona+=`
  <div class="col-md-3">
    <div onclick="getIngredientsMeals('${allIngredients.categories[i].strCategory}')" class="rounded-2 text-center cursor-pointer">
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <h3>${allIngredients.categories[i].strCategory}</h3>
      <p>${allIngredients.categories[i].strCategoryDescription.split(" ").slice(0,20).join(' ')}</p>
    </div>
  </div>
  `
}
document.querySelector(".section-Ingredients").classList.remove("class", "d-none");
document.querySelector(".section-Ingredients .row").innerHTML=cartoona;
}
async function getIngredientsMeals(name){
document.querySelector("#spinner").classList.remove("class", "d-none");
document.querySelector(".section-Ingredients").classList.add("class", "d-none");
var response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + name);
allMeals = await response.json();
document.querySelector(".main-section").classList.remove("class", "d-none");
document.querySelector(".section-details").classList.add("class", "d-none");
document.querySelector(".section-contact").classList.add("class", "d-none");
document.querySelector(".section-area").classList.add("class", "d-none");
document.querySelector(".sectionCteg").classList.add("class", "d-none");
display();
}
function display() {
  let cartoona = ``;
  if (allMeals.meals != null) {
    for (let i = 0; i < allMeals.meals.length; i++) {
      cartoona += `
    <div class="col-md-3 " onclick="diplayAreasDetails(${allMeals.meals[i].idMeal})">
      <div class="items position position-relative rounded-3 overflow-hidden">
        <img src="${allMeals.meals[i].strMealThumb}" class="w-100 rounded-3" alt="#">
        <div class="layer position-absolute d-flex align-items-center rounded-3">
          <h2>${allMeals.meals[i].strMeal}</h2>
        </div>
      </div>
    </div>`;
    }
    document.querySelector("#spinner").classList.add("class", "d-none");
    document.querySelector(".main-section .row").innerHTML = cartoona;
  }else{
    document.querySelector(".main-section").classList.add("class", "d-none");
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// section-contact
var userName = document.getElementById("nameInput");
var userEmail = document.getElementById("emailInput");
var userPhone = document.getElementById("phoneInput");
var userAge = document.getElementById("ageInput");
var userPassword = document.getElementById("passwordInput");
var rePassword = document.getElementById("repasswordInput");

function contact() {
  navClose();
  document.querySelector(".section-details").classList.add("class", "d-none");
  document.querySelector(".main-section").classList.add("class", "d-none");
  document.querySelector(".sectionSearch").classList.add("class", "d-none");
  document.querySelector("#spinner").classList.add("class", "d-none");
  document.querySelector(".sectionCteg").classList.add("class", "d-none");
  document.querySelector(".section-area").classList.add("class", "d-none");
  document.querySelector(".section-Ingredients").classList.add("class", "d-none");
  document.querySelector(".section-contact").classList.remove("class", "d-none");
}
function valideName() {
  let name =userName.value;
  var regex = /^[A-z]{3,}(\s[A-z0-9]{3,})?$/;
  if (regex.test(name)) {
      userName.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#nameAlert").classList.add("class" , "d-none")
      return true;
  } else {
      userName.classList.add('is-invalid');
      document.querySelector("#nameAlert").classList.remove("class" , "d-none")
      return false;
  }
}

function valideEmail() {
  let name=userEmail.value;
  var regex = /^[0-9A-z]{3,}(@)(gmail|yahoo)(.com)$/;
  if (regex.test(name)) {
      userEmail.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#emailAlert").classList.add("class" , "d-none")
      return true;
  } else {
      userEmail.classList.add('is-invalid');
      document.querySelector("#emailAlert").classList.remove("class" , "d-none")
      return false;
  }
}
function validePhone() {
  let name=userPhone.value;
  var regex = /^01[1502][0-9]{8}$/;
  if (regex.test(name)) {
      userPhone.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#phoneAlert").classList.add("class" , "d-none")
      return true;
  } else {
      userPhone.classList.add('is-invalid');
      document.querySelector("#phoneAlert").classList.remove("class" , "d-none")
      return false;
  }
}
function valideAge() {
  let name=userAge.value;
  var regex = /^[1-9][0-9]{1}$/;
  if (regex.test(name)) {
      userAge.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#ageAlert").classList.add("class" , "d-none")
      return true;
  } else {
      userAge.classList.add('is-invalid');
      document.querySelector("#ageAlert").classList.remove("class" , "d-none")
      return false;
  }
}
function validePass() {
  let name=userPassword.value;
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(name)) {
      userPassword.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#passwordAlert").classList.add("class" , "d-none")
      return true;
  } else {
      userPassword.classList.add('is-invalid');
      document.querySelector("#passwordAlert").classList.remove("class" , "d-none")
      return false;
  }
}
function valideRePass() {
  let name=rePassword.value;
  if (name == userPassword.value) {
      rePassword.classList.replace('is-invalid', 'is-valid');
      document.querySelector("#repasswordAlert").classList.add("class" , "d-none")
      return true;
  } else {
      rePassword.classList.add('is-invalid');
      document.querySelector("#repasswordAlert").classList.remove("class" , "d-none")
      return false;
  }
}
// setTimeout( button() , 10000);
function button() {
  if(valideName()&& valideEmail() && validePass() && valideRePass() &&valideAge() &&validePhone()){
    document.querySelector("#submitBtn").removeAttribute("disabled")
  }
}
