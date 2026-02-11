/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
TODO: - addTrack(newTrack);
*/
const playlist = {
  name: 'My amazing playlist',
  rating: 4,
  tracks: ['track-1', 'track-2', 'track-3'],

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  changeName(newTitle) {
    if (newTitle.length !== 0) {
      this.name = newTitle;
    }
  },

  addTrack(newTrack) {
    if (newTrack.length !== 0) {
      this.tracks.push(newTrack);
    }
  },
};

console.log('playlist:', playlist);

playlist.updateRating(4.5);
playlist.changeName('New playlist');
playlist.addTrack('track-4');

console.log('playlist:', playlist);
