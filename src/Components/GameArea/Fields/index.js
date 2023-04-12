import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../../../store/app/selectors";
import FieldsRow from "./FieldsRow";
import "./Fields.css";

const Fields = () => {
  const mode = useSelector(selectMode);
  const size = mode?.field;
  const rows = Array(size).fill("");

  return (
    <table className="table">
      <tbody>
        {rows.map((o, i) => (
          <FieldsRow key={i} rowId={i} size={size} />
        ))}
      </tbody>
    </table>
  );
};

export default Fields;
