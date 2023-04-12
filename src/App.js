import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameArea from "./Components/GameArea";
import ResultList from "./Components/ResultList";
import "./App.css";
import { getModes } from "./store/app/thunks";
import { selectError, selectIsLoading } from "./store/app/selectors";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Container from '@mui/material/Container';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModes());
  }, [dispatch]);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <div className="App">
        {error && <Alert severity="error"> {error} </Alert>}
        {isLoading && <LinearProgress />}

        <Grid container spacing={2}>
          <Grid lg={6} md={6} sm={12} xs={12} item>
            <GameArea />
          </Grid>

          <Grid lg={6} md={6} sm={12} xs={12} item>
            <ResultList />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default App;
