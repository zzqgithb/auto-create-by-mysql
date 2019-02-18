import Model from '../Model'

// 
export class SysMemberUserModel extends Model {
  constructor({id,username,gender,birthday,registerTime,lastLoginTime,lastLoginIp,userLevelId,nickname,mobile,registerIp,avatar,weixinOpenid,validStatus,expireTime,monthYear,outTradeNo}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.username= {
    val: username,
    label: '用户名',
    status: true,
    type: 'text'
    } // 用户名
    
    this.gender= {
    val: gender,
    label: '性别',
    status: true,
    type: 'hidden'
    } // 性别
    
    this.birthday= {
    val: birthday,
    label: '生日',
    status: true,
    type: 'datetime'
    } // 生日
    
    this.registerTime= {
    val: registerTime,
    label: '注册时间',
    status: true,
    type: 'datetime'
    } // 注册时间
    
    this.lastLoginTime= {
    val: lastLoginTime,
    label: '最后登录时间',
    status: true,
    type: 'datetime'
    } // 最后登录时间
    
    this.lastLoginIp= {
    val: lastLoginIp,
    label: '最后登录ip',
    status: true,
    type: 'text'
    } // 最后登录ip
    
    this.userLevelId= {
    val: userLevelId,
    label: '用户等级（会员）',
    status: true,
    type: 'hidden'
    } // 用户等级（会员）
    
    this.nickname= {
    val: nickname,
    label: '昵称',
    status: true,
    type: 'text'
    } // 昵称
    
    this.mobile= {
    val: mobile,
    label: '手机',
    status: true,
    type: 'text'
    } // 手机
    
    this.registerIp= {
    val: registerIp,
    label: '注册ip',
    status: true,
    type: 'text'
    } // 注册ip
    
    this.avatar= {
    val: avatar,
    label: '代表身份、角色、多用户关系',
    status: true,
    type: 'text'
    } // 代表身份、角色、多用户关系
    
    this.weixinOpenid= {
    val: weixinOpenid,
    label: '微信openid',
    status: true,
    type: 'text'
    } // 微信openid
    
    this.validStatus= {
    val: validStatus,
    label: '1 正常 0 已过期',
    status: true,
    type: 'text'
    } // 1 正常 0 已过期
    
    this.expireTime= {
    val: expireTime,
    label: '过期时间',
    status: true,
    type: 'datetime'
    } // 过期时间
    
    this.monthYear= {
    val: monthYear,
    label: 'M 月  Y年',
    status: true,
    type: 'text'
    } // M 月  Y年
    
    this.outTradeNo= {
    val: outTradeNo,
    label: '订单编号（唯一）',
    status: true,
    type: 'text'
    } // 订单编号（唯一）
    
  }
}

export default function createSysMemberUser(SysMemberUser = {}) {
  return new SysMemberUserModel({
    
  id: SysMemberUser.id,
        
  username: SysMemberUser.username,
        
  gender: SysMemberUser.gender,
        
  birthday: SysMemberUser.birthday,
        
  registerTime: SysMemberUser.registerTime,
        
  lastLoginTime: SysMemberUser.lastLoginTime,
        
  lastLoginIp: SysMemberUser.lastLoginIp,
        
  userLevelId: SysMemberUser.userLevelId,
        
  nickname: SysMemberUser.nickname,
        
  mobile: SysMemberUser.mobile,
        
  registerIp: SysMemberUser.registerIp,
        
  avatar: SysMemberUser.avatar,
        
  weixinOpenid: SysMemberUser.weixinOpenid,
        
  validStatus: SysMemberUser.validStatus,
        
  expireTime: SysMemberUser.expireTime,
        
  monthYear: SysMemberUser.monthYear,
          
  outTradeNo: SysMemberUser.outTradeNo    
  })
}
