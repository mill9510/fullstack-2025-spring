import { List, ListItem, Image, Text , HStack, Spinner} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner/>;

  return (
    <List>
    {genres.map((genre)=> (
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image src = {getCroppedImageUrl(genre.image_background)} 
          boxSize="32px" 
          borderRadius={8}
          objectFit="cover"
          />
          <Text>{genre.name}</Text>
        </HStack>
      </ListItem>
    ))}
    </List>
  );
};

export default GenreList;
