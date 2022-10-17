export class Post {
    id: string;
    user: {
        image: string;
        name: string;
    };
    title: string;
    description: string;
    backgroundImage: string;
    tag: string;

    constructor(
        id: string,
        user: {
            image: string;
            name: string;
        },
        title: string,
        description: string,
        backgroundImage: string,
        tag: string
    ) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.tag = tag;
    }
}
