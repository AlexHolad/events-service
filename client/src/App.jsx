import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./Layout";

import { EventsList } from "./features/events/EventsList";
import  NoMatch  from "./pages/NoMatch/NoMatch";
import AddEventForm from "./features/events/AddEventForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventsList />} />/
          <Route path="about" element={<NoMatch />} />
          <Route path="addevent" element={<AddEventForm />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
