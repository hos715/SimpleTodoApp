import React from "react";
import { Route, Routes } from "react-router-dom";

import NewTask from "../components/NewTask";
import Tasks from "../components/tasks";
import AboutMe from "../components/common/AboutMe";
import NoMatch from "./../components/common/NoMatch";
import Nav from "./../components/common/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Tasks />
                <NewTask />
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
