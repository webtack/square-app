import React from "react";
import ModeSelect from "./ModeSelect";
import Fields from "./Fields";
import { useSelector } from "react-redux";
import { selectMode } from "../../store/app/selectors";
import { Grid } from "@mui/material";

const GameArea = () => {
  const mode = useSelector(selectMode);

  return (
    <div>
      <ModeSelect />

      {mode ? (
        <Grid container justifyContent="center" alignItems="center">
          <Fields />
        </Grid>
      ) : null}
    </div>
  );
};

export default GameArea;
