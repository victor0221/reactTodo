import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { useToDo } from './Context/useToDo';
import { viewEnum } from '../sharedComponents/viewEnum';

export const ToDoCreate = () => {
    const {updateView,handleCreateToDo} =useToDo()
    const [toDo, setToDo] = useState(
        {
        id: 0,
        name: "",
        due: "",
        }
    );
    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <Button onClick={()=>updateView(viewEnum.list)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Back
                </Button>
                <TextField
                    label="Name"
                    value={toDo.name}
                    onChange={(e) => setToDo({...toDo, name:e.target.value})}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Due Date"
                    type="date"
                    value={toDo.dueDate}
                    onChange={(e) => setToDo({...toDo, due:e.target.value})}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button onClick={()=>handleCreateToDo(toDo)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Create ToDo
                </Button>
        </Paper>
    );
};
