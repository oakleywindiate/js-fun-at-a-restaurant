
function takeOrder(order, orderArray) {
  if (orderArray.length < 3) {
    orderArray.push(order);
  }
  return orderArray;
}

function refundOrder(orderNumber, orderArray) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === orderNumber) {
      orderArray.splice(i, 1)
    }
  }
}

function listItems(orderArray) {
var stringItems = [];
  for (var i = 0; i < orderArray.length; i++) {
    stringItems.push(orderArray[i].item);
  }
  return stringItems.join(", ")
}

function searchOrder(orderArray, orderItem) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item === orderItem) {
      return true;
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
