function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false && typeof input =='string'){
        return input.toLowerCase();
    }
    return input.toUpperCase();
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=>item.rating>4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books);


  function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((acc, array) => acc.concat(array), []);
  }

      // Output: ["a", "b", "c"]
 





class Vehicle{
    private make: string;
    private year:number;
    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model: string;
    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }
    getModel(){
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");



function processValue(value: string | number): number{
    if(typeof value ==='string'){
        return value?.length;
    }
    else if(typeof value ==='number'){
        return value*2;
    }
    else{
        return 0;
    }
}



interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
      return null;
    }
    let mostExpensiveProduct = products[0];
    for(let i = 1; i < products.length; i++){
      if(products[i].price > mostExpensiveProduct.price){
        mostExpensiveProduct = products[i];
      }
    }
    return mostExpensiveProduct;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    switch(day){
      case Day.Monday:
        return "Weekday";
      case Day.Tuesday:
        return "Weekday";
      case Day.Wednesday:
        return "Weekday";
      case Day.Thursday:
        return "Weekday";
      case Day.Friday:
        return "Weekday";
      case Day.Saturday:
        return "Weekend";
      case Day.Sunday:
        return "Weekend";
      default:
        return "Invalid";
    }
  }
  
  
  


  async function squareAsync(n: number): Promise<number>{

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(n < 0){
          reject("Negative number");
        }
        else{
          resolve(n * n);
        }
      }, 1000);
    });

  }

  


  