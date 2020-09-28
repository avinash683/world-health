import React from 'react';
import './App.css';
import {SnackbarProvider} from "notistack";
import Button from "@material-ui/core/Button";
import Main from "./components/Main";

function App() {
  const snackbarRef = React.createRef();

  const onClickDismiss = (key) => () => {
    snackbarRef.current.closeSnackbar(key);
  };
  return (
    <div>
      <SnackbarProvider
        maxSnack={3}
        ref={snackbarRef}
        action={(key) => (
          <Button
            size='small'
            style={{color: '#fff'}}
            onClick={onClickDismiss(key)}
          >
            Dismiss
          </Button>
        )}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
        <Main/>
      </SnackbarProvider>
    </div>
  );
}

export default App;
