import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoContextProvider, useToDoContext } from './useToDo';

// Mock ToDo items
const mockToDos = [
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
];

const MockChildComponent = () => {
    const { toDos, view, handleCreateToDo, handleShowToDo, deleteToDo, updateToDo } = useToDoContext();
    return (
        <>
            <div data-testid="view">{view}</div>
            <div data-testid="todo-count">{toDos.length}</div>
        </>
    );
};

describe('ToDoContextProvider', () => {

    it('should handle showing a ToDo', () => {
        render(
            <ToDoContextProvider>
                <MockChildComponent />
            </ToDoContextProvider>
        );
    });
});