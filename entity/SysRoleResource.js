import Model from '../Model'

// 审核通过的角色资源关联表
export class SysRoleResourceModel extends Model {
  constructor({id,roleId,resId}) {
    super()
    
    this.id= {
    val: id,
    label: '主键ID',
    status: true,
    type: 'text'
    } // 主键ID
    
    this.roleId= {
    val: roleId,
    label: '角色ID',
    status: true,
    type: 'text'
    } // 角色ID
    
    this.resId= {
    val: resId,
    label: '资源主键ID',
    status: true,
    type: 'text'
    } // 资源主键ID
    
  }
}

export default function createSysRoleResource(SysRoleResource = {}) {
  return new SysRoleResourceModel({
    
  id: SysRoleResource.id,
        
  roleId: SysRoleResource.roleId,
          
  resId: SysRoleResource.resId    
  })
}
