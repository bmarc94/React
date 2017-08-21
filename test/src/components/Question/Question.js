import React from "react";
import { string } from "prop-types";

const Question = (props) => {

  return (
    <div>
      <h3>
        {props.title}
      </h3>
    </div>
  );
};

Question.propTypes = {
  title: string,
  number: string,
  assignment: string
}

export default Question;