import Head from 'next/head'
import InvestmentCharts from './page_components/investment-charts'
import InvestmentDetails from './page_components/investment-details'
import fetch from 'node-fetch'

import { useColorMode, Button, Box, Heading, Text, Grid, IconButton, Divider } from "@chakra-ui/core";

const Home = ({ invdata }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={8}>
      <Grid templateColumns='4fr 1fr'>
        <Heading as="h3" size="lg" mt={3}>
          DBS Investments Tracker
        </Heading>
        <Box textAlign='right' p={2}>
          <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? "sun" : "moon"}/>
        </Box>
      </Grid>
      <Divider />
      <Grid templateColumns='repeat(4, 1fr)' mt={5}>
        <Box gridColumn='1 / 4'>
          <InvestmentCharts data={invdata} />
        </Box>
        <Box gridColumn='4 / 5' borderLeft='1px solid rgba(255,255,255,0.16)' p={5} h='100%'>
          <InvestmentDetails data={invdata} />
        </Box>
      </Grid>
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/investments')
  const invdata = await response.json()

  return { props: { invdata } }
}


export default Home
