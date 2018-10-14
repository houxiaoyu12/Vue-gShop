
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUser,
  reqLogout
} from '../api'

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  //异步获取addres
  async getAddress ({commit,state}) {
    //发送ajax请求
    const {latitude,longitude} = state;
    const result = await reqAddress(latitude+','+longitude)
    if(result.code===0){
      const address = result.data
      //commit给mutationpl
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取categorys
  async getCategorys ({commit}) {
    //发送ajax请求
    const result = await reqFoodCategorys()
    if(result.code===0){
      const categorys = result.data
      //commit给mutationpl
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取shops
  async getShops ({commit,state}) {
    //发送ajax请求
    const {latitude,longitude} = state;
    const result = await reqShops(longitude,latitude)
    if(result.code===0){
      const shops = result.data
      //commit给mutationpl
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步保存用户的action
  saveUser ({commit},user) {
    commit(RECEIVE_USER,{user})
  },
  //异步获取action
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  //异步退出登录
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  }
}
