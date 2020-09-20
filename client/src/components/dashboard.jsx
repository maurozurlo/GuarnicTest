import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'
import { LineChart, Line } from 'recharts'
import { useTheme } from 'guernic/hooks'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const Center = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Dashboard = () => {
  const theme = useTheme()
  return (
    <Center backgroundColor={theme.start.backgroundColor}>
      <Space align='center' direction='vertical'>
        <Typography.Title>Car Insurance</Typography.Title>
        <Typography.Text>
          Edit <code>src/components/dashboard.jsx</code> and save to reload.
        </Typography.Text>
        <LineChart width={400} height={400} data={data}>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        </LineChart>
      </Space>
    </Center>
  )
}

export default Dashboard
