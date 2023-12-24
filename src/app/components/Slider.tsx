import React, { useState } from 'react';

interface SliderProps<CommentInfo>{
    data: CommentInfo[]
}

interface CommentInfo{
    image: string;
    name: string;
    job: string;
    comment: string;
}

const Slider: React.FC<SliderProps<CommentInfo>> = ({data}) => {

  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const handleSelect = (index: number) => {
    setSelectedIdx(index);
  };

  const handlePrev = () => {
    if (selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1);
    }
  };

  const handleNext = () => {
    if (selectedIdx < 3) {
      setSelectedIdx(selectedIdx + 1);
    }
  };

  return (
    <div>
      <div className="slider-card">
      <img className='elem-slider' src='/src/assets/images/elem.svg'></img>
        <div className='wrap-card-header'>
            <div className="slider-card-title">
              What our customer are saying
              </div>
            <div className="wrap-divider-slider"><div className="divider-white"></div></div>
        </div>
        <div className='comment-block'>
            <div className='author'>
                <div className='wrap-avatar'>
                    <img className='avatar' src={data[selectedIdx].image}></img>
                </div>
                <div className='about-author'>
                    <div className='name-author'>{data[selectedIdx].name}</div>
                    <div className='job-author'>{data[selectedIdx].job}</div>
                </div>
                <div className='wrap-text-slider'><p className='text-slider'>{data[selectedIdx].comment}</p></div>
            </div>
        </div>
        <div/>
      </div>
      <div className='wrap-manage-slider'>
        <div className='manage-slider'>
            <button className={`button-left ${selectedIdx === 0 ? 'disabled' : ''}`} onClick={handlePrev} disabled={selectedIdx === 0}></button>
            {Array.from({ length: 4 }, (_, index) => (
            <div
                key={index}
                className={`circle ${selectedIdx === index ? 'selected' : ''}`}
                onClick={() => handleSelect(index)}
            />
            ))}
            <button className={`button-right ${selectedIdx === 3 ? 'disabled': ''}`} onClick={handleNext} disabled={selectedIdx === 3}></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
export type { CommentInfo };