// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsContainer = document.createElement('div');
postsContainer.classList.add('postContainer');
document.body.appendChild(postsContainer);


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        for (const post of postsArray) {
            let postBox = document.createElement('div');
            postBox.classList.add('postBox');
            let postId = document.createElement('h3');
            postId.innerText = `User ID: ${post.userId} Id: ${post.id}`;
            let postTitle = document.createElement('h2');
            postTitle.innerText = post.title;
            let postBody = document.createElement('p');
            postBody.innerText = post.body;
            postBody.classList.add('postBody');
            let postButton = document.createElement('button');
            postButton.classList.add('postButton');
            postButton.innerText = 'Read comments';

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(commentsArray => {
                    for (const comment of commentsArray) {
                        if (comment.postId === post.id) {
                            let commentBox = document.createElement('div');
                            commentBox.classList.add('commentBox');
                            postBox.appendChild(commentBox);
                            let commentTitle = document.createElement('h4');
                            commentTitle.innerText = `${comment.name} (${comment.email})`;
                            let commentBody = document.createElement('p');
                            commentBody.innerText = comment.body;
                            commentBox.append(commentTitle,commentBody);

                            postButton.onclick = () => {
                                commentBox.classList.toggle('openComments')
                            }
                        }
                    }
                })
            postsContainer.appendChild(postBox);
            postBox.append(postId,postTitle,postBody,postButton)
        }
    })