function fruitOrVegetable(input) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];
    return fruits.includes(input) ? "fruit" : vegetables.includes(input) ? "vegetable" : "unknown";
}

console.log(fruitOrVegetable("pizza"));