import Model from '../Model'

// 
export class SysUserSearchcountModel extends Model {
  constructor({id,userId,openId,searchCount}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.userId= {
    val: userId,
    label: '用户id',
    status: true,
    type: 'text'
    } // 用户id
    
    this.openId= {
    val: openId,
    label: 'openid',
    status: true,
    type: 'text'
    } // openid
    
    this.searchCount= {
    val: searchCount,
    label: '搜索次数',
    status: true,
    type: 'hidden'
    } // 搜索次数
    
  }
}

export default function createSysUserSearchcount(SysUserSearchcount = {}) {
  return new SysUserSearchcountModel({
    
  id: SysUserSearchcount.id,
        
  userId: SysUserSearchcount.userId,
        
  openId: SysUserSearchcount.openId,
          
  searchCount: SysUserSearchcount.searchCount    
  })
}
