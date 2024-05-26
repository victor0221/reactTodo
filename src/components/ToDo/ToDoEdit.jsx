
import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { useToDo } from './Context/useToDo';
import { viewEnum } from '../sharedComponents/viewEnum';

export const ToDoEdit = () =>{
    const { updateView, selectedToDo,updateToDo } = useToDo();
    const [editedToDo, setEditedToDo] = useState({...selectedToDo})

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <Button onClick={() => updateView(viewEnum.list)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Back
            </Button>
                <TextField
                    name="name"
                    label="Name"
                    value={editedToDo.name}
                    onChange={(e)=> setEditedToDo({...editedToDo, name: e.target.value})}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="due"
                    label="Due Date"
                    type="date"
                    value={editedToDo.due}
                    onChange={(e)=> setEditedToDo({...editedToDo, due: e.target.value})}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button onClick={()=>updateToDo(editedToDo)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update ToDo
                </Button>
        </Paper>
    );
}