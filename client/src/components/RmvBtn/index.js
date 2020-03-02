import Button from "../Button";
import React from "react";


function RmvBtn(props) {
    return (
      <Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Button>
    );
  }



  export default RmvBtn;