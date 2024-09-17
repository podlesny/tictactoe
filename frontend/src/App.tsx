import { ChakraProvider } from "@chakra-ui/react"
import "./App.css"
import Board from "./components/Board"
import { GameProvider } from "./context/GameContext"
import theme from "./themes/theme"

function App() {
    return (
        <ChakraProvider theme={theme}>
            <GameProvider>
                <Board />
            </GameProvider>
        </ChakraProvider>
    )
}

export default App
