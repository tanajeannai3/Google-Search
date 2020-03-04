import Btn from "../Btn";
import React from "react";


function RmvBtn(props) {
    return (
      <Btn type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Btn>
    );
  }



  export default RmvBtn;