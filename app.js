let menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses(){
    return{
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts
    };
  },
addDishToCourse(courseName,dishName,dishPrice){
const dish = {
  name:dishName,
  price:dishPrice  
};
return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},
generateRandomMeal(){
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price+main.price+dessert.price;
return `Meal: ${appetizer.name}, ${main.name}, ${dessert.name} \nTotal price: $${totalPrice}`;
}
};

menu.addDishToCourse('appetizers','BBQ wings',20);
menu.addDishToCourse('desserts','Nutella Ice Cream',10);
menu.addDishToCourse('mains','Cheese Pizza',40);
menu.addDishToCourse('appetizers','Chips',5);

menu.generateRandomMeal();
console.log(menu.generateRandomMeal())
