import { TableContainer, Table, TableRow, TableHead, Paper, TableCell, TableBody, Button } from "@mui/material";
import { useToDo } from "./Context/useToDo";
import { viewEnum } from "../sharedComponents/viewEnum";

export const ToDoList = () => {
    const { toDos, updateView,handleShowToDo } = useToDo();

    return (
        <TableContainer sx={{ width: 650 }} component={Paper}>
            <Button onClick={() => updateView(viewEnum.create)} variant="outlined">Create</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>UID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Due</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {toDos?.map((row) => (
                        <TableRow
                            key={row.id}
                            onClick={()=>handleShowToDo(row)}
                            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.due}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
