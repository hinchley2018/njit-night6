console.log("scale script has loaded")

let packages = [
    {"weightKg": 5, "item": "PC"},
    {"weightKg": 100, "item": "Desk"},
    {"weightKg": 50, "item": "TV"},
    {"weightKg": 15, "item": "mini fridge"}
]

//go thorugh this packeages and add the mass

let totalMass = 0

//go through each package and add up the weight
for( let index = 0; index < packages.length; index++){
    console.log("Index", index, "package mass", packages[index].weightKg)
    totalMass = totalMass + packages[index.weightKg]
}

