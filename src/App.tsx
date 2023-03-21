import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container, SimpleGrid } from '@chakra-ui/react';

import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './common/types/enums';
import { MainHeading } from './components/MainHeading';

function App() {
  return (
    <main>
      <MainHeading />
      <DarkModeIconButton />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
            <Column column={ColumnType.BACKLOG} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.IN_TEST} />
            <Column column={ColumnType.DONE} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
