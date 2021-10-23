import React from "react";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import NewForm from "../../Components/NewForm/NewForm";
import {createNews} from "../../store/Actions/newsAction";

const AddNews = ({history}) => {
    const dispatch = useDispatch();

    const onSubmit = async data => {
        await dispatch(createNews(data));
        history.replace('/');
    };
    return (
        <>
            <Typography variant="h4">New product</Typography>
            <NewForm
                onSubmit={onSubmit}
            />
        </>
    );
};

export default AddNews;