class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  // add a listener to all form elements
  // to create and render a new comment when submitted
  addCommentFormListener() {
    const forms = document.querySelectorAll('.add-comment')
    for (const form of forms) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const imageId = parseInt(event.target.dataset.id);
        const commentText = event.target.querySelector('.user-text').value;
        const commentObject = new Comment(commentText, imageId);
        this.render(commentObject);
      });
    }
  }
}
