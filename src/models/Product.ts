export class Product {
    id: string;
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
        this.id = new Date().toISOString();
        this.name = name;
        this.coverImage = coverImage;
        this.duration = duration;
        this.price = price;
    }
}
