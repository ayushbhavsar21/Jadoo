import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = ({ text }) => {
  const { speak, cancel, voices } = useSpeechSynthesis();

  const defaultVoice = voices.find(voice => voice.default);

  const handleSpeak = () => {
    speak({ text, voice: defaultVoice });
  };

  const handleCancel = () => {
    cancel();
  };

  return (
    <div className='h-[10vh]'>
      <div className='flex justify-center items-center gap-4'  >
      <p>Description: {text}</p>
<div className='flex flex-col gap-2'>
  <button onClick={handleSpeak} className='pl-[1vw] pr-[1vw] pt-2 pb-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-bold'>Speak</button>
  <button onClick={handleCancel} className='pl-[1vw] pr-[1vw] pt-2 pb-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-bold'>Stop</button>
</div>

      </div>
      
    </div>
  );
};

export default TextToSpeech;
