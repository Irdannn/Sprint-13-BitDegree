"use strict";
const purchased = (product, category) => {
    const cost = (product.price * category.sale_amount).toFixed(2);
    const saleMessage = `Your Product ${product.name} is on sale for $${cost}`;
    const wrongCategory = `Your Product ${product.name} has a mismatced category`;
    return product.category_id == category.id ? saleMessage : wrongCategory;
};
const kitchenware = {
    id: 1,
    name: "Kitchen Ware",
    sale_amount: 0.6,
};
const plate = {
    id: 411,
    name: "plate",
    price: 14,
    category_id: 1,
};
const food = {
    id: 1,
    name: "food",
    sale_amount: 0.35,
};
const chicken = {
    id: 65,
    name: "chicken",
    price: 9,
    category_id: 1
};
console.log(purchased(plate, kitchenware));
console.log(purchased(plate, food));
console.log(purchased(chicken, food));
console.log(purchased(chicken, kitchenware));
