import React from 'react'
import './../css/Detail.css'
import Reply from './Reply'
import axios from 'axios'


export default React.createClass({
  getInitialState() {
    return {
      api: 'https://www.v2ex.com/api/topics/show.json?id=',
      detailedId: '000',
      rawHtml: 'content',
      data: {title:'title'}
      // isLoading: true
    }
  },

  componentDidMount() {
    this.getDetailId();
    this.getData();
  },

  getDetailId() {
    // alert(this.props.params.id)
    // this.detailedId = this.$route.params.id;
    // setState 函数不生效？？？但是 Member.js 中相似的写法没问题
    this.setState({detailedId: this.props.params.id})
    // this.setState({userId: this.props.params.id})
    // alert(this.state.detailedId)
  },

  getData() {
    // axios.get(this.state.api + this.state.detailedId).then((res) => {
    axios.get(this.state.api + this.props.params.id).then((res) => {
      // console.log(res)
      this.setState({data: res.data[0]})
      this.setState({rawHtml: res.data[0].content_rendered})
      // alert(res.data.content_rendered)
    })
    // this.$http.get(this.api + this.detailedId).then(function(res) {
    //   this.data = res.data[0];
    //   this.rawHtml = this.data.content_rendered;
    //   this.isLoading = false;
    // });
  },

  render() {
    return (
      <div className="box-de">
        <div className="topic">
          <h1>{ this.state.data.title }</h1>
          <p>{ this.state.rawHtml }</p>
        </div>
        <Reply id={this.props.params.id}/>
      </div>
    )
  }
})
