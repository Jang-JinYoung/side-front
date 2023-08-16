import React from "react";
import { useParams } from "react-router-dom";

const BoardDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>Board Detail: {id}</div>
      <textarea />
    </>
  );
};

export default BoardDetailPage;
