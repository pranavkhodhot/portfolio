import React from "react";

const Tag = (props) => {
  return (
    <div className="project-card">
      <div className="w-25 border border-info rounded-cirlce border-5">
        <img
          className=""
          src={`icons/React.svg`}
          alt={"React"}
          width={18}
          height={18}
        />
        React
      </div>
    </div>
  );
};

export default Tag;
