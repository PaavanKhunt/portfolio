import React, { useCallback, useEffect } from 'react';
import Navbar from './modules/Navbar';
import Profile from './modules/Profile';

export default function App() {
  const [data, setData] = React.useState<any>({});
  const [cred, setCred] = React.useState<any>({});

  const transformData = (data: any[][]) => {
    const obj: any = {};
    data.map((item, index) => {
      if (item.length === 0) {
        data.splice(index, 1);
        index--;
      }
      const keys = item[0];

      const values = item.slice(1);
      obj[keys] = values.length === 1 ? values[0] : values;
    });
    return obj;
  };

  const getData = useCallback(async () => {
    const payload = {
      range: 'Sheet1!A1:H23',
      credentials: cred,
    };

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return setData(transformData(data.data));
  }, [cred]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getCred = useCallback(async () => {
    const payload = {
      data:
        process.env.GOOGLE_APPLICATION_CREDENTIALS ??
        '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',
    };

    const response = await fetch('/api/decrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return setCred(data);
  }, []);

  useEffect(() => {
    getCred();
  }, [getCred]);

  return (
    <>
      <Navbar data={data} />
      <Profile data={data} />
    </>
  );
}
