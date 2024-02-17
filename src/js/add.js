const inpGenre = document.getElementById('input-genre');
const inpName = document.getElementById("input-name");
const inpDate = document.getElementById("input-date");
const inpDes = document.getElementById("input-Des");
const inpLink = document.getElementById("input-link");
const addForm = document.getElementById("add-form")


function addFilm(event) {
    event.preventDefault();

    let genre = inpGenre.value;
    let name = inpName.value;
    let Date = inpDate.value;
    let Des = inpDes.value;
    let Link = inpLink.value;

    let newFilm = {
        genre,
        name,
        Date,
        Des,
        Link
    }
    if (!genre || !name || !Date || !Des || !Link) {
        alert("Phải nhập đủ các trường");
        return;
    }

    db.collection("films")
        .add(newFilm)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

addForm.addEventListener("submit", function (event) {
    addFilm(event);
});
