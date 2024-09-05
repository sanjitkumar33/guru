import React, { useState, useRef } from 'react';
import { Affix, Stack, DateRangePicker } from 'rsuite';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';
import 'rsuite/Stack/styles/index.css';
import 'rsuite/DateRangePicker/styles/index.css';

const predefinedRanges = [
  {
    label: 'Today',
    value: [new Date().toISOString(), new Date().toISOString()],
    placement: 'left'
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1).toISOString(), addDays(new Date(), -1).toISOString()],
    placement: 'left'
  },
  {
    label: 'This week',
    value: [startOfWeek(new Date()).toISOString(), endOfWeek(new Date()).toISOString()],
    placement: 'left'
  },
  // {
  //   label: 'Last 7 days',
  //   value: [subDays(new Date(), 6).toISOString(), new Date().toISOString()],
  //   placement: 'left'
  // },
  // {
  //   label: 'Last 30 days',
  //   value: [subDays(new Date(), 29).toISOString(), new Date().toISOString()],
  //   placement: 'left'
  // },
  {
    label: 'This month',
    value: [startOfMonth(new Date()).toISOString(), new Date().toISOString()],
    placement: 'left'
  },
  {
    label: 'Last month',
    value: [
      startOfMonth(addMonths(new Date(), -1)).toISOString(),
      endOfMonth(addMonths(new Date(), -1)).toISOString()
    ],
    placement: 'left'
  },
  {
    label: 'This year',
    value: [
      new Date(new Date().getFullYear(), 0, 1).toISOString(),
      new Date().toISOString()
    ],
    placement: 'left'
  },
  {
    label: 'Last year',
    value: [
      new Date(new Date().getFullYear() - 1, 0, 1).toISOString(),
      new Date(new Date().getFullYear(), 0, 0).toISOString()
    ],
    placement: 'left'
  },
  {
    label: 'All time',
    value: [
      new Date(new Date().getFullYear() - 1, 0, 1).toISOString(),
      new Date().toISOString()
    ],
    placement: 'left'
  },
  {
    label: 'Last week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), -7).toISOString(),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), -7).toISOString()
      ];
    },
    appearance: 'default'
  },
  {
    label: 'Next week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), 7).toISOString(),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), 7).toISOString()
      ];
    },
    appearance: 'default'
  }
];

const formatDateRange = (range) => {
  const [start, end] = range;
  return `${new Date(start).toISOString()} , ${new Date(end).toISOString()}`;
};

const DateRangeToolBar = () => {
  const [fixed, setFixed] = useState(false);
  const containerRef = useRef(null);
  const [selectedRange, setSelectedRange] = useState([new Date().toISOString(), new Date().toISOString()]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <Affix onChange={setFixed}>
      <Stack
        spacing={15}
        justifyContent="space-between"
        ref={containerRef}
        style={{
          position: 'relative',
          background: '#fff',
          marginBottom: 20,
          padding: 4,
          borderRadius: fixed ? 0 : 6,
          boxShadow: fixed ? '0 0 15px 0 rgb(0 0 0 / 10%)' : undefined
        }}
      >
        <Stack spacing={15}>
          <DateRangePicker
            appearance="subtle"
            defaultValue={selectedRange}
            // showOneCalendar
            ranges={predefinedRanges}
            // onChange={selectedRange}
            showMeridian
            format="yyyy-MM-dd HH:mm:ss"
            container={() => containerRef.current}
            onOk={handleRangeChange}
          />
      </Stack>
      {/* <Stack  spacing={15}> 
      <label>{formatDateRange(selectedRange)}</label>
      </Stack> */}
      </Stack>
    </Affix>
  );
};

export default DateRangeToolBar;
