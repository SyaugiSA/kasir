import React from 'react';

export default function Dating() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let tanggal = date.getDate();
  let bulan = date.getMonth() + 1;
  let tahun = date.getFullYear().toString().substr(-2);
  let jam = date.getHours();
  let menit = date.getMinutes();
  let detik = date.getSeconds();

  tanggal < 10
    ? (tanggal = `0${tanggal.toString().substr(-2)}`)
    : tanggal.toString().substr(-2);

  bulan < 10
    ? (bulan = `0${bulan.toString().substr(-2)}`)
    : (bulan = bulan.toString().substr(-2));

  jam < 10
    ? (jam = `0${jam.toString().substr(-2)}`)
    : (jam = jam.toString().substr(-2));

  menit < 10
    ? (menit = `0${menit.toString().substr(-2)}`)
    : (menit = menit.toString().substr(-2));

  detik < 10
    ? (detik = `0${detik.toString().substr(-2)}`)
    : (detik = detik.toString().substr(-2));

  return `${tanggal}/${bulan}/${tahun}-${jam}:${menit}:${detik}`;
}
