import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  const [dateInfo, setDateInfo] = useState<any>({
    day: null,
    date: null,
    year: null,
  });

  const getMonth = (today: any) => {
    const option: { month: "long" } = { month: "long" };
    return new Intl.DateTimeFormat("en-US", option).format(today);
  };

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setDateInfo({
      day: dayOfWeek[today.getDay()],
      date: `${getMonth(today)} ${today.getDate()}, `,
      year: today.getFullYear(),
    });
  }, []);

  return (
    <TodoHeadBlock>
      <DayText>{dateInfo.day}</DayText>
      <DateText>{`${dateInfo.date} ${dateInfo.year}`}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
