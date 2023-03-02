import { IsNotEmpty,IsNumber,IsPositive } from "class-validator";
class Product{
    
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;

    constructor(title:string,price:number) {
         this.title = title;
         this.price = price;
    }

    getProduct(){
        return [this.title,`${this.price}`];
    }
}

export default  Product;