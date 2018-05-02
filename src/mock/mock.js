import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import pageData from './datas/page'

const pageInfo = {
  code: 0,
  message: 'ok',
  data :pageData
}
const mock =new MockAdapter(axios)
const mockData = () => {
  mock.onPost('/api/page').reply((config) => {
   const data = JSON.parse(config.data)  //前端请求传递的参数
   const pageIndex = data.page.pageIndex 
   const pageSize = data.page.pageSize
  //  根据请求的pageIndex和pageSize返回相应的数据
   const newInfo = pageData.slice(pageIndex * pageSize,(pageIndex+1)*pageSize)

   pageInfo.data = newInfo
   pageInfo.total = pageData.length
   console.log(pageIndex,pageSize,'333333')
    return new Promise((resolve,reject) => {
      resolve([200,pageInfo])
    })
  })
}
export default mockData