import { Route, Routes } from "react-router-dom";

import AuthPage from "./routes/AuthPage";
import HomePage from "./routes/HomePage";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";
import ProfilePage from "./routes/ProfilePage";

function App() {
  return (
    <Routes>
      <Route element={<LoggedInRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route element={<NotLoggedInRoute />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}
export default App;
