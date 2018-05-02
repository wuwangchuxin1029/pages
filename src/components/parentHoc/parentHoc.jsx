import React, { Component } from 'react'
import axios from 'axios'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: ['序号', '姓名', '开户日期', '代理名称', '代理ID'],
      pageData: []
    }
  }

  componentDidMount() {
    let pageIndex = 0
    let pageSize = 10
    axios.post('/api/page', {
      page: {
        pageIndex:pageIndex *1,
        pageSize: pageSize
      }
    })
      .then(res => {
        this.setState({
          pageData: res.data
        })
      })
  }
  render() {
    const { pageData, pageTitle } = this.state
    return (
      <div>
        <tabel border='1' width='600'>
          <tbody>
            <tr>
              {
                pageTitle.map((item, idx) => {
                  return <td key={idx}>{item}</td>
                })
              }
            </tr>
            {
              pageData.length > 0 && pageData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.num}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.firmName}</td>
                    <td>{item.ID}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </tabel>
      </div>
    )
  }
}
export default Parent