import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Forecast = () => (
  <ForecastContainer>
    <div style={{ padding: '0 10px' }}>
      <FontAwesome name="calendar-o" /> Forecast
    </div>
    <ForecastInbox>
      <li>
        <ForecastTitle>Past</ForecastTitle>
        <ForecastCount>2</ForecastCount>
      </li>
      <li>
        <ForecastTitle>Today</ForecastTitle>
        <ForecastCount />
      </li>
      <li>
        <ForecastTitle>Wed</ForecastTitle>
        <ForecastCount />
      </li>
      <li>
        <ForecastTitle>Thu</ForecastTitle>
        <ForecastCount />
      </li>
      <li>
        <ForecastTitle>Fri</ForecastTitle>
        <ForecastCount />
      </li>
      <li>
        <ForecastTitle>Sat</ForecastTitle>
        <ForecastCount />
      </li>
      <li>
        <ForecastTitle>Future</ForecastTitle>
        <ForecastCount>20</ForecastCount>
      </li>
    </ForecastInbox>
  </ForecastContainer>
);

const ForecastContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 0 10px;

  & .fa {
    margin-right: 10px;
  }
`;

const ForecastTitle = styled.div`
  font-size: 0.5em;
`;

const ForecastInbox = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 10px;
  list-style-type: none;
  font-size: 0.7em;
  text-align: center;

  & li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const ForecastCount = styled.div`
  background: #FFF;
  padding: 10px 0px;
  height: 100%;
  font-weight: bold;
  margin: 5px 1px 0px 1px;
`;

export default Forecast;
