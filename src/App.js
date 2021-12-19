import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAxiosWithCallback from "./common/hooks/useAxiosWithCallback";
import { Home, NotFound } from "./pages";

function App() {
  const { isLoading, error, fetchData } = useAxiosWithCallback();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
