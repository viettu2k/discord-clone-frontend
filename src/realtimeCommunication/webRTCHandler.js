import { setLocalStream } from '../store/actions/roomActions';
import store from '../store/store';

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  video: true,
  audio: true,
};
export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log('Cannot get an access to local stream');
    });
};
