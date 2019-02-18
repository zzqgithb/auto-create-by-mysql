import Model from '../Model'

// 
export class SysConfigValidModel extends Model {
  constructor({id,createUser,configTime,status}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.createUser= {
    val: createUser,
    label: '创建人',
    status: true,
    type: 'text'
    } // 创建人
    
    this.configTime= {
    val: configTime,
    label: '设置时间',
    status: true,
    type: 'hidden'
    } // 设置时间
    
    this.status= {
    val: status,
    label: '状态',
    status: true,
    type: 'text'
    } // 状态
    
  }
}

export default function createSysConfigValid(SysConfigValid = {}) {
  return new SysConfigValidModel({
    
  id: SysConfigValid.id,
        
  createUser: SysConfigValid.createUser,
        
  configTime: SysConfigValid.configTime,
          
  status: SysConfigValid.status    
  })
}
