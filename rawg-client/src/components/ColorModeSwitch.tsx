import { Switch, HStack, Text, useColorMode } from '@chakra-ui/react'

export const ColorModeSwitch = () => {

const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
        <Switch 
        isChecked={colorMode === "dark"} 
        colorScheme="green" 
        onChange={toggleColorMode}
        />
        <Text>Dark mode</Text>
    </HStack>
  )
}
