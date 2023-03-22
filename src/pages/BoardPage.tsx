import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import { Header } from "@components/";
import data from "./data.json";
import Table from "react-bootstrap/Table";
import usePopupStroe from "@store/popup";

const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BoardPage = () => {
  const { isOpen, toggle } = usePopupStroe();
  const navigate = useNavigate();
  const page = new URLSearchParams(useLocation().search).get("page") ?? 1;

  const [inputValue, setInputValue] = useState("");

  // 500ms 간격으로 onChange 이벤트를 호출하는 함수를 생성
  const throttledOnChange = useCallback(
    _.throttle((e) => {
      setInputValue(e.target.value);
    }, 500),
    []
  );

  useEffect(() => {
    console.log("page", page);

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <Header name="" />
      <div className="board_wrap">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <Table striped bordered hover className="board">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성날짜</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((v, i) => (
              // <tr key={v.id} onClick={() => navigate(`/board/${v.id}`)}>
              <tr key={v.id} onClick={() => toggle()}>
                <td>{v.id}</td>
                <td>{v.description}</td>
                <td>{v.name}</td>
                <td>
                  {new Intl.DateTimeFormat("ko", {
                    timeStyle: "medium",
                    dateStyle: "medium",
                  }).format(new Date())}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pagination">
          <ul>
            {pagination.map((v) => (
              <li
                key={v}
                onClick={() => navigate(`/board?page=${v}`)}
                className={page === `${v}` ? "on" : ""}
              >
                {v}
              </li>
            ))}
            <li>&gt;</li>
          </ul>
        </div>
        <div className="search">
          <label htmlFor="username">검색</label>
          <input
            type="text"
            name="search"
            onChange={(e) => throttledOnChange(e)}
          />
          <button onClick={() => {}}>안녕</button>
        </div>
      </div>
    </>
  );
};

export default BoardPage;
