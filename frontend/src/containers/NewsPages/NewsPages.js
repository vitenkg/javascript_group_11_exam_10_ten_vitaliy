import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsData} from "../../store/Actions/newsAction";
import {Button, Grid, Link, Typography} from "@material-ui/core";
import NewsLine from "../../Components/newsLine";

const NewsPages = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news)


    useEffect(() => {
        dispatch(fetchNewsData());
    }, [dispatch]);

    return (
            <Grid container direction="column" spacing={2}>
                <Grid item container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h4">News</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="primary" component={Link} to="/news/new">Add</Button>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={1}>
                    {news.map(newsOne => (
                        <NewsLine
                            key={newsOne.id}
                            id={newsOne.id}
                            title={newsOne.title}
                            text={newsOne.text}
                        />
                    ))}
                </Grid>
            </Grid>
    );
};

export default NewsPages;