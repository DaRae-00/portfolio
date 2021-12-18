import React from 'react';
import Paper from 'components/Paper';
import story from 'const/story';
const textArray = story.storage;

function Archiving() {
  return (
    <div className="flex flex-wrap justify-around">
      {textArray.map((textObject, idx) => (
        <Paper textObject={textObject} key={idx} />
      ))}
    </div>
  );
}

export default Archiving;
