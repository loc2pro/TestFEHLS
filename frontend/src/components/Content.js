import React, { useEffect, useState, useContext } from "react";


function Content(props) {
  const {content}=props;
  console.log(content);
  return (
    <div>
        <div className="row">
          <p>{content.title}</p>
        </div>
    </div>
  );
}

export default Content;
