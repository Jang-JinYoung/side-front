export const formatCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'decimal',
    });
    return formatter.format(Number(value));
};
