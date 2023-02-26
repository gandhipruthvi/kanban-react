import { ChakraProvider, theme } from "@chakra-ui/react";
import KanbanBoard from "./KanbanBoard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <KanbanBoard />
  </ChakraProvider>
);
