import { ResponsiveLine } from '@nivo/line'
import { useColorMode } from "@chakra-ui/core";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.

const MyResponsiveLine = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textcolor = { light: "#333", dark: "#ccc" };
  const gridcolor = { light: "#eee", dark: "#333" };
  const bgcolor = { light: "#fff", dark: "#333" };
  const theme = {
    axis: {
      ticks: {
        line: {
          stroke: "#333"
        },
        text: {
          fill: textcolor[colorMode]
        }
      },
      legend: {
        text: {
          fill: textcolor[colorMode]
        }
      }
    },
    grid: {
      line: {
        stroke: gridcolor[colorMode],
        strokeWidth: 1
      }
    },
    tooltip: {
      container: {
        background: bgcolor[colorMode]
      },
    }
  };
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 130, bottom: 100, left: 70 }}
      xScale={{
        type: 'time',
        format: '%Y_%m',
        precision: 'month',
      }}
      xFormat="time:%Y-%b"
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      yFormat={value =>
        `S$ ${parseFloat(Number(value)).toFixed(2)}`
      }
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: '%b %Y',
        orient: 'bottom',
        tickSize: 10,
        tickPadding: 10,
        tickRotation: -45,
        legend: 'time',
        legendOffset: 75,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: 'price',
        legendOffset: -60,
        legendPosition: 'middle'
      }}
      colors={{ scheme: 'set2' }}
      theme={theme}
      pointSize={3}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={4}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableSlices='x'
      legends={[
        {
          anchor: 'top-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 110,
          itemHeight: 20,
          itemOpacity: 0.75,
          itemTextColor: textcolor[colorMode],
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      motion={{
        animate: true,
        motionStiffness: 300,
        motionDamping: 30
      }}
      interactivity={{
        enableSlices: 'x',
        crosshairType: 'bottom'
      }}
    />
  )
}

export default MyResponsiveLine
