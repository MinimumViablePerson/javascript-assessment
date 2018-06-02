class Comment {
    constructor(comment, imageId) {
        this.id = this.constructor.all.length;
        this.comment = comment;
        this.image = this.findImage(imageId);
        this.constructor.all.push(this);
    }
}

Comment.all = [];
