import { NextPage } from 'next';
import axios from 'axios';
import useSWR from 'swr';
import Interval from '../components/interval';
import React, { useState, useEffect } from 'react';
import { daysAndHours } from '../utils/days';
import Modal from '../components/modal';
import Loading from '../components/loading';
import { useUser } from '../context/user';

const Board: NextPage = () => {
  const [response, setResponse] = useState({});
  const [hours, setHours] = useState([]);
  const [events, setEvents] = useState('');
  const [loading, setLoading] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setLoading(1);
    axios
      .get('/api/event')
      .then((res) => {
        setResponse(res.data.event);
        setLoading(0);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Modal visible={isModalVisible} onClose={() => setModalVisible(false)} />
      <div className="my-20 mx-0 w-full h-screen">
        {loading === 0 ? (
          <div className="flex flex-row items-center justify-center">
            {daysAndHours.map((item, i) => (
              <div className="mx-1" key={i}>
                <h1>{item.day}</h1>
                {item.hours.map((hour) => (
                  <Interval
                    day={item.day}
                    initialTime={hour}
                    finalTime={hour + 1}
                    key={hour}
                    onClick={() => setModalVisible(true)}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </>
  );
};

export default Board;
