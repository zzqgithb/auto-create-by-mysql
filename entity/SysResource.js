import Model from '../Model'

// 平台资源表
export class SysResourceModel extends Model {
  constructor({resId,resourceCode,resourceName,resourceLevel,resourceType,resourceContent,isShow,status,sortNum,pResId,pResIds,createUserId,createTime}) {
    super()
    
    this.resId= {
    val: resId,
    label: '资源主键ID',
    status: true,
    type: 'text'
    } // 资源主键ID
    
    this.resourceCode= {
    val: resourceCode,
    label: '资源码',
    status: true,
    type: 'text'
    } // 资源码
    
    this.resourceName= {
    val: resourceName,
    label: '资源名称',
    status: true,
    type: 'text'
    } // 资源名称
    
    this.resourceLevel= {
    val: resourceLevel,
    label: '资源级别',
    status: true,
    type: 'number'
    } // 资源级别
    
    this.resourceType= {
    val: resourceType,
    label: '子系统、URL、操作按钮',
    status: true,
    type: 'text'
    } // 子系统、URL、操作按钮
    
    this.resourceContent= {
    val: resourceContent,
    label: '资源内容，URL等',
    status: true,
    type: 'text'
    } // 资源内容，URL等
    
    this.isShow= {
    val: isShow,
    label: '是否显示',
    status: true,
    type: 'text'
    } // 是否显示
    
    this.status= {
    val: status,
    label: '状态 0 , 1  可从码表获取',
    status: true,
    type: 'text'
    } // 状态 0 , 1  可从码表获取
    
    this.sortNum= {
    val: sortNum,
    label: '排序',
    status: true,
    type: 'number'
    } // 排序
    
    this.pResId= {
    val: pResId,
    label: '父级资源id',
    status: true,
    type: 'text'
    } // 父级资源id
    
    this.pResIds= {
    val: pResIds,
    label: '所有父级资源id，用于树状展示',
    status: true,
    type: 'text'
    } // 所有父级资源id，用于树状展示
    
    this.createUserId= {
    val: createUserId,
    label: '创建人ID',
    status: true,
    type: 'text'
    } // 创建人ID
    
    this.createTime= {
    val: createTime,
    label: '创建时间',
    status: true,
    type: 'text'
    } // 创建时间
    
  }
}

export default function createSysResource(SysResource = {}) {
  return new SysResourceModel({
    
  resId: SysResource.resId,
        
  resourceCode: SysResource.resourceCode,
        
  resourceName: SysResource.resourceName,
        
  resourceLevel: SysResource.resourceLevel,
        
  resourceType: SysResource.resourceType,
        
  resourceContent: SysResource.resourceContent,
        
  isShow: SysResource.isShow,
        
  status: SysResource.status,
        
  sortNum: SysResource.sortNum,
        
  pResId: SysResource.pResId,
        
  pResIds: SysResource.pResIds,
        
  createUserId: SysResource.createUserId,
          
  createTime: SysResource.createTime    
  })
}
