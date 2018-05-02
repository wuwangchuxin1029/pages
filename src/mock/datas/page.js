import mockjs from 'mockjs'

let pageData = []
for (let i = 0; i < 100; i++) {
  pageData.push({
    num:i+1,     // 序号
    name:mockjs.Random.cname(),   // 用户名
    tell:mockjs.Random.natural(13000000000,17999999999), //电话   
    date:mockjs.Random.datetime() ,    // 开户日期
    firmName:mockjs.Random.ctitle(), // 公司名称
    ID:mockjs.Random.natural(100,900),   //代理ID
    XS:mockjs.Random.float(0,9,1,1),  // 利差系数
    money:mockjs.Random.natural(100000,1000000000),    // 资金池
    profit:mockjs.Random.natural(1000,100000),      // 利润池
    status: i % 2 == 0 ? '已拒绝':'已审核',
    operation: i % 2 == 0 ? [0,1,2]:[1,2]
  })
}

export default pageData 