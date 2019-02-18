import Model from '../Model'

// 
export class QrtzSchedulerStateModel extends Model {
  constructor({schedName,instanceName,lastCheckinTime,checkinInterval}) {
    super()
    
    this.schedName= {
    val: schedName,
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
    
    this.lastCheckinTime= {
    val: lastCheckinTime,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.checkinInterval= {
    val: checkinInterval,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
  }
}

export default function createQrtzSchedulerState(QrtzSchedulerState = {}) {
  return new QrtzSchedulerStateModel({
    
  schedName: QrtzSchedulerState.schedName,
        
  instanceName: QrtzSchedulerState.instanceName,
        
  lastCheckinTime: QrtzSchedulerState.lastCheckinTime,
          
  checkinInterval: QrtzSchedulerState.checkinInterval    
  })
}
