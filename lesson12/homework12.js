// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let postsContainer = document.getElementsByClassName('postsContainer')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(postsArray => {
//         for (let post of postsArray) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('postBox')
//             let postUserId = document.createElement('h3');
//             postUserId.innerText = `User id: ${post.userId}`;
//             let postTitle = document.createElement('h2');
//             postTitle.innerText = `Title: ${post.title}`;
//             let postBody = document.createElement('div');
//             postBody.innerText = post.body;
//             postBody.classList.add('postBody')
//
//
//             postsContainer.appendChild(divPost);
//             divPost.append(postUserId,postTitle,postBody)
//         }
//     });

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsContainer = document.getElementsByClassName('commentsContainer')[0];
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentsArray => {
        for (const comment of commentsArray) {
            let divComment = document.createElement('div');
            divComment.classList.add('divComment');
            let idBlock = document.createElement('h3');
            idBlock.innerText = `Post ID: ${comment.postId}, Comment ID: ${comment.id}`
            let userName = document.createElement('h2');
            userName.innerText = comment.name;
            let userEmail = document.createElement('h3');
            userEmail.innerText = comment.email;
            let commentBody = document.createElement('div');
            commentBody.innerText = comment.body;

            commentsContainer.appendChild(divComment);
            divComment.append(idBlock,userName,userEmail,commentBody)
        }
    })