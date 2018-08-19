import * as React from "react";
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountIcon from "@material-ui/icons/AccountBox";
import BirthDateIcon from "@material-ui/icons/DateRange";
import ContactIcon from "@material-ui/icons/ContactPhone";
import Paper from "@material-ui/core/Paper";
import CustomerDetails,{CustomerList} from './CustomerDetails';
import Typography from '@material-ui/core/Typography';

export interface CustomerCreateState {
  firstName: string;
  lastName:string;
  dateOfBirth:string;
  contactNum:string;
  allergies:string;
  medicalHistory:string;
  isRequired:boolean;
}
const  CreateRequired:any ={
  firstName:true,
  lastName:false,
  dateOfBirth:false,
  contactNum:true,
  allergies:false,
  medicalHistory:false
}

const CreateError:any=[];

class CustomerCreate extends React.Component<{},CustomerCreateState> {
  constructor (props:any){
  super(props);
    this.state={
      firstName:"",
      lastName:"",
      dateOfBirth:"",
      contactNum:"",
      allergies:"",
      medicalHistory:"",
      isRequired:true
    }
  }

  handleChange(input:string,event:any){
    if(CreateRequired[input]){
      if(!event.target.value){
        CreateError[input]=true;
      }
      else{
        CreateError[input]=false;
      }
      this.setState({isRequired:CreateError[input]});
    }
  }

  formToJson = (elements:any) => [].reduce.call(elements, (data:any, element:any) => {
        data[element.id] = element.value;
    return data;
  }, {});

  handleSubmit(e:any){
    e.preventDefault();
    let form: Element = document.querySelector('#frmCustomer');
    let jsonForm = this.formToJson(form);
    var IsValidForm=true;

    for(var key in CreateRequired){
      if(CreateRequired[key] && !jsonForm[key]){
        IsValidForm=false;
        CreateError[key]=true;
        this.setState({isRequired:CreateError[key]});
      }
    }

    if(!this.state.isRequired && IsValidForm){
        var list=CustomerList.push(jsonForm);
        this.setState({isRequired:true});
    }
  }
  render() {
    var allCustomer=CustomerList.map((customer:any) =>{
      return <div>{customer.firstName}</div>
    });
    return (
      <Grid container spacing={16} >
        <Grid item xs={6} sm={4}>
          <Paper style={{textAlign:"left" , padding: `1rem 2rem`}}>
          <Typography variant="body2"> Registration Form  </Typography>
            <form id="frmCustomer">
                <TextField 
                  id="firstName"
                  label="First Name"
                  placeholder="First Name"
                  required={CreateRequired.firstName}
                  onClick={this.handleChange.bind(this,'firstName')}
                  onChange={this.handleChange.bind(this,'firstName')}
                  error ={CreateError['firstName']}
                  helperText={CreateError['firstName']?"Required":""}
                  margin="normal" />              
                <AccountIcon />

                <TextField 
                  id="lastName" 
                  label="Last Name"
                  placeholder="Last Name"
                  required={CreateRequired.lastName}
                  onClick={this.handleChange.bind(this,'lastName')}
                  onChange={this.handleChange.bind(this,'lastName')}
                  error ={CreateError['lastName']}
                  margin="normal" />
                <AccountIcon />

                <TextField 
                  id="dateOfBirth"  
                  label="Date Of Birth" 
                  type="date" 
                  defaultValue="1992-12-31" 
                  required={CreateRequired.dateOfBirth}
                  onClick={this.handleChange.bind(this,'dateOfBirth')}
                  onChange={this.handleChange.bind(this,'dateOfBirth')}
                  error ={CreateError['dateOfBirth']}
                  style={{width: 200}}
                  margin="normal" />
                <BirthDateIcon/>

                <TextField 
                  id="contactNum" 
                  label="Contact Number"
                  placeholder="Contact Number"
                  type="number" 
                  required={CreateRequired.contactNum}
                  onClick={this.handleChange.bind(this,'contactNum')}
                  onChange={this.handleChange.bind(this,'contactNum')}
                  error ={CreateError['contactNum']}
                  helperText={CreateError['contactNum']?"Required":""}
                  margin="normal" />
                <ContactIcon />

              <TextField 
                id="allergies" 
                label="Allergies"
                placeholder="Ex: Food:Fish, Drug:Penicillin"
                multiline
                rowsMax="4"
                required={CreateRequired.allergies}
                onClick={this.handleChange.bind(this,'allergies')}
                onChange={this.handleChange.bind(this,'allergies')}
                error ={CreateError['allergies']}
                helperText= "List all known allergies (drugs, food, animals, etc.)"
                margin="normal" />

              <TextField 
                id="medicalHistory"  
                label="Medical History"
                placeholder="Ex: Diabetes, Rheumatoid Arthritis, Relapsing Polychondritis, Scleroderma"
                multiline
                rows="2"
                rowsMax="4" 
                required={CreateRequired.medicalHistory}
                onClick={this.handleChange.bind(this,'medicalHistory')}
                onChange={this.handleChange.bind(this,'medicalHistory')}
                error ={CreateError['medicalHistory']}
                helperText="List if you have ever experienced any medical condition"
                margin="normal" />

                <Button variant="contained" color="secondary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} >
          <CustomerDetails />
        </Grid>
      </Grid>
    );
  }
}

export default CustomerCreate