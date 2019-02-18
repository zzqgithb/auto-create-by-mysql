import Model from '../Model'

// 系统配置信息表
export class SysConfigModel extends Model {
  constructor({id,paramKey,paramValue,status,remark}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.paramKey= {
    val: paramKey,
    label: 'key',
    status: true,
    type: 'text'
    } // key
    
    this.paramValue= {
    val: paramValue,
    label: 'value',
    status: true,
    type: 'text'
    } // value
    
    this.status= {
    val: status,
    label: '状态   0：隐藏   1：显示',
    status: true,
    type: 'hidden'
    } // 状态   0：隐藏   1：显示
    
    this.remark= {
    val: remark,
    label: '备注',
    status: true,
    type: 'text'
    } // 备注
    
  }
}

export default function createSysConfig(SysConfig = {}) {
  return new SysConfigModel({
    
  id: SysConfig.id,
        
  paramKey: SysConfig.paramKey,
        
  paramValue: SysConfig.paramValue,
        
  status: SysConfig.status,
          
  remark: SysConfig.remark    
  })
}
