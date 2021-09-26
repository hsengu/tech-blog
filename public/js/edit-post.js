async function editBtnHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#delete-post-btn').value
             = document.querySelector('#publish-edit-btn').value 
             = event.target.querySelector('.btn').value;

    await fetch(`/api/posts/${id}`).then(res => {
        if(res.ok) {
            return res.json();
        } else {
            alert(res.statusText);
        }
    }).then(data => {
        document.querySelector('input[id="edit-post-title"]').value = data.title;
        document.querySelector('textarea[id="edit-post-text"]').value = data.post_text;
    });

    $('#edit-post-modal').on('shown.bs.modal', function () {
        $('#edit-post-title').trigger('focus')
    });
};

async function editFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#publish-edit-btn').value;
    
    const title = document.querySelector('input[id="edit-post-title"]').value;
    const post_text = document.querySelector('textarea[id="edit-post-text"]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

async function deleteFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#delete-post-btn').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};


document.querySelector('#delete-post-btn').addEventListener('click', deleteFormHandler);
document.querySelector('#publish-edit-btn').addEventListener('click', editFormHandler);
document.querySelector('.posts').addEventListener('submit', editBtnHandler);