import React, { } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useToDo } from './Context/useToDo';
import { viewEnum } from '../sharedComponents/viewEnum';

export const ToDoShow = () => {
    const { updateView, selectedToDo,deleteToDo } = useToDo();


    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <Button onClick={() => updateView(viewEnum.list)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Back
            </Button>
                <Typography sx={{mt:2}}>
                UID: {selectedToDo.id}
                </Typography>
                <Typography sx={{mt:2}}>
                Name: {selectedToDo.name}
                </Typography>
                <Typography sx={{mt:2}}>
                Due: {selectedToDo.due}
                </Typography>
                
                <Button onClick={()=>updateView(viewEnum.edit)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Edit
                </Button>
                <Button onClick={()=>deleteToDo(selectedToDo.id)} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Delete
                </Button>
        </Paper>
    );
};
