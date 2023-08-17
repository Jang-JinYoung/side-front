import React from 'react';

const CssPage = () => {
  return (
    <header className="test">
      {/* 로고 영역 */}
      <div className="section1">
        <div>로고 영역</div>
      </div>
      <div className="section2">
        <nav>
          <ul className="typ1">
            <li>A페이지</li>
            <li>B페이지</li>
            <li>B페이지</li>
            <li>B페이지</li>
            <li>B페이지</li>
          </ul>
        </nav>
      </div>
      <div className="section3">
        <nav>
          <ul className="typ1">
            <li>A페이지</li>
            <li>B페이지</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CssPage;
