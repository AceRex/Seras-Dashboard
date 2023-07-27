import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { Icon } from "@mui/material";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 3;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `10px 0 ${grid}px 0`,
  background: isDragging ? "white" : "white",
  boxShadow: "10px 10px 8px #dadada",
  ...draggableStyle,
});

const getListStyle = () => ({
  padding: grid,
  width: "100%",
});

const Drag = () => {
  const [items, setItems] = useState(getItems(2));

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(items, result.source.index, result.destination.index);

    setItems(reorderedItems);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            // eslint-disable-next-line
            <MDBox
              // eslint-disable-next-line
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <MDBox
                      display="flex"
                      alignItems="center"
                      fontSize="15px"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item.content}
                      {item.content}
                      {item.content}
                      <Icon fontSize="small">edit</Icon>
                      <Icon fontSize="small">delete</Icon>
                    </MDBox>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </MDBox>
          )}
        </Droppable>
      </DragDropContext>
    </DashboardLayout>
  );
};

export default Drag;
