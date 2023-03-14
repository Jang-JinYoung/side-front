import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

const BoardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <table className="board">
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => (
            <tr key={v.id} onClick={() => navigate(`/board/${v.id}`)}>
              <td>{v.id}</td>
              <td>{v.description}</td>
              <td>{v.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardPage;
