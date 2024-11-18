const flasgElement = document.getElementById("flags");

flasgElement.addEventListener("click", (event) => {
  changeLanguage(event.target.parentElement.dataset.language);
});

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  if (language === undefined) {
    const requestJason = await fetch(`./languages/en.json`);
    const texts = await requestJason.json();
    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;

      if (value.includes("Tooltip")) {
        textToChange.attributes.getNamedItem("title").value =
          texts[section][value];
      } else if (value.includes("placeholder")) {
        textToChange.attributes.getNamedItem("placeholder").value =
          texts[section][value];
      } else if(value.includes("href")){
        textToChange.attributes.getNamedItem("href").value =
          texts[section][value];
      }
      
       else {
        textToChange.innerHTML = texts[section][value];
      }
    }
  } else {
    const requestJason = await fetch(`./languages/${language}.json`);
    const texts = await requestJason.json();
    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;

      if (value.includes("Tooltip")) {
        textToChange.attributes.getNamedItem("title").value =
          texts[section][value];
      } else if (value.includes("placeholder")) {
        textToChange.attributes.getNamedItem("placeholder").value =
          texts[section][value];
      } else {
        textToChange.innerHTML = texts[section][value];
      }
    }
  }
};

changeLanguage();
