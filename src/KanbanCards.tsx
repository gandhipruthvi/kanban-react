import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { Cards } from "./types";
import { CSS } from "@dnd-kit/utilities";

export default function KanbanCards({ cards }: { cards: Array<Cards> }) {
  return (
    <Flex flexDirection="column" flex="1" padding="5">
      {cards.map(({ title }, key) => {
        return <KanbanCard title={title} key={key} index={key} />;
      })}
    </Flex>
  );
}

interface KanbanCardProps {
  title: string;
  index: number;
}

export const KanbanCard = ({ title, index }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Flex
      padding="2"
      backgroundColor="white"
      margin="2"
      borderRadius="3"
      {...attributes}
      {...listeners}
      transform={style.transform}
      ref={setNodeRef}
    >
      <Text>{title}</Text>
    </Flex>
  );
};
