import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/navigation.component";
import Home from "./routes/home/home.component";

const App = () => {
  const Shop = () => {
    return (
      <div>
        <h1>I am the shop page</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
