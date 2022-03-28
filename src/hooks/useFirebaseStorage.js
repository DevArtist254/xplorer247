import { useState, useEffect } from 'react';
import {
  photoStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from './../firebase/firebase';

const useFirebaseStorage = (files) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //setting up storage ref  for cloud
    const storageRef = ref(photoStorage, files.name);

    //setting up the upload the actual file with the storage ref
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        //snapshot for the file being uploaded
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //Getting url string from the snapshot ref
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  }, [files]);

  return { progress, error, url };
};

export default useFirebaseStorage;
