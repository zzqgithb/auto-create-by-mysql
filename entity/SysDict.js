import Model from '../Model'

// 数据字典表
export class SysDictModel extends Model {
  constructor({id,name,type,code,value,orderNum,remark,delFlag}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.name= {
    val: name,
    label: '字典名称',
    status: true,
    type: 'text'
    } // 字典名称
    
    this.type= {
    val: type,
    label: '字典类型',
    status: true,
    type: 'text'
    } // 字典类型
    
    this.code= {
    val: code,
    label: '字典码',
    status: true,
    type: 'text'
    } // 字典码
    
    this.value= {
    val: value,
    label: '字典值',
    status: true,
    type: 'text'
    } // 字典值
    
    this.orderNum= {
    val: orderNum,
    label: '排序',
    status: true,
    type: 'number'
    } // 排序
    
    this.remark= {
    val: remark,
    label: '备注',
    status: true,
    type: 'text'
    } // 备注
    
    this.delFlag= {
    val: delFlag,
    label: '删除标记  -1：已删除  0：正常',
    status: true,
    type: 'hidden'
    } // 删除标记  -1：已删除  0：正常
    
  }
}

export default function createSysDict(SysDict = {}) {
  return new SysDictModel({
    
  id: SysDict.id,
        
  name: SysDict.name,
        
  type: SysDict.type,
        
  code: SysDict.code,
        
  value: SysDict.value,
        
  orderNum: SysDict.orderNum,
        
  remark: SysDict.remark,
          
  delFlag: SysDict.delFlag    
  })
}
