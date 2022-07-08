// @ts-ignore
import {IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString} from "class-validator";

export class Product {

    @IsNotEmpty()
    title:string

    @IsNumber()
    @IsPositive()
    price:number

    constructor(t:string,p:number) {
        this.title = t;
        this.price = p
    }
    getInform(){
        return [this.title, `${this.price}$`]
    }
}