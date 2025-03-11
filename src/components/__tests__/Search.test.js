import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";
import { RESTAURANT_DATA } from "../mocks/data";

// mocking fetch data // fetch is a browser feature
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve( RESTAURANT_DATA );
    }, // dummy fetch
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer")
  expect(shimmer.children.length).toBe(10)
});

test("Restaurants should load on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=> expect(body.getByTestId("search-btn")));
  const restaurantList = body.getByTestId("restaurant-list")
  expect(restaurantList.children.length).toBe(8)
});

test("Search for string(food) on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=> expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input")

  fireEvent.change(input, { // mocking input
    target:{
      value: "sweets"
    }
  })

  const searchBtn = body.getByTestId("search-btn")
  fireEvent.click(searchBtn)

  const restaurantList = body.getByTestId("restaurant-list")
  expect(restaurantList.children.length).toBe(10)
});