import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";

test("Logo should load on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  // check if logo is loaded 
  const logo = header.getAllByTestId("logo") // best practice to find something from some element, its not an actual id its a test id for uniqueness. returns an array
  expect(logo[0].src).toBe("http://localhost/dummy.png")
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status") 
  expect(onlineStatus.innerHTML).toBe("🟢")
});

test("Cart should show 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart") 
  expect(cart.innerHTML).toBe("Cart - 2")
});
