import Model from '../Model'

// 文件上传
export class SysOssModel extends Model {
  constructor({id,url,createDate}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.url= {
    val: url,
    label: 'URL地址',
    status: true,
    type: 'text'
    } // URL地址
    
    this.createDate= {
    val: createDate,
    label: '创建时间',
    status: true,
    type: 'datetime'
    } // 创建时间
    
  }
}

export default function createSysOss(SysOss = {}) {
  return new SysOssModel({
    
  id: SysOss.id,
        
  url: SysOss.url,
          
  createDate: SysOss.createDate    
  })
}
