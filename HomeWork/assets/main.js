
//task 1
class CostumMath {
    constructor(number) {
        this.number = number;
    };

    add (inputNumber) {
         this.number=this.number+inputNumber;
        return this;
    };
    minus(inputNumber){
        this.number=this.number-inputNumber;
        return this;
    };
    multply(inputNumber){
        this.number=this.number*inputNumber;
        return this;
    };
    divide(inputNumber){
        this.number=this.number/inputNumber;
        return this;
    };
   
  };
const customMath = new CostumMath(5)

console.log(customMath.add(10).minus(5).multply(3).divide(2)) //15

//task 2
Number.prototype.add = function (cb) {
    const result=cb+this;
    return result;
};

const result=(1).add(5);
console.log(result);

//task 3



//task 4
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

function deleteUserInto(user) {
  delete user.name;
  return user;
};
deleteUserInto(user);

//task 5
let schedule = {};

alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
  if(Object.keys(obj).length === 0){
    return true;
  }
  return false;
}

//task 6
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
function sumObject(salaries) {
  const sum =salaries.John+salaries.Ann+salaries.Pete;
  return sum;
}
 
alert(sumObject(salaries)); // 390

//task 7
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
  console.log(multiplyNumeric(menu));
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
      
    }
    return obj;

    }
  

