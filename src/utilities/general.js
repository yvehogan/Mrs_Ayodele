
export const toggleScroll = () => {
    const overlays = document.querySelectorAll('.overlay');

    if (overlays.length > 0) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};

export const form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then((response) => {
        console.log(response.json())
    }

        //console.log(response.json);
    ).then((html) => {
        // you can put any JS code here
        window.open('page2.html', '_blank');

    });
});