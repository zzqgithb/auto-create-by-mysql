import Model from '../Model'

// 
export class SysSearchRelationModel extends Model {
  constructor({rid,keyword,keycontent,createtime,engineType}) {
    super()
    
    this.rid= {
    val: rid,
    label: '关联表主键id',
    status: true,
    type: 'hidden'
    } // 关联表主键id
    
    this.keyword= {
    val: keyword,
    label: '搜索关键字',
    status: true,
    type: 'text'
    } // 搜索关键字
    
    this.keycontent= {
    val: keycontent,
    label: '关联出来下拉关键字',
    status: true,
    type: 'text'
    } // 关联出来下拉关键字
    
    this.createtime= {
    val: createtime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
    this.engineType= {
    val: engineType,
    label: '引擎类别',
    status: true,
    type: 'text'
    } // 引擎类别
    
  }
}

export default function createSysSearchRelation(SysSearchRelation = {}) {
  return new SysSearchRelationModel({
    
  rid: SysSearchRelation.rid,
        
  keyword: SysSearchRelation.keyword,
        
  keycontent: SysSearchRelation.keycontent,
        
  createtime: SysSearchRelation.createtime,
          
  engineType: SysSearchRelation.engineType    
  })
}
