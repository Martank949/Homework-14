const newFormHandler = async(event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = document.querySelector("#blog-name").value.trim();
    const needed_funding = document.querySelector("#blog-funding").value.trim();
    const description = document.querySelector("#blog-desc").value.trim();
    console.log(name, needed_funding, description);
    if (name && needed_funding && description) {
        const response = await fetch(`/api/blogs`, {
            method: "POST",
            body: JSON.stringify({ blog_name: name, needed_funding, description }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to create blog");
        }
    }
};

const delButtonHandler = async(event) => {
    if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");

        const response = await fetch(`/api/blogs/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to delete blog");
        }
    }
};

window.addEventListener("load", function() {
    document
        .querySelector("#create-btn")
        .addEventListener("click", newFormHandler);
    document
        .querySelector(".project-list")
        .addEventListener("click", delButtonHandler);
});