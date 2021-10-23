import {Route, Switch} from "react-router-dom";
import Layout from "./Components/UI/Layout/Layout";
import NewsPages from "./containers/NewsPages/NewsPages";
import addNews from "./containers/addNews/addNews";
import NewsOne from "./containers/NewsOne/NewsOne";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={NewsPages}/>
            <Route path="/news/new" component={addNews}/>
            <Route path="/news/:id" component={NewsOne}/>
            {/*<Route path="/comments/" component={Comments}/>*/}
            {/*<Route path="/comments/:id" component={Comments}/>*/}

        </Switch>
    </Layout>
);

export default App;
