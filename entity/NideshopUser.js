import Model from '../Model'

// 
export class NideshopUserModel extends Model {
  constructor({id,username,password,gender,birthday,registerTime,lastLoginTime,lastLoginIp,userLevelId,nickname,mobile,registerIp,avatar,weixinOpenid}) {
    super()
    
    this.id= {
    val: id,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.username= {
    val: username,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.password= {
    val: password,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.gender= {
    val: gender,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.birthday= {
    val: birthday,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
    this.registerTime= {
    val: registerTime,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
    this.lastLoginTime= {
    val: lastLoginTime,
    label: '',
    status: true,
    type: 'datetime'
    } // 
    
    this.lastLoginIp= {
    val: lastLoginIp,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.userLevelId= {
    val: userLevelId,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
    this.nickname= {
    val: nickname,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.mobile= {
    val: mobile,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.registerIp= {
    val: registerIp,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.avatar= {
    val: avatar,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.weixinOpenid= {
    val: weixinOpenid,
    label: '',
    status: true,
    type: 'text'
    } // 
    
  }
}

export default function createNideshopUser(NideshopUser = {}) {
  return new NideshopUserModel({
    
  id: NideshopUser.id,
        
  username: NideshopUser.username,
        
  password: NideshopUser.password,
        
  gender: NideshopUser.gender,
        
  birthday: NideshopUser.birthday,
        
  registerTime: NideshopUser.registerTime,
        
  lastLoginTime: NideshopUser.lastLoginTime,
        
  lastLoginIp: NideshopUser.lastLoginIp,
        
  userLevelId: NideshopUser.userLevelId,
        
  nickname: NideshopUser.nickname,
        
  mobile: NideshopUser.mobile,
        
  registerIp: NideshopUser.registerIp,
        
  avatar: NideshopUser.avatar,
          
  weixinOpenid: NideshopUser.weixinOpenid    
  })
}
