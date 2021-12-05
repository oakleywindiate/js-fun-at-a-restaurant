function createRestaurant(name, menus) {
  var newRestaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
  return newRestaurant;
}


function addMenuItem(restaurant, menuItem) {
  if (restaurant.menus.breakfast.includes(menuItem) === false && menuItem.type === "breakfast") {
    restaurant.menus.breakfast.push(menuItem);
  } else if (restaurant.menus.lunch.includes(menuItem) === false && menuItem.type === "lunch") {
    restaurant.menus.lunch.push(menuItem);
  } else if (restaurant.menus.dinner.includes(menuItem) === false && menuItem.type === "dinner") {
    restaurant.menus.dinner.push(menuItem);
  }

  return restaurant;
}

//function removeMenuItem(restaurant, foodName, foodType) {
//   for (var i = 0; i < restaurant.menus[foodType].length; i++) {
//     if (restaurant.menus[foodType][i].name === foodName) {
//       return `No one is eating our ${restaurant.menus[foodType][i].name}`
//     }
//       restaurant.menus[foodType].splice(i)
//     }
//   }


module.exports = {
   createRestaurant,
   addMenuItem,
   //removeMenuItem
}
