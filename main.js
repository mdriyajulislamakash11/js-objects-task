// Task-1
// Access the golden rod color value in output.

const colors = {
      red: "#ff0000",
      green: "#00ff00",
      blue: "#0000ff",
      "golden rod": '#daa520'
};

const key = colors["golden rod"];
console.log(key)








// Task-2
// For this object below add a property named passenger 
// capacity with value 5

const car = {
      make: "Toyota",
      model: "Corolla",
      year: 2020
};
car.passengerCapacity = 5;
console.log(car)


// Task-3
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks)




// Task-4
// Count the number of properties.

let student = {
      name: 'Ariana Grande',
      age: 21,
      city: 'Gaibandha',
      isStudent: true
};

const x = Object.keys(student).length;
console.log(x)







//   Task-5 (Hard)
//   Loop through an object and print the key-value pairs with their types

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {
      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
};

for(let i in myObject){
      console.log("key: ", i , "||", "type: ", typeof myObject[i])
}

// const keyss = Object.keys(myObject);
// console.log("key: ", keyss)

let person = {
      name: "Akash",
      age: 22
};

console.log(typeof person["name"]); // Output: string
console.log(typeof person["age"]);  // Output: number