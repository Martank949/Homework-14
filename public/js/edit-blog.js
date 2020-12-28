async function editFormHandler(event) {
    event.preventDefault();
    const blog_name = document.querySelector("#blog_name").value;
    const description = document.querySelector("#description").value;
    const user_name = document.querySelector("#user_name").value;

    // What will the value of has_nuts be if the box in the form is checked?
    // The value of has_nuts will be true if the box is checked.
    // What do we call this kind of operator?
    // We call this a ternary operator. It begins with a condition followed by a question mark and two code blocks separated by a :.
    const for_sale = document.querySelector("#for_sale:checked") ? true : false;

    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    // What part of our application will handle this 'put' request?
    // The Controller will handle this 'put' request.

    const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            blog_name,
            description,
            user_name,
            for_sale,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // What happens if the response is ok?
    // If the response is ok, that means that the blog was updated successfully.
    if (response.ok) {
        document.location.replace(`/blog/${id}`);
    } else {
        alert("Failed to edit blog");
    }
}

document
    .querySelector(".edit-blog-form")
    .addEventListener("submit", editFormHandler);