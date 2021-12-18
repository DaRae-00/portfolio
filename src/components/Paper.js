import React from 'react';
import PropTypes from 'prop-types';
import { HiLink } from 'react-icons/hi';
import { GiWhiteBook } from 'react-icons/gi';

function Paper({ textObject }) {
  const lines = textObject.text.split('\n');
  return (
    <div className="paper">
      <div className="flex text-xl">
        <GiWhiteBook />
        <span className="ml-3 -mt-1">공부한 기록들</span>
      </div>

      <div className="flex mt-5">
        <HiLink />
        <a href={textObject.link} target="_blank" className="ml-3">
          {textObject.linkName}
        </a>
      </div>

      <div className="mt-5">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

Paper.propTypes = {
  textObject: PropTypes.object,
};

export default Paper;
