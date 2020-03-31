import Head from 'next/head'
import Investments from './page_components/investments'
import fetch from 'node-fetch'

import { useColorMode, Button, Box, Heading, Text, Grid, IconButton, Divider } from "@chakra-ui/core";

const Home = ({ invdata }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={8}>
      <Grid templateColumns='4fr 1fr'>
        <Heading as="h3" size="lg" mt={3}>
          Investments Dashboard
        </Heading>
        <Box textAlign='right' p={2}>
          <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? "sun" : "moon"}/>
        </Box>
      </Grid>
      <Divider />
      <Grid templateColumns='5fr 20px 2fr' mt={5}>
        <Investments data={invdata} />
        <Divider orientation='vertical'/>
        <Box>
          <Text>Hello Details</Text>
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
