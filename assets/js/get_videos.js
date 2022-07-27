fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE6boYgC8kv-C-5vH2juNCA&maxResults=8&order=date&key=[API_KEY]")
.then((result) => {
    return result.json()
}).then((data) => {
    let videos = data.items
    let videoContainer = document.querySelector("#last-videos")
    for(video of videos) {
        let publishedDate = video.snippet.publishedAt.split("T")
        videoContainer.innerHTML += `
        <div class="custom-card">
            <div class="ccard-header">
              <img class="miniature" src="${video.snippet.thumbnails.medium.url}" alt="Youtube miniature">
            </div>
            <a class="video-link" href="https://www.youtube.com/watch?v=${video.id.videoId}"><p class="ccard-text">${video.snippet.title}</p></a>
            <p class="ccard-date">Publié le ${publishedDate[0]}</p>
        </div>
        `
    }
})