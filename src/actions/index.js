import YouTube from 'youtube-node';

const youTube = new YouTube();

youTube.setKey('AIzaSyBN0Ztow8F2F8MuA2iwYDWfJlnpH1F7lBY');
youTube.addParam('channelId', 'UCYEYJyqnEkI1ZnkgWeQOdAg');

function getVideos(search) {
  return function(dispatch){
    youTube.search(search, '5', function(err, result) {
      if (err) {
        const action = {
          type: 'FETCH_VIDEOS',
          videos: {
            message: 'Not Found'
          }
        };
        dispatch(action);
      } else {
        const action = {
          type: 'FETCH_VIDEOS',
          videos: result.items
        };
        dispatch(action);
      }
    });
  };
}

export { getVideos as getVideos }
