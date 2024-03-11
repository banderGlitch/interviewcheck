// import your  helper functions here 
// loader is being imported over here!
import Loader from "react-js-loader";



export function Loading() {
    return (
    <div className="spinner-container-loading">
      <Loader
        type="spinner-default"
        bgColor="red"
        color=" orange"
        title={"Loading"}
        size={100}
      />
      </div>
    );
  }
  