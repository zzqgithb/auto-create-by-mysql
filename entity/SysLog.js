import Model from '../Model'

// 系统日志
export class SysLogModel extends Model {
  constructor({id,username,operation,method,params,time,ip,createDate}) {
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
    
    this.operation= {
    val: operation,
    label: '用户操作',
    status: true,
    type: 'text'
    } // 用户操作
    
    this.method= {
    val: method,
    label: '请求方法',
    status: true,
    type: 'text'
    } // 请求方法
    
    this.params= {
    val: params,
    label: '请求参数',
    status: true,
    type: 'text'
    } // 请求参数
    
    this.time= {
    val: time,
    label: '执行时长(毫秒)',
    status: true,
    type: 'hidden'
    } // 执行时长(毫秒)
    
    this.ip= {
    val: ip,
    label: 'IP地址',
    status: true,
    type: 'text'
    } // IP地址
    
    this.createDate= {
    val: createDate,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createSysLog(SysLog = {}) {
  return new SysLogModel({
    
  id: SysLog.id,
        
  username: SysLog.username,
        
  operation: SysLog.operation,
        
  method: SysLog.method,
        
  params: SysLog.params,
        
  time: SysLog.time,
        
  ip: SysLog.ip,
          
  createDate: SysLog.createDate    
  })
}
