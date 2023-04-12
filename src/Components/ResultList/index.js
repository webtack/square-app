import React from "react";
import { useSelector } from "react-redux";
import ResultItem from "./ResultItem";
import { selectCells } from "../../store/app/selectors";
import "./ResultList.css";

const ResultList = () => {
  const cells = useSelector(selectCells);

  return (
    <div>
      <h3>Hover squares</h3>

      <ul className="list">
        {cells.length > 0
          ? cells.map((item) => <ResultItem key={item.id} item={item} />)
          : null}
      </ul>
    </div>
  );
};

export default ResultList;
