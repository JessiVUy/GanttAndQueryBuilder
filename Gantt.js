import * as React from 'react';
import {
  GanttComponent,
  Inject,
  Edit,
  Selection,
  Toolbar,
  Filter,
  Resize,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-gantt';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const Gantt = ({ model, dataManager }) => {
  const [query, setQuery] = React.useState(model?.query ?? {});

  React.useEffect(() => {
    if (model?.query) {
      setQuery(new Query().where(model.query));
    } else {
      setQuery({});
    }
  }, [model]);

  const toolbar = ['Add', 'Edit', 'Delete'];
  const projectStartDate = new Date('07/04/1996');
  const projectEndDate = new Date('09/06/1996');

  const taskFields = {
    id: 'OrderID',
    name: 'ShipName',
    startDate: 'ShippedDate',
    endDate: 'RequiredDate',
    progress: 'Freight',
  };

  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    /*allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,*/
  };

  return (
    <GanttComponent
      id="Default"
      dataSource={dataManager}
      //treeColumnIndex={1}
      taskFields={taskFields}
      /*editSettings={editSettings}
      toolbar={toolbar}
      allowResizing={true}
      allowSelection={true}
      allowFiltering={true}*/
      query={query}
      //height="410px"
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
    >
      <ColumnsDirective>
        <ColumnDirective field="OrderID" width="80"></ColumnDirective>
        <ColumnDirective
          field="ShipName"
          headerText="Job Name"
          width="250"
          clipMode="EllipsisWithTooltip"
        ></ColumnDirective>
        <ColumnDirective field="ShippedDate"></ColumnDirective>
        <ColumnDirective field="RequiredDate"></ColumnDirective>
        <ColumnDirective field="Freight"></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Edit, Selection, Toolbar, Filter, Resize]} />
    </GanttComponent>
  );
};

export default Gantt;
