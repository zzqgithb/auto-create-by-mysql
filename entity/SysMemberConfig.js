import Model from '../Model'

// 
export class SysMemberConfigModel extends Model {
  constructor({id,time,createTime}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.time= {
    val: time,
    label: '分钟',
    status: true,
    type: 'hidden'
    } // 分钟
    
    this.createTime= {
    val: createTime,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
  }
}

export default function createSysMemberConfig(SysMemberConfig = {}) {
  return new SysMemberConfigModel({
    
  id: SysMemberConfig.id,
        
  time: SysMemberConfig.time,
          
  createTime: SysMemberConfig.createTime    
  })
}
