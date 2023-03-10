import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TitlesAndPoemDnDFeature = ({handleOnDragEnd, box}) => {

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="boxes">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {box.map(({ id, label, bg }, index) => (
              <Draggable key={id} draggableId={id.toString()} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <div className={`box ${bg} font-serif px-14 py-3`}>{label}</div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TitlesAndPoemDnDFeature;
