import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface CellProps {
    value: string
    onClick: () => void
    isWinning: boolean
}

const Cell: React.FC<CellProps> = ({ value, onClick, isWinning }) => {
    const MotionBox = motion(Box as any)

    return (
        <MotionBox
            d="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            bg={isWinning ? "red.100" : "gray.100"}
            borderRadius="md"
            fontSize={80}
            fontWeight="bold"
            cursor="pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            <Text
                w="100%"
                top="50%"
                display="inline-block"
                textAlign="center"
                color={value === "X" ? "teal.500" : "red.500"}
                transition="color 0.2s ease"
            >
                {value}
            </Text>
        </MotionBox>
    )
}

export default Cell
