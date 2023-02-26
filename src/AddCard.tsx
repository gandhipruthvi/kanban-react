import { Flex, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function AddCard({
  addCard,
}: {
  addCard: (title: string) => void;
}) {
  const [title, setTitle] = useState<string>("");

  return (
    <Flex w="60%" p="5" alignItems="center">
      <Text flex="1" textAlign="center">
        Card Title
      </Text>
      <Input
        type="text"
        flex="4"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) =>{
          if (e.key === "Enter") {
            setTitle("");
            addCard(title);
          }
        }}
      />
      <Button
        flex="1"
        marginX="3"
        colorScheme='blue'
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        Add Card
      </Button>
    </Flex>
  );
}
