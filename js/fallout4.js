let file = `json/fallout4.json`;
async function getData() {
  try {
    const response = await fetch(file);
    const data = await response.json();
    document.getElementById("fallout4").innerHTML = `
      <div class="country-item">
        <div class="rounded overflow-hidden">
          <img
            src="https://images.gog-statics.com/${data.image_logo}.webp"
            class="img-fluid w-100 rounded"
            alt="Image"
          />
        </div>
        <div class="country-flag">
          <img
            src="https://images.gog-statics.com/${data.image_icon}.webp"
            class="img-fluid rounded-circle"
            alt="Image"
          />
        </div>
        <div class="country-name">
          <a class="text-white fs-4" data-bs-toggle="modal" data-bs-target="#GamesModal">${data.title}</a>
        </div>
      </div>
    `;
  } catch (err) {
    console.error(err);
  }
}
getData();

$("#GamesModal").on("shown.bs.modal", function () {
  let file = `json/fallout4.json`;
  fetch(file)
    .then(async (response) => await response.json())
    .then(async (data) => {
      document.getElementById("Videos").innerHTML = `
      <a id="play-video" class="video-play-button" href="${data.videos[0].video_url}"></a>
      <img src="${data.videos[0].thumbnail_url}" alt="" />
      `;
      document.getElementById("SS1").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[0]}.webp" alt="" />
      `;
      document.getElementById("SS2").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[1]}.webp" alt="" />
      `;
      document.getElementById("SS3").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[2]}.webp" alt="" />
      `;
      document.getElementById("SS4").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[3]}.webp" alt="" />
      `;
      document.getElementById("SS5").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[4]}.webp" alt="" />
      `;
      document.getElementById("SS6").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[5]}.webp" alt="" />
      `;
      document.getElementById("SS7").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[6]}.webp" alt="" />
      `;
      document.getElementById("SS8").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[7]}.webp" alt="" />
      `;
      document.getElementById("SS9").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[8]}.webp" alt="" />
      `;
      document.getElementById("SS10").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[9]}.webp" alt="" />
      `;
      document.getElementById("SS11").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[10]}.webp" alt="" />
      `;
      document.getElementById("SS12").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[11]}.webp" alt="" />
      `;
      document.getElementById("SS13").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[12]}.webp" alt="" />
      `;
      document.getElementById("SS14").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[13]}.webp" alt="" />
      `;
      document.getElementById("SS15").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[14]}.webp" alt="" />
      `;
      document.getElementById("SS16").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[15]}.webp" alt="" />
      `;
      document.getElementById("SS17").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[16]}.webp" alt="" />
      `;
      document.getElementById("SS18").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[17]}.webp" alt="" />
      `;
      document.getElementById("SS19").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[18]}.webp" alt="" />
      `;
      document.getElementById("SS20").innerHTML = `
      <img src="https://images.gog-statics.com/${data.screenshots[19]}.webp" alt="" />
      `;
      document.getElementById("DevelopersandPublisher").innerHTML = `
        <div class="col-12 col-sm-6 d-flex align-items-center">
          <i
            class="fas fa-user-secret fa-3x text-secondary"
          ></i>
          <h5 class="ms-4">${data.developers}</h5>
        </div>
        <div class="col-12 col-sm-6 d-flex align-items-center">
          <i class="fas fa-user-tie fa-3x text-secondary"></i>
          <h5 class="ms-4">${data.publisher}</h5>
        </div>
      `;
      document.getElementById("Release").innerHTML = `
        <span
          class="counter-value" data-toggle="counter-up"
        >
          ${data.global_date}</span
        >
      `;
      document.getElementById("Mode").innerHTML = `
        <span
          class="counter-value" data-toggle="counter-up"
        >
          ${data.features[4].name}</span
        >
      `;
      document.getElementById("Genre").innerHTML = `
        <span
          class="counter-value" data-toggle="counter-up"
        >
          ${data.tags[0].name}, ${data.tags[1].name}, ${data.tags[2].name}</span
        >
      `;
      document.getElementById("Size").innerHTML = `
        <span class="counter-value" data-toggle="counter-up">
          ${data.dl_installer[0].total_size}</span
        >
        <h4
          class="text-secondary mb-0"
          style="font-weight: 600; font-size: 25px"
        >
          bytes
        </h4>
      `;
      document.getElementById("Description").innerHTML = `
        <p>${data.description}</p>
      `;
    })
    .catch((err) => console.error(err));
});

$("#GamesModal").on("hidden.bs.modal", function () {
  document.getElementById("Videos").innerHTML = "";
  document.getElementById("SS1").innerHTML = "";
  document.getElementById("SS2").innerHTML = "";
  document.getElementById("SS3").innerHTML = "";
  document.getElementById("SS4").innerHTML = "";
  document.getElementById("SS5").innerHTML = "";
  document.getElementById("SS6").innerHTML = "";
  document.getElementById("SS7").innerHTML = "";
  document.getElementById("SS8").innerHTML = "";
  document.getElementById("SS9").innerHTML = "";
  document.getElementById("SS10").innerHTML = "";
  document.getElementById("SS11").innerHTML = "";
  document.getElementById("SS12").innerHTML = "";
  document.getElementById("SS13").innerHTML = "";
  document.getElementById("SS14").innerHTML = "";
  document.getElementById("SS15").innerHTML = "";
  document.getElementById("SS16").innerHTML = "";
  document.getElementById("SS17").innerHTML = "";
  document.getElementById("SS18").innerHTML = "";
  document.getElementById("SS19").innerHTML = "";
  document.getElementById("SS20").innerHTML = "";
  document.getElementById("DevelopersandPublisher").innerHTML = "";
  document.getElementById("Release").innerHTML = "";
  document.getElementById("Mode").innerHTML = "";
  document.getElementById("Genre").innerHTML = "";
  document.getElementById("Size").innerHTML = "";
  document.getElementById("Description").innerHTML = "";
});
