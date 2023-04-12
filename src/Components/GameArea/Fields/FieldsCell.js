import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCellAction, removeCellAction } from "../../../store/app/actions";
import { selectisReset } from "../../../store/app/selectors";
import PropTypes from "prop-types";

const FieldsCell = ({ cellId, rowId }) => {
  const [color, setColor] = useState("white");
  const isReset = useSelector(selectisReset);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isReset) setColor("white");
  }, [isReset]);

  const onOverElement = useCallback(
    (event) => {
      if (event.target.style.backgroundColor !== "blue") {
        setColor("blue");

        dispatch(
          addCellAction({
            id: cellId.toString() + "_" + rowId.toString(),
            cellId: cellId,
            rowId: rowId,
          })
        );
      } else {
        dispatch(removeCellAction(cellId.toString() + "_" + rowId.toString()));

        setColor("white");
      }
    },
    [setColor, dispatch, cellId, rowId]
  );

  const styles = {
    backgroundColor: color,
  };

  return <td onMouseOver={onOverElement} style={styles}></td>;
};

FieldsCell.propTypes = {
  cellId: PropTypes.number,
  rowId: PropTypes.number,
};

export default FieldsCell;
