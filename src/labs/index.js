import Assignment3 from "./a3";
import Nav from "../nav";
import {Routes, Route}
  from "react-router";
function Labs() {
  return (
    <div>
      <Nav />
       <Routes>
       <Route path="a3"
        element={<Assignment3/>}/>
 </Routes>
    </div>
  );
}
export default Labs;