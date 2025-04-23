import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CategoryTotal, TransactionData } from '@page/MainPage';

// Chart.js 컴포넌트 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const 지출PieChart = ({ data }: { data: any[] }) => {
    // useMemo를 사용하여 데이터 계산 최적화
    const { chartData, total지출 } = useMemo(() => {
        // 지출 데이터만 필터링 (음수 금액)
        const 지출Data = data.filter((item) => item.amount < 0);

        // 카테고리별 지출 합계 계산
        const categoryTotals: CategoryTotal = 지출Data.reduce(
            (acc: CategoryTotal, item) => {
                acc[item.category] =
                    (acc[item.category] || 0) + Math.abs(item.amount);
                return acc;
            },
            {},
        );

        // 총 지출 계산
        const total지출 = Object.values(categoryTotals).reduce(
            (sum, amount) => sum + amount,
            0,
        );

        // 차트 데이터 구성
        const chartData = {
            labels: Object.keys(categoryTotals),
            datasets: [
                {
                    label: '지출 금액',
                    data: Object.values(categoryTotals),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        return { chartData, total지출 };
    }, [data]);

    const options = {
        // 차트가 컨테이너의 크기에 맞게 자동으로 크기를 조정합니다
        responsive: true,

        // 차트의 가로세로 비율을 유지하지 않고 컨테이너에 맞게 늘어나도록 설정
        maintainAspectRatio: false,

        // 차트 플러그인 설정
        plugins: {
            // 범례(legend) 설정
            legend: {
                // 범례를 차트의 오른쪽에 배치
                position: 'right' as const,
            },

            // 차트 제목 설정
            title: {
                // 제목 표시 여부
                display: true,
                // 제목 텍스트
                text: '카테고리별 지출 분포',
                // 제목 폰트 설정
                font: {
                    size: 16, // 폰트 크기
                },
            },

            // 툴팁(마우스 오버 시 표시되는 정보) 설정
            tooltip: {
                // 툴팁 콜백 함수
                callbacks: {
                    // 툴팁 라벨 커스터마이징
                    label: (context: any) => {
                        // 카테고리 이름
                        const label = context.label || '';
                        // 해당 카테고리의 금액
                        const value = context.raw || 0;
                        // 전체 지출 중 해당 카테고리가 차지하는 비율 계산 (소수점 첫째 자리까지)
                        const percentage = (
                            (value / total지출) *
                            100
                        ).toFixed(1);
                        // 툴팁에 표시될 텍스트 형식 지정: "카테고리명: 금액원 (비율%)"
                        return `${label}: ${value.toLocaleString()}원 (${percentage}%)`;
                    },
                },
            },
        },
    };
    return (
        <div
            className="chart-container"
            style={{ width: '600px', height: '400px', margin: '0 auto' }}
        >
            <h2>지출 분석</h2>
            <div style={{ position: 'relative', height: '350px' }}>
                <Pie data={chartData} options={options} />
            </div>
            <div
                className="total-지출"
                style={{ textAlign: 'center', marginTop: '10px' }}
            >
                <p>총 지출: {total지출.toLocaleString()}원</p>
            </div>
        </div>
    );
};

export default 지출PieChart;
