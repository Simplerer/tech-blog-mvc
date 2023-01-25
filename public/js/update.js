const editForm = async function (event) {
    event.preventDefault();

    const postId = window.location.toString().split('/').pop();
    const id = document.querySelector('#userId').value

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

    const response = await fetch(`/api/dashboard/update/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace(`/dashboard/${id}`);
    } else {
        alert('Failed to Update!')
    }
}

document
        .querySelector('#post-form')
        .addEventListener('submit', editForm);