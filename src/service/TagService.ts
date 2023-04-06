import { utils } from "@lib/";
import axios from "./axios";
import { IPage } from "@interface/";

const tagService = {
  getTagList: ({ page, pageSize, sort, keyword }: IPage) => {
    axios
      .get(
        `/tag/find?${utils.getPageParameter({ page, pageSize, sort, keyword })}`
      )
      .then((res) => {
        console.log(res);
        return res.data;
      });
  },
};

export default tagService;
