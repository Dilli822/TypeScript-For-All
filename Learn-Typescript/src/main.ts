
var a = "Hello From Typescript";

// red underline shows the error on our code
console.log("typescript is static type checker", a.jump());

console.log("printing the variable ", a);


/*  Day -- 3 #60daysofLearning #LearningWithLeafFrog
// How to declare variables in Ts?
// Variables Declaration in Ts?
// Possible errors that may arise in Variables
/*

 ------ Variables Declaration -----
 Same as Js const, var & let

 const ho = "Hello";

 Hover over code we get to see the type and variable
 actual statement understood by Ts is
 type is hello with variable hi
 const hi: "Hello"

 but if we declare another same variable const name it will be error
 because in Ts const mean real constant once it is declared it will constant forever
 untill it changed 
 so below the code we are seeing the error cannot assign const hi

*/


const hi =  "Hello";
hi = "another Hello";

/** But we have other variables declaration right 
 * so it won't be problematic with let we can declare 
 * the changeable variable everytime we with same name
 * as want so for example: 
 * 
 */

let namaste = "greetings";
namaste = "this is nepali style greetings";

/**
 * This won't araise error this is technically right code
let namaste = "greetings";
namaste = "this is nepali style greetings";

____ But what if we assign other data type ?

let namaste = "greetings";
namaste = "this is nepali style greetings";

This is string data type 
But if I assign other data types like number, boolean, float rather then previously 
assigned value it will show error
------------------------------
namaste = true;
-------------------------------
error will be Type 'boolean' is not assignable to type 'string'.
* 
*/

namaste = true;

/***
 * Typescript allows us to declare variable type like this
 * let myName: string = "Dilli"
 * which means myName is a changeable variables with string data type named Dilli
 * As we have studied previously that Ts only understand the early 
 * assigned data type it won't accept or understand after declared data type
 * for example if we type
 * myName = []
 * we want to make myName array right with let but Ts won't allow with stating errors
 * Type 'undefined[]' is not assignable to type 'string'
 * because we have previously declared variable as string not as arrays, boolean or numbers
 */

let myName: string = "Dilli";
myName = []


/* # Day -4 
--- Functions in Typescript
--- Making our code more explicit
--- Declaring the type of function and parameters
--- working closely with typescript rules to make our code more safer
 */

//  How do write Function in Ts?


const firstFunction = (name, age) => {
    return name + " " +  age
}

console.log(firstFunction("dilli",21));

/** Above function is arrow function which is well written 
 * simple and working function right 
 * it is working simple function in javascript and typescript too
 * BUT WE ARE NOT WRITING IT IN A BEST AND TYPESCRIPT WAY
 * WE ARE JUST WRITING IT AS WE WRITE IT IN JAVASCRIPT
 * 
 * SO What is the right way to write it in Ts way?
 * 
 * If we hover our mouse over the function firstFunction parameters 
 * name and age we get message as 
 * Parameter 'name' implicitly has any type, but a better type may be inferred from usage
 * --- this means it is better and safe to declare our parameters type in order to 
 * maintain our function as unbreakable and more secure 
 * 
 * 
 * ***********************************************************
 * --- But wait what is parameter ?
 * --- Parameters are local variables established in the function declarations which are the
 * storage places for the values of the arguments that are passed when the function calls
 * 
 * Let's look with example
 *                name and age are parameters of function firstFunction and brackets() is called parentheses
 *                      |     |
const firstFunction = (name, age) => {
    return name + " " +  age
}
console.log(firstFunction("dilli",21));
 *                          |  
    The values passed are  arguments

****************************************************************

*/   

/** 
 * SO LET'S MAKE OUR FUNCTION MORE SECURE AND USE TS BENEFITS
 */

 const secondFunction = (name: string, age: number) => {
    return name + " " +  age
}

console.log(secondFunction("dilli",21));

// What if we assign other data type to arguments 
// hover and we get message Argument of type 'number' is not assignable to parameter of type 'string'.
const thirdFunction = (name: string, age: number) => {
    return name + " " +  age
}

console.log(thirdFunction(45,true));

// Solve it by passing the right data type arguments there
// console.log(thirdFunction("ocean", 45));

/*** BIG QUESTION WHY TO DECLARE SUCH TYPE IN TS?
 * 
 * declaring data type in parentheses we secure our function 
 * developers who will use this function or code will know what data type should be used in particular function
 * it will clean and clear function which will be for particular task like if we need function that may collect
 * the user name and phone number then this type of function may be the best to use.
 */

//  Note: We are using the tsc -w which is watching all our error or check your console.

/***** IT IS BETTER TO ADD EXPLICITY TO OUR CODE WITH TS */
// For example It is better to tell the function what It will return 

/*** This function is explicity written stating that function is constant which takes
 * parameters that are strings and function itself is returning or is string function
 * this will be more precise and it will decrease the chances of getting bugs and errors
 */
const getFullName = (name: string, surname: string):string => {
    return name + " " + surname;
}

console.log(getFullName("Dilli", "Hang"))


/** 
 *  Day-5 
   - Typescript understands object by default 
   - Interfaces 
   - Use/Importance of Interface
   - Errors in Interface
   - Entity in Ts Interface
*/

/* Let's say we have user object 
   which holds name and age
   below the code we see two user which are user and user2
   that must hold name and age but mistakely user has not got the age
   so in this js will not help us and we may not know that the age
   is missing or required for user2 for such cases Typescript comes to resuce we use
   special powerful feature of Ts which is called interface.
*/

/** Technically this code is correct **/
const user = {
    name: "Dilli" ,
    age: 23,
}

const user2 = {
    name: "Hari",
}

/*** Interface --
 * What is Interface?
 * /
 
 /* 
 * An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
 * It helps to describe the entities.
 * It define properties, methods, and events, which are the members of the interface.
 * The only job of an interface in TypeScript is to describe a type. While class and function deal with implementation,
 * interface helps us keep our programs error-free by providing information about the shape of the data we work with.
 */

/** Remember this should be the explicit form of above code */
 const userA: {name: string, age: number} = {
    name: "Ram" ,
    age: 23,
}

const userB: {name: string, age:number} = {
    name: "Shyam",
}

/* each function has name and age which are string and number 
   we get error on const user2 
   -- Cannot redeclare block-scoped variable 'user2'
   -- Property 'age' is missing in type '{name: string;}' but required in type '{name: string, age:number}'


/** Remember it will be headache to repeat same code and type same as userA and userB so what we 
 * do is we user interface of Typescript
 *  */
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Moster",
    age: 30,
}

const user2: User = {
    name: "Jack",
}

/* Now we get same error....   
   we get error on const user2 
   -- Cannot redeclare block-scoped variable 'user2'
   -- Property 'age' is missing in type '{name: string;}' but required in type '{name: string, age:number}'
**/

/** This is much important as we are desigining our software architecture right? so
 * it is important to define the REQUIRED Numbers of entities inside the interface which 
 * can cover overall the requirements needs so that it won't break apart with better communication of our codes(entity)
 * 
 */

 /** Tricks/Hack for making our interface more efficient and handy */
 /** Not all the Time we need name and age both from users so what can we do as we
  * may need age but not name and name but not age so for that Typescript has provided us 
  * best option to do with just ? mark allow us to be mandatory or not.
  */

  interface EgUser {
    name: string;
    age?: number;
}

const userAlpha: EgUser = {
    name: "Jedel",
    age: 25,
}

// Now we get type interface here const userBeta: EgUser
const userBeta: EgUser = {
    name: "Jacky",
}

// It's time to log some information on the console.
console.log(userAlpha.name);

// Ts catching the error 
// error is Property 'namee' does not exist on type 'EgUser'. Did you mean 'name'?
console.log(userAlpha.namee);


/*
 Day -6 - Interfaces Continued.........
        - Functions in Typescript + Avoiding Name Collisions of Classes & Interfaces
        - Unions in Typescript 
        - Good & Bad Practices of writing the Unions in Ts
*/

