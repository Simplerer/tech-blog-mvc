const commentForm = async function (event) {
    event.preventDefault();

    const postId = window.location.toString().split('/').pop();
    const id = event.target.dataset.id
    const comment = document.querySelector('#comment').value

    const response = await fetch(`/api/dashboard/comment`, {
        method: 'POST',
        body: JSON.stringify({
           comments: comment,
           user_id: id,
           post_id: postId, 
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to post!')
    }
};


document
        .querySelector('#comment-value')
        .addEventListener('submit', commentForm);