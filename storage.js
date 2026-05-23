// ===========================
// STORAGE.JS
// BTN — Beyond The Noise
// ===========================


// SAVE ALL ARTICLES
function saveArticles() {

    const articleCards =
    document.querySelectorAll(
        ".article-card"
    );

    const data = [];

    articleCards.forEach(
    (card) => {

        const title =
        card.querySelector(
            "h3"
        )?.innerText || "";

        const category =
        card.querySelector(
            ".category"
        )?.innerText || "";

        const content =
        card.querySelector(
            "p"
        )?.innerText || "";

        const likes =
        card.querySelector(
            ".like-count"
        )?.innerText || "0";

        const comments =
        [];

        card.querySelectorAll(
            ".comment-card"
        ).forEach((comment)=>{

            const text =
            comment.querySelector(
                "p"
            )?.innerText || "";

            const replies =
            [];

            comment.querySelectorAll(
                ".reply-text"
            ).forEach(
            (reply)=>{

                replies.push(
                    reply.innerText
                );

            });

            comments.push({
                text,
                replies
            });

        });

        data.push({
            title,
            category,
            content,
            likes,
            comments
        });

    });

    localStorage.setItem(
        "btn_articles",
        JSON.stringify(data)
    );

}


// LOAD SAVED ARTICLES
function loadArticles(){

    const savedArticles =
    JSON.parse(
        localStorage.getItem(
            "btn_articles"
        )
    ) || [];

    const articles =
    document.getElementById(
        "articles"
    );

    savedArticles.forEach(
    (item)=>{

        const article =
        document.createElement(
            "div"
        );

        article.classList.add(
            "article-card"
        );

        article.innerHTML = `

        <div class="article-header">

            <h3>
                ${item.title}
            </h3>

            <button
            class="delete-btn">

                🗑

            </button>

        </div>

        <small class="category">

            ${item.category}

        </small>

        <div class="article-meta">

            <span class=
            "timestamp">

                saved article

            </span>

        </div>

        <p>
            ${item.content}
        </p>

        <div class=
        "article-actions">

            <button
            class="like-btn">

                👍
                <span
                class=
                "like-count">

                ${item.likes}

                </span>

            </button>

            <button
            class=
            "toggle-comments-btn">

                💬
                <span
                class=
                "comment-count">

                ${item.comments.length}

                </span>

                Comments

            </button>

        </div>

        <div
        class=
        "comment-section">

            <textarea
            class=
            "comment-input"
            placeholder=
            "Write a comment..."
            ></textarea>

            <button
            class=
            "comment-btn">

                Post Comment

            </button>

            <div
            class=
            "comments-container">

            </div>

        </div>

        `;

        articles.appendChild(
            article
        );

        setupArticle(article);

        const commentsContainer =
        article.querySelector(
            ".comments-container"
        );

        item.comments.forEach(
        (savedComment)=>{

            const comment =
            document.createElement(
                "div"
            );

            comment.classList.add(
                "comment-card"
            );

            comment.innerHTML = `

            <div class=
            "comment-top">

                <small
                class=
                "comment-time">

                    saved

                </small>

            </div>

            <p>

                ${savedComment.text}

            </p>

            <button
            class=
            "reply-btn">

                ↩️ Reply

            </button>

            <button
            class=
            "delete-comment-btn">

                🗑 Delete

            </button>

            `;

            commentsContainer
            .appendChild(
                comment
            );

            savedComment.replies
            .forEach(
            (reply)=>{

                const replyText =
                document.createElement(
                    "p"
                );

                replyText.classList
                .add(
                    "reply-text"
                );

                replyText.style
                .marginLeft =
                "20px";

                replyText.innerText =
                reply;

                comment.appendChild(
                    replyText
                );

            });

        });

    });

}


// PAGE LOAD
document.addEventListener(
"DOMContentLoaded",
loadArticles
);
