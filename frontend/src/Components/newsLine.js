import {Link} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles({
    card: {
        height: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
});

const NewsLine = ({title, text, id, image}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    title={title}
                    className={classes.media}
                />
                <CardHeader title={title}/>
                <CardContent>
                    <Typography variant="subtitle1">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton component={Link} to={'/news/' + id}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewsLine;