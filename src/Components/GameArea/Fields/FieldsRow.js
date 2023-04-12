import React from "react";
import FieldsCell from "./FieldsCell";
import PropTypes from "prop-types";

const FieldsRow = ({ size, rowId }) => {
  const cells = Array(size).fill("");

  return (
    <tr>
      {cells.map((o, i) => (
        <FieldsCell key={rowId + "-" + i} cellId={i} rowId={rowId} />
      ))}
    </tr>
  );
};

FieldsRow.propTypes = {
  size: PropTypes.number,
  rowId: PropTypes.number,
};

export default FieldsRow;
