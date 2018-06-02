class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  // add a listener to a form element
  // to create and render a new comment when submitted
  addCommentFormListener() {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const commentText = event.target.querySelector('.user-text').value;
      const imageId = parseInt(event.target.dataset.id);
      const comment = new Comment(commentText, imageId);
      this.render(comment.commentEl(), comment.image);
    });
  }
}
