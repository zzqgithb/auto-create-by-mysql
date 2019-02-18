import Model from '../Model'

// 
export class QrtzJobDetailsModel extends Model {
  constructor({schedName,jobName,jobGroup,description,jobClassName,isDurable,isNonconcurrent,isUpdateData,requestsRecovery,jobData}) {
    super()
    
    this.schedName= {
    val: schedName,
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
    
    this.jobClassName= {
    val: jobClassName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.isDurable= {
    val: isDurable,
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
    
    this.isUpdateData= {
    val: isUpdateData,
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
    
    this.jobData= {
    val: jobData,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
  }
}

export default function createQrtzJobDetails(QrtzJobDetails = {}) {
  return new QrtzJobDetailsModel({
    
  schedName: QrtzJobDetails.schedName,
        
  jobName: QrtzJobDetails.jobName,
        
  jobGroup: QrtzJobDetails.jobGroup,
        
  description: QrtzJobDetails.description,
        
  jobClassName: QrtzJobDetails.jobClassName,
        
  isDurable: QrtzJobDetails.isDurable,
        
  isNonconcurrent: QrtzJobDetails.isNonconcurrent,
        
  isUpdateData: QrtzJobDetails.isUpdateData,
        
  requestsRecovery: QrtzJobDetails.requestsRecovery,
          
  jobData: QrtzJobDetails.jobData    
  })
}
