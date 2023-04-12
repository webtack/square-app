import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({ item }) => {
  return (
    <li>
      row {item.rowId} col {item.cellId}
    </li>
  );
};

ResultItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    cellId: PropTypes.number,
    rowId: PropTypes.number,
  }),
};

export default ResultItem;
