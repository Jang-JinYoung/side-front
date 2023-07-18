import { IPage } from "src/interface/IPage";

export const getPageParameter = ({ page, pageSize, sort, keyword }: IPage): string => {
  return `page=${page}&pageSize=${pageSize}&sort=${sort.join(",")}&keyword=${keyword}`;
};

export default {
  getPageParameter,
};
