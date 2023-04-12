import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModes } from "../../../store/app/selectors";
import StartButton from "./StartButton/StartButton";
import SelectComponent from "./Select/Select";
import { resetCellsAction, setModeAction } from "../../../store/app/actions";
import { Grid } from "@mui/material";

const ModeSelect = () => {
  const dispatch = useDispatch();
  const [currentMode, setCurrentMode] = useState("");
  const [disabled, setDisabled] = useState(true);
  const modes = useSelector(selectModes);

  const onSelectMode = useCallback(
    (event) => {
      setCurrentMode(event.target.value);
      setDisabled(false);
    },
    [setCurrentMode, setDisabled]
  );

  const onStart = useCallback(() => {
    dispatch(setModeAction(modes.find((i) => i.id === currentMode)));
    dispatch(resetCellsAction());
  }, [currentMode, dispatch, modes]);

  return (
    <Grid container spacing={2}>
      <Grid lg={8} md={8} sm={8} xs={12} item>
        <SelectComponent mode={currentMode} onSetMode={onSelectMode} />
      </Grid>

      <Grid lg={4} md={4} sm={4} xs={12} item>
        <StartButton onClickStart={onStart} disabled={disabled} />
      </Grid>
    </Grid>
  );
};

export default ModeSelect;
