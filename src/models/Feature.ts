export class Feature {
    id: number;
    description: string;
    title: string;
    image: string;
    constructor(title: string, description: string, image: string) {
        this.id = Math.random();
        this.description = description;
        this.title = title;
        this.image = image;
    }
}
