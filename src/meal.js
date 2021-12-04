function nameMenuItem(item1) {
 return "Delicious " + item1;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(foodItem, ingredients) {
  if (ingredients.includes(foodItem)) {
    return
  //do nothing
  } else {
    ingredients.push(foodItem);
 }
return ingredients;
};

function formatPrice(initialPrice) {
  return "$" + initialPrice;
};

function decreasePrice(decreasedPrice) {
return (decreasedPrice - ((10 / 100) * decreasedPrice));
};

function createRecipe(title, ingredients, type) {
var menuItem = {
  title,
  ingredients,
  type,
}
return menuItem;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
