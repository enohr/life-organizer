import { NextPage } from 'next';
import axios from 'axios';
import useSWR from 'swr';
import Interval from '../components/interval';
import { useState, useEffect } from 'react';
import { daysAndHours } from '../utils/days';

const Board: NextPage = () => {
  const { data, error } = useSWR('/api/event', axios);
  const [hours, setHours] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, isLoading] = useState(1);
  const [modal, setModal] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await axios.post('http://localhost:3000/api/event');
  }

  console.log(daysAndHours);

  return (
    <div className="my-20 mx-0">
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
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
