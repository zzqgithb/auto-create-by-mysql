import Model from '../Model'

// 
export class QrtzFiredTriggersModel extends Model {
  constructor({schedName,entryId,triggerName,triggerGroup,instanceName,firedTime,schedTime,priority,state,jobName,jobGroup,isNonconcurrent,requestsRecovery}) {
    super()
    
    this.schedName= {
    val: schedName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.entryId= {
    val: entryId,
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
    
    this.instanceName= {
    val: instanceName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.firedTime= {
    val: firedTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.schedTime= {
    val: schedTime,
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
    
    this.state= {
    val: state,
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
    
    this.isNonconcurrent= {
    val: isNonconcurrent,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.requestsRecovery= {
    val: requestsRecovery,
    label: '',
    status: true,
    type: 'text'
    } // 
    
  }
}

export default function createQrtzFiredTriggers(QrtzFiredTriggers = {}) {
  return new QrtzFiredTriggersModel({
    
  schedName: QrtzFiredTriggers.schedName,
        
  entryId: QrtzFiredTriggers.entryId,
        
  triggerName: QrtzFiredTriggers.triggerName,
        
  triggerGroup: QrtzFiredTriggers.triggerGroup,
        
  instanceName: QrtzFiredTriggers.instanceName,
        
  firedTime: QrtzFiredTriggers.firedTime,
        
  schedTime: QrtzFiredTriggers.schedTime,
        
  priority: QrtzFiredTriggers.priority,
        
  state: QrtzFiredTriggers.state,
        
  jobName: QrtzFiredTriggers.jobName,
        
  jobGroup: QrtzFiredTriggers.jobGroup,
        
  isNonconcurrent: QrtzFiredTriggers.isNonconcurrent,
          
  requestsRecovery: QrtzFiredTriggers.requestsRecovery    
  })
}
