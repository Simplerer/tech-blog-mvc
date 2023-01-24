const postForm = async function (event) {
    event.preventDefault();
    const userId = document.querySelector('#userId');
    const id = userId.value
    console.log(id)

    const title = document.querySelector('#post-title');
    const content = document.querySelector('#post-content');

    const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            content: content.value,
            user_id: id,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/dashboard/${id}`);
    } else {
        alert('Failed to post!')
    }
}

document
    .querySelector('#post-form')
    .addEventListener('submit', postForm);