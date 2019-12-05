import React, { PropsWithChildren } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { TwilioError } from 'twilio-video';

interface ErrorDialogProps {
  dismissError: Function;
  error: TwilioError | null;
}

function ErrorDialog({ dismissError, error }: PropsWithChildren<ErrorDialogProps>) {
  const { message, code } = error || {};
  return (
    <Dialog open={error !== null} onClose={() => dismissError()}>
      <DialogTitle>ERROR</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        <br />
        {code && (
          <pre>
            <code>Error Code: {code}</code>
          </pre>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dismissError()} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ErrorDialog;
