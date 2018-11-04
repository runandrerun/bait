// const taboola = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&amp;app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&amp;source.id=%2Fdigiday-publishing-summit%2F&amp;source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&amp;source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&amp;placement.rec-count=6&amp;placement.name=Below%20Article%20Thumbnails&amp;placement.thumbnail.width=640&amp;placement.thumbnail.height=480&amp;user.session=init"
//
// fetch(taboola, {
//     method: 'GET',
//     mode: 'cors',
//     headers: new Headers({
//         'Accept': 'application/json',
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin':'*',
//         "Apikey": "7be65fc78e52c11727793f68b06d782cff9ede3",
//         "Authorization": "7be65fc78e52c11727793f68b06d782cff9ede3",
//     })
// }).then(res => res.json())
//
//
//
// fetchCart = () => {
//   fetch(taboola).then(res => res.text()).then(html => {
//     let parser = new DOMParser();
//     let doc = parser.parseFromString(html, "text/html");
//     return doc
//   }).then(console.log)
// }
//
// fetch(taboola).then(res => res.json())
//
//
//
//
// fetch(URL, {
//     method: 'GET',
//     mode: 'cors',
//     headers: new Headers({
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin':'*'
//     })
// }).then(res => res.json())
//
//
//
//
// "use strict";
//
// window.addEventListener('load', app);
//
// const taboola = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&amp;app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&amp;source.id=%2Fdigiday-publishing-summit%2F&amp;source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&amp;source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&amp;placement.rec-count=6&amp;placement.name=Below%20Article%20Thumbnails&amp;placement.thumbnail.width=640&amp;placement.thumbnail.height=480&amp;user.session=init"
//   fetch(taboola, { method: "GET" })
//     .then(response => response.json())
//     .catch(err => console.log(err));
//
// function app() {
//   // const url = customEndpoint();
//   const taboola = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&amp;app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&amp;source.id=%2Fdigiday-publishing-summit%2F&amp;source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&amp;source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&amp;placement.rec-count=6&amp;placement.name=Below%20Article%20Thumbnails&amp;placement.thumbnail.width=640&amp;placement.thumbnail.height=480&amp;user.session=init"
//   fetch(taboola, { method: "GET" })
//     .then(response => response.json())
//     .then(response => renderPage(response))
//     .catch(err => console.log(err));
// }
//
// function renderPage(response) {
//   const allArticlesContainer = document.querySelector(".all-articles");
//   const list = response.list;
//
//   list.forEach( (article, index) => {
//     let individualArticleHTML;
//     const thumbnailURL = article.thumbnail[0].url;
//     const { name, branding, url } = article;
//
//     individualArticleHTML = `
//       <div class="article-container">
//         <a href="${ url }" target="_blank" class="article-link">
//           <div class="article-image-container">
//             <div class="article-image article-image${ index }"></div>
//             <div class="article-image-overlay">${ branding }</div>
//           </div>
//         </a>
//         <div class="image-text">${ name }</div>
//       </div>
//     `;
//
//     allArticlesContainer.insertAdjacentHTML("beforeend", individualArticleHTML);
//
//     const individualImage = document.querySelector(`.article-image${ index }`);
//     individualImage.style.backgroundImage = `url(${ thumbnailURL })`;
//   });
// }
//
// function customEndpoint() {
//   // I broke this out into a function for scalability in case we
//   // wanted to add the domain, publisher ID, or arguments into this
//   // function via a submission form for a new endpoint at a future date
//   // note: the below are all REQUIRED for api 1.1
//   "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&amp;app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&amp;source.id=%2Fdigiday-publishing-summit%2F&amp;source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&amp;source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&amp;placement.rec-count=6&amp;placement.name=Below%20Article%20Thumbnails&amp;placement.thumbnail.width=640&amp;placement.thumbnail.height=480&amp;user.session=init"
//   const domain = "https://api.taboola.com/1.2/json",
//         publisherId = "taboola-templates";
//
//   // arguments for the query string
//   const appType = "desktop",
//         apiKey = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
//         count = 6,
//         sourceType = "video",
//         sourceId = "%2Fdigiday-publishing-summit%2F",
//         sourceURL = "https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F",
//         userSession = "init";
//
//   // I wanted to include these comments below for
//   // future development/conversation  as these are not
//   // required arguments but I would consider
//   // smaller/cropped files for  load efficiency
//   // const imgWidth = 500; arg: rec.thumbnail.width
//   // const imgHeight = 200; arg: rec.thumbnail.height
//
//   const url = `
//       ${ domain }/${
//       publisherId }/recommendations.get?app.type=${
//       appType }&app.apikey=${
//       apiKey }&rec.count=${
//       count }&source.type=${
//       sourceType }&source.id=${
//       sourceId }&source.url=${
//       sourceURL }&user.session=${
//       userSession }
//     `;
//
//   return url;
// }


"use strict";

window.addEventListener('load', app);

function app() {
  const url = customEndpoint();
  fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(response => renderPage(response))
    .catch(err => console.log(err));
}

function renderPage(response) {
  const allArticlesContainer = document.querySelector(".all-articles");
  const list = response.list;

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

function customEndpoint() {
  // I broke this out into a function for scalability in case we
  // wanted to add the domain, publisher ID, or arguments into this
  // function via a submission form for a new endpoint at a future date
  // note: the below are all REQUIRED for api 1.1
  const domain = "https://api.taboola.com/1.1/json",
        publisherId = "taboola-templates";

  // arguments for the query string
  const appType = "desktop",
        apiKey = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
        count = 6,
        sourceType = "video",
        sourceId = "robhitt",
        sourceURL = window.location.href,
        userSession = "init";

  // I wanted to include these comments below for
  // future development/conversation  as these are not
  // required arguments but I would consider
  // smaller/cropped files for  load efficiency
  // const imgWidth = 500; arg: rec.thumbnail.width
  // const imgHeight = 200; arg: rec.thumbnail.height

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
