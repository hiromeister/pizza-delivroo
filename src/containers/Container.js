import App from "../views/components/App/App"
import { Container } from "flux/utils";
import Store from "../data/Store";
import Actions from "../data/Actions";

const getStores = () => {
    return [Store]
}

const getState = () => {
    return {
        menuItems: Store.getState(),
        onFetchApi: Actions.fetchApi,
        onAddToCart: Actions.addToCart,
    }
}

export default Container.createFunctional(App, getStores, getState);