interface customUser {
    anotherName: string;
    age?: number;

    // simply this is the way to declare the functions in objects
    // with returned value type as string
    getMessage(): string;
};


// After Adding getMessage() function we are getting all errors everywhere on objects
// this is error --- Property 'getMessage' is missing in type '{ name: string; }' but required in type 'exUser'
// simply adding and returning the correct data type inside the objects we can solve this
const userX: customUser = {
    anotherName: "dilli",
    age: 23,
    getMessage() {
        return "Hello I am ";
    },
};

const userY: customUser = {
    anotherName: "Dipen",
    getMessage() {
        return "Hello I am " ;
    },
};

console.log(userY.anotherName);
// we can get the created functions
console.log(userY.getMessage());

const world: customUser = {
    anotherName: "dilli",
    getMessage() {
        return "Hello I am " ;
    },
};

// Note: Always avoid clashing of naming between interface and classes
// for eg: both are going to have same name 
Class User{}

interface User{

}

// it is best practie to give interface User as name UserInterface so
// that it will be easy to read and understand

interface UserInterface {
    name: string,
    age: number,
}

/**
 * Unions in Typescript
 * 
 * Normally we declare the datatype in Typescript in this way
 * 
 * let username: string = "dilli";
 * 
 * BUT WHAT IF I WANT STRING AS WELL AS NUMBER DATA TYPE ?
 * FOR THAT UNIONS COMES TO RESCUE which will allow us to 
 * provide string or number to the variable data type
 */

 let username: string = "Dilli";

//  this is the way of writing the union
// so what exactly happens here is that newusername may be string or number as
// as we have provided number 45 so it will number by default
 let newusername: string | number = 45;

//  in this errorMessage variable we have either string or null value
// be default we are setting null as value

 let errorMessage: string | null = null;

//  what if we didnot set the null 
//  IT WILL BE UNDEFINED AND VERY BAD PRACTICE TO KEEP IT
//  SO IT IS BEST PRACTICE TO KEEP ANY DATA TYPE BY DEFAULT
let errorMessages: string | null;


/**
 * Day - 7 - Continue Union in Typescript
 *         - Interfaces in Union
 *         - functions in Union 
 *         - Passing Union Type to Arrays
 */

// What is Union in Ts?
/* Union is a operator. It define a variable which can have multiple types of values.
   It can combine one or two different types of data (i.e., number, string, etc.) in a single type,
   which is called a union type. 
   Union types are a powerful way to express a variable with multiple types.
   We use pipe('|') symbol to combine two or more data types to achieve Union type.
   syntax: (type1|type2|type3|....|type-n)
   Union operator always combine the data type.
* 
*/

interface customUsers {
    firstName: string
    middleName?: string
    surName: string
}

let customerName: string = "Peter";
let customerPageNumber: string | number = "0414";

// This is competely fine to write or insert the interface inside the unions within a variables 
let customerFullName: customUsers | null = null;

/*** This One is Disaster Please donot do this! This is very bad practice It doesnot ensure the security of your code. */
let customerFullNameIs: customUsers | null | undefined | string | number | string[] | object;

//  Passing Union Type in Function Parameter
//  Down below we have passed value as parameter which holds unions of number and string
//  we have applied typeof which finds the data type of value and strictly compare the argument value
// in this way we can use unions inside the function
function display(value:(number | string)){
    if(typeof(value) === "number")
        console.log("The given value is number data type!");
    
    else if(typeof(value) === "string")
        console.log("The given value is of string data type!"); 
}

display(123);
display("this is string");

/** Passing Union Type to Arrays  */

// we can use unions declaring the arrays types as we have discussed earlier
// here firstArrayType can be string of number and string of array
let firstArrayType: number[] | string[];
let i: number;
let j: number;

firstArrayType = [0,1,2,3,4,5,6,7,8];
console.log("This is Array of Number type: ");


// we are using the for loop and we have i variale holding number datatype
// and we are looping the array of number and string with i and printing it on the console
// Examples: 
for(i = 0; i < firstArrayType.length; i++){
    console.log(firstArrayType[i]);
}

firstArrayType= ["string", "datatype", "in", "secondArray"];
console.log("This is string array");

for(j = 0; j < firstArrayType.length; j++){
    console.log(firstArrayType[j]);
}


/** Day - 8  - Exercises on Typesript
 *           - Learing Source https://www.w3schools.com/typescript/typescript_exercises.php
 *           - Typescript assignments methods to declare data type
 * 
 */

/**
 *  Today I try to learn in a different manner. I found some exercises on Typescript
 *  on w3schools.com which are based on few basic topics that I have covered on my
 *  learning journey. 
 */

