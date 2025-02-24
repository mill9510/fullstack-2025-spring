import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
 
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}


const GameGrid = ( {selectedGenre, selectedPlatform }: Props) => {
  const skeletons = [...Array(20).keys()];
  console.log(selectedGenre);
  const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
 
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
 
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};
 
export default GameGrid;
 
