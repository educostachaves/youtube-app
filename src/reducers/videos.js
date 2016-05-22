
export default function(videos = null, action) {
  switch (action.type) {
    case 'FETCH_VIDEOS' : return action.videos;
  }

  return videos;
}
