class Product{
    // name;
    // rating;
    // price;
    #rating;

    constructor(name, price, rating){
        console.log("Calling the Constructor")
        this.name = name;
        this.price = price;
        this.#rating = rating;

    }
// member Function

    display(){
        console.log(this)
        console.log("Display the product " + this.name, this.price, this.#rating);
    }
// static method can call only by using class name
    static custom(){
        console.log(" hey Static ")
    }

    getRating(){
        console.log(this.#rating)
    }

    setRating (r){
        if(r < 0) return;
        this.#rating = r;

    }

}

const op = new Product("OnePlus", 30000, 5);
const ip = new Product("Iphone-15", 100000, 4.5)
op.setRating(5.5)
op.getRating()
// console.log(op);
// console.log(ip);
op.display();
ip.display();

Product.custom();