import Model from '../Model'

// 
export class SysAssociationModel extends Model {
  constructor({id,words,createtime}) {
    super()
    
    this.id= {
    val: id,
    label: '主键',
    status: true,
    type: 'hidden'
    } // 主键
    
    this.words= {
    val: words,
    label: '词',
    status: true,
    type: 'text'
    } // 词
    
    this.createtime= {
    val: createtime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createSysAssociation(SysAssociation = {}) {
  return new SysAssociationModel({
    
  id: SysAssociation.id,
        
  words: SysAssociation.words,
          
  createtime: SysAssociation.createtime    
  })
}
