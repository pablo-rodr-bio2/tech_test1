import MeetupItem from '../components/meetups/MeetupItem';

export default function FavoritesPage({ favorites }) {
  return (
    <section>
      <h1>Favorites Page</h1>
      {favorites.map(favorite => (
        <MeetupItem key={favorite.id} item={favorite} />
      ))}
    </section>
  );
}
