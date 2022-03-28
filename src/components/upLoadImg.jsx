import { useState } from 'react';
import Progress from './progress.comp';

const UpLoadImg = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [files, setFiles] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState('');

  const typesOfImg = ['image/png', 'image/jpeg'];
  const fileUploader = (e) => {
    let selected = e.target.files[0];

    if (selected && typesOfImg.includes(selected.type)) {
      setFiles(selected);
      setError('');
    } else {
      setFiles(null);
      setError('Please select the correct image format png or jpeg');
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={fileUploader} />
        <div>
          {error && <div>{error}</div>}
          {files && <div>{files.name}</div>}
          {files && <Progress files={files} />}
        </div>
      </form>
    </div>
  );
};

export default UpLoadImg;
