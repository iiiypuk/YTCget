function getCover()
{
  var videoUrl = document.getElementById('videoUrl').value;
  var coverUrl = 'https://img.youtube.com/vi/' + YouTubeGetID(videoUrl) + '/maxresdefault.jpg';
  document.getElementById('ytImage').innerHTML =
    '<a download href="' + coverUrl + '"><img src="'+ coverUrl +'"></a>';
}
