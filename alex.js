// Looping

for (let x=0; x<15; x++) {
    if (x === 0) {
      console.log(x + " is even");
    } 
    else if (x % 2 ===0) {
      console.log(x + " is even");
    }
    else {
      console.log(x + " is odd");
    }
  }
  
  let arr1 = [-3,8,7,6,5,-4,3,2,1];
  let arr2 = [];
  let min = arr1[0];
  let pos;
  max = arr1[0];
  for (i = 0; i<arr1.length; i++) {
    if (max<arr1[i]) max=arr1[i];
  }
  for(var i=0;i<arr1.length;i++) {
    for (var j=0;j<arr1.length;j++)
    if (arr1[j]!="x") {
      if (min>arr1[j]) {
        min=arr1[j];
        pos=j;
      }
    }
  
  arr2[i]=min;
  arr1[pos]="x";
  min=max;
  }
  console.log(arr2);
  
  var myArray = [];
  var i = 0;
  while(i < 5) {
    myArray.push(i);
    i++;
  }
  console.log(myArray);
  
  var ourArray = [];
  for (var i=0; i<5; i++) {
    ourArray.push(i);
  }
  console.log(ourArray);
  
  var ourAArray = [];
  for (var i=10; i>0; i-=2) {
    ourArray.push(i);
  }
  console.log(ourArray);
  
  
  var vox=[2,3,4,5,6];
  var result=0;
  for (var i=0; i<vox.length; i++) {
  result += vox[i];
  }
  console.log(result);
  
  function multiplyAll(zen) {
  var product=1;
  for (var i=0; i<zen.length; i++) {
    for (var j=0; j<zen[i].length; j++) {
      product *=zen[i][j];
    }
  return product;
  }
  var product=multiplyAll([1,2],[3,4],[5,6,7]);
  }
  console.log();
  
  const xup1=[`JUNE`, `JULY`, `AUGUST`];
  let xup2;
  (function() {
    xup2=xup1;
    xup1[0]=`potato`
  })();
  console.log(xup2);
  
  // CLass: Getters and Setters
  class Rectangle {
    constructor(height, width) {
      this.height=height;
      this.width=width;
    }
    // Getter
    get perimeter() {
      return this.calcPerimeter();
    }
    //  Setter
    set perimeter(perimeter) {
      this.height= perimeter/2 - this.width;
    }
    // Method
    calcPerimeter() {
      return 2*(this.height + this.width);
    }
  }  
  const s = new Rectangle(10,10);
  console.log(s.perimeter);
  
  
  
  / Diff btw mapping and forEach 
  let days = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`];
  //determine the length of each name and save it in an array
  let namelengths = days.map(function(item, index, array) {
  return index;
  });
  console.log(namelengths);
  
  function Bike(model, colour) {
    this.model = model,
    this.colour = colour
  }
  Bike.prototype.getDetails = function() {
    return this.model + " bike is " + this.colour;
  }
  let bikeObj1 = new
  Bike(`BMW`, `Black`);
  let bikeObj2 = new
  Bike(`BMW`, `white`);
  console.log(bikeObj1.getDetails());
  console.log(bikeObj2.getDetails());
  console.log(bikeObj1, bikeObj2);
  
  function compareEquality(a,b) {
    if (a === b) {
      return "Equal";
    }
  }
  console.log(compareEquality(10, 10));
  
  const students = [
    [`1`, `Harry`],
    [`2`, `Joe`],
    [`3`, `Peter`]
  ];
  let myMap = new Map(students);
  myMap.get(`2`);
  
  var map = new Map();
  map.set(`FirstName`, `John`);
  map.set(`LastName`, `John`);
  map.set(`Some Object`, {});
  console.log(map.size);
  console.log(map.has(`John`));
  console.log(map.get(`John`));
  
  // An advanced programming concept 
  let Gvariable = 1;
  function lFunc(argVar) {
    let LVar = 0;
    function embedFunc() {
      return ++ LVar + argVar + Gvariable;
    }
    return embedFunc;
  }
  let myFunc = lFunc(10);
  myFunc();
  
  let i = 2;
  function f() {
    i++;
    return i;
  }
  
  // Using closures for private object properties
  let myObj = (function() {
    let privateProp1 = 1;
    let privateProp2 = "test";
    let setPrivate1 = function(val1) {
      privateProp1 = val1;
    }
    let compute = function() {
      return privateProp1 + privateProp2;
      return {compute: compute, setPrivate1: setPrivate1};
  
  })();
  typeOf myObj;
  Object.keys(myObj);
  
  // Using this and nested functions
  `use strict`;
  function readFileMethod() {
    fs.readFile(this.fileName, (err, data) => {
  if (!err) {
    console.log(this.fileName, `has length`, data.length);
  }
    });
  }
  let obj = {fileName: `aFile`; readFile: readFileMethod};
  obj.readFile();
  
  for (let fileNo = 0; fileNo < 2; fileNo++) {
    fs.readfile(`./file` + fileNo, function (err, data) {
      if (!err) {
        console.log(`file`, fileNo, `has length`, data.length);
      }
    });
  }
  
  // Stepping through the execution
  for (let fileNo = 0; fileNo < 2; fileNo++) {
    fs.readFile(`./file` + fileNo, function (err, data) {
      if (!err) {
        console.log(`file`, fileNo, `has length`, data.length);
        console.log(fileNo);
      }
    });
  }
   
  // Object Notation (JSON)
  let a = {ps: `str`, pn: 1, pa: [1, `two`, 3, 4], po:{sop: 1}};
  let s = JSON.stringify(obj) =
  `{"ps": "str", "pn": 1, "pa": [1, "two", 3, 4], "po": {"sop": 1}}`
  typeof s ==`string`
  JSON.parse(s)
  
  
  let  myVar = 2*typeoVar + 1;
  "This is a long string so I put it on its own line";
  Type coercing equals: == Workaround: Always use ===, !== instead
  ("" == "0") is false but (0 == "") is true, so is (0 == `0`)
  (false == `0`) is true as is (null == undefined)
  
  // Some Javascript idioms
  // asssign a default value
  hostName = hostName || "localhost"; port = port || 80;
  // access a possibly undefined object property
  let prop = obj && obj.propname;
  // Handling multiple this:
  fs.readFile(this.fileName + fileNo, function (err, data) {
    console.log(this.fileName, fileNo);
  });
  
  // Arrays
  const units = [`max`, `manu`, `Julie`, `pro`];
  console.log(units[2]);
  console.log(units.length);
  // looping an array
  for (const el of units) {
     console.log(el);
     for (let el of units) {
         console.log(el);
         console.log(units.indexOf(`julie`));
  
     }
  }
  units.push(`chika`);
  console.log(units.length);
  console.log(units.indexOf(`pro`));
  
  const ids = new Set();
  ids.add(`abc`);
  ids.add(1);
  ids.add(`abk`);
  ids.add(45);
  console.log(ids.has(`abc`));
  
  let person = {
    name: `Boss`, 
    age: 21,
     hobbies: [`sports`, `cooking`, `travelling`]
    };
  person.lastName = `Shama`;
  console.log(person);
  delete person.age;
  console.log(person);
  let myResult = Object.entries
  console.log(person);
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(JSON.stringify(person));
  
  // Mapping
  let myData = new Map();
  myData.set(`average`, 1.53,);
  myData.set(`lastResult`, null,);
  const continent = {country: `US`, population: 82};
  myData.set(`US`, 0.89);
  for (const el of myData) {
    console.log(el);
    console.log(myData.size);
    console.log(myData.set);
    console.log(myData.values);
  
  }
  
  let months = ["Jan", "Feb", "Mar", "Apr", "May"];
  console.log(months);
  console.log(months[3]);
  console.log(months.length);
  // looping through an array
  for (const el of months) {
  console.log(el);
  }
  months.forEach(function(x, index) {
    console.log(index + " " + x);
  });
  console.log(months.indexOf("Mar"));
  console.log(months[0]);
  
  // Function -the core of programming
  
  let add = 3+6;
  console.log(add);
  function addnumbers(x,y) {
    console.log(x+y);
  }
  addnumbers(10,20);
  
  
  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    eat() {
      console.log(`${this.name} is eating`);
    }
    sleep() {
      console.log(`${this.name} is sleeping`);
    }
    hunt() {
      console.log(`${this.hunt} is hunting`);
    }
  }
  const Lion = new Animal("Lion", 3);
  Lion.eat();
  Lion.sleep();
  Lion.hunt();
  
  
  
  
  
  