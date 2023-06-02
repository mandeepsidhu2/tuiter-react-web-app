import Nav from "../nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route}
  from "react-router";
function Labs() {
  return (
    <div>
      <Nav />
       <Routes>
       <Route path="a4"
        element={<Assignment4/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
 </Routes>
    </div>
  );
}
export default Labs;