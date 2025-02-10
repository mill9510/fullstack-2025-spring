import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game [];
}

const GameGrid = () => {
    const {games, error} = useGames();
    return (
        <div>
            {error && <Text color="tomato"> {error} </Text>}
            <ul>
                {games.map((game) => 
                <li key = {game.id}>{game.name}</li>
                )}
            </ul>
        </div>
    )
};

export default GameGrid;