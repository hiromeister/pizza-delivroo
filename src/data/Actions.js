import ActionsTypes from "./ActionsTypes";
import Dispatcher from "./Dispatcher";

const Actions = {

    triggerLoader() {
        Dispatcher.dispatch({
            type: ActionsTypes.LOADING_RESTAURANTS
        })
    },

    async fetchApi(restaurant, user) {
        this.triggerLoader;
        const getApi = await fetch('/api/api.json');
        const api = await getApi.json();
        Dispatcher.dispatch({
            type: ActionsTypes.FETCH_API,
            restaurant: api,
            users: api
        })
    },


    addToCart(restoId) {
        Dispatcher.dispatch({
            type: ActionsTypes.ADD_TO_CART,
            restoId
        })
    }




}

export default Actions;