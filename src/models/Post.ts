export class Post {
    user: {
        image: string;
        name: string;
    };
    title: string;
    description: string;
    backgroundImage: string;
    tag: string;

    constructor(
        user: {
            image: string;
            name: string;
        },
        title: string,
        description: string,
        backgroundImage: string,
        tag: string
    ) {
        this.user = user;
        this.title = title;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.tag = tag;
    }
}
