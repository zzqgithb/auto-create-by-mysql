import Model from '../Model'

// 用户与角色对应关系
export class SysUserRoleModel extends Model {
  constructor({id,userId,roleId}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.userId= {
    val: userId,
    label: '用户ID',
    status: true,
    type: 'hidden'
    } // 用户ID
    
    this.roleId= {
    val: roleId,
    label: '角色ID',
    status: true,
    type: 'hidden'
    } // 角色ID
    
  }
}

export default function createSysUserRole(SysUserRole = {}) {
  return new SysUserRoleModel({
    
  id: SysUserRole.id,
        
  userId: SysUserRole.userId,
          
  roleId: SysUserRole.roleId    
  })
}
