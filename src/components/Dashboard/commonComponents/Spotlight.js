import React from 'react';
import { rem, Badge, Button, Center, Group, Text } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import '@mantine/spotlight/styles.css';
import { IconSearch } from '@tabler/icons-react';
import { Kbd } from '@mantine/core';
import { HStack } from 'rsuite';
const actions = [
  {
    group: 'Pages',
    actions: [
      { id: 'home',  title:'home', image:'https://img.icons8.com/clouds/256/000000/futurama-bender.png' ,label: 'Main Dashboard and Statistic', description: 'Account Overview',  new: true, },
      { id: 'upi', title:'upi', image:'' ,label: 'UPI', description: 'IUPI / PUPI Services',  new: false, },
      { id: 'net-banking', title:'net-banking', image:'' ,label: 'Net Banking', description: 'RTGS / NEFT Banking Services',  new: false, },
      { id: 'reports', title:'reports', image:'https://img.icons8.com/clouds/256/000000/futurama-mom.png' ,label: 'Reports', description: 'All Reports',  new: false, },
      { id: 'transactions', title:'transactions', image:'https://img.icons8.com/clouds/256/000000/homer-simpson.png' ,label: 'Transactions', description: 'Transactional Report ',  new: false, },
    ],
  },

  {
    group: 'Account',
    actions: [
    
      { id: 'settings', title:'settings', image:'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png' ,label: 'Settings', description: 'Convert data to base 64 format',  new: false, },
     
      // { id: 'fake-data', title:'fake-data', image:'' ,label: 'UPI', description: 'Lorem ipsum generator',  new: false, },
    ],
  },
];

function SpotlightSearch() {
  return (
    <>
    <HStack>
    
      <Spotlight style={{padding: '2px' }}
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      >
        <Group wrap="nowrap" w="100%">
        {actions.image && (
          <Center>
            <img src={actions.image} alt={actions.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{actions.title}</Text>

          {actions.description && (
            <Text opacity={0.6} size="xs">
              {actions.description}
            </Text>
          )}
        </div>

        {actions.new && <Badge variant="default">new</Badge>}
      </Group>

        </Spotlight>
    </HStack>
    </>
  );
}

export default SpotlightSearch;
