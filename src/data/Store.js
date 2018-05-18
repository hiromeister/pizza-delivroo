import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import ActionsTypes from "./ActionsTypes";
import Dispatcher from "./Dispatcher";

class Store extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionsTypes.ADD_TO_CART:
                if (action) {
                    console.log("STATE", state)
                    return state.map(resto => {
                        return resto.users = [...resto.users, action.userId]
                    })
                }

                return state;


            case ActionsTypes.FETCH_API:
                if (action) {
                    return action.restaurant.restaurants;
                }
                return state;




            default:
                return state;
        }
    }
}

export default new Store();