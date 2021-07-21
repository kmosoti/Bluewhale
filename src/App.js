//import logo from './logo.svg';
import React from 'react';
import './App.css';

import {makeStyles} from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'


//import './Table'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TrashIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  table: {
    minWidth: 650,
  },
}));

export default function App() {

  const cloud_input ={
    'cloud_var':"NoneSelected",
    'region_var':"NoneSelected",
    'resource_type':"NoneSelected",
    'resource_var':"NoneSelected"
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  //const [cloudProv, setCloud] = React.useState('');
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeCloud = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log(name);
  };

  //Table Functions
  function createData(AWS_Match_col, resources_col, resources_type_col, cloud_provider_col, region_col, pricing_col, delete_col) {
    return {AWS_Match_col, resources_col, resources_type_col, cloud_provider_col, region_col, pricing_col, delete_col};
  }

  var row_array = [
    {
      'AWS Match':'Lambda 8GB', 
      'Resources':"25X70 8GB",
      'Resource Type':"Compute", 
      'Cloud Provider':"Microsoft Azure", 
      'Region':"West",
      'Pricing':"$2400", 
      '':<Button><TrashIcon onClick={handleChange}/></Button>
    },
    {
      'AWS Match':'Lambda 8GB', 
      'Resources':"25X70 8GB",
      'Resource Type':"Compute", 
      'Cloud Provider':"Microsoft Azure", 
      'Region':"West",
      'Pricing':"$2400", 
      '':<Button><TrashIcon onClick={handleChange}/></Button>
    },
    {
      'AWS Match':'Lambda 8GB', 
      'Resources':"25X70 8GB",
      'Resource Type':"Compute", 
      'Cloud Provider':"Microsoft Azure", 
      'Region':"West",
      'Pricing':"$2400", 
      '':<Button><TrashIcon onClick={handleChange}/></Button>
    },
    {
      'AWS Match':'Lambda 8GB', 
      'Resources':"25X70 8GB",
      'Resource Type':"Compute", 
      'Cloud Provider':"Microsoft Azure", 
      'Region':"West",
      'Pricing':"$2400", 
      '':<Button><TrashIcon onClick={handleChange}/></Button>
    }
  ]
  //const {cloudData} = this.props

  const rows = [
    createData('Lambda 8GB', "25X70 8GB","Compute", "Microsoft Azure", "West", "$2400", <Button><TrashIcon onClick={handleChange}/></Button>),
    createData('Lambda 8GB', "25X70 8GB","Compute", "Microsoft Azure", "West", "$2400", <Button><TrashIcon onClick={handleChange}/></Button>),
    createData('Lambda 8GB', "25X70 8GB","Storage", "Microsoft Azure", "West", "$2400", <Button><TrashIcon onClick={handleChange}/></Button>),
  ];

  const TableHeaderCustom = () => {
    return(
      <TableHead>
          <TableRow>
            <TableCell >AWS Match</TableCell>
            <TableCell align="right">Resource</TableCell>
            <TableCell align="right">Resource Type</TableCell>
            <TableCell align="right">Cloud Provider</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Pricing</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
      </TableHead>
    )
  }
  const TableBodyCustom = () => {
    return(
      <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell >{row.AWS_Match_col}</TableCell>
          <TableCell align="right">{row.resources_col}</TableCell>
          <TableCell align="right">{row.resources_type_col}</TableCell>
          <TableCell align="right">{row.cloud_provider_col}</TableCell>
          <TableCell align="right">{row.region_col}</TableCell>
          <TableCell align="right">{row.pricing_col}</TableCell>
          <TableCell align="right">{row.delete_col}</TableCell>
        </TableRow>
      ))}
      </TableBody>
    )
  }


  const handleClick = (e) => {
    cloud_input.cloud_var = document.getElementById("cloudProv").value;
    cloud_input.region_var = "disabled"//document.getElementById("region_var").value;
    cloud_input.resource_type = document.getElementById("resource_type").value;
    cloud_input.resource_var = document.getElementById("resource_var").value;
    console.log(cloud_input);
  }
  return (
    <div className="App">
      <div className="App-body">
        <div className="Input-field">
          <div className="float-child">
            <FormControl>
              <InputLabel htmlFor="cloudProv">Select Cloud Provider</InputLabel>
              <Select
                native
                value={state.cloudProv}
                onChange={handleChangeCloud}
                id = "cloudProv"
                defaultValue = {""}
              >
                <option value="" defaultValue disabled>SELECT</option>
                <option value={"Microsoft Azure"}>Microsoft Azure</option>
                <option value={"Google Cloud Platform"}>Google Cloud Platform</option>
              </Select>
            </FormControl>
          </div>
          <div className="float-child">
            <FormControl disabled>
                <InputLabel htmlFor="region">Select Region</InputLabel>
                <Select
                  native
                  value={state.region}
                  onChange={handleChange}
                  id = "region"
                  defaultValue = {""}
                >
                  <option aria-label="None" value="" />
                  <option value={"East"}>East</option>
                  <option value={"Central"}>Central</option>
                  <option value={"West"}>West</option>
                </Select>
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
          </div>
          <div className="float-child">
            <FormControl>
              <InputLabel htmlFor="resource_type">Select Resource Type</InputLabel>
              <Select
                native
                value={state.resourceType}
                onChange={handleChange}
                id = "resource_type"
                defaultValue = {""}
              >
                <option value="" disabled>SELECT</option>
                <option value={"Compute"}>Compute</option>
                <option value={"Storage"}>Storage</option>
              </Select>
            </FormControl>
          </div>
          <div className="float-child">
            <FormControl>
              <InputLabel htmlFor="resource_var">Select Resource</InputLabel>
              <Select
                native
                value={state.resource}
                onChange={handleChange}
                id ="resource_var"
                defaultValue = {""}
              >
                <option value="" disabled>SELECT</option>
                <option value={"None yet"}>None</option>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <Button
                onClick={handleClick}
                type="submit"
                variant="contained"
                color="primary"
                value="submit"
                endIcon={<AddIcon/>}>
                  Add
              </Button>
            </FormControl>
          </div>
        </div>
        <div className="Input-table">

            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table" cloudData={row_array}>
                    <TableHeaderCustom/>
                    <TableBodyCustom/>
                  </Table>
            </TableContainer>
        </div>
        <div className ="total_Price">
          <Button variant="outlined">Get Total</Button>
          <h1>Total Montly Price Estimate: $200000</h1>
        </div>
      </div>
    </div>
  );
}
