const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener("click", () => {
    const currentElement = coll[i];
    currentElement.classList.toggle("active");
    const content = currentElement.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
