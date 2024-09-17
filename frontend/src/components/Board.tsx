import React, { useState } from "react"
import { useGameContext } from "../context/GameContext"
import { gameApi } from "../services/gameApi"
import { Grid, Flex, Button, Text } from "@chakra-ui/react"
import Cell from "./Cell"

const Board: React.FC = () => {
    const { state, dispatch } = useGameContext()
    const [loading, setLoading] = useState(false)

    const handleUserMove = async (index: number) => {
        if (state.board[index] || state.isGameOver || loading) return
        dispatch({ type: "MAKE_MOVE", payload: { index, value: "X" } })
        setLoading(true)
        try {
            const newBoard = [...state.board]
            newBoard[index] = "X"
            const updatedGameState = await gameApi.makeComputerMove(newBoard)
            dispatch({ type: "UPDATE_GAME_STATE", payload: updatedGameState })
        } catch (error) {
            console.error("Failed to make a move:", error)
        } finally {
            setLoading(false)
        }
    }

    const resetGame = () => {
        dispatch({ type: "RESET_GAME" })
    }

    const isWinningCell = (index: number) => {
        return !!(state.winningCombination && state.winningCombination.includes(index))
    }

    return (
        <Flex direction="column" align="center" justifyContent="center" h="100vh">
            <Grid templateColumns="repeat(3, 1fr)" gap={4} w={["90vw", "400px"]} h={["90vw", "400px"]}>
                {state.board.map((value, index) => (
                    <Cell
                        key={index}
                        value={value || ""}
                        onClick={() => handleUserMove(index)}
                        isWinning={isWinningCell(index)}
                    />
                ))}
            </Grid>
            
            <Button mt={6} onClick={resetGame} colorScheme="teal">
                Reset Game
            </Button>
            {state.winner && (
                <Text position={'absolute'} top="10%"  display="inline-block" fontSize="4xl" fontWeight="bold">
                    {state.winner !== "draw" ? `Winner is ${state.winner}` : "Draw"}
                </Text>
            )}
        </Flex>
    )
}

export default Board
