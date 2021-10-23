import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FileInput from "../FileInput/FileInput";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
}));

const   ProductForm = ({onSubmit}) => {
    const classes = useStyles();

    const [state, setState] = useState({
        title: "",
        text: "",
        image: null,
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHAndler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return {...prevState, [name]: file}
        });
    };

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            className={classes.root}
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid item xs>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Title"
                    name="title"
                    value={state.title}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Article"
                    name="article"
                    value={state.text}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <FileInput
                    label="image"
                    name="image"
                    onChange={fileChangeHAndler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Create</Button>
            </Grid>
        </Grid>
    );
};

export default ProductForm;