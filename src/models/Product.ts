export class Product {
    id: number;
    name: string;
    duration: string;
    price: string;
    coverImage: string;

    constructor(
        name: string,
        duration: string,
        price: string,
        coverImage: string
    ) {
        this.id = Math.random();
        this.name = name;
        this.coverImage = coverImage;
        this.duration = duration;
        this.price = price;
    }
}
