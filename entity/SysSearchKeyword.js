import Model from '../Model'

// 
export class SysSearchKeywordModel extends Model {
  constructor({keyid,keyWord,createtime,createuser,userid}) {
    super()
    
    this.keyid= {
    val: keyid,
    label: '主键  关键字id',
    status: true,
    type: 'hidden'
    } // 主键  关键字id
    
    this.keyWord= {
    val: keyWord,
    label: '关键子',
    status: true,
    type: 'text'
    } // 关键子
    
    this.createtime= {
    val: createtime,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
    this.createuser= {
    val: createuser,
    label: '创建人',
    status: true,
    type: 'text'
    } // 创建人
    
    this.userid= {
    val: userid,
    label: '用户id',
    status: true,
    type: 'text'
    } // 用户id
    
  }
}

export default function createSysSearchKeyword(SysSearchKeyword = {}) {
  return new SysSearchKeywordModel({
    
  keyid: SysSearchKeyword.keyid,
        
  keyWord: SysSearchKeyword.keyWord,
        
  createtime: SysSearchKeyword.createtime,
        
  createuser: SysSearchKeyword.createuser,
          
  userid: SysSearchKeyword.userid    
  })
}
