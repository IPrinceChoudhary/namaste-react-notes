import { createContext } from "react";

const UserContext = createContext({ // default data
    name: "dummy user",
    mail: "dummy@gmail.com",
});

UserContext.displayName = "UserContext" // this is just to track our context name in the react dev tools // nothing do with react

export default UserContext;
