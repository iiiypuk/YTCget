function getCover()
{
  var videoUrl = document.getElementById('videoUrl').value;
  var videoCover = new Image();
  
  videoCover.onload = function()
  {
    document.getElementById('ytImage').innerHTML =
    '<a title="' + videoCover.width + 'x' + videoCover.height + '" download href="' + videoCover.src + '"><img src="'+ videoCover.src +'"></a>';
  }

  videoCover.src = 'https://img.youtube.com/vi/' + YouTubeGetID(videoUrl) + '/maxresdefault.jpg';
}
