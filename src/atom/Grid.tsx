import { AgGridReact } from 'ag-grid-react';

import {
    ColDef,
    ModuleRegistry,
    ClientSideRowModelModule,
    GridOptions,
    FirstDataRenderedEvent,
    ColumnAutoSizeModule,
} from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);
ModuleRegistry.registerModules([ColumnAutoSizeModule]);

const style = {
    height: '500px',
    width: '100%',
};

const columnDefs: ColDef[] = [
    {
        headerName: '날짜',
        field: 'date',
    },
    {
        headerName: '유형',
        field: 'type',
    },
    {
        headerName: '분류',
        field: 'category',
    },
    {
        headerName: '금액',
        field: 'amount',
    },
    {
        headerName: '내용',
        field: 'description',
    },
];

const Grid = ({ rowData }: { rowData: any[] }) => {
    // Grid 만들어지고 호출
    const onFirstDataRendered = (event: FirstDataRenderedEvent) => {
        const { api } = event;

        api.sizeColumnsToFit();
    };

    const gridOption: GridOptions = {
        defaultColDef: {
            // cellClass: 'text-center flex items-center justify-center h-full'
        },
        onFirstDataRendered: onFirstDataRendered,
    };

    return (
        <div className="ag-theme-alpine" style={style}>
            <AgGridReact
                gridOptions={gridOption}
                // className="ag-theme-alpine h-full w-full"
                columnDefs={columnDefs}
                rowData={rowData}
                animateRows
            />
        </div>
    );
};

export default Grid;
