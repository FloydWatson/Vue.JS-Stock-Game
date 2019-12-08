import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            // will be multiplied by a number between 0.5 and 1.5
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
            if(stock.price <= 20){
                stock.price += Math.round( Math.random() * 10)
            }
            console.log(stock.price);
        });
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