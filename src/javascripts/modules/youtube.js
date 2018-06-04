const youtube = {
  key: `AIzaSyAIvaonMmvM8Y4TaWCDZBG2gXXexB48JYk`,
  userId: `cCZOh8AusathhNJUjIXHNQ`,
  channelId: `UCcCZOh8AusathhNJUjIXHNQ`,
  videos: $(`.js-video`),
  videoBtns: $(`.js-video-btn`),

  init() {
    $.getJSON(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${this.channelId}&maxResults=25&key=${this.key}`, data => {
      const videos = data.items.slice(0, 3);

      videos.forEach((video, index) => {
        const id = video.id.videoId;
        const thumb = video.snippet.thumbnails.high.url;

        this.videos.eq(index).css({ backgroundImage: `url(${thumb})` });
        this.videoBtns.eq(index).attr(`href`, `https://www.youtube.com/watch?v=${id}`);
      });
    });
  }
};

export { youtube };