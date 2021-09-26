// Event handler to focus modal when opened
async function addBtnHandler(event) {
    event.preventDefault();
    $('#add-post-modal').on('shown.bs.modal', function () {
        $('#post-title').trigger('focus')
    });
};

// Event handler to handle form submission for creating a post
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[id="post-title"]').value;
    const post_text = document.querySelector('textarea[id="post-text"]').value;

    console.log(`${title} ${post_text}`)

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#publish-btn').addEventListener('click', newFormHandler);
document.querySelector('.add-post-btn-form').addEventListener('click', addBtnHandler);