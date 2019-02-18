import Model from '../Model'

// 部门管理
export class SysDeptModel extends Model {
  constructor({deptId,parentId,name,orderNum,delFlag}) {
    super()
    
    this.deptId= {
    val: deptId,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.parentId= {
    val: parentId,
    label: '上级部门ID，一级部门为0',
    status: true,
    type: 'hidden'
    } // 上级部门ID，一级部门为0
    
    this.name= {
    val: name,
    label: '部门名称',
    status: true,
    type: 'text'
    } // 部门名称
    
    this.orderNum= {
    val: orderNum,
    label: '排序',
    status: true,
    type: 'number'
    } // 排序
    
    this.delFlag= {
    val: delFlag,
    label: '是否删除  -1：已删除  0：正常',
    status: true,
    type: 'hidden'
    } // 是否删除  -1：已删除  0：正常
    
  }
}

export default function createSysDept(SysDept = {}) {
  return new SysDeptModel({
    
  deptId: SysDept.deptId,
        
  parentId: SysDept.parentId,
        
  name: SysDept.name,
        
  orderNum: SysDept.orderNum,
          
  delFlag: SysDept.delFlag    
  })
}
