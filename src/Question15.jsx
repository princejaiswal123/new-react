import { useRef } from 'react';

  function Question15() {
      const video = useRef(null);

    const Play = () => {
    video.current?.play();
  };

  const Pause = () => {
    video.current?.pause();
  };

    const Restart = () => {
  if (video.current) {
        video.current.currentTime = 0;
        video.current.play();
    }
  };

  return (
    <div>
      <h2>Smart Video Player</h2>

      <video
        ref={video}  width="800" controls={false}
      >
        <source src="https://file-examples.com/storage/fee47d30d267f6756977e34/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
      </video>

      <div >
        <button onClick={Play}>Play</button>
        <button onClick={Pause} style={{ margin: '0 8px' }}>Pause</button>
        <button onClick={Restart}>Restart</button>
      </div>
    </div>
  );
}

export default Question15;
