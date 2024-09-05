import {
    Dropdown,
    Popover,
    Whisper,
    WhisperInstance,
    Stack,
    Badge,
    Avatar,
    IconButton,
    List,
    Button,
    VStack
  } from 'rsuite';
  import NoticeIcon from '@rsuite/icons/Notice';

import 'rsuite/Button/styles/index.css';
import 'rsuite/ButtonGroup/styles/index.css';
import 'rsuite/ButtonToolbar/styles/index.css';
import 'rsuite/IconButton/styles/index.css';
import 'rsuite/List/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Dropdown/styles/index.css';
// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/IconButton/styles/index.css';
import 'rsuite/Stack/styles/index.css';
import 'rsuite/Popover/styles/index.css';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Badge/styles/index.css';
import { useRef } from 'react';
import { PiTruckTrailer } from 'react-icons/pi';
// import { overflow } from 'html2canvas/dist/types/css/property-descriptors/overflow';

const renderNoticeSpeaker = ({ onClose, left, top, className }, ref) => {
    const notifications = [
      [
        '7 hours ago',
        '₹ 100.00 rupees received from payu.xyz19393@dbs Ref: yNiueo934noiv TrsId: 8934u349k43jdc8934.'
      ],
      [
        '13 hours ago',
        'Received ₹ 10890.00 Through RTGS/NEFT from AC: 129394048381039239 IFSC: BOI0003283 TrsId: 8934u34qw9kjdc8934'
      ],
      ['2 days ago', 'Today ₹ 150000 settled in your AC: 45000037273282 IFSC: IND8394893 Ref: i023nif93bfje3 TrsId: 8934u349kjdc8934'],
      [
        '3 days ago',
        'your KYC is completed.'
      ],
      [
        '3 days ago',
        'your KYC is Processing.'
      ],
      [
        '3 days ago',
        'your Profile is updated.'
      ]
    ];
  
    return (
      <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Last updates">
       <VStack style={{height: 480}}>
       <List>
          {notifications.map((item, index) => {
            const [time, content] = item;
            // <ul style={{ overflowY: true, overflowX: false,}}>
              return (
              <List.Item key={index}>
              {/* <li> */}
              <Stack spacing={4}>
                  <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
                </Stack>
  
                <p className='notice-text'>{content}</p>
              {/* </li> */}
              </List.Item>
            );
            // </ul>
          })}
        </List>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={onClose}>More notifications</Button>
        </div>
       </VStack>
      </Popover>
    );
  };
  



const NotificationButton = () => {

const trigger = useRef(null);

    return (
      <Stack className="header" spacing={8}>

      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
              <IconButton onClick={renderNoticeSpeaker}
              icon={
                  <Badge content={5}>
                  <NoticeIcon animation='pulse' style={{ fontSize: 20 }} className='notice-text' />
                  </Badge>
              }
              />
          </Whisper>
      </Stack>
    )
};

export default NotificationButton;