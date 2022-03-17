import React, { useRef, useState } from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import useLayoutEffect from '../../../utils/useIsomorphicLayoutEffect';
import 'video.js/dist/video-js.css';

function VideoPlayer(options: VideoJsPlayerOptions) {
  const [player, setPlayer] = useState<VideoJsPlayer>();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (containerRef && containerRef.current && player) {
      const setWidth = () => {
        if (containerRef && containerRef.current) {
          const { offsetWidth } = containerRef.current;
          player.width(offsetWidth);
        }
      };

      setWidth();
      window.addEventListener('resize', setWidth);
      return () => {
        window.removeEventListener('resize', setWidth);
      };
    }
  }, [containerRef, player]);

  useLayoutEffect(() => {
    if (videoRef && videoRef.current) {
      const player = videojs(videoRef.current, options);
      setPlayer(player);
      return () => {
        player.dispose();
      };
    }
  }, [videoRef, options]);

  return (
    <div ref={containerRef} className="w-full hover:bg-black hover:opacity-80">
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-custom"></video>
      </div>
    </div>
  );
}

export default VideoPlayer;
