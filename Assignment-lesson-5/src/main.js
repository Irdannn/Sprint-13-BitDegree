var purchased = function (product, category) {
    var cost = (product.price * category.sale_amount).toFixed(2);
    var saleMessage = "Your Product ".concat(product.name, " is on sale for $").concat(cost);
    var wrongCategory = "Your Product ".concat(product.name, " has a mismatced category");
    return product.category_id == category.id ? saleMessage : wrongCategory;
};
var kitchenware = {
    id: 1,
    name: "Kitchen Ware",
    sale_amount: 0.6
};
var plate = {
    id: 411,
    name: "plate",
    price: 14,
    category_id: 1
};
var food = {
    id: 1,
    name: "food",
    sale_amount: 0.35
};
var chicken = {
    id: 65,
    name: "chicken",
    price: 9,
    category_id: 1
};
console.log(purchased(plate, kitchenware));
console.log(purchased(plate, food));
console.log(purchased(chicken, food));
console.log(purchased(chicken, kitchenware));
