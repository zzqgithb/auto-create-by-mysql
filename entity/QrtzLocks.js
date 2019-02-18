import Model from '../Model'

// 
export class QrtzLocksModel extends Model {
  constructor({schedName,lockName}) {
    super()
    
    this.schedName= {
    val: schedName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.lockName= {
    val: lockName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
  }
}

export default function createQrtzLocks(QrtzLocks = {}) {
  return new QrtzLocksModel({
    
  schedName: QrtzLocks.schedName,
          
  lockName: QrtzLocks.lockName    
  })
}
