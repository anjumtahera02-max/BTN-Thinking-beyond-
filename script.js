// ======================
// MENU SYSTEM
// ======================

const menuBtn =
document.getElementById("menu-btn");

const closeBtn =
document.getElementById("close-btn");

const sidebar =
document.getElementById("sidebar");

const overlay =
document.getElementById("overlay");


menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");
    overlay.classList.add("active");

});

function closeMenu(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

closeBtn.addEventListener(
    "click",
    closeMenu
);

overlay.addEventListener(
    "click",
    closeMenu
);


// ======================
// TOPIC FORM
// ======================

const openTopicForm =
document.getElementById(
    "open-topic-form"
);

const topicForm =
document.getElementById(
    "topic-form"
);

openTopicForm.addEventListener(
    "click",
    () => {

        if(
            topicForm.style.display
            === "block"
        ){

            topicForm.style.display =
            "none";

        }else{

            topicForm.style.display =
            "block";

        }

    }
);


// ======================
// PUBLISH ARTICLE
// ======================

const publishBtn =
document.getElementById(
    "publish-btn"
);

const topicTitle =
document.getElementById(
    "topic-title"
);

const topicCategory =
document.getElementById(
    "topic-category"
);

const topicContent =
document.getElementById(
    "topic-content"
);

const articles =
document.getElementById(
    "articles"
);


publishBtn.addEventListener(
"click",
() => {

    const title =
    topicTitle.value.trim();

    const category =
    topicCategory.value;

    const content =
    topicContent.value.trim();

    if(
        !title || !content
    ){

        alert(
            "Please fill all fields."
        );

        return;
    }

    const article =
    document.createElement("div");

    article.classList.add(
        "article-card"
    );

    article.innerHTML = `

    <div class="article-header">

        <h3>${title}</h3>

        <button class="delete-btn">
            🗑
        </button>

    </div>

    <small class="category">
        ${category}
    </small>

    <div class="article-meta">

        <span class="timestamp">
            Just now
        </span>

    </div>

    <p>
        ${content}
    </p>

    <div class="article-actions">

        <button class="like-btn">
            👍
            <span class="like-count">
                0
            </span>
        </button>

        <button
        class="toggle-comments-btn">

            💬
            <span class="comment-count">
                0
            </span>

            Comments

        </button>

    </div>

    <div class="comment-section">

        <textarea
        class="comment-input"
        placeholder=
        "Write a comment..."
        ></textarea>

        <button
        class="comment-btn">

            Post Comment

        </button>

        <div
        class="comments-container">

        </div>

    </div>

    `;

    articles.prepend(article);

    setupArticle(article);

    topicTitle.value = "";
    topicContent.value = "";

    topicForm.style.display =
    "none";

});


// ======================
// ARTICLE FEATURES
// ======================

function setupArticle(article){

    // LIKE SYSTEM

    const likeBtn =
    article.querySelector(
        ".like-btn"
    );

    const likeCount =
    article.querySelector(
        ".like-count"
    );

    let likes = 0;

    likeBtn.addEventListener(
    "click",
    () => {

        likes++;

        likeCount.innerText =
        likes;

    });

    // DELETE ARTICLE

    const deleteBtn =
    article.querySelector(
        ".delete-btn"
    );

    deleteBtn.addEventListener(
    "click",
    () => {

        article.remove();

    });

    // COMMENTS

    const commentBtn =
    article.querySelector(
        ".comment-btn"
    );

    const commentInput =
    article.querySelector(
        ".comment-input"
    );

    const commentsContainer =
    article.querySelector(
        ".comments-container"
    );

    const commentCount =
    article.querySelector(
        ".comment-count"
    );

    let totalComments = 0;

    commentBtn.addEventListener(
    "click",
    () => {

        const text =
        commentInput.value.trim();

        if(!text) return;

        totalComments++;

        commentCount.innerText =
        totalComments;

        const comment =
        document.createElement(
            "div"
        );

        comment.classList.add(
            "comment-card"
        );

        comment.innerHTML = `

        <div class="comment-top">

            <small class=
            "comment-time">

                just now

            </small>

        </div>

        <p>
            ${text}
        </p>

        <button
        class="reply-btn">

            ↩️ Reply

        </button>

        <button
        class=
        "delete-comment-btn">

            🗑 Delete

        </button>

        `;

        commentsContainer.appendChild(
            comment
        );

        commentInput.value = "";

        // DELETE COMMENT

        const deleteCommentBtn =
        comment.querySelector(
            ".delete-comment-btn"
        );

        deleteCommentBtn
        .addEventListener(
        "click",
        () => {

            comment.remove();

            totalComments--;

            commentCount.innerText =
            totalComments;

        });

        // REPLY

        const replyBtn =
        comment.querySelector(
            ".reply-btn"
        );

        replyBtn.addEventListener(
        "click",
        () => {

            const reply =
            prompt(
                "Write reply"
            );

            if(reply){

                const replyText =
                document.createElement(
                    "p"
                );

                replyText.style
                .marginLeft = "20px";

                replyText.innerText =
                "↪ " + reply;

                comment.appendChild(
                    replyText
                );

            }

        });

    });

    // TOGGLE COMMENTS

    const toggleBtn =
    article.querySelector(
        ".toggle-comments-btn"
    );

    const commentSection =
    article.querySelector(
        ".comment-section"
    );

    toggleBtn.addEventListener(
    "click",
    () => {

        if(
            commentSection.style
            .display === "none"
        ){

            commentSection
            .style.display =
            "block";

        }else{

            commentSection
            .style.display =
            "none";

        }

    });

}


// ======================
// SEARCH
// ======================

const searchBox =
document.querySelector(
    ".search-box"
);

searchBox.addEventListener(
"keyup",
() => {

    const value =
    searchBox.value
    .toLowerCase();

    const cards =
    document.querySelectorAll(
        ".article-card"
    );

    cards.forEach((card)=>{

        const text =
        card.innerText
        .toLowerCase();

        if(
            text.includes(value)
        ){

            card.style.display =
            "block";

        }else{

            card.style.display =
            "none";

        }

    });

});
