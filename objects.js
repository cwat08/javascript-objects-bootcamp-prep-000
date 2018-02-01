var playlist = {[artistName]: 'songTitle'}

function updatePlaylist ([artistName], 'songTitle'){
return Object.assign({}, playlist, {[artistName]: 'songTitle'})
}
