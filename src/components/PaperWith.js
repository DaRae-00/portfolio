import React from 'react';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiLink } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { AiOutlinePushpin } from 'react-icons/ai';

function SkillComp({ title, skills }) {
  return (
    <div className="mb-4">
      <div className="flex">
        <AiOutlinePushpin />
        <div className="-mt-1 ml-3">{title}</div>
      </div>
      <div className="flex text-xl ml-9 mt-1">
        {skills.map((s, i) => (
          <div key={`skill-${i}`}>
            {i === 0 ? '' : ', '}
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function PaperHeader({ textObject }) {
  return (
    <div className="p-8">
      <div className="flex text-xl">
        <MdWork />
        <span className="ml-3 -mt-1">Career</span>
      </div>

      <div className="flex mt-5">
        <HiLink />
        <a
          href={textObject.link}
          target="_blank"
          className="ml-3"
          rel="noreferrer"
        >
          {textObject.linkName}
        </a>
      </div>
    </div>
  );
}

function SkillsComp({ textObject }) {
  const lines = textObject.text.split('\n');

  return (
    <div className="p-8 flex flex-wrap">
      <div className="paper-with__skills-box">
        {lines.map((line, index) => (
          <div key={`t-${index}`}>{line}</div>
        ))}
      </div>
      <div className="pl-3 pr-3 mt-3">
        <SkillComp title="Front end" skills={textObject.skills.frontEnd} />
        <SkillComp
          title="Version Control"
          skills={textObject.skills.versionControl}
        />
        <SkillComp
          title="Communication"
          skills={textObject.skills.communication}
        />
      </div>
    </div>
  );
}

function ImagesComp({ textObject }) {
  const getImageURI = function (image) {
    return require('assets/' + image);
  };

  return (
    <div className="p-8">
      <Swiper
        pagination={{
          type: 'dynamic',
        }}
        navigation={true}
      >
        {textObject.images.map((image, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            <img src={getImageURI(image)} alt={`slide-${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function PaperWith({ textObject }) {
  return (
    <div className="paper-with">
      <PaperHeader textObject={textObject} />
      <hr />
      <ImagesComp textObject={textObject} />
      <hr />
      <SkillsComp textObject={textObject} />
    </div>
  );
}

PaperWith.propTypes = {
  textObject: PropTypes.object,
};

export default PaperWith;
