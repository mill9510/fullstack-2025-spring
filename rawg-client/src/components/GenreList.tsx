import { List, ListItem, Image, Text , HStack} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data: genres } = useGenres();

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
