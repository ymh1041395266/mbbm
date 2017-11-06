import shop from '../../api/shop'
import * as types from '../../store/mutation-types'
const state={
	all:[]
}
const actions={
	getAllProducts({ commit }){
		commit(types.RECEIVE_PRODUCTS,shop.getProducts())
	}
}

const mutations={
	[types.RECEIVE_PRODUCTS](state,data){
		state.all=data
	}
}
	
const getters={
	allProducts:(state)=>state.all,
	
}//外部可以通过mapGetter来获取到allProducts这个方法里面的返回值
//这个是数据送出去的最后一步外界要用computed和mapGetter来接受
export default{
	state,
	getters,
	actions,
	mutations
}
