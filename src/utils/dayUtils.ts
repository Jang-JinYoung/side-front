import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

/**
 * 
 * @param date 날짜 @default today
 * @param template 날짜포맷 @default current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
 * @returns 
 */
export const formatDay = (date?: string, template?: string) => {
    return dayjs(date).format(template);
};

/**
 * @param date 날짜
 * @param template 날짜포맷 @default YYYY-MM-DDTHH:mm:ss
 * @example
 * YYYY-MM-DDTHH:mm:ss
 * 2023-12-01T10:59:0   // false
 * 2023-12-01T10:59:00  // true
 * 2023-12-41T10:59:00  // false
 * YYYYMMDD
 * 2023-12-01T10:59:0   // false
 * 2023-12-01T10:59:00  // false
 * 20231241 false
 * 20231231 true
 * @returns 
 */
export const isValidDay = (date: string, format?: string) => {
    dayjs.extend(customParseFormat);
    return dayjs(date, format ?? "YYYY-MM-DDTHH:mm:ss", true).isValid();
};

/**
 * @param nowDate 비교날짜
 * @param afterDate 비교대상날짜
 * @example
 * isBeforeDay("2025-01-01", "2024-01-02")); // false
 * isBeforeDay("2025-03-28 15:55")); // true
 * @returns 
 * true 날짜 안지남
 * false 날짜 지남
 */

export const isBeforeDay = (nowDate: string, beforeDate?: string) => {
    return dayjs(nowDate).isBefore(beforeDate ?? formatDay());
};

/**
 * @param nowDate 비교날짜
 * @param afterDate 비교대상날짜
 * @example
 * isAfterDay("2025-01-01", "2024-01-02") // true
 * isAfterDay("2025-03-29") // true
 * @returns 
 * true 날짜 지남
 * false 날짜 안지남
 */
export const isAfterDay = (nowDate: string, afterDate?: string) => {
    return dayjs(nowDate).isAfter(afterDate ?? formatDay());
};

/**
 * @param nowDate 비교날짜
 * @param startDate 시작날짜
 * @param endDate 종료날짜
 * @param range 포함여부
 * [ : 포함 O, ( : 포함 X
 * '()' 시작, 종료 포함 X
 * '[]' 시작, 종료 포함 O
 * '[)' 시작 포함 O, 종료 포함 X (기본값)
 * @example
 * isBetweenDay("20250331", "20250330", "20250410") // true 
 * isBetweenDay("20250331", "20250401", "20250410") // false
 * @returns 
 */
export const isBetweenDay = (
    nowDate: string,
    startDate: string,
    endDate: string,
    range?: "[]" | "[)" | "(]" | "()"
) => {
    dayjs.extend(isBetween);

    return dayjs(nowDate).isBetween(startDate, endDate, "day", range ?? "[)");
};