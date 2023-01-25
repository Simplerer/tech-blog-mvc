const deleteForm = async function (event) {
    event.preventDefault();

    const postId = window.location.toString().split('/').pop();
    const id = document.querySelector('#userId').value

    const response = await fetch(`/api/dashboard/delete/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace(`/dashboard/${id}`);
    } else {
        alert('Failed to delete!')
    }
}

document
        .querySelector('#delete')
        .addEventListener('click', deleteForm);