class Comment {
    constructor(comment, imageId) {
        this.id = this.constructor.id++;
        this.comment = comment;
        this.image = this.findImage(imageId);
        this.constructor.all.push(this);
    }

    // find an image object by id, add comment to it
    // and return the image object
    findImage(imageId) {
        const image = Image.all.find(image => image.id === imageId);
        image.comments.push(this);
        return image;
    }
}

Comment.all = [];
Comment.id = 0;
