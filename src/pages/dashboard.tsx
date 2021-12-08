import { Flex } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Sidebar } from "@components/Siderbar";

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mw={1480} mx="auto" px="6">
        <Sidebar />
        <h1>Dashboard</h1>
      </Flex>
      
    </Flex>
  )
}

export default Dashboard;