import { useState } from 'react';
import { Box, Progress, PasswordInput, Group, Text, Center, Popover, TextInput } from '@mantine/core';
import { IconCheck, IconX, IconLock } from '@tabler/icons-react';

function PasswordRequirement({ meets, label }) {
  return (
    <div className="inputbox">
    <Text component="div" color={meets ? 'teal' : 'red'} mt={5} size="sm" className='form-control'>
      <Center inline>
        {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
    </div>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
  { re: /^[^\s]+$/, label: 'Does not include spaces' },
  { re: /^[^<>{}[\]`~$^|\\]+$/, label: 'Does not include restricted symbols' },
];

function getStrength(password) {
  let multiplier = password.length > 7 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export function PasswordInputStrength() {
  const [value, setValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const [popoverOpened, setPopoverOpened] = useState(false);
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));
  const match = value === confirmValue;

  return (
    <Box maxWidth={400} mx="auto">
      <Popover
        opened={popoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: 'pop' }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput 
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              placeholder="Your password"
              label="Password"
              required
              visibilityToggleButtonProps={{
                'aria-label': 'Toggle password visibility',
              }}
             id="newPassword"
              leftSection={<IconLock style={{ width: '18px', height: '18px' }} />}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Group gap={5} grow mt="xs" mb="md">
            {bars}
          </Group>
          <PasswordRequirement label="Has at least 8 characters" meets={value.length > 7} />
          {checks}
        </Popover.Dropdown>
      </Popover>
      <PasswordInput 
        value={confirmValue}
        onChange={(event) => setConfirmValue(event.currentTarget.value)}
        placeholder="Confirm password"
        label="Confirm Password"
        required
        mt="md"
        visibilityToggleButtonProps={{
          'aria-label': 'Toggle password visibility',
        }}
         id="repeatPassword"
        leftSection={<IconLock style={{ width: '18px', height: '18px' }} />}
      />
      {!match && (
        <Text color="red" size="sm" mt="sm" style={{ display: 'flex', alignItems: 'center' }}>
          <IconX style={{ width: '14px', height: '14px' }} /> <Box ml={10}>Passwords do not match</Box>
        </Text>
      )}
    </Box>
  );
}
