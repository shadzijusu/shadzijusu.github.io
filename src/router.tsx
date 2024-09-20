import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" lazy={() => import("./routes/root.tsx")}></Route>
  )
);

export default router;
