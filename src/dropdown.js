import React, { Component } from 'react'
import Select , {OptionTypeBase} from 'react-select'
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import axios from 'axios'
import './App.css';


export default class Dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectCloudOptions : [],
      selectResourceCategoryOptions : [],
      selectResourceTypeOptions: [],
      resourceList: [],
      id: "",
      name: '',
      cloudSelected: "",
      typeSelected: ""
    }
  }
  
   async getOptions(){
      const res = await axios.get('https://my-json-server.typicode.com/kmosoti/json-server-host/cloud_providers')
      const res2 = await axios.get('https://my-json-server.typicode.com/kmosoti/json-server-host/resource_types')
      const data = res.data
      const data2 = res2.data
      
      const options = data.map(d => ({
        "value" : d.id,
        "label" : d.name
  
      }))
      const options2 = data2.map(d => ({
        "value" : d.id,
        "label" : d.name
  
      }))
      this.setState({cloudSelected: 'empty'})
      this.setState({typeSelected: 'empty'})
      this.setState({selectOptions: options})
      this.setState({selectResourceCategoryOptions: options2})
  
    }
  /*global getResourceOptions*/
  async getResourceOptions(cloud, type){
    const API_RESPONSE = await axios.get('https://pz9xze9vsl.execute-api.us-east-1.amazonaws.com/prod/virtual-machines/list?provider='+cloud+'&category='+type)
    const API_DATA = API_RESPONSE.data
    
    const resource_options = API_DATA.map(d =>({
      "value": d.name,
      "label": d.name
    }))
    
    this.setState({selectResourceTypeOptions: resource_options})
  }
  //************************************************************************************************************
  handleChangeCloud(e){
    //this.setState({id:e.value, name:e.label})
    const optionsTest = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    this.setState({cloudSelected: e.label})
    console.log(this.state.typeSelected != "empty");
    if(this.state.typeSelected != "empty"){
      this.state.resourceList = optionsTest;
      console.log('Loading Resource Options...')
    }
    //console.log('TypeSelected: '+this.state.typeSelected)
    console.log('resourceList: '+this.state.resourceList)
    console.log('cloudSelected: '+this.cloudSelected)
    console.log('typeSelected: '+this.typeSelected)
  }
   //************************************************************************************************************
  handleChangeCategory(e){
    this.setState({typeSelected: e.label})
    const optionsTest = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    console.log(this.state.cloudSelected !== "empty");
    if(this.state.cloudSelected !== "empty"){
      this.state.resourceList = optionsTest;
      console.log('Loading Resource Options...')
    }
    if(this.state.cloudSelected !== "empty" && this.state.typeSelected !== "empty"){
        getResourceOptions(this.state.cloudSelected, this.state.typeSelected);
    }

    console.log('resourceList: '+this.state.resourceList)
    console.log('cloudSelected: '+this.cloudSelected)
    console.log('typeSelected: '+this.typeSelected)
  }
  //************************************************************************************************************
  handleChange(e){
    this.setState({id:e.value, name:e.label})
    console.log(this.state.resourceList)
  }  

  componentDidMount(){
      this.getOptions()
  }
  

  render() {
    const optionsTest = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    console.log(this.state.selectOptions)
    return (
      <div className="selectReact">
        <FormControl>
          <InputLabel htmlFor="cloudProv">Select Cloud Provider</InputLabel>
          <Select id="cloudProv" options={this.state.selectOptions} onChange={this.handleChangeCloud.bind(this)} />
        </FormControl>
        
        <FormControl>
          <InputLabel htmlFor="region_var">Region</InputLabel>
          <Select id="region_var" options={optionsTest} isDisabled onChange={this.handleChange.bind(this)} />
        </FormControl>
        
        <FormControl className="selectReact">
          <InputLabel htmlFor="resourcetype_var">Select Resource Category</InputLabel>
          <Select id="resourcetype_var" options={this.state.selectResourceCategoryOptions} onChange={this.handleChangeCategory.bind(this)} />
        </FormControl>
        
        <FormControl className="selectReact">
          <InputLabel htmlFor="resource_var">Select Resource Type</InputLabel>
          <Select id="resource_var" options={this.state.selectResourceTypeOptions} onChange={this.handleChange.bind(this)} />
        </FormControl>
        <FormControl className="selectReact">
          <InputLabel htmlFor="resource_var">Select Resource</InputLabel>
          <Select id="resource_var" options={this.state.resourceList} onChange={this.handleChange.bind(this)} />
        </FormControl>
      </div>
    )
  }
}