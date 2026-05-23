// MENU
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// TOPIC FORM
const openTopicForm = document.getElementById("open-topic-form");
const topicForm = document.getElementById("topic-form");
const publishBtn = document.getElementById("publish-btn");

const topicTitle = document.getElementById("topic-title");
const topicCategory = document.getElementById("topic-category");
const topicContent = document.getElementById("topic-content");

const articles = document.getElementById("articles");

// SEARCH
const searchBox = document.querySelector(".search-box");


// =====================
// MENU OPEN
// =====================
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});


// =====================
// MENU CLOSE
// =====================
function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);


// =====================
// OPEN/CLOSE TOPIC FORM
// =====================
openTopicForm.addEventListener("click", () => {

    if (
        topicForm.style.display === "block"
    ) {
        topicForm.style.display = "none";
    } else {
        topicForm.style.display = "block";
    }

});


// =====================
// PUBLISH ARTICLE
// =====================
publishBtn.addEventListener("click", () => {

    const title = topicTitle.value.trim();
    const category = topicCategory.value;
    const content = topicContent.value.trim();

    if (!title || !content) {
        alert("Please fill title and content.");
        return;
    }

    const article = document.createElement("div");

    article.classList.add("article-card");

    article.innerHTML = `
        <h3>${title}</h3>

        <small>${category}</small>

        <p>${content}</p>

        <div style="margin-top:15px;">
            <button class="read-btn">
                Read More
            </button>

            <button class="delete-btn">
                🗑 Delete
            </button>
        </div>
    `;

    // DELETE ARTICLE
    const deleteBtn =
        article.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        article.remove();

    });

    // ADD ARTICLE TO TOP
    articles.prepend(article);

    // CLEAR FORM
    topicTitle.value = "";
    topicContent.value = "";

    topicForm.style.display = "none";
});


// =====================
// SEARCH
// =====================
searchBox.addEventListener("keyup", () => {

    const value =
        searchBox.value.toLowerCase();

    const cards =
        document.querySelectorAll(".article-card");

    cards.forEach((card) => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });

});
