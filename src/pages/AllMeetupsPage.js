import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetupQuery } from "../util-hooks/useMeetupQuery";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage({ handleFavorite }) {
  const { data } = useMeetupQuery();

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data.map((item) => (
          <MeetupItem key={item.id} item={item} handleFavorite={handleFavorite} />
        ))}
      </ul>
    </section>
  );
}
