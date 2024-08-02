// Ensure navControl is an array or NodeList
navControl.forEach(navItem => {
    // Iterate over child elements
    navItem.childNodes.forEach(child => {
        // Check if child is an element node
        if (child.nodeType === Node.ELEMENT_NODE) {
            child.addEventListener("click", () => {
                let hid = child.id;
                console.log(hid);

                if (hid === "fullscreenNote") {
                    if (fullscreenNote === 0) {
                        document.querySelector("#commonApp").style.height = "100vh";
                        document.querySelector("#commonApp").style.width = "100vw";
                        footer.style.display = "none";
                        fullscreenNote = 1;
                    } else {
                        document.querySelector("#commonApp").style.height = "70vh";
                        document.querySelector("#commonApp").style.width = "60vw";
                        footer.style.display = "flex";
                        fullscreenNote = 0;
                    }
                } else if (hid === "closeNote") {
                    document.querySelector("#commonApp").style.display = "none";
                }

                console.log(hid);
            });
        }
    });
});
