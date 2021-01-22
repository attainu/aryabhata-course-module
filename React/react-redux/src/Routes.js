import { Switch, Route } from 'react-router-dom';
import App from './App';
import Todo from './Todo';
import Layout from './Layout';
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/todos" component={Todo} />
            </Switch>
        </Layout>
    )
}

export default Routes;
