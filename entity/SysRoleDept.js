import Model from '../Model'

// 角色与部门对应关系
export class SysRoleDeptModel extends Model {
  constructor({id,roleId,deptId}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.roleId= {
    val: roleId,
    label: '角色ID',
    status: true,
    type: 'hidden'
    } // 角色ID
    
    this.deptId= {
    val: deptId,
    label: '部门ID',
    status: true,
    type: 'hidden'
    } // 部门ID
    
  }
}

export default function createSysRoleDept(SysRoleDept = {}) {
  return new SysRoleDeptModel({
    
  id: SysRoleDept.id,
        
  roleId: SysRoleDept.roleId,
          
  deptId: SysRoleDept.deptId    
  })
}
