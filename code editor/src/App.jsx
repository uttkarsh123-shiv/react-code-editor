
// import './App.css'
import { Box} from "@chakra-ui/react"
import Codeeditor from "./Codeeditor"

// import { Editor } from "@monaco-editor/react"
function App() {
 

  return (
    <>
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
   
    <Codeeditor />
    </Box>
    </>
  )
}

export default App
