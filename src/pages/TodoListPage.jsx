import { isEmpty } from "lodash";
import { useState } from "react";
import {
    Box,
    Grid,
    TextField,
    List,
    ListItemText,
    IconButton,
    Typography,
    Paper,
    InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";



export const TodoListPage = () => {
    const initialListItems = [
        { task: "Wash dishes", id: crypto.randomUUID() },
        { task: "Clean clothes", id: crypto.randomUUID() },
    ];

    const [listItems, setListItems] = useState(initialListItems);
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");













    const createItem = (task) => {
        const newItem = { task, id: crypto.randomUUID() };
        setListItems((prev) => [...prev, newItem]);







    };

    const deleteItem = (id) => {
        setListItems((prev) => prev.filter((item) => item.id !== id));



    };

    const clearInput = () => {
        setInputValue("");
        setInputError("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const trimmed = inputValue.trim();
            const isDuplicate = listItems.some(
                (item) => item.task.toLowerCase() === trimmed.toLowerCase()
            );

            if (!trimmed) {
                setInputError("Task cannot be empty.");
                return;
            }

            if (isDuplicate) {
                setInputError("Task already exists.");
                return;
            }

            if (listItems.length >= 10) {
                setInputError("Maximum of 10 tasks allowed.");
                return;
            }

            createItem(trimmed);
            clearInput();
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h5" gutterBottom>
                        todos:
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter new Task"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (inputError) setInputError("");
                        }}
                        onKeyDown={handleKeyDown}
                        variant="outlined"
                        error={!!inputError}
                        helperText={inputError}
                        InputProps={{
                            endAdornment: inputValue && (
                                <InputAdornment position="end">
                                    <IconButton onClick={clearInput} size="small">
                                        <ClearIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <List sx={{ mt: 2 }}>
                        {!isEmpty(listItems) ? (
                            listItems.map((item) => (
                                <Paper
                                    key={item.id}
                                    elevation={1}
                                    sx={{
                                        my: 1,
                                        px: 2,
                                        py: 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        "&:hover .delete-btn": {
                                            visibility: "visible",
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.task}
                                        sx={{
                                            userSelect: "none",
                                            pointerEvents: "none",
                                        }}
                                    />
                                    <IconButton
                                        className="delete-btn"
                                        edge="end"
                                        size="small"
                                        onClick={() => deleteItem(item.id)}
                                        aria-label="delete"
                                        sx={{
                                            visibility: "hidden",
                                            transition: "visibility 0.2s ease-in-out",
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Paper>
                            ))
                        ) : (
                            <Paper sx={{ my: 1, px: 2, py: 1 }}>
                                <Typography>No tasks, add a task</Typography>
                            </Paper>
                        )}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};