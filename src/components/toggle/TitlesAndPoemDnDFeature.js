import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TitlesAndPoemDnDFeature = ({handleOnDragEnd, box}) => {

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="boxes">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {box.map(({ id, bg }, index) => (
              <Draggable key={id} draggableId={id.toString()} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <div className={`box ${bg}`}></div>
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
