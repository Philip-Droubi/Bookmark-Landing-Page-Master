let tabBtns = document.querySelectorAll(".features .navigator button");
let tab = document.querySelector(".features .tab");
let tabHeading = tab.querySelector(".text h3");
let tabParagraph = tab.querySelector(".text p");
let tabImg = tab.querySelector(".img img");

tabBtns.forEach(ele => {
    ele.addEventListener("click", (event) => {
        event.preventDefault();
        if (!ele.classList.contains("active")) {
            //remove active
            tabBtns.forEach(e => {
                e.classList.remove('active');
            });
            //active the btn clicked
            ele.classList.add("active");
            //Change tab case
            tab.setAttribute("data-case", ele.getAttribute("data-case"));
            changeTab(tab.getAttribute("data-case"));
        }
    });
});

function changeTab(tabCase) {
    switch (tabCase) {
        case "1":
            tabHeading.textContent = "Bookmark in one click";
            tabParagraph.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
            tabImg.setAttribute("src", "images/illustration-features-tab-1.svg")
            break;
        case "2":
            tabHeading.textContent = "Intelligent search";
            tabParagraph.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
            tabImg.setAttribute("src", "images/illustration-features-tab-2.svg")
            break;
        case "3":
            tabHeading.textContent = "Share your bookmarks";
            tabParagraph.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
            tabImg.setAttribute("src", "images/illustration-features-tab-3.svg")
            break;
        default:
            break;
    }
}