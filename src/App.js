import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Train from "./pages/train/train";
import Detect from "./pages/detect/detect";
import Notfound from "./pages/not_found/not_found";
import SharedPageLayout from "./pages/shared/shared";
import Contact from "./pages/contact/contact";
import Label from "./pages/label/label";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedPageLayout> </SharedPageLayout>}>
            {" "}
            <Route index element={<Home> </Home>} />{" "}
            <Route path="dashboard" element={<Dashboard> </Dashboard>} />{" "}
            <Route path="train" element={<Train> </Train>} />{" "}
            <Route path="label" element={<Label> </Label>} />{" "}
            <Route path="detection" element={<Detect> </Detect>} />{" "}
            <Route path="contact" element={<Contact> </Contact>} />{" "}
            <Route path="*" element={<Notfound> </Notfound>} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
