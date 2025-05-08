## What are some differences between interfaces and types in TypeScript?
 -  Interface and type are use to define the structure of object but there are have some  difference . 
    Type: Type option give opportunity  describes the various data types supported 
    by the language. Type divided are three major section ,(Any type, Built-In type, User-Defined type). Type feature provide us data types collect, more flexibility and use for primitives, unions and tuples. Write type keyword for use this feature

    Interface: Interface define a standard structure . Interface follow the syntactical contract. less flexible compared to type. For this feature need to write interface keyword. this feature supports multiple merged declaration and multiple interface same name we can merged. Interface supports implementing and 
    extending union types but can't create intersection interfaces and can't used with other types of declaration.
    
```js
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
}

```



## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enum is Awesome feature . this feature allow to set of named constants and makes the code more readable and maintainable. Typescript support two kinds of Enum 
string Enum and Numeric Enum. String Enum must be initialized efficiently and Numeric enums can be uninitialized and numeric Enum start auto increment from 0.

```js
// String Enum
enum AccountType {
  PERSONAL = "Personal",
  STARTUP = "Startup",
  ENTERPRISE = "Enterprise",
  CUSTOM = "Custom",
}
// Numeric Enum
enum BillingSchedule {
  FREE = 0,
  MONTHLY,
  QUARTERLY,
  YEARLY,
}
```