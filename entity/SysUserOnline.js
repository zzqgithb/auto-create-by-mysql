import Model from '../Model'

// 在线用户记录
export class SysUserOnlineModel extends Model {
  constructor({sessionId,loginName,deptName,ipaddr,loginLocation,browser,os,status,startTimestsamp,lastAccessTime,expireTime,createBy,createDate,updateBy,updateDate,delFlag,userId}) {
    super()
    
    this.sessionId= {
    val: sessionId,
    label: '用户会话id',
    status: true,
    type: 'text'
    } // 用户会话id
    
    this.loginName= {
    val: loginName,
    label: '登录账号',
    status: true,
    type: 'text'
    } // 登录账号
    
    this.deptName= {
    val: deptName,
    label: '部门名称',
    status: true,
    type: 'text'
    } // 部门名称
    
    this.ipaddr= {
    val: ipaddr,
    label: '登录IP地址',
    status: true,
    type: 'text'
    } // 登录IP地址
    
    this.loginLocation= {
    val: loginLocation,
    label: '登录地点',
    status: true,
    type: 'text'
    } // 登录地点
    
    this.browser= {
    val: browser,
    label: '浏览器类型',
    status: true,
    type: 'text'
    } // 浏览器类型
    
    this.os= {
    val: os,
    label: '操作系统',
    status: true,
    type: 'text'
    } // 操作系统
    
    this.status= {
    val: status,
    label: '在线状态on_line在线off_line离线',
    status: true,
    type: 'text'
    } // 在线状态on_line在线off_line离线
    
    this.startTimestsamp= {
    val: startTimestsamp,
    label: 'session创建时间',
    status: true,
    type: 'datetime'
    } // session创建时间
    
    this.lastAccessTime= {
    val: lastAccessTime,
    label: 'session最后访问时间',
    status: true,
    type: 'datetime'
    } // session最后访问时间
    
    this.expireTime= {
    val: expireTime,
    label: '超时时间，单位为分钟',
    status: true,
    type: 'number'
    } // 超时时间，单位为分钟
    
    this.createBy= {
    val: createBy,
    label: '创建者',
    status: true,
    type: 'text'
    } // 创建者
    
    this.createDate= {
    val: createDate,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
    this.updateBy= {
    val: updateBy,
    label: '更新者',
    status: true,
    type: 'text'
    } // 更新者
    
    this.updateDate= {
    val: updateDate,
    label: '更新时间',
    status: true,
    type: 'datetime'
    } // 更新时间
    
    this.delFlag= {
    val: delFlag,
    label: '删除标记',
    status: true,
    type: 'hidden'
    } // 删除标记
    
    this.userId= {
    val: userId,
    label: '用户id',
    status: true,
    type: 'text'
    } // 用户id
    
  }
}

export default function createSysUserOnline(SysUserOnline = {}) {
  return new SysUserOnlineModel({
    
  sessionId: SysUserOnline.sessionId,
        
  loginName: SysUserOnline.loginName,
        
  deptName: SysUserOnline.deptName,
        
  ipaddr: SysUserOnline.ipaddr,
        
  loginLocation: SysUserOnline.loginLocation,
        
  browser: SysUserOnline.browser,
        
  os: SysUserOnline.os,
        
  status: SysUserOnline.status,
        
  startTimestsamp: SysUserOnline.startTimestsamp,
        
  lastAccessTime: SysUserOnline.lastAccessTime,
        
  expireTime: SysUserOnline.expireTime,
        
  createBy: SysUserOnline.createBy,
        
  createDate: SysUserOnline.createDate,
        
  updateBy: SysUserOnline.updateBy,
        
  updateDate: SysUserOnline.updateDate,
        
  delFlag: SysUserOnline.delFlag,
          
  userId: SysUserOnline.userId    
  })
}
