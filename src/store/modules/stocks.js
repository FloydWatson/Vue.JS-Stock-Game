import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {

    }

};

const actions = {
    buyStock: ({ commit }, order) => {
        // action from portfolio
        commit('BUY_STOCK', order);

    },
    initStocks: ({ commit }) => {
        // initialize from data set
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }

};

const getters = {
    stocks: state => {
        // get the stocks list of current state
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};