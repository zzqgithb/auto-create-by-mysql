import Model from '../Model'

// 角色
export class SysRoleModel extends Model {
  constructor({roleId,roleName,remark,deptId,createTime}) {
    super()
    
    this.roleId= {
    val: roleId,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.roleName= {
    val: roleName,
    label: '角色名称',
    status: true,
    type: 'text'
    } // 角色名称
    
    this.remark= {
    val: remark,
    label: '备注',
    status: true,
    type: 'text'
    } // 备注
    
    this.deptId= {
    val: deptId,
    label: '部门ID',
    status: true,
    type: 'hidden'
    } // 部门ID
    
    this.createTime= {
    val: createTime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createSysRole(SysRole = {}) {
  return new SysRoleModel({
    
  roleId: SysRole.roleId,
        
  roleName: SysRole.roleName,
        
  remark: SysRole.remark,
        
  deptId: SysRole.deptId,
          
  createTime: SysRole.createTime    
  })
}
