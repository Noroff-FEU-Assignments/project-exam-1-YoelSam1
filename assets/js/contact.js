const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim(); // "   ddd   "  = "ddd"
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name.length <= 5) return alert("name should be more than 5 characters");
  if (!email) return alert("email should not be empty");
  if (subject.length <= 15)
    return alert("subject should be more than 15 characters");
  if (message.length <= 25)
    return alert("message should be more than 25 characters");

  alert("submited to database");
});
