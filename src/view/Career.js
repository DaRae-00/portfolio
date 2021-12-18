import React from 'react';
import PaperWith from 'components/PaperWith';
import story from 'const/story';
const textArray = story.careers;

function Career() {
  return (
    <div className="p-8">
      <div>
        {textArray.map((textObject, idx) => (
          <PaperWith textObject={textObject} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Career;
