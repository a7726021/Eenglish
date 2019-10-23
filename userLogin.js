import React, { Component } from 'react';
import user from './user.css';
import cookie from 'js-cookie'
import Header from '../../../components/header.js';
import { login, checkcode } from '../../../axios/axios.js'
import { keyups } from '../../../components/userlogin/keyup.js'
import { setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';

export default class userLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      disabled: true,
      value: '',
      num: '',
      ipt: [{ e: '' }, { e: '' }, { e: '' }, { e: '' }, { e: '' }, { e: '' }],
      count: 10,
      liked: true,
    };
  }
  keyup(index, e) {
    keyups(this.inputs,index, e)
  }

componentWillUnmount(){
  clearTimeout(this.timer)
}
  countDown() {
    const { count } = this.state;
    if (count === 1) {
      this.setState({
        // count: 10,
        liked: true,
      });
    } else {
      this.setState({
        count: count - 1,
        liked: false,
      });
      this.timer = setTimeout(this.countDown.bind(this), 1000)
    }
  }

  render() {
    return (
      <div className={user.userlogin}>
        <header>
          <Header />
        </header>
        <div className={user.telephonelogin}>
          <h1><FormattedMessage id='LOGIN'/><span style={{position:'absolute',right:0,fontSize:'15px',padding:'5px',background:'pink',color:"#fff"}} onClick={()=>{
            console.log(getLocale())
            if(getLocale()==='zh-CN'){
              setLocale('en-US')
            }else{
              setLocale('zh-CN')
            }
           
          }}>中英文切换</span></h1>
          
          <div className={user.tele}>
            <p>
              <span><FormattedMessage id='PHONE'/>:</span>
              <input
                value={this.state.value}
                placeholder="手机号"
                onBlur={() => {
                  if (!/^1[3456789]\d{9}$/.test(this.state.value)) {
                    // alert("手机号码有误，请重填");
                    this.setState({
                      value: '',
                    });
                    return false;
                  } else {
                    
                  }
                }}
                onChange={e => {
                  let value = (this.state.value = e.target.value);
                  this.setState({
                    value: value,
                  });
                  if (this.state.value.length >=11) {
                    this.setState({
                      disabled: false,
                    });
                  }
                }}
              />
            </p>
            <p>
              <button
                onClick={() => {
                  this.setState({
                    flag: true,
                  });
                  checkcode(this.state.value).then(({data})=>{
                    if (data.code === 1) {
                      this.setState({
                        num: data.data.code,
                      });
                      console.log(this.state.num);
                    }
                  })
                  const { liked } = this.state;
                  if (!liked) {
                    return;
                  }

                  this.countDown();
                }}
                className={this.state.value.length >=11 ? 'hong' : 'hui'}
                disabled={this.state.disabled}
              >
              <FormattedMessage id='AUTHEN'/>
              </button>
            </p>
          </div>
          {this.state.flag && (
            <div className={user.Shellmask}>
              <div className={user.Elasticframe}>
                <p><FormattedMessage id='PLEASE'/></p>
                <p><FormattedMessage id='VER'/>{this.state.value}</p>
                <p className='inputs'  ref={inputs => (this.inputs = inputs)}>
                  {this.state.ipt.map((item, index) => {
                    return (
                      <input
                        onKeyUp={this.keyup.bind(this, index)}
                        type="text"
                        value={item.e.charAt(item.e.length - 1)}
                        key={index}
                        onChange={e => {
                          let value = (item.e = e.target.value);
                          this.setState({});
                        }}
                      />
                    );
                  })}
                </p>
                <p>{this.state.liked ? '' : `${this.state.count} 秒后重发`}</p>
                <p>
                  <button
                    onClick={() => {
                      login(this.state.value,this.state.num).then(({data})=>{
                            cookie.set('Authorization',data.data.token)
                            sessionStorage.setItem('name',this.state.value)
                            // router.push('/views/firstCount')
                            window.location.href = '/views/firstCount'
                      })
                    }}
                  >
                    登陆
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
