import { Typography, Box, Grid } from "@mui/material";
import { useToDo } from "./Context/useToDo";
import { ToDoCreate } from "./ToDoCreate";
import { ToDoEdit } from "./ToDoEdit";
import { ToDoList } from "./ToDoList";
import { ToDoShow } from "./ToDoShow";

export const ToDo = () => {
    const { view } = useToDo();
    return (
        <Box>
            <Typography variant="h3" align="center">ToDo's</Typography>
            <Grid container justifyContent="center">
                {view === "list" ? 
                    <ToDoList/> :
                    view === "show" ?
                    <ToDoShow/> :
                    view === "create" ?
                    <ToDoCreate/> :
                    view === "edit" ?
                    <ToDoEdit/> :
                    "invalid view..."
                }
            </Grid>
        </Box>
    );
};
