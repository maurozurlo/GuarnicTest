import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// Antd
import { Pagination, Button, Divider } from 'antd'
import { LoadingOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts'
import { useTheme } from 'guarnic/hooks'
// API
import { getData } from '../handlers/api'
// Styled components
const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`

const Header = styled.div`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`
const GraphContainer = styled.div`
  background-color: white;
  padding-top: 2em;
  display: grid;
  border-radius: 5px;
  box-shadow: '3px 2px 6px 0 rgba(0,0,0,0.24)';
  grid-template-columns: 80px auto 80px;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'previous main next';
  & div {
    &:nth-of-type(1){
      grid-area: header;
      text-align: center;
    }
    &:nth-of-type(2){
      grid-area: main;
    }
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(1) {
      grid-area: previous;
    }
    &:nth-of-type(2) {
      grid-area: next;
    }
  }
`
const Title = styled.h1`
  color: ${({ color }) => color};
  margin: 0;
`

const Subtitle = styled.h2`
  color: ${({ color }) => color};
`

const Dashboard = () => {
  const theme = useTheme()
  const [dataFound, setDataFound] = useState(false)
  const [dataFetching, setDataFetching] = useState(true)
  const [data, setData] = useState([])
  const [day, setDay] = useState(0)

  const handleClick = (val) =>{
      setDay(val - 1)
  }
  // Api Fetch
  useEffect(() => {
    getData()
      .then(res => {
        setDataFetching(false);

        if (res) {
          setDataFound(true);
          setData(res);
        } else {
          setDataFound(false)
        }
      })
      .catch(error => {
        setDataFound(false)
        console.log(`Error fetching data: ${error}`)})
  }, [])

  return (
    <Wrapper backgroundColor={theme.global.greyLight}>
      <Header backgroundColor={theme.global.primary}>
        <Title color={theme.global.greyLight}>Car Insurance</Title>
      </Header>
      {dataFetching && (<LoadingOutlined style={{ fontSize: 58, padding: '1.5em' }} spin />)}
      {!dataFetching && !dataFound && (<p>Error fetching data</p>)}

      {!dataFetching && dataFound && (
        <GraphContainer>
          <div>
          <Subtitle color={theme.global.primary}>Products at day {day + 1}</Subtitle>
          <Pagination
      total={data.length}
      showQuickJumper
      size="small"
      defaultPageSize={1}
      showTotal={total => `Total ${total} days`}
      onChange={handleClick}
    />
          </div>
          <BarChart
            width={800}
            height={300}
            data={data[day]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='price' fill={theme.global.primary} />
            <Bar dataKey='sellIn' fill={theme.global.secondary} />
          </BarChart>
        </GraphContainer>
      )}
      <Divider />
    </Wrapper>
  )
}

export default Dashboard
