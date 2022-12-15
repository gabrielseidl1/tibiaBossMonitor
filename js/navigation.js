function navigate() {
  const contentDiv = document.getElementById("content");

  switch (location.hash) {
    case "#login":
      contentDiv.setAttribute("include-html", "login.html");
      break;
    case "#signup":
      contentDiv.setAttribute("include-html", "signup.html");
      break;
    case "#search":
      contentDiv.setAttribute("include-html", "search.html");
      break;
    case "#bosses":
      contentDiv.setAttribute("include-html", "bosses.html");
      break;
    default:
        contentDiv.setAttribute("include-html", "home.html");
      break;
  }

  includeHTML();
}

navigate();

window.addEventListener("hashchange", navigate);
