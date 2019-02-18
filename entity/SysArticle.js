import Model from '../Model'

// 
export class SysArticleModel extends Model {
  constructor({id,content,createUser,createTime,updateUser,updateTime}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'number'
    } // 
    
    this.content= {
    val: content,
    label: '内容表',
    status: true,
    type: 'textarea'
    } // 内容表
    
    this.createUser= {
    val: createUser,
    label: '',
    status: true,
    type: 'number'
    } // 
    
    this.createTime= {
    val: createTime,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
    this.updateUser= {
    val: updateUser,
    label: '',
    status: true,
    type: 'number'
    } // 
    
    this.updateTime= {
    val: updateTime,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
  }
}

export default function createSysArticle(SysArticle = {}) {
  return new SysArticleModel({
    
  id: SysArticle.id,
        
  content: SysArticle.content,
        
  createUser: SysArticle.createUser,
        
  createTime: SysArticle.createTime,
        
  updateUser: SysArticle.updateUser,
          
  updateTime: SysArticle.updateTime    
  })
}
