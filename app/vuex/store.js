import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//项目需要维护的状态
const store = new Vuex.Store({
  state: {
    msgList: [],
    newComment: {
    	author: 'wang xiang',
    	content: 'hello'
    },
    selectedName: ''
  },
  mutations: {
    add_comment (state) {
      state.msgList.push(state.newComment);
    },
    updateMsg (state, msg) {
    	var tempComment = {
    		author: 'wang xiang',
    		content: msg
    	}
    	state.newComment = tempComment;
    }
  },
  getters: {
  	newComment: state => {
  		return state.newComment;
  	},
    totalMsg (state) {
      return state.msgList.length;
    },
    msgCountBy (state, name) {
      return state.msgList.filter(msg => msg.author === state.selectedName).length;
    }
  }
})

export default store;