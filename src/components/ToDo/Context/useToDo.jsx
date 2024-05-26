import React, { createContext, useContext, useEffect, useState } from "react";
import { viewEnum } from "../../sharedComponents/viewEnum";


export const useToDo = () => {
  const context = useToDoContext();
  return context;
};

export const ToDoContext = createContext(undefined);

export const ToDoContextProvider = ({ context, children }) => {
    const [view, setView] = useState(viewEnum.list)
    const [toDos, setToDos] = useState([
        {
            id: 1234,
            name: "My First To Do",
            due: "2024-01-01",
        },
        {
            id: 4321,
            name: "My Second To Do",
            due: "2024-02-02",
        },
    ]);
    const [selectedToDo, setSelectedToDo] = useState();

    const updateView = (view) => {
        switch(view){
            case viewEnum.list:
                setView(viewEnum.list)
                break;
            case viewEnum.create:
                setView(viewEnum.create)
                break;
            case viewEnum.show:
                setView(viewEnum.show)
                break;
            case viewEnum.edit:
                setView(viewEnum.edit)
                break;
            default:
                return"not found...";
        }
    }
    const handleCreateToDo =(newToDo) =>{
        newToDo.id = Math.floor(1000 + Math.random() * 9000);
        toDos.push(newToDo);
        updateView(viewEnum.list)
    }
    const handleShowToDo =(item) =>{
        setSelectedToDo(item);
        updateView(viewEnum.show)
    }
    const deleteToDo = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id));
        updateView(viewEnum.list)
    };
    const updateToDo = (editedToDo) => {
        setToDos(toDos.map(todo => {
            if (todo.id === editedToDo.id) {
                return editedToDo;
            } else {
                return todo; 
            }
        }));
        updateView(viewEnum.list);
    };
    
  
  let contextData = {
    view:view,
    toDos:toDos,
    updateView:updateView,
    handleCreateToDo:handleCreateToDo,
    selectedToDo:selectedToDo,
    handleShowToDo:handleShowToDo,
    deleteToDo:deleteToDo,
    updateToDo:updateToDo,
    ...context,
  };
  return (
    <ToDoContext.Provider value={contextData}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);