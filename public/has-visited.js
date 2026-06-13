try {
  if (sessionStorage.getItem("hasVisited")) {
    document.documentElement.classList.add("has-visited");
  }
} catch (e) {}
