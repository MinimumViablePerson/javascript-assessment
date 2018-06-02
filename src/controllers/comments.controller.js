class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  // initialise comment controller
  // by adding event listener to all form elements
  init() {
    this.addCommentFormListener()
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

  // append the comment element to the target image
  render(commentObject) {
    const targetImage = commentObject.image;
    const commentElement = commentObject.commentEl();
    const commentSection = document.querySelector(`#comments-${targetImage.id}`);
    commentSection.innerHTML += commentElement;
  }
}
