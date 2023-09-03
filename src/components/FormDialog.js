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
import { DialogDescription } from "@radix-ui/react-dialog";



export default function FormDialog(props) {

  const [selectedDate, setSelectedDate] = React.useState(props.date == "" ? "2023-01-01" : props.date);

  const [open, setOpen] = React.useState(props.open);

  const [options, setOptions] = React.useState([]);

  const [services, setServices] = React.useState([]);

  const [selectedService, setSelectedService] = React.useState(null);

  const [selectedTime, setSelectedTime] = React.useState(null);

  const [fullname, setFullname] = React.useState(null);

  const [phone, setPhone] = React.useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    console.log("Submit",selectedDate,selectedService,selectedTime,fullname,phone);
    if(selectedDate == null || selectedDate == undefined || selectedService == null || selectedService == undefined || selectedTime == null || selectedTime == undefined || fullname == null || fullname == undefined || phone == null || phone == undefined){
      return;
    }
    var duration = selectedService.split("(")[1].split(" ")[0];
    Api.addEvent(selectedDate,selectedService,selectedTime,duration,fullname,phone).then((response) => {
      props.addedEvent(response.data);
      setOpen(false);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log("DAte",selectedDate);
    Api.getServices().then((response) => {
      setServices(response.data);
    });
    setOpen(props.open);
    setSelectedDate(props.date == "" ? "2023-01-01" : props.date);
  }, [props]);


  const handleDateChange = (event) => {
    console.log(event.target.value);
    if(selectedService == null || selectedService == undefined){
      return;
    }
    setSelectedDate(event.target.value);
    fillOptions(event.target.value,selectedService.split("(")[1].split(" ")[0])
  }

const handleServiceChange = (event) => {
  console.log(event.target.innerText);
  setSelectedService(event.target.innerText);
  fillOptions(selectedDate,event.target.innerText.split("(")[1].split(" ")[0]);

}

const handleTimeChange = (event) => {
  console.log(event.target.innerText);
  setSelectedTime(event.target.innerText);
}


const fillOptions = (date,duration) => {
  setOptions([]);
  if(duration == null || duration == undefined || date == null || date == undefined){
    return;
  }
  Api.getFreeSlots(date, duration).then((response) => {
    setOptions(response.data);
  });
}

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
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

          <br />
          <DialogContentText>
            Dátum
          </DialogContentText>

          <Input label="Dátum" type="date" id="date" name="date" onChange={(e) => {handleDateChange(e);}} defaultValue={selectedDate}  />

          <br />
          <br />

          <Autocomplete
            id="combo-box-services"
            options={services}
            disableClearable
            onChange={(event) => {
              handleServiceChange(event);
            }}
            getOptionLabel={(option) => `${option.name} (${option.duration} perc)`  }
            label="Szolgáltatás"
            renderInput={(params) => <TextField {...params} label="Szolgáltatás" variant="outlined" />}
          />

          <br />

          <Autocomplete
            id="combo-box-services"
            options={options}
            disableClearable
            onChange={(event) => handleTimeChange(event)}
            getOptionLabel={(option) => option.startTime.split('T')[1].slice(0, 5)  }
            label="Időpont"
            renderInput={(params) => <TextField {...params} label="Szabad időpontok" variant="outlined" />}
          />

          <TextField
            required={true}
            autoFocus
            margin="dense"
            id="fullname"
            label="Teljes név"
            type="text"
            fullWidth
            value={fullname}
            onChange={ (e) => {setFullname(e.target.value);}}
          />
          <TextField
            required={true}
            autoFocus
            margin="dense"
            id="phone"
            label="Telefonszám"
            type="text"
            fullWidth
            value={phone}
            onChange={ (e) => {setPhone(e.target.value);}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Mégse
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Foglalás
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

