import Model from '../Model'

// 系统用户
export class SysUserModel extends Model {
  constructor({userId,username,password,salt,email,mobile,status,deptId,createTime,userType,unionid,nickname,openid,ipaddr,delflag,startTimestsamp,headimg,sessionId,sex}) {
    super()
    
    this.userId= {
    val: userId,
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
    
    this.password= {
    val: password,
    label: '密码',
    status: true,
    type: 'text'
    } // 密码
    
    this.salt= {
    val: salt,
    label: '盐',
    status: true,
    type: 'text'
    } // 盐
    
    this.email= {
    val: email,
    label: '邮箱',
    status: true,
    type: 'text'
    } // 邮箱
    
    this.mobile= {
    val: mobile,
    label: '手机号',
    status: true,
    type: 'text'
    } // 手机号
    
    this.status= {
    val: status,
    label: '状态  0：禁用   1：正常',
    status: true,
    type: 'hidden'
    } // 状态  0：禁用   1：正常
    
    this.deptId= {
    val: deptId,
    label: '部门ID',
    status: true,
    type: 'hidden'
    } // 部门ID
    
    this.createTime= {
    val: createTime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
    this.userType= {
    val: userType,
    label: '用户类别 1 系统  2 微信  3QQ',
    status: true,
    type: 'hidden'
    } // 用户类别 1 系统  2 微信  3QQ
    
    this.unionid= {
    val: unionid,
    label: '用户统一标识 第三方',
    status: true,
    type: 'text'
    } // 用户统一标识 第三方
    
    this.nickname= {
    val: nickname,
    label: '昵称 第三方用户',
    status: true,
    type: 'text'
    } // 昵称 第三方用户
    
    this.openid= {
    val: openid,
    label: '微信 用户openid',
    status: true,
    type: 'text'
    } // 微信 用户openid
    
    this.ipaddr= {
    val: ipaddr,
    label: 'IP',
    status: true,
    type: 'text'
    } // IP
    
    this.delflag= {
    val: delflag,
    label: '过期',
    status: true,
    type: 'hidden'
    } // 过期
    
    this.startTimestsamp= {
    val: startTimestsamp,
    label: 'session创建时间',
    status: true,
    type: 'datetime'
    } // session创建时间
    
    this.headimg= {
    val: headimg,
    label: '头像',
    status: true,
    type: 'text'
    } // 头像
    
    this.sessionId= {
    val: sessionId,
    label: 'sessionid',
    status: true,
    type: 'text'
    } // sessionid
    
    this.sex= {
    val: sex,
    label: '性别，男1女2',
    status: true,
    type: 'hidden'
    } // 性别，男1女2
    
  }
}

export default function createSysUser(SysUser = {}) {
  return new SysUserModel({
    
  userId: SysUser.userId,
        
  username: SysUser.username,
        
  password: SysUser.password,
        
  salt: SysUser.salt,
        
  email: SysUser.email,
        
  mobile: SysUser.mobile,
        
  status: SysUser.status,
        
  deptId: SysUser.deptId,
        
  createTime: SysUser.createTime,
        
  userType: SysUser.userType,
        
  unionid: SysUser.unionid,
        
  nickname: SysUser.nickname,
        
  openid: SysUser.openid,
        
  ipaddr: SysUser.ipaddr,
        
  delflag: SysUser.delflag,
        
  startTimestsamp: SysUser.startTimestsamp,
        
  headimg: SysUser.headimg,
        
  sessionId: SysUser.sessionId,
          
  sex: SysUser.sex    
  })
}
