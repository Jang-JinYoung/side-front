import React from 'react';
import Grid from '@atoms/Grid';

const Test = () => {

    return (
        <div className="h-screen flex flex-col" >
            {/* 상단 차트 영역 */}
            < div className="h-1/2 p-4 bg-gray-100" >
                <div className="w-full h-full bg-white rounded-lg shadow-md p-4" >
                    {/* <Chart type="bar" data = { chartData } /> */}
                </div>
            </div>

            {/* 하단 그리드 영역 */}
            <div className="h-1/2 p-4 bg-gray-200" >
                <div className="w-full h-full bg-white rounded-lg shadow-md" >
                    <Grid />
                </div>
            </div>
        </div>
    );
};

export default Test;