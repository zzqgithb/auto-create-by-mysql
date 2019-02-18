import Model from '../Model'

// 定时任务日志
export class ScheduleJobLogModel extends Model {
  constructor({logId,jobId,beanName,methodName,params,status,error,times,createTime}) {
    super()
    
    this.logId= {
    val: logId,
    label: '任务日志id',
    status: true,
    type: 'hidden'
    } // 任务日志id
    
    this.jobId= {
    val: jobId,
    label: '任务id',
    status: true,
    type: 'hidden'
    } // 任务id
    
    this.beanName= {
    val: beanName,
    label: 'spring bean名称',
    status: true,
    type: 'text'
    } // spring bean名称
    
    this.methodName= {
    val: methodName,
    label: '方法名',
    status: true,
    type: 'text'
    } // 方法名
    
    this.params= {
    val: params,
    label: '参数',
    status: true,
    type: 'text'
    } // 参数
    
    this.status= {
    val: status,
    label: '任务状态    0：成功    1：失败',
    status: true,
    type: 'hidden'
    } // 任务状态    0：成功    1：失败
    
    this.error= {
    val: error,
    label: '失败信息',
    status: true,
    type: 'text'
    } // 失败信息
    
    this.times= {
    val: times,
    label: '耗时(单位：毫秒)',
    status: true,
    type: 'number'
    } // 耗时(单位：毫秒)
    
    this.createTime= {
    val: createTime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createScheduleJobLog(ScheduleJobLog = {}) {
  return new ScheduleJobLogModel({
    
  logId: ScheduleJobLog.logId,
        
  jobId: ScheduleJobLog.jobId,
        
  beanName: ScheduleJobLog.beanName,
        
  methodName: ScheduleJobLog.methodName,
        
  params: ScheduleJobLog.params,
        
  status: ScheduleJobLog.status,
        
  error: ScheduleJobLog.error,
        
  times: ScheduleJobLog.times,
          
  createTime: ScheduleJobLog.createTime    
  })
}
