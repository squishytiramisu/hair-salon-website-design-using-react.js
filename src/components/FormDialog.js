import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from '@material-ui/core/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Api from '../service/api';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [options, setOptions] = React.useState([]);

  const calendar = React.createRef();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() =>{
    const element = calendar.current;
    console.log(element);
  },[]);


  const fillOptions = (event) => {
    

      Api.getFreeSlots(event.target.value,30).then((response) => {
        setOptions(response.data);
      });


  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Új foglalás
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Új foglalás</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Válasszon dátumot, szolgáltatást és időpontot!
          </DialogContentText>
          <Input type="date" id="date" name="date" ref={calendar} onChange={(e) => fillOptions(e)} />

          <Autocomplete
  id="combo-box-demo"
  options={options}
  getOptionLabel={(option) => option.startTime}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>

          <TextField
            autoFocus
            margin="dense"
            id="flat"
            label="Flat"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="floor"
            label="Floor"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
