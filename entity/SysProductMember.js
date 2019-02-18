import Model from '../Model'

// 
export class SysProductMemberModel extends Model {
  constructor({id,amountMoney,memberLevle,validTime,description,userId,status,unitMoney,totalAmount,memberType,monthYear,discount}) {
    super()
    
    this.id= {
    val: id,
    label: '主键id',
    status: true,
    type: 'hidden'
    } // 主键id
    
    this.amountMoney= {
    val: amountMoney,
    label: '产品金额',
    status: true,
    type: 'text'
    } // 产品金额
    
    this.memberLevle= {
    val: memberLevle,
    label: '会员等级',
    status: true,
    type: 'hidden'
    } // 会员等级
    
    this.validTime= {
    val: validTime,
    label: '过期时间',
    status: true,
    type: 'datetime'
    } // 过期时间
    
    this.description= {
    val: description,
    label: '描述（描述会员信息）',
    status: true,
    type: 'text'
    } // 描述（描述会员信息）
    
    this.userId= {
    val: userId,
    label: '关联用户id',
    status: true,
    type: 'text'
    } // 关联用户id
    
    this.status= {
    val: status,
    label: '状态',
    status: true,
    type: 'hidden'
    } // 状态
    
    this.unitMoney= {
    val: unitMoney,
    label: '单位',
    status: true,
    type: 'text'
    } // 单位
    
    this.totalAmount= {
    val: totalAmount,
    label: '金额',
    status: true,
    type: 'text'
    } // 金额
    
    this.memberType= {
    val: memberType,
    label: 'VIP 会员  SVIP年会员',
    status: true,
    type: 'text'
    } // VIP 会员  SVIP年会员
    
    this.monthYear= {
    val: monthYear,
    label: '按年'Y'  或者 按月 'M'',
    status: true,
    type: 'text'
    } // 按年'Y'  或者 按月 'M'
    
    this.discount= {
    val: discount,
    label: '默认不打折，可根据自定义打折',
    status: true,
    type: 'hidden'
    } // 默认不打折，可根据自定义打折
    
  }
}

export default function createSysProductMember(SysProductMember = {}) {
  return new SysProductMemberModel({
    
  id: SysProductMember.id,
        
  amountMoney: SysProductMember.amountMoney,
        
  memberLevle: SysProductMember.memberLevle,
        
  validTime: SysProductMember.validTime,
        
  description: SysProductMember.description,
        
  userId: SysProductMember.userId,
        
  status: SysProductMember.status,
        
  unitMoney: SysProductMember.unitMoney,
        
  totalAmount: SysProductMember.totalAmount,
        
  memberType: SysProductMember.memberType,
        
  monthYear: SysProductMember.monthYear,
          
  discount: SysProductMember.discount    
  })
}
