import Model from '../Model'

// 菜单管理
export class SysMenuModel extends Model {
  constructor({menuId,parentId,name,url,perms,type,icon,orderNum}) {
    super()
    
    this.menuId= {
    val: menuId,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.parentId= {
    val: parentId,
    label: '父菜单ID，一级菜单为0',
    status: true,
    type: 'hidden'
    } // 父菜单ID，一级菜单为0
    
    this.name= {
    val: name,
    label: '菜单名称',
    status: true,
    type: 'text'
    } // 菜单名称
    
    this.url= {
    val: url,
    label: '菜单URL',
    status: true,
    type: 'text'
    } // 菜单URL
    
    this.perms= {
    val: perms,
    label: '授权(多个用逗号分隔，如：user:list,user:create)',
    status: true,
    type: 'text'
    } // 授权(多个用逗号分隔，如：user:list,user:create)
    
    this.type= {
    val: type,
    label: '类型   0：目录   1：菜单   2：按钮',
    status: true,
    type: 'number'
    } // 类型   0：目录   1：菜单   2：按钮
    
    this.icon= {
    val: icon,
    label: '菜单图标',
    status: true,
    type: 'text'
    } // 菜单图标
    
    this.orderNum= {
    val: orderNum,
    label: '排序',
    status: true,
    type: 'number'
    } // 排序
    
  }
}

export default function createSysMenu(SysMenu = {}) {
  return new SysMenuModel({
    
  menuId: SysMenu.menuId,
        
  parentId: SysMenu.parentId,
        
  name: SysMenu.name,
        
  url: SysMenu.url,
        
  perms: SysMenu.perms,
        
  type: SysMenu.type,
        
  icon: SysMenu.icon,
          
  orderNum: SysMenu.orderNum    
  })
}
