async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
}

document.getElementById("logOut").addEventListener("click", logout);

// Edit Comment function
const sendEditedComment = async function (event) {
  event.preventDefault();
  const commentID = document.getElementById("commentID").value;
  const newComment = document.getElementById("newComment").value;

  if (newComment) {
    await fetch(`/api/comments/${commentID}`, {
      method: "PUT",
      body: JSON.stringify({
        newComment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

// Delete Comment function
const deleteCommentReq = async function (event) {
  event.preventDefault();
  const commentID = document.getElementById("commentID").value;

  if (commentID) {
    await fetch(`/api/comments/${commentID}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .getElementById("editComment")
  .addEventListener("click", sendEditedComment);

document
  .getElementById("deleteComment")
  .addEventListener("click", deleteCommentReq);
