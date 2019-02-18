import Model from '../Model'

// 定时任务
export class ScheduleJobModel extends Model {
  constructor({jobId,beanName,methodName,params,cronExpression,status,remark,createTime}) {
    super()
    
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
    
    this.cronExpression= {
    val: cronExpression,
    label: 'cron表达式',
    status: true,
    type: 'text'
    } // cron表达式
    
    this.status= {
    val: status,
    label: '任务状态  0：正常  1：暂停',
    status: true,
    type: 'hidden'
    } // 任务状态  0：正常  1：暂停
    
    this.remark= {
    val: remark,
    label: '备注',
    status: true,
    type: 'text'
    } // 备注
    
    this.createTime= {
    val: createTime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createScheduleJob(ScheduleJob = {}) {
  return new ScheduleJobModel({
    
  jobId: ScheduleJob.jobId,
        
  beanName: ScheduleJob.beanName,
        
  methodName: ScheduleJob.methodName,
        
  params: ScheduleJob.params,
        
  cronExpression: ScheduleJob.cronExpression,
        
  status: ScheduleJob.status,
        
  remark: ScheduleJob.remark,
          
  createTime: ScheduleJob.createTime    
  })
}
