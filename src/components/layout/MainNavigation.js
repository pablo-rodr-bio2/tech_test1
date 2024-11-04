import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE, ROUTES } from "./../../utils/constants";
import classes from "./MainNavigation.module.css";
import { useHideHeaderOnScroll } from "../../util-hooks/useHideHeaderOnScroll";

export default function MainNavigation({ setPage, favoritesNumber }) {
  const showHeader = useHideHeaderOnScroll();

  const headerStyling = [
    classes.header,
    showHeader ? classes.visible : classes.hidden
  ].join(" ")

  const handleLink = (event, page, url) => {
    event.preventDefault();
    setPage(page);
    window.history.pushState({}, "", url);
  }
  
  return (
    <header 
      className={headerStyling}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a 
              href={ROUTES.ALL} 
              onClick={(event) => handleLink(event, ALL_MEETUP_PAGE, ROUTES.ALL)}
            >
              All Meetups
            </a>
          </li>

          <li>
            <a 
              href={ROUTES.NEW} 
              onClick={(event) => handleLink(event, NEW_MEETUP_PAGE, ROUTES.NEW)}
            >
              Add New Meetup
            </a>
          </li>
          <li>
            <a 
              href={ROUTES.FAVORITES} 
              onClick={(event) => handleLink(event, FAVORITES_PAGE, ROUTES.FAVORITES)}
            >
              My Favorites
              <span className={classes.badge}>{favoritesNumber}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
