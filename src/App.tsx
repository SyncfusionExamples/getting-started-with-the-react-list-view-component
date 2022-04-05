import React from 'react';
import './App.css';
import {ListViewComponent} from '@syncfusion/ej2-react-lists';
import {DataManager, WebApiAdaptor, Query} from '@syncfusion/ej2-data';
import {nestedListData} from './data';

function App() {
  // To bind remote data, comment out below code and assign the 
  // const remotedata: DataManager = new DataManager({
  //   url: "https://ej2services.syncfusion.com/production/web-services/api/Employees/",
  //   adaptor: new WebApiAdaptor,
  //   crossDomain: true
  // })

  // set query={dataQuery} in below code for remote data binding 
  // const dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
 return (
    <div className="App">
      <ListViewComponent dataSource={nestedListData} 
        fields={{id: 'id', text: 'text', child: 'child'}}
        showCheckBox={false} checkBoxPosition="Right"
        showHeader={true} headerTitle="Folders"
      ></ListViewComponent>
    </div>
  );
}

export default App;
