import React, { useCallback, useEffect } from 'react';
import Navbar from './modules/Navbar';
import Profile from './modules/Profile';

export default function App() {
  const [data, setData] = React.useState<any>({});

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
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Navbar data={data} />
      <Profile data={data} />
    </>
  );
}
