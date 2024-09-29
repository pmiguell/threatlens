import router from "./router"
import UserContext from "./contexts/UserContext";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <UserContext.Provider>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}
