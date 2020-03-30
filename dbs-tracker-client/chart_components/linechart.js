import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.

const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 130, bottom: 100, left: 70 }}
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
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableSlices='x'
        legends={[
            {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
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

export default MyResponsiveLine
