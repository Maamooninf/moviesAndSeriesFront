import "./List.scss";
import { DataGrid } from "@material-ui/data-grid";

import { FC } from "react";

const Listoption: FC<any> = (props) => {
  return (
    <div className="List">
      <div className="TitleContainer">{props.title}</div>
      <DataGrid
        rows={props.arrayoption}
        columns={props.columns}
        checkboxSelection
        autoHeight={true}
        rowsPerPageOptions={[25, 60, 100]}
        onSelectionModelChange={(e) => {
          props?.setlistinfo((prev: any) => ({ ...prev, content: e }));
        }}
      />
    </div>
  );
};

export default Listoption;
