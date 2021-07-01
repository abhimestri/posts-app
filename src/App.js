import React, { useEffect } from "react";
import Homepage from "./components/homepage/homepage";
import { getPost } from "./store/posts-action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Homepage />
    </React.Fragment>
  );
}

export default App;
