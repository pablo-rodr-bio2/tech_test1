import { useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);
  const [favorites, setFavorites] = useState([]);

  const onFavoriteHandler = (favorite) => {
    setFavorites((prev) => {
      return [...prev, favorite];
    });
  };

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage handleFavorite={onFavoriteHandler} />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage favorites={favorites}/>;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage handleFavorite={onFavoriteHandler} />;
    }

    return currentPageComponent;
  }

  return (
    <div data-test="app">
      <MainNavigation setPage={setPage} favoritesNumber={favorites.length}/>
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
