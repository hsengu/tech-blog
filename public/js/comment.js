async function commentBtnHandler(event) {
    event.preventDefault();
    $('#add-comment-modal').on('shown.bs.modal', function () {
        $('#comment-text').trigger('focus')
    });
};

async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#comment-btn').addEventListener('click', commentFormHandler);
document.querySelector('.add-comment-btn-form').addEventListener('click', commentBtnHandler);