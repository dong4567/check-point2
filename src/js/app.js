const films = document.getElementById('film-container');


function getfilms() {
    let filmList = [];
  
    db.collection("films")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          filmList.push(doc.data());
        });
  
        if (filmList.length > 0) {
          renderfilms(filmList);
        } else {
          console.log("No film found.");
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  

      console.log(filmList);
  }
  
  // Hàm render danh sách post ra HTML
  function renderfilms(films) {
    let htmls = films.map((film) => {
      return `
      <div class="container">
      <div class="form-group">
      <iframe src="${films.Link}" frameborder="0"></iframe>
      </div>
      <div class="form-group">
      <h1>${film.name}</h1>
      </div>
      <div class="form-group">
      <h1>Thể loại:${film.genre}</h1>
      </div>
      <div class="form-group">
      <h1>${film.Des}</h1>
      </div>
      <div class="form-group">
      <h1>Ngày khởi chiếu:${film.Date}</h1>
      </div>
      </div>
      `;
    });
  
    films.innerHTML = htmls.join("");
  }

  getfilms()