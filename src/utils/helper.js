export const filterRestaurant = (searchText, restaurants) => {
    if (!searchText) {
      return restaurants;
    }
    const searchFilteredRestaurant = restaurants.filter((restaurant) =>
      restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchText.trim().toLowerCase())
    );
    return searchFilteredRestaurant;
  };