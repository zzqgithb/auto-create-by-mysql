import Model from '../Model'

// 
export class SysSearchClassificationModel extends Model {
  constructor({id,rid,itemcontent,engineType}) {
    super()
    
    this.id= {
    val: id,
    label: '主键id',
    status: true,
    type: 'hidden'
    } // 主键id
    
    this.rid= {
    val: rid,
    label: '关联关键字 引用r表id',
    status: true,
    type: 'text'
    } // 关联关键字 引用r表id
    
    this.itemcontent= {
    val: itemcontent,
    label: '单个关键子检索具体内容',
    status: true,
    type: 'text'
    } // 单个关键子检索具体内容
    
    this.engineType= {
    val: engineType,
    label: '四大引擎类别',
    status: true,
    type: 'text'
    } // 四大引擎类别
    
  }
}

export default function createSysSearchClassification(SysSearchClassification = {}) {
  return new SysSearchClassificationModel({
    
  id: SysSearchClassification.id,
        
  rid: SysSearchClassification.rid,
        
  itemcontent: SysSearchClassification.itemcontent,
          
  engineType: SysSearchClassification.engineType    
  })
}
