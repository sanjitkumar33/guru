import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';
import { HStack } from "rsuite";
const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function SparkleChart() {
  return (
    <HStack gap="sm">
      {/* <Text>Positive trend:</Text> */}
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      {/* <Text mt="md"></Text> */}
      {/* <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      /> */}

      {/* <Text mt="md">Neutral trend:</Text> */}
      {/* <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      /> */}
    </HStack>
  );
}

export default SparkleChart;
