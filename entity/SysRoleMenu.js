import Model from '../Model'

// 角色与菜单对应关系
export class SysRoleMenuModel extends Model {
  constructor({id,roleId,menuId}) {
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
    
    this.menuId= {
    val: menuId,
    label: '菜单ID',
    status: true,
    type: 'hidden'
    } // 菜单ID
    
  }
}

export default function createSysRoleMenu(SysRoleMenu = {}) {
  return new SysRoleMenuModel({
    
  id: SysRoleMenu.id,
        
  roleId: SysRoleMenu.roleId,
          
  menuId: SysRoleMenu.menuId    
  })
}
