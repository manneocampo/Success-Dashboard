import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import moment from 'moment';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};


export default class NotesTable extends Component {
  constructor(props){
    super(props);

    this.state={
      fixedHeader: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
      tableData: []
    };
    this.handleToggle=this.handleToggle.bind(this);
    this.handleChange=this.handleChange.bind(this);
  };


  componentDidMount() {
    axios.get('/getNotes').then(response => {
      console.log(response.data);
      this.setState({tableData: response.data});
    })
  };


  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange(event) {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <MuiThemeProvider>
 

        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                  <h4>My Notes</h4>
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Date">Date</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Note">Note</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {this.state.tableData.map( (note, index) => (
                <TableRow key={note._id}>
                  <TableRowColumn>{note._id}</TableRowColumn>
                  <TableRowColumn>{moment(note.noteCreated).format('MM/DD/YYYY')}</TableRowColumn>
                  <TableRowColumn>{note.note}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        
      </MuiThemeProvider>
    );
  }
}










     // <Paper style={styles.propContainer}>
     //      <h3>Table Properties</h3>
     //      <TextField
     //        floatingLabelText="Table Body Height"
     //        defaultValue={this.state.height}
     //        onChange={this.handleChange}
     //      />
     //      <Toggle
     //        name="fixedHeader"
     //        label="Fixed Header"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.fixedHeader}
     //      />
     //      <Toggle
     //        name="selectable"
     //        label="Selectable"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.selectable}
     //      />
     //      <Toggle
     //        name="multiSelectable"
     //        label="Multi-Selectable"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.multiSelectable}
     //      />
     //      <Toggle
     //        name="enableSelectAll"
     //        label="Enable Select All"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.enableSelectAll}
     //      />
     //      <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
     //      <Toggle
     //        name="deselectOnClickaway"
     //        label="Deselect On Clickaway"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.deselectOnClickaway}
     //      />
     //      <Toggle
     //        name="stripedRows"
     //        label="Stripe Rows"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.stripedRows}
     //      />
     //      <Toggle
     //        name="showRowHover"
     //        label="Show Row Hover"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.showRowHover}
     //      />
     //      <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
     //      <Toggle
     //        name="showCheckboxes"
     //        label="Show Checkboxes"
     //        onToggle={this.handleToggle}
     //        defaultToggled={this.state.showCheckboxes}
     //      />
     //    </Paper>