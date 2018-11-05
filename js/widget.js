window.addEventListener('DOMContentLoaded', fullApp());

function fullApp() {
  const url = customURL();
  fetch(url, { method: "GET" })
    .then(res => res.json())
    .then(res => renderPage(res))
    .catch(err => console.log(err));
}

function renderPage(res) {
  const allArticlesContainer = document.querySelector(".all-articles");
  const list = res.list;

  list.forEach( (article, index) => {
    let individualArticleHTML;
    const thumbnailURL = article.thumbnail[0].url;
    const { name, branding, url } = article;

    individualArticleHTML = `
      <div class="article-container">
        <a href="${ url }" target="_blank" class="article-link">
          <div class="article-image-container">
            <div class="article-image article-image${ index }"></div>
            <div class="article-image-overlay">${ branding }</div>
          </div>
        </a>
        <div class="image-text">${ name }</div>
      </div>
    `;

    allArticlesContainer.insertAdjacentHTML("beforeend", individualArticleHTML);

    const individualImage = document.querySelector(`.article-image${ index }`);
    individualImage.style.backgroundImage = `url(${ thumbnailURL })`;
  });
}

function customURL() {
  const domain = "https://api.taboola.com/1.2/json",
        publisherId = "taboola-templates";

  const appType = "web",
        apiKey = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
        count = 6,
        sourceType = "video",
        sourceId = "%2Fdigiday-publishing-summit%2F",
        sourceURL = window.location.href,
        userSession = "init";

  const url = `
      ${ domain }/${
      publisherId }/recommendations.get?app.type=${
      appType }&app.apikey=${
      apiKey }&rec.count=${
      count }&source.type=${
      sourceType }&source.id=${
      sourceId }&source.url=${
      sourceURL }&user.session=${
      userSession }
    `;

  return url;
}