// Exercise was simply the best.
//  What did I learn?
/**
 * 1. Typescript allows developers to add Types to Javascript
 
 * 2. Javascript is loosely typed language whereas Typescript is not.

 * 3. Typescript file is always needed to gets complied to Javascript Files and it can be configured on tsconfig.json (json-format) file.

 * 4. There are two main ways that TypeScript assigns a type.
        - Explicit and Implicit (explained below)

  * 5. Infer in Ts and How does it work?

 */

 /* Eg of Explicit way to assign a Type
 //  Explicit simply means writing out the type. Explicit types assignment method are
    easier to understand, read and more interntional.
    If someone is using this explicit method that means he/she exactly knows the data type
    and intend to use particular datatype. 
 **/
 let firstName: string = "dilli";

  /* Eg of Implicit way to assign a Type **/
  let fullName = "Dilli Hang Rai";

  /*  In this method Typescript simply guess the type, based on the assigned value
      - that means Typescript guess the types of value which is called infer
       - This implicit method will forces Typescript to infer the value
       - Sometimes our Typescript donot properly infer the variable data type if such 
       conditions arises then it will set the type to any which disables 
       type checking.
  **/

  const json = JSON.parse("23");

  // hover over the typeof json we get any as data type
  console.log(typeof json);

 // Forcing Typescript to disable the type checking with any keyword
  let myAge: any;

  // unknown in Ts means it is not known value data type ,it can be anything
  let myAddress: unknown;

  /**
   * NOTE: I have only practiced some exercise based on topics I have covered in Typescript.
   * More Exercises will be covered in upcoming Days.
   */


 /** Day - 9 - Revising and Practice
  *          - Revised Intefaces, Unions, const, types
  *          - coded with Examples
  */

  // Revision No: 1 const is really constant in typescript 
  // once constant is declared it/similar named variable cannot be reused in whole program   
  const hari = "this is constant hari";
  const ram = "this is constant ram";
  console.log(hari);
  console.log(ram);

  // hovering over hari we get Cannot assign to 'hari' because it is a constant.
  hari = "this is supposed to be new hari";
  ram = "we are trying to change the constant ram";
  console.log(hari);

  // let in Typescript works similar way in javascript but hovering
  // over the variable we get any type let jackson:any
  let jackson = "jackson is 3d object";
  console.log(jackson);

  jackson = "Jackson is now 4d object";
  console.log(jackson);

  // Revision No: 2
  /* over the variable we get any type let jackson:any
  // that means typescript understands if no any data type is provided
  // it means any data type or Ts understand the type depending upon the
  // value we have provided how do we know that just hover over the 
  // console.log(jackson)
  // we get to see let jackson:string
  **/

  // Revision No: 3 
  /* Providing then one data type in Typescript which is called union
     this is important when we need more than one data type like 
     if I need string and number of arrays both we can use union
     union allows us to declare and use more than one type
     pipe(|) sign represents the union in Ts
   * 
   */

  let myFirstArray: string[] | number[];
  myFirstArray = ["number system", "octal", "BCD", "radix", "base of number system"];
  myFirstArray = [0,4,8,16,24,32];

  // Revision No: 4
  /** Interfaces allows to work with entity 
   * it checks & describes the entity and its data types 
   * although it doesnot deals with implementation while classes and functions do
   */

  interface sports {
      sportName: string,
      sportNumber: number,
      sportTime? : boolean
  }

  const sportOne: sports = {
      sportName: "football",
      sportNumber: 4
  }

  const sportTwo: sports = {
      sportName: "BasketBall",
      sportTime? : true
  }

  const sportThree: sports = {
    sportName: volleyball,
    sportTime? : boolean
 }

 /**
  * Comparing above three examples 
  * what we can find out is we have used
  * interface in all three constant variables 
  * 
  * our first variable is not throwing any error because all
  * entities and data types inside in it are working super fine
  * 
  * our second variable is throwing 
  * 'sportNumber' is missing in type '{ sportName: string; sportTime: true; }' but required in type 'sports'
  *  which means entity is missing here
  * 
  * our third variable is throwing two errors
  * one is cannot find volleyball
  * 'boolean' only refers to a type, but is being used as a value here
  * these two errors shows we must declare entity with correct data type after using interfaces
  * and types are not to be used as value 
  */


  /**
   * Day - 10 - Alias in Typescript
   *          - Differences between Alias and Interfaces 
   *          - Uses of Alias/ best way to implement 
   *          - Combination of type alias and unions
   *          - Exceptional Error Reading & Handling
  */

  // Day - 10 - Alias in Typescript

  // Type Alias
  /**
   - Alias allows us to create a custom type in typescript.It gives a type a new name.
   - The processing  of creating the custom type which holds primitive and other data type is called 
   - aliasing.
   - In fact Typescript provides two ways to create custom types for our data and they are
   - Type aliases and Intefaces
   - Type alias is a just name for any type we intialize the type alias with type keyword 
    --eg: type userName = string
    - We can used to represent not only primitives but also object types, union types, tuples and intersections

    - whenever we introduce type keyowrd the alias will declare the type it stands for
    - same as variable it cannot be declared more than once time
    - it cannot inferred by typescript that means with type introduced it must provide
    - data type, unions eg: type pet = "dog" | "cats"
   */

    type petNumber = string | number;

    interface petsInterface {
        petNumber: petNumber,
        petName: string,
        petAge: number,
    }

    /** In the above we have used type inside the interface named petsInterface will hold either 
     * string or number value similarly we can use type petNumber in variable too
     */

    let myPetNumber: petNumber;

    //getting error here type myPetNumber is not assignable to boolean 
    myPetNumber = false;

    //error free as our type knows this is string which is assignable
    myPetNumber = "string";

    // type can be used as entity in interfaces which shows uniquness in interface


    /** Uses of Alias 
     * Alias is mainly used for re useable code purposes 
     * it is best to use when we are not using common interfaces in our project
     * But use this type as common entity in our project
     * 
     *  */ 

    /* for eg:  **/

    type popularSinger = string;
    
    // this is okay but using type entity could be clear and understandable
    const popularSinger : string[] = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];

    // this will show type with string of arrays[]
    const popularSingers : popularSinger[] = ["adrian", "narayan gopal", "asha bhusal", "tara devi", "rajesh payal rai"];

    // Combination of type alias and union is best for larger project when we reached some point where we may get
    // uncertain with our code for eg: 

    type mayBePopularSinger = popularSinger | null;
    // could be used as  type mayBePopularSinger = string | null;
    // but we are combining the unions with type alias

    let newPopularSingerCollection: mayBePopularSinger  = null;

    // donot provide empty array it will throw errors --> Type 'undefined[]' is not assignable to type 'string'.
    // instead supply strings of arrays declaring that mayBePopularSinger has string of array []
    let newPopularSingers: mayBePopularSinger[]  = ["donot", "supply","empty", "arrays"];


    /** Day - 11 - Data types in Typescript
     *           - Types of Data Type Typescript
     *           - Void Data type
     *           - Any Data type (Special Data type)
     *           - Errors Reading and handling
     */


    /**
     * 1. Data type
          - whenever we declare we except to provide it some kind of value right not only value
          but that particular value must have data types like it can be number,string, boolean, undefined, null
          so similarly in Typescript we have data type . As Typescript is superset of javascript it supports all
          the data types of Javascript.
          It is very important to learn and understand the data type. As data type is also responsible how 
          much memory it can hold/reserved after the variable is declared.
          It also inform the type of data it is holding with value.
     */

     // for eg: we have syntax 
     // [Keyword] [Variable Name]: [Data Type] = [Value];
     const firstString: string = "string Data type";
     const firstNumber: number = 45451211;
     const firstBoolean: boolean = true;
     const firstNull: null = null;
     const firstUndefined: undefined = undefined;

     

    //  2. Kinds of Typescript Data Types
    /***
     *                Typescript Data Types
     *                           |
     *          ----------------------------------------
     *          |                 |                    |
     *      Primitive Types      any          User-Defined Types
          - Number            (super set)        - enums
          - String             + special         - classes
          - Boolean            Data type         - interfaces
          - Void                                 - arrays
          - Null                                 - tuple            
          - Undefined 
    */


    /* Void Data type in Typescript
       - easiest and simplest data type in Typescript
       - it returns zero or nothing or no output:undefined
       - eg with function voidFunction
       - hover over the console.log we get console.log(..data: []):void and on over voidFunction we get const voidFunction: ()=> void 
       - this means typescript understands bydefault it is void data type if it is not returning anything
       - but it is always best practice to include the void 
    */

    const voidFunction = () => {
        console.log("this is void data type!");
    }

    const anotherVoidFunction = (): void => {
        console.log("This is void function ");
    }

    // examples showing the void returns undefined or nothing value
    let voidEg: void = undefined;
    voidEg = "I want to assign new value";
    // got error type 'string' is not assignable to 'void' type
    // solution will be
    voidEg = undefined;


    // 3. Any Data Type
     /** This is special data type which is superset of both User-defined and Primitive Data type
      *  Using this data type disable the Typescript type-checking and compile time checking
      *  this is dynamic and regarded as wrost data type (wrost based on its main feature)
      */

     // for eg: using any data type below shows that we can now do anything with our variable
     // this clearly shows Typescript has been disabled and it is loosing it's essence here 
     let arrow: any = "dilli";
     arrow = 4545;
     arrow = true;
     arrow = undefined;
     arrow = null;

    //  what the heck is .arrow() method it should have thrown error in normal case by Ts
    // but any data type means it could be any and Typescript does allow to do anything
    // this can surely brings bugs in big projects.
     console.log(arrow.arrow());



     /** Day - 12 - Continue Data Type in Typescript
      *           - Never & Unkown Data Type
      *           - Uses of never, any & unknown Data Type
      *           - Errors Reading , Handling & Solving
      */


     /**
      * Typescript any data type completely ignores the data type value assigned to the variable
      *  - but the advantages of any data type is if we donot know how to fix the bug or we got 
         - error only at a line no : 121 and then  at that  point we may be use any so that 
         - all program or project runs 

         ----- If you cannot fix error type any data 
         ----- It is best practice to use only 4 or 5 any data type in project
         ---- if you ever have to use any in project for more than dozen times
         ---  think/maybe you are lacking some proper knowledges and solving the errors
         ---  using any is like bottle with small/tiny holes
      */

     /* 1. Never Data Type 
            - This Data type may not be as popular as other Data types
            - it values(contain no value) that will be never and if we are using this means some values 
               will never occur in our project

            - used for throwing error or if we need to throw an expection or error
            then we make a function that will throw error 

            - use the never type to represent the return type of a function that always throws an error. For example:
               function raiseError(message: string): never {
                  throw new Error(message);
                }
    */

    // Eg of function throwing always never
    const neverFunctionExample = (): never => {
        throw "never";
    }


    // 2. Unknown Data Type
    /**
     *  - Introduced in Typescript version 3
        - Unknown Data type is somehow similar to any but we can only assign any and unknown(that means value)
          whose data type is not known to the unknown type so we can it is type-safety not like any which can bring
          bugs in our code so if we have to use unknown data type after it's declaration it must be precisely 
          defined with value and data type otherwise we cannot use it or access any properties.
    */

    // Example :
    let vAny: any = 708;
    let vUnknown: unknown = 822;

    let randomV: string = vAny;
    let randomUnknownV: string = vUnknown;

    // From above example we now clearly knew that
    // unknown data type cannot be assigned untill it's data type is known
    // so we get error ----> Type 'unknown' is not assignable to type 'string'.
    // but any can be used with no any error so Unknown data type is awesome and safe then any


    // this shows that unknown data type means we donot know yet what data type will be used in such cases
    /* but as we keep on working with project we will surely know exactly what data type will come 
       so in such cases we bring our unknown data type and assign the data type and use it.
    */

    /* For eg: How we assign the data type to unknown? 
              -> simply using as keyword we can assign required data type to unknown and use it in variable
    */


    let presentUnknownFutureKnown: unknown = 23;

    let nowWeKnowDataType: string = presentUnknownFutureKnown as string;
    //        ----> unknown  to  string data type

    // similarly can be used with any
    let pageNumberAny: any = "1";
    let pageNumberAnyT: number = pageNumberAny as number;


    let myWord: string = "one";
    let myNumbericWord: number = myWord as number;
    /* now we getting error as error --> Conversion of type 'string' to type 'number' may be a mistake because neither 
    type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
    */

    /**
     *     This means first converts string to unknown and unknown to number
     * -- this process/functionality is called type assertion in typescript
     *     ------------ string -----> unknown ---> number 
     */

    let mySolveNumbericWord: number = (myWord as unknown) as number;

    // Notes:-Best Practice to use void and unknown as well as never(which is not popular) & to avoid any data type.


    
     /** Day - 13 - Working with DOM in Typescript
      *           - Accessing the Elements Properties
      *           - Making Typescript Understands HtmlElement Types 
      *           - Adding Listener to Typescript
      *           - Errors Reading , Handling & Solving
      */

     // Working with DOM in Typescript
     const oneElement = document.querySelector(".select");

    //  Typescript has lots of types for DOM out of the box
    /**
      const oneElement = document.querySelector(".select");
      // here const oneElement is variable with .select as className

      Hovering over the oneElement we get oneElement: Element 
      this means it is Element or oneElement understands that it is element Data Type
     */

    /**
      As our Typescript Only understands the data type it has no idea 
      on markup , it doesnot parse it and doesnot see at all
      it only really cares/sees only about data types in typescript
    
    */

    const twoElement = document.querySelector(".select2");
    console.log('This is Two Element', twoElement.id);
    console.log('Typescript now understands the methods', twoElement.innerHTML);


    // Elements is the highest class in hiearchy


    // what if I want to do something with .select2 like I want to get the
    // value from it? 
    /**
     * Then we can simply do .value or .val like in jquery or js
     * right but it brings problems in Js
     * -- error- --> Property 'value' does not exist on type 'Element'.
     */

    console.log('oneElement', oneElement.value);

    // we can solve this by just passing the any data type
    console.log('oneElement', (oneElement as any).value);
    // BUT NEVER FOLLOW OR DO THIS CHANGE IT TO ANY THIS WILL BRING
    // CRACK IN CODE RATHER DO THIS BELOW

    const notGenericElement = document.querySelector(".select") as HTMLInputElement;
    const getHTMLElement = document.querySelector(".gettingValue") as HTMLImageElement;


    // This shows completely no error as HtmlInputElement does have .value method
    // that returns some value of HTMLelement
    console.log("Some are HtmlInput some are not we can access to properties with these methods ", notGenericElement.value);

    // Adding Listener to the Typescript

    const addListenerElement = document.querySelector(".listen");

    // Typescript supports the .addEventListener method which holds the two parameters
    // One parameter is event (in our case it is fade which is event name) -- fade means we try to fade it
    // then it has event function which is taking event param and logging the event and param event

    addListenerElement.addEventListener('fade', (event) =>{
        console.log('This is function event', event);
    });

    /** Hover over (event) we get 
     * event is actually Event which is generic , they are same generic 
     * both addListenerElement and event
     * this shows that event is also the highest class in hiearchy
    **/

    // How to read the event value now??
    // getting error when we want to get value from event .
    // error --> Property 'value' does not exist on type 'EventTarget'.

    addListenerElement.addEventListener('fade', (event) =>{
        const target = event.target as HTMLInputElement
        console.log('This is function event', target.value);
    });

    /**
     * as event is generic so we have to tell the typescript that event.target
     * is not generic but htmlelement that has value by declaring the target as variable
     * now we can remove the event and add target.value directly as we know htmlinputelement holds value 
    // Typescript Doesnot Have any access to our MARKUP
    /** 1. First Define the correct type of DOM Element
     *  2. Then Typescript will decide either that element has any method
     *  Element and Event is one of the highest class in  hiearchy.
     *  This may be the way to workout with DOM elements in Typescript.
    *  */


    /** Day 14 - Classes in Typescript (OOP-Concepts)
     *         - Basics of Classes, Fields, Methods 
     *         - Class Constructor and Class Instance Objects
     *         - Examples of Class in Typescript
     */

    /* 
    
    Classes in Typescript
       -> classes are the fundamental entities which are used to create reusable components.
       - Just like in OOP (object-oriented Progamming Language) like Java,C++ 
       - Typescript fully supports the Classes along with some added features,syntax & antonations
       - It is like a blueprint for creating objects in terms of OOP concepts 
       - and our Typescript is like OOP which suports classes, interfaces,
       - data binding. ES6 version of Js supports the classes and Good news is Typescript is based on 
       - ES6 and latest version.
       
       
    Classes Includes:
       - Fields  -- it is any variable declared in a class
       - constructors - allocating memory gor the objects of the class
       - methods or functions - represent the execution or actions taken by objects

    Basic Syntax of Class is
      class ClassName { 

      }
    */

    // this is an example of class in typescript with normal properties type
    class Books {
        name: string;
        pageNumber: string | number;
    }

    // accessing the  properties of Classes
    const books = new Books();
    books.name = "The art of war";

    /* constructor in Ts classes
    class Books {
            constructor(bookName: string){
            this.bookName = bookName
        }
    }
    Constructor is special function of the class that is responsible for intializing the variables/properties of Class
    - Ts has constructor keyword, it is a function and can be parameterized
    - here this keyowrd refers to current instance of the class object 
    - let's look with an example below the code we see bookName twicely once 
    - inside the parentheses of constructor function another as variables of class newBooks

    ### this ---> this keyword always avoid ambiguity, the class’s field is prefixed with the this keyword.
    */
    class newBooks {
        bookName: string;
        pageNumber: string | number;

        constructor(bookName: string){
            this.bookName = bookName
        }

        bookFunction() {
            console.log("This is function from inside the Class named newBooks !");
        }
    }

    // Creating Instance objects
    /**
      - With the help of new keyword we can create an instance class like constructor has created for us up there.
      - new keyword is responsible for instantiation. 
      - Basic syntax is --
        var object_name = new class_name([ arguments name ])
     */

    var egNew = new newBooks("Hello from instance objects");
    // Accessing Attributes 
    egNew.bookName;

    //accessing function's properties 
    egNew.bookFunction();

    // Examples of Class in Typescript

    class Guitar {
        guitarName: string;
        guitarRate: string | number;

        constructor(guitarName: string, guitarRate: number | string){
            this.guitarName = guitarName;
            this.guitarRate = guitarRate;
        }

        getGuitar(): string {
            return this.guitarName + " " + this.guitarRate;
        }
    }

    const fullGuitar = new Guitar("gibson les paul", 1960);



    /** Day 15 - Brief on Encapsulation(OOP-Concepts) 
     *         - Access Modifiers in Typescript 
     *         - Brief on Readonly in Typescript
     *         - Erros Reading & Handling
     */

    /* 1. Encapsulation Concept:
                  - It is one of the fundamental concept in object-oriented programming
                  - It is also often used to hide the the internal representation, state, or let's say working mechanism of any code/object 
                    from the outside which is also called information hiding.
                  - It also means a process where attribute is not visible from the outside of an object and we bundle it with 
                    methods that provide read or write access, such access facilities of writing and reading specific information is allowed
                    by encapsulation.

      2. Data Modifiers in Typescript
                  - From above definition of encapsulation of we might know that in OOP, the concept of
                    'Encapsulation' is used for making class (class that we have created in previous Day)
                    members public or private which means class can control the visibility of its data and 
                    members that are present inside it.

                Q. But how to control or take access of it?
                   - With the help of Access Modifiers we can do it.

               
                                     Access Modifiers
                                           |
            -------------------------------------------------------------------
            |                              |                                  |
          Public                        Private                         Protected
                   
    3. Note: By default Typescript treats properties and methods as public by default if no any modifier is applied to them.

    // Example below shows that class Buses methods and properties can be accessed by creating instance class object 
       it means busName and busCode are default till now by default . so keeping public busName or just busName is same.
    **/

    // 4. Public Modifiers: - All the public members can be accessed anywhere without any restrictions. 
    class Buses {
        // public busName: string;
        busName: string;
        busCode: string | number;
    }

    let Bus = new Buses();
    Bus.busName = "Sajha Yatayat";

    // 5. Private Modifiers
    class Os{
        private apple: string;
        osNumber: string | number;
        protected kernel: string;

        // protected and private can only be accessed inside the particular class.
        getOperatingSystem(): string {
            return `${this.apple} ${this.kernel}`;
        }

    }

    let OS = new Os();
    OS.apple = "ios operating system"; // we cannot directly accessed the private memebers
    // getting error --> Property 'apple' is private and only accessible within class 'Os'.
    OS.osNumber = 1999; // this is good can be complied


    /* 5. Readonly
            - Readonly is the one of keyword in Ts which allow us to only read the property of class, type or interface.
            - It cannot be modified but can be accessed from inside & outside too.
            - It all depends on their initializing/declaration part inside the class Constructor

            Example of syntax(may not be 100% accurate):
                  class className {
                      readonly propertyName: datatype;
                  }
                  let newClassName  = new className;
                  newClassName.propertyName;
     * 
    */



   /*** Day -16  -...continue Readonly , Readonly vs const
    *            - Interface + Class with access modifiers
    *            - Typescript - Static
    *            - Erros Reading & Handling
    */



   /**
    *  # Readonly vs const
              - const is variable but Readonly is access modifiers
              - we can make class immutable with Readonly but const cannot
              - initialization of const is in the declaration but for Readonly both in the declaration or in the constrcutor of same class

    *   Example of initializing the readonly in constructor of the same class:
              class Bikes {
                   readonly bikeName: string;

                   constructor(bikeName: string){
                       this.bikeName = "Royal Enfield";
                   }
              }
    * 
    */

    class collectionHistory {
        readonly historyBook: Date;
        modernBook: string;

        constructor(historyBook: Date){
            this.historyBook = historyBook;
        }
    }
    
    let oldBook = new collectionHistory(new Date(1972,05,4));

    // getting error --> Cannot assign to 'historyBook' because it is a read-only property.
    // as we have set the historyBook as readonly and is already declared as new Date(1972,05,04)
    oldBook.historyBook = new Date(1956,05,12); //getting compile error

    oldBook.modernBook = "Age of Empire";
    oldBook.modernBook = "Game of Thrones";


    /**
     * Props in a type (props --> means properties ) - readonly is also used in props 
     */

    type PI = {
        readonly PIValue: string | number;
        dynamic: string | number;
    }

    const newPI: PI = { PIValue: 3.14 };
    console.log(newPI.PIValue);

    // error --> Cannot assign to 'PIValue' because it is a read-only property.
    newPI.PIValue = "three point One Four";
    newPI.dynamic = "This is dynami vale";

    // If we want to make some property inside the class constant we can use readonly which is super handy

    class regularUser {
        firstName: string;
        lastName: string;
        readonly unchangeableName: string;

        constructor(firstName: string, lastName: string){
            // this firstName and outside firstName is different
            this.firstName = firstName;
            this.lastName = lastName;
            this.unchangeableName = firstName;
        }

        // trying the assign the value to unchangeableName
        changeUnchangeableName(): void {

            // error on compiling 
            this.unchangeableName = "Trying to change the unchangeable Name!"
        }

        getFullUserName(): string {
            return this.firstName + " " + this.lastName;
        }
    }

    const dailyUser = new regularUser("Dilli", "Hang Rai");
    console.log(dailyUser.firstName);


    /** # adding interfaces to the class 
     *  - if we want to add compulsory interface to the class then we add it 
     *  - by inserting interface directly to the class with implements keywords
        - class className interfaceName {
                   
                 }

        - implement keyword -- TypeScript will check and ensure that the object 
        actually implements all the properties and methods defined inside the interface.
     * 
     */
    interface addInterface {
        addingInteface(): string;
    }


    /* Day - 17   - Continue learning the intercept + static + class with access modifiers....
                  - inheritance in Typescript 
                  - Generics in Typescript...


    /** getting error -->Class 'mixinginterfaceExample' incorrectly implements interface 'addInterface'.
        Property 'addingInteface' is missing in type 'mixinginterfaceExample' but required in type 'addInterface'.ts(2420)
        main.ts(1272, 9): 'addingInteface' is declared here. */
    class mixinginterfaceExample implements addInterface {

    }

    // REMOVING ERROR SIMPLY BY INSERTING THE  addingInteface() method

    class validMixingInterfaceExample implements addInterface {
        addingInteface(): string{
            return "HELLO WORLD";
        }
    }


    /* ## Typescript - Static
            - Static is introduced in ES6 so does in Typescript. As name suggets static it has static functionality 

            -##very useful source: https://codingbeam.com/static-methods-properties-typescript-tutorial/ 

            - They are accessible by ClassName.[propertyName] or Class.[methodName].

            - Example:Math.floor() is a static method available in Math Class which don’t need any instance 
              for using it, and another example is Math.PI which has static value of 3.14.

            - The static methods and properties are available in a class which have the static functionality 
              and they are available without any instance object.
     * 
    */

    class exampleStatic {
        static gValue: number | string = 9.8;
        radius: number;
    }

    // look no error
    exampleStatic.gValue;

    // look error without instance objects
    exampleStatic.radius;

    // can be solved by creating instance object with new keyword
    let anotherStatic = new exampleStatic();
    anotherStatic.radius = 8548448;

    // This shows that static members are really static in class .let's another big example:
    /**
     * Example includes class with interface , readonly, protected, public, private and static members/methods
     */

    interface checkMe {
        getFull(): string;
    }


    /** Day - 18  - ...continue concept of inheritance in Typescript 
     *            - Generics in Typescript
     *            - Generate Unique id using generics too
     *            - Using Generics with Interface
    */

    class BigBoy implements checkMe {
        boyName: string;
        boyAge: string | number;
        private boyId: number = 822;
        public boyGender: string;
        protected boyCash: number | string = "Rs. 12000";

        static readonly boyEyeColor: string = "red";

        constructor(boyName: string, boyAge: number | string){
            this.boyName = boyName;
            this.boyAge = boyAge;
        }

        getFull():string {
            // return " getFull functio returns string";
            return this.boyName + " " + this.boyAge;
        }
        
        getBoy(): string {
            return this.boyCash + " " + this.boyId;
        }
    }

    let boy = new BigBoy("Dilli", "Hang");
    boy.boyGender = "male";
    boy.boyAge = 23;
    // try to get the protected and private data 
    BigBoy.boyEyeColor;
    boy.getBoy();
    boy.getFull();

    class Admin extends BigBoy {
        private editor: string 

        setEditor(editor: string): void {
            this.editor = editor
        }

        getEditor(): string {
            return this.editor
        }
    }

    /**
     * A class can reuse the properties and methods of another class. 
     * This is called inheritance in TypeScript. The class which inherits properties and methods is called the child class.
     * And the class whose properties and methods are inherited is known as the parent class. 
     * These names come from the nature that children inherit genes from parents.
    */

    /** Inheritance explanation in own words
     *  Inheritance is a major pillar of objected-orineted progamming.
     *  There are different kinds of inheritance in OOP but for now we are only using single heritance
     *  let me explain in plain langauage for exmaple if we check our DNA and compare to the parent's DNA we find the proof 
     *  or our information is surely being inherited similarly inheritance in OOP is also works in a same way.
     */

    /*
     * Single Inheritance in TypeScript: In single inheritance, the properties and behaviour of the base class
     *  can be inherited into at most one derived class. It used to add new functionality to the already implemented class.
     * Example: In this example, we are creating a Person as a base class and using single inheritance 
     * implementing Teacher as a Derived class.
     * class baseClassName {
           }
       class derivedClassName extends baseClassName {
       }
    */

    /**
     * Typescript - Generics
     *     - It is very important and we always need a reuseable components that makes the program flexible as
     *         well as scalable in the long-term.
     *     - Generics in Typescript helps us to create reusable component and make components work with any
     *       data type and not restrict to only one data type. 
     * 
     * 
     * 
     * 
     
    // Day - 19     - Continue with Generics in Typescript
                    - Understandig the Generics with Function
                    - Errors Reading & Handling

     *     - Generics in Typescript is similar to C# generics and can be called or used with a variety of data type.
     *     - Generics uses the type variable , a special kind of variable that denotes types.
     *       The type variable remembers the type that the user provides and works with that particular type only.
     *    - In generic we pass a parameter called type parameter which is put in between the lesser and greater sign
     *      < > for eg: < type_parameter_name>.
     */

    // Example of function without using generic
    function sum(items: any): any []{
        return new Array().concat(items);
    }

    const numArray = sum([1,2,3,4,5]);
    const stringArray = sum(['this is ', 'a ', 'string']);

    console.log(numArray);
    console.log(stringArray);

    //Example of function with using generics
    function getMe<T>(items: T[] ): T[] {
        return new Array<T>().concat(items);
    }

    let myNumArray = getMe<number>([451,45,856]);
    let myStrArray = getMe<string>(["Hello", "World"]);

    myNumArray.push(400);
    myStrArray.push("Pushing only string");

    // we are getting compile error because we have generic type T for myNumArray as type number number of array
    myNumArray.push("Hi this is array"); // Compile Error 
    // Generic Type <T> as string of array
    myStrArray.push(5000); // compile Error


    // Generate Unique Id with Generics
    // (obj) is throwing the warning called--> Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
    // this is because we have not provided any data type to the obje which is meant to be parameter of function addId
    // --> we use generics here <T> as Big T 
    const addId = <T>(obj: T) => {
        const id = Math.random().toString();
        return {
            ...obj,
            id,
        }
    }

    const userUniqueId = {
        name: "dilli",
    }

    const userResult = addId(userUniqueId);
    console.log("User Dilli has unique id --->", userResult);

    /**
     *  let's understand what is happening behind the scene
     *  we have Math.random() which generates unique numbers everytime
     * Math.random()
        0.6491192220278712
        Math.random()
        0.9413353472597261
        Math.random()
        0.3192014728573176

        .toString() method will make the number into string
        Math.random().toString()
        '0.0886374026599892'

        -- setting the js to print only first 16 digits
           Math.random().toString(16)
          '0.3e12dee113c9b'

        #Spread Operator (...) will copy the object.
    **/

    /*  const addId = <T>(obj: T) => {
        const id = Math.random().toString();
        return {
            ...obj,
            id,
        } }

    const userUniqueId = {
        name: "dilli",
    }

    const userResult = addId(userUniqueId);
    console.log("User Dilli has unique id --->", userResult);
    Hover over the addId then we get below code - which shows that generics has now understood the object type

    const addId: <{
        name: string;}>
    (obj: {
        name: string;}) => {
        name: string;
    } & {
      id: string;
    }
    */



    /* Day - 20    - Interfaces + Generics in Typescript
    *              - Setting Default  Generic Type
    *              - Reusable Generic Interface
    *              - Error Reading & Handling
    */


    /*  # Typescript Generics Interfaces
            - Like we use generics in Classes we can use generics with interfaces A generic typescript has generic type paramete list in an angle
            brackets <> 

            - syntax will be
            interface interfaceName <T> {
             // ...
            }
            - Now T type parameter will make all members visible to the Interface
    */

    interface exampleInterface<T> {

    }

    /* Typescript Generic Interface with type paramter can have one or multiple types 
      for eg: 
        interface namingInterface <A,B> {
           id: A;
           trade: B;
        }
      -  it consists of two/multiple parameters members key and value with corresponding types A and B
      - Type A and B can hold any data type and value inside the namingInterface members

    **/

    interface naming <A, B> {
        id: A;
        trade: B;
    }

    let ownName: naming <number,string> = {
        id : 708,
        trade: "Trademark"
    }

    // Holding A as number and B as string here similarly can be used with other local variables
    let otherName: naming <boolean, null> = {
        id: true,
        trade: null
    }

    const createId = <T> (obj: T) => {
        const myId = Math.random().toString(16);
        return {
            ...obj,
            myId
        };
    };

    // creating interface to use/pass in Generics Type <T> 
    interface creatingInterface {
        userName: string;
    }

    // creating a constant user which will have unique 16 characters string
    const otherUser: creatingInterface = {
        userName: "Dilli Hang Rai",
    }

    // Here calling a createId function which will have interface as Generics with parameter otherUser
    // This is also an example of explicit declarations which help to read code more easily
    /* Hover over createId to show -- > 
           const createId: <creatingInterface>(obj: creatingInterface) => creatingInterface & {
                      myId: string;
            }
    * */
    const finalOutput = createId <creatingInterface> (otherUser);
    console.log("FinalOutput is  ", finalOutput);

    // PROBLEM HERE IS CODE CAN BE BROKEN WITH ANOTHER TYPE 
    /* Now our function works as obj -->  const createId: <string>(obj: string) => string & { myId: string; } */
    const finalResult = createId <string> ("This is string ");
    console.log("FinalResult is --> ", finalResult);

    // This code can be used more secure by setting the default Generic type as <T extends object> with our function at previous stage

    const sumId = <T extends object> (obj: T) => {
        const uId = Math.random().toString(16);
        return {
            ...obj,
            uId,
        };
    };

    interface sumInterface<k> {
        name: string;
        data: k;
    }

    const namingUser: sumInterface <number> = {
        name: "Dilli",
        data: 451.10,
    }

    //getting error as -Type 'string' does not satisfy the constraint 'object'.
    const finalUser = sumId<string>("adding string"); 
    console.log("finalUser is --> ", finalUser);

    // This will satisfy our condition that satisy the setting default Generic Type as <T>
    const finalUsers = sumId<sumInterface>(namingUser);
    console.log("FinalUsers --->", finalUsers);


    //## Reusable Generics with Interface

    /** Examples of creating flexible and reuseable generic interface
     * - Here <U> is set as default genetic type
     * - These examples shows clear idea that helps us to avoid creating many interfaces repeatedly
     */
    
    interface commmonInterface<U> {
        superName: string;
        address: U;
    }

    const customUser: commmonInterface< { object: string } > = {
        superName: "Dilli",

        // this is like json object
        address: {
            object: "Itahari",
        },
    };

    let dynamicUser: commmonInterface <string [] > = {
        superName: "dilli",
        address: ["Itahari", "Sunsari", "Nepal"],
    }


    /* Day - 21  - Enums in Typescript
                 - Types of Enums in Typescript
                 - Intialization of Enums    
    */

   /**
    * Enums/Enumeration in typescript
    * - It is a special 'class'that represents a group of constants(unchangeable variables).
    * - It is new data type in Typescript as introduced in other langauges such as Java or C++
    * - It allows to create a set of named constant 
    * - this is like collection of related values that can be string or nunmber values
   */

    // Types of Enums in Typescript
    /**
                        Enums
                          |
    ----------------------------------------------------
    |                     |                           |
    Numeric enum        String enum              Heterogeneous enum

    // Basic Syntax of Enum
          enum enum_name {
              // values....     
            }
    */
   
    // Basic Syntax Example: 
    enum exampleEnum {

    }

    /**
     *  Initializing of Numberic Enums
     *     # Default - Numeric Enums
             - By default, enums will initialize the first value to 0 and add 1 to each additional value:
           
           # Mannual Initializing
            - But we can intialize it by giving the value of the first numeric enum and have it auto increment from that
    */

    // Default Enums
    enum defaultEnum {
        up,
        down,
        right,
        left
    }

    let currentEnum = defaultEnum.up;
    console.log(currentEnum); // check logs should be 0 
    
    // Setting Mannual Enums
    enum mannualEnum {
        up = 1,
        right = 4,
        left = 10,
        down =5,
    }

    console.log(mannualEnum.up);
    console.log(mannualEnum.down); // logs must be 4
    // It is not necessary to assign sequential values to Enum members they can have any value

    // Fully Initializtion of Numeric Enums
    enum statusCode {
        errorCode = 404,
        internalError = 500,
        myId = 822,
        success = 200,
    }

    console.log(statusCode.errorCode); // logs must be 404
    console.log(statusCode.success); //logs must be 200


    /** String Enums
     *     - Enums can also contain strings
     *     - This Enum type is also popular because of it's readability and debug helper
     *     - There values are intialized with string values rather than numeric values
     *     - unlike numeric enum string enums are not auto-incremented
     * 
     *  let's understand with examples
     */
    enum stringEnum {
        up = "upward",
        down = "downward",
        right = "rightSide",
        left = "leftSide"
    }

    console.log(stringEnum);
    // output will be { up: 'upward', down: 'downward', right: 'rightSide', left: 'leftSide' }
    console.log(stringEnum.left);
    stringEnum['rightSide']; //return rightSide

    // Heterogeneous Enum - As name suggets they are enums type that contain both string and numeric values
    enum heteroEnum {
        status = "active",
        statusCode = 100,
        pending
    }

    heteroEnum.status;


    /* Day - 22  - Brief on object
    *            - object vs Objects in Typescript
    *            - Typescript Objects
    *            - Types of Typescript Objects
    */


    /* # Brief on object:
              - object is alos known as real world entity
              - it can include properties, methods and more importantlty state and behavior
              - State of the object is represented by data members or fields
              - Behaviour is represented by methods.
       

      # object in Typescript
        - It is an instance which contains set of key value pairs covered by curly braces{}
          { name: "dilli" }
             |        |
            key     value
        - assigned values can be scalar, functions or array
    **/

        var objectCollection = {
           key1: "this is value or scalar value",
           key2: function (){
                   console.log("Key returning the function ")
           },
           //collection
           key3: ["array element1", "array element2", "array element3"],
       };

       let userObj = {
           name: "dilli",
           id: 822,
           age: 23,
       }

       userObj.name;
       userObj.id;

    /**
     *   # object vs Objects
     *     - one is small/lowercase 'o' object and another is uppercase 'o' Objects
     *     - object = represents all non-primitive values 
     *     - Object = type describes the functionality of the objects(like method)
     *  for eg: the Object type has the methods toString(),valueOf methods that can
     *            be accessible by any object.   
     * 
     * 
     *    let eg: {} = {};
     *    console.log(eg.toString());
     *             
     *   // output will be
     *     [object Object]
     *       eg     toString
     */

    let exampleObjects: {} = {};
    console.log(exampleObjects.toString());

    let anotherexample: { key1: number } = { key1: 450};
    console.log(anotherexample.toString());


    /** ## Typescript object -
     *  - It reprsents all values that are primitive types.
     
     * # Primitive types in Ts.
     *  - The primitive types in TypeScript are the
     *  Number, Boolean, String, Void, Null, Undefined types, and Enum types.
     *
    */


    /** Day - 23   - Brief on Index Signature in Typescript
     *             - Utility Types in Typescript
     *             - Discussion on Popular utility Types
     *             - Examples of Popular/Globally available utility Types
    */


    /*  # Index Signature: 
              -> In very simple term , index signature in Typescript is made to type objects of unknown
              structure when we only know the key and value types.

        // Syntax of Index Signature
           { [key: KeyType]: ValueType }
               |      |          |
            key---> it's type  --> value type(numbers,string)
    */

   // Examples of using index signature here
   interface nameInter {
       [key: boolean]: boolean,
       [key: number]: string,
       [key: string]: string | number | boolean, // adding union to value type
   }

   function namingFun(nameInter: string){
       return "Hello " + nameInter;
   }

   namingFun("Dilli");

   let exampleMore: nameInter = {
       "indexKey1": "string1",
       "indexKey2": "string2",
       708: "Dilli Hang ",
       822: "BIB no",
       "unionEg": false,
       true: false, 
   }

   //example of index signature
   let nameCollect: { [index: string]: number } = {}
   nameCollect.Dilli = 23;
   console.log(nameCollect);
   // output will be { Dilli: 23 }

   nameCollect.HangRai = "string"; //compile error -> Type 'string' is not assignable to type 'number'

   //Index signatures like this one can also be expressed with utility types like Record<string, number>.
   // we will now discuss about utility in typescript


   /*
    # Utility in Typescript
      - we have use type keyword to determine the data type in the previous learning right 
      - as Typescript has large number of types so sometimes we need to know the common type manipulation
      - or type which is used to facilitate common type transformations is known as UTILITY TYPES.
      - UTILITY TYPES are used to create a new type from an existing type.

      // Typescript also provide buch of globally available utilites
      // examples: Partial<Type> Required<Type> Omit<Type>
   */


    /* 
      #Partial 
        - This utility type create a new type , setting all of the properties of the given 
          argument type to optional. Takes a type as an argument.
        - It changes all the properties in an object to be optional.
    
    */

    // Interface
    interface guitar {
        model: string | number;
        name: string;
        price: string | number;
    }

    let newGuitar: guitar = {
        model: 45154,
        name: "hex",
        price: 15000
    }

    let oldGuitar: guitar = {
        model: 451,
        name: "gibson",
    }

    // error be-->Property 'price' is missing in type '{ model: number; name: string; }' but required in type 'guitar'.ts(2741)
    // 'price' is declared here.
    // error has araise because our interface always checks the members present inside it with correct data type
    // SO what if we may not need either model, name , price any properties for that utility types comes to rescue
    

    /** Day - 24 - continue Typescript Utility Types 
    *            - keyof in Typescript
    *            - revision from the start
    */

    let exampleGuitar: Partial<guitar> = {
        model: "epiphone",
        name: "gibson les paul"
    }
    // see no error even not providing price, this shows partial has made type to arguments which are optional
    exampleGuitar.model;

    /** # Required and Record Utility 
     *        --> Rewuired changes all the properties in an object to be required.
     *             It also takes a type as an argument.
     *             It changes properties in an object which must be included eventhough it is optional as ? inside the interface
     * */ 

    // for example of required utility
    
    interface Maths {
        calcus: string;
        variables: string;
        equation?: string;
    }

    // with required utility 
    let studentMaths: Required<Maths> = {
        calcus: "Very interesting",
        variables: "declare a variable",
    }

    // getting error as ---> Property 'equation' is missing in type '{ calcus: string; variables: string; }' but required in type 'Required<Maths>'.ts(2741) -- 'equation' is declared here.

    // solve error by providing the equation
    let studentMath: Required<Maths> = {
        calcus: "Very interesting",
        variables: "declare a variable",
        equation: "no equation"
    }

    // # Record utility is used to define an object type with a specific key and value type.
    // Record<string, number> is equivalent to { [key: string]: number }

    const fixedUser: Record <string, number> = {
        'Bob': 51,
        'Marley': 41
    }
    
    const errEg: Record <number, string> = {
        1: "string",
        "string": 1, // getting error as
        /** (property) "string": number
        Type '{ 1: string; string: number; }' is not assignable to type 'Record<number, string>'.
        Object literal may only specify known properties, and '"string"' does not exist in type 'Record<number, string>' **/
    }

    /** # Pick utility Type
     *            - As name suggest Pick means to pick any selected items
     *            - Like if we go to the market or store we donot buy all the items right? we only pick the required items from store, grocery or from shop
     *            - similar in programming like we pick required specific data/ object from common interface or some sort of data collection
     *      # syntax is Pick<Type, keys>
     *            - Pick removes all but the specified keys from an object type.
     *            - It creates a new type, by picking the set of properties from a given type. It takes two arguments: a type and a string or union of strings.
     */ 

    // for example
    interface constantUser {
        id: number | string,
        name: string,
        email: string,
    }

    const pickedUser: Pick <constantUser,"id" | "name"> = {
        id: 1,
        name: "dilli"
    }

    pickedUser.name;
    pickedUser.id;
    // This will create a new type with only supplied properties of id and name as pick arguments


    /**  Omit Utility Type
     *                 - This is exact opposite of pick utility type in the pick type
     *                 - we only pick the selected ones but with Omit we reject or donot include the properties
     *      # syntax will be
     *             Omit <Type, keys>
     * let's understand with example.
    **/
    interface exOmit {
        id: string | number;
        first_name: string;
        last_name: string;
        address: string;
        age: number;
    }

    const exampleOmit: Omit <exOmit, "address" | "age"> = {
        id: 708,
        first_name: "Dilli Hang",
        last_name: "Rai",
    }

    const erroromit: Omit<exOmit, "id" | "first_name" | "last_name"> = {
        age: 23,
        address: "Tarahara",
        id: 822
        // getting error as --Type '{ age: number; address: string; id: number; }' is not assignable to type 'Omit<exOmit, "id" | "first_name" | "last_name">'.
        // Object literal may only specify known properties, and 'id' does not exist in type 'Omit<exOmit, "id" | "first_name" | "last_name">
    }
    // Exclude utility type removes types from a union
    type excludeExample = number | boolean;
    const myValue : Exclude<excludeExample, number> = 15454; // error as --Type '15454' is not assignable to type 'string | boolean'.


    /** #Keyof in Typescript
     *        - It is a keyword in Typescript which is used to extract the key type from an object type
     *        - It is similar to typeof used in javascript which is very important while debugging.
     *         The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
     */ 

    interface egKey {
        name: string,
        age: number
    }

    let pupil: egKey = {
        name: "harry",
        age: 22
    }


    /* Day - 25  - keyof in Typescript
                 - Typescript Exercises with examples
                 - Short explaination on Exercise
                 - source w3schools.com
    **/

   /** keyof
    *    - It is a operator which takes an object type and it is used on an object type with explicit keys
    *    - It createa a union type with those keys.
    *    - It is used to extract the key type from an object type.
    * 
    */

   type foam = {
       name: string;
       id: number;
       location: string;
   }

   type hippo = keyof foam;
   // now the hippo will be union of types "name" | "id" | "location"

   // can be used for non-primitive types
   type BooleanKeys = keyof boolean; // hover over type identifier --> "valueOf"
   type numberingKeys = keyof number; // hover over type identifier --> "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
   type SymbolKeys = keyof symbol; // "toString" | "valueOf

   // interface + function with keyof
   interface collect {
       name: string;
       founder: string;
       year: number;
   }

   function findCollect(collection: collect, details: keyof collect){
       console.log(`finding the right collection is ${details}: "${collection[details]}"`);
   }

   let finalCollect = {
       name: "smaple",
       founder: "alibaba",
       year: 1999,
   };

   findCollect(finalCollect, "name"); // it should give  finding the right collection is: "sample".

   // Exercise 1 - Typescript allows developers to add types to the javascript.

   let eam: string = "this is string"; // this feature is not allowed in Js
   let eamM = "string";

   // Exercise 2 - Javascript is loosely typed language where as typescript is not.
   eam.toLocaleLowerCase();
   eam.hike(); // this is error in typescript but no error in pure javascript file


   // Exercise 3 - Typescript allow or provide feature of configuration throught tsconfig.json file 
   // which is javascript notation format .json whereas Javascript doesnot have any config file


   // Exercise 4 - Methods to assign type/ method to type anotation in Typescript
   // one is explicitly and another is implictly

   // Explicit --> adding a type directly to our codebase
   const deer: string = "animal";
   let river: string = "source of water";

   // Implicit --> adding a type / inferred by the Typescript inference
   let dynamic = "inferred string";
   // hover over dynamic to see --> let dynamic: string

   // Exercise 5 -  How to disable type checking in Typescript
   // simply adding special data type any 

   let all: any;
   all = null;
   all = "string";
   all = 4515454;


    /*
 // Day - 26  - Typescript Tuples 
              - Operations in Tuples
              - Tuples in functions 
              - Readonly and Destructuring of Tuples
*/
 /** ## Typescript Tuples 
            - Arrays are the set of collection of similar in a general way of understanding.
 *           - It is a new data type which contain minimum two or more than two values of different of data types.
 *           - We define tuple by speciying the each element data type inside the array for eg: nameofTuple = [number,string,boolean];
 *           - It has pre defined length and types for each index.       
 * 
// This could be lengty process if we want to store the different data types inside the collection
var exampleTupe: number;
var exampleTyple:string;

// Tuples comes in resuce where we can makeour array more secure
// Definiing Tuples: 
let namesCollection = ["Hello", true, 0.154, null]; // this is an ordinary array with different data types

// correctlydefined tuples with different data types
let ourArrays: [boolean, string, number] = [true, "This is a string", 45154];

var universeArray: [string, number, boolean];
universeArray = ["string", 454, true];

// what if I want to put it in random data types inside the universeArray
universeArray = [true, "string", 87845848]; // compile error

// error --> Type 'boolean' is not assignable to type 'string' 
// assign correct data type inside the defined element data type
*/

