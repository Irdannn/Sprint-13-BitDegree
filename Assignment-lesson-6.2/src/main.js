var coffeetype;
(function (coffeetype) {
    coffeetype["cone"] = "Coffee Cone";
    coffeetype["chemex"] = "Chemex";
    coffeetype["plunger"] = "French Press";
    coffeetype["espresso"] = "Espresso";
})(coffeetype || (coffeetype = {}));
var dairytype;
(function (dairytype) {
    dairytype["soymilk"] = "Soy Milk";
    dairytype["steamed"] = "Steamed Milk";
    dairytype["almond"] = "Almond";
    dairytype["oatmilk"] = "Oat Milk";
    dairytype["foamed"] = "Foamed Milk";
})(dairytype || (dairytype = {}));
var cappuccino = {
    ml: 200,
    milk: [dairytype.steamed, dairytype.foamed],
    type: [coffeetype.espresso],
    addition: ["Chocolate"]
};
console.log(cappuccino);
