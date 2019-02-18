import Model from '../Model'

// 
export class QrtzPausedTriggerGrpsModel extends Model {
  constructor({schedName,triggerGroup}) {
    super()
    
    this.schedName= {
    val: schedName,
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
    
  }
}

export default function createQrtzPausedTriggerGrps(QrtzPausedTriggerGrps = {}) {
  return new QrtzPausedTriggerGrpsModel({
    
  schedName: QrtzPausedTriggerGrps.schedName,
          
  triggerGroup: QrtzPausedTriggerGrps.triggerGroup    
  })
}
