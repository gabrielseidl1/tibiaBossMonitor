function includeHTML() {
  let allElements = document.getElementsByTagName("*");

  for (let i = 0; i < allElements.length; i++) {
    let currentElement = allElements[i];
    /*search for elements with a certain atrribute:*/
    let fileToInclude = currentElement.getAttribute("include-html");
    if (fileToInclude !== null) {
      /* Make an HTTP request using the attribute value as the file name: */
      fetch(fileToInclude)
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          } else if (response.status === 404) {
            return "File not found";
          }
        })
        .then((text) => {
          currentElement.innerHTML = text;
          currentElement.removeAttribute("include-html");

          const doc = new DOMParser().parseFromString(text, "text/html");

          const tagsScripts = doc.getElementsByTagName("script");
          for (let j = 0; j < tagsScripts.length; j++) {
            eval(tagsScripts[j].innerText);
          }

          includeHTML();
        });
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();
