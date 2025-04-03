import { AgGridReact } from "ag-grid-react";

import { ColDef, ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const rowData = [
    {
        id: 1,
        date: '2025-04-01',
        type: '신용카드',
        category: '식비',
        amount: -35000,
        description: '점심 식사'
    },
    {
        id: 2,
        date: '2025-04-01',
        type: '현금',
        category: '교통비',
        amount: -4500,
        description: '버스 요금'
    },
    {
        id: 3,
        date: '2025-04-02',
        type: '체크카드',
        category: '쇼핑',
        amount: -68000,
        description: '의류 구매'
    },
    {
        id: 4,
        date: '2025-04-02',
        type: '입금',
        category: '급여',
        amount: 2500000,
        description: '4월 급여'
    },
    {
        id: 5,
        date: '2025-04-03',
        type: '신용카드',
        category: '생활비',
        amount: -42000,
        description: '마트 장보기'
    },
    {
        id: 6,
        date: '2025-04-03',
        type: '체크카드',
        category: '여가',
        amount: -15000,
        description: '영화 관람'
    },
    {
        id: 7,
        date: '2025-04-03',
        type: '현금',
        category: '기타',
        amount: -10000,
        description: '경조사비'
    }
];

const columnDefs: ColDef[] = [
    {
        headerName: '날짜',
        field: 'date',
        filter: true,
        sortable: true
    },
    {
        headerName: '유형',
        field: 'type',
        filter: true,
        sortable: true
    },
    {
        headerName: '분류',
        field: 'category',
        filter: true
    },
    {
        headerName: '금액',
        field: 'amount',
        sortable: true,
        // cellRenderer: params => {
        //     return params.value > 0
        //         ? `<span style="color: blue">+${params.value.toLocaleString()}원</span>`
        //         : `<span style="color: red">${params.value.toLocaleString()}원</span>`;
        // }
    },
    {
        headerName: '내용',
        field: 'description'
    }
]

const Grid = () => {
    return (
        <div
            className="ag-theme-material"
            style={{
                height: '100%',
                width: '500px',
            }
            }
        >

            <AgGridReact
                // className="ag-theme-alpine h-full w-full"
                columnDefs={columnDefs}
                rowData={rowData}
            />
        </div>
    )
};

export default Grid;