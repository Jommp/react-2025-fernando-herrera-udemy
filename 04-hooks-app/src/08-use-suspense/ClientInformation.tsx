import { useEffect } from 'react';
import { getUserAction } from './api/get-user.action';

export const ClientInformation = ({ id }: { id: number }) => {
  // const user = await getUserAction(id);

  // useEffect(() => {
  //   getUserAction(id).then(console.log);
  // }, [id]);

  return (
    <div>
      <h2 className=''>
        Chema - #43
      </h2>

      <p>
        Cancún, México
      </p>
      <p>
        React Developer
      </p>
    </div>
  );
};
