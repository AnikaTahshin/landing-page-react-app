import React from "react";
import "./Trending.scss";
const Trending = (props) => {
  const item = props.data;
  console.log("anika:", item);

  return (
    <>
      <div className="titles">
        <p>title</p>
        {/* {item.map((element, index) => {
          return <p>{element.title}</p>;
        })} */}
      </div>
    </>
  );
};

export default Trending;