let correctTuples: [string, number, boolean];

// should have   
/* let correctTuples: [string, number, boolean];
                        |        |       |  
      correctTuples = ["string", 7058, false];
 */

correctTuples = ["string", 7058, false];

// Operations in Tuples
// -- Push and Pop
/**
 * push -- add element to the tuple 
 * pop -- remove the element to the tuple
 */
correctTuples.push("addingstring");
correctTuples;
correctTuples.pop();


// Update/modify the  Tuple Elements
let delTup = ['physics', 'maths','c','dl'];
delTup[0] = 'It';
console.log(delTup); // output will be  ['It', 'maths','c','dl'];


// # Tuples could be cleared but cannot be deleted or tuple variables cannot be deleted
// we can clear the fields of a type by assigning it with an empty tuple field 
let empTuple = ["Hari", "25", "Javascript"];
empTuple = [];
console.log(empTuple); // output []

// Readonly tuple 
/** - It is good practice to make our tuple readonly.
 * -Tuples only have strongly defined types for the initial values.
 * 
 */

const makeTup: readonly [number, boolean, string] = [822, true, "This is string"];
makeTup.push("trying to push something!"); // compile error
// getting error as --> Property 'push' does not exist on type 'readonly [number, boolean, string]'.

/**
 * If you have ever used React useState function then you might have notice we initially state the set values and types
 *   useState returns a tuple of the value and a setter function.
 *   const [mobileNumber, setmobileNumber] = useState('98245154115') is a common example.
 *  Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.
 */
























    

    



























    

    
   









                       














    


    
























    







  







