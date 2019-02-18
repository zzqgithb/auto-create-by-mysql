import Model from '../Model'

// 
export class QrtzTriggersModel extends Model {
  constructor({schedName,triggerName,triggerGroup,jobName,jobGroup,description,nextFireTime,prevFireTime,priority,triggerState,triggerType,startTime,endTime,calendarName,misfireInstr,jobData}) {
    super()
    
    this.schedName= {
    val: schedName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.triggerName= {
    val: triggerName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.triggerGroup= {
    val: triggerGroup,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.jobName= {
    val: jobName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.jobGroup= {
    val: jobGroup,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.description= {
    val: description,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.nextFireTime= {
    val: nextFireTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.prevFireTime= {
    val: prevFireTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.priority= {
    val: priority,
    label: '',
    status: true,
    type: 'number'
    } // 
    
    this.triggerState= {
    val: triggerState,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.triggerType= {
    val: triggerType,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.startTime= {
    val: startTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.endTime= {
    val: endTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.calendarName= {
    val: calendarName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.misfireInstr= {
    val: misfireInstr,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.jobData= {
    val: jobData,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
  }
}

export default function createQrtzTriggers(QrtzTriggers = {}) {
  return new QrtzTriggersModel({
    
  schedName: QrtzTriggers.schedName,
        
  triggerName: QrtzTriggers.triggerName,
        
  triggerGroup: QrtzTriggers.triggerGroup,
        
  jobName: QrtzTriggers.jobName,
        
  jobGroup: QrtzTriggers.jobGroup,
        
  description: QrtzTriggers.description,
        
  nextFireTime: QrtzTriggers.nextFireTime,
        
  prevFireTime: QrtzTriggers.prevFireTime,
        
  priority: QrtzTriggers.priority,
        
  triggerState: QrtzTriggers.triggerState,
        
  triggerType: QrtzTriggers.triggerType,
        
  startTime: QrtzTriggers.startTime,
        
  endTime: QrtzTriggers.endTime,
        
  calendarName: QrtzTriggers.calendarName,
        
  misfireInstr: QrtzTriggers.misfireInstr,
          
  jobData: QrtzTriggers.jobData    
  })
}
