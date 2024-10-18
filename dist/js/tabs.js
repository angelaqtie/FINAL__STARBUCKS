const tabs = document.querySelectorAll(".favorites__text");
const contents = document.querySelectorAll(".favorites__details");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeActivetab();
        tab.classList.add("active");
        const activeContent = document.querySelector(`#${tab.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActivetab() {
    tabs.forEach((tab) => { 
        tab.classList.remove("active");
    });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}