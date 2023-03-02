import lo from 'lodash';

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { validate } from 'class-validator';

import Product from './class';

//NOTE: Example of using a js library with ts.
console.dir(lo.shuffle([1,2,3]));

const data = [
    {
        title: 'Carpet',
        price: 19.99
    },
    {
        title: 'Book',
        price: 9.99
    }
]

// const loadedProducts = data.map(item => {
//     return new Product(item.title,item.price);
// });
const loadedProducts = plainToClass(Product, data);

for(const loaded of loadedProducts){
    console.log(loaded.getProduct());
}

//NOTE: Test the library class-validator.
const newProduct = new Product('',-5.99);
validate(newProduct).then(error => {
    if(error.length > 0){
        console.log('Validation errors 💀');
        console.log(error);
    }else{
        console.log(newProduct.getProduct());
    }
})



