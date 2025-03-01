import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import AddCardModal from "../../Components/AddCardModal/AddCardModal";
import useBoard from "../../store/Board";
import Column from "./Column";
import "./Board.css";

const Boards = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { board, setBoard } = useBoard();

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = board.columns.find((col) =>
      col.cards.some((card) => card.id === active.id)
    );
    const destinationColumn = board.columns.find((col) => col.id === over.id);

    if (!sourceColumn || !destinationColumn) return;

    const card = sourceColumn.cards.find((c) => c.id === active.id);
    const newSourceCards = sourceColumn.cards.filter((c) => c.id !== active.id);
    const newDestinationCards = [...destinationColumn.cards, card];

    const newColumns = board.columns.map((col) => {
      if (col.id === sourceColumn.id) return { ...col, cards: newSourceCards };
      if (col.id === destinationColumn.id)
        return { ...col, cards: newDestinationCards };
      return col;
    });

    setBoard({ ...board, columns: newColumns });
  };

  return (
    <div className="board-container">
      <span>Trello Board</span>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="columns">
          <SortableContext
            items={board.columns.map((col) => col.id)}
            strategy={verticalListSortingStrategy}
          >
            {board.columns.map((column) => (
              <Column key={column.id} column={column} setModalOpened={setModalOpened} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
      <AddCardModal visible={modalOpened} onClose={() => setModalOpened(false)} />
    </div>
  );
};

export default Boards;
