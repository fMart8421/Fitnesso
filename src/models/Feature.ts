export class Feature {
    id: string;
    description: string;
    title: string;
    image: string;
    constructor(title: string, description: string, image: string) {
        this.id = new Date().toISOString();
        this.description = description;
        this.title = title;
        this.image = image;
    }
}
