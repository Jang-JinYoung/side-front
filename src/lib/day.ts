import dayjs from "dayjs";

const isToday = (date: string) => {
    // const day = dayjs('2018-05-05 12:12:12').locale('kr');
    // console.log(day);

    const currentDate = dayjs();

    return currentDate.isSame(dayjs(date), 'day');
}

const getWriteTm = (date: string) => {
    const [datePart, timePart] = date.split(' ');

    return isToday(date) ? timePart : datePart;
}



export {
    isToday,
    getWriteTm,
}