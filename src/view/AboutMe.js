import React from 'react';
import PicMy from 'assets/darae.png';

function AboutMe(props) {
  return (
    <div className="w-full">
      <div>
        <img src={PicMy} art="main" className="w-80 h-96 mx-auto rounded-md" />
      </div>
      <div className="text-center mt-6">
        <div className="text-5xl">안녕하세요!</div>
        <div className="mt-3">기초를 튼튼히 쌓자'를 목표로 </div>
        <div>즐겁게 공부하며 개발중인 프론트엔드 개발자입니다.</div>
      </div>
    </div>
  );
}

export default AboutMe;
