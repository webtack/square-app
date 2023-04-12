import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { selectModes } from "../../../../store/app/selectors";
import PropTypes from "prop-types";

const SelectComponent = ({ mode, onSetMode }) => {
  const modes = useSelector(selectModes);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Pick mode</InputLabel>

        <Select
          labelId="select-label"
          id="select"
          label="Pick mode"
          value={mode}
          onChange={onSetMode}
        >
          {modes.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

SelectComponent.propTypes = {
  mode: PropTypes.string,
  onSetMode: PropTypes.func,
};

export default SelectComponent;
