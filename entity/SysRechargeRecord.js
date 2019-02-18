import Model from '../Model'

// 
export class SysRechargeRecordModel extends Model {
  constructor({id,username,rechargeTime,loginIp,openId,status,remark,rechargeCount,orderNo,totalAmount,tradeNo,expireTime,monthYear}) {
    super()
    
    this.id= {
    val: id,
    label: '主键id',
    status: true,
    type: 'hidden'
    } // 主键id
    
    this.username= {
    val: username,
    label: '用户名',
    status: true,
    type: 'text'
    } // 用户名
    
    this.rechargeTime= {
    val: rechargeTime,
    label: '充值时间',
    status: true,
    type: 'datetime'
    } // 充值时间
    
    this.loginIp= {
    val: loginIp,
    label: '登录ip',
    status: true,
    type: 'text'
    } // 登录ip
    
    this.openId= {
    val: openId,
    label: '微信openid',
    status: true,
    type: 'text'
    } // 微信openid
    
    this.status= {
    val: status,
    label: '充值状态 1 成功 0 未成功',
    status: true,
    type: 'text'
    } // 充值状态 1 成功 0 未成功
    
    this.remark= {
    val: remark,
    label: '充值失败备注',
    status: true,
    type: 'text'
    } // 充值失败备注
    
    this.rechargeCount= {
    val: rechargeCount,
    label: '充值次数（用于累加vip等级）',
    status: true,
    type: 'hidden'
    } // 充值次数（用于累加vip等级）
    
    this.orderNo= {
    val: orderNo,
    label: '订单编号',
    status: true,
    type: 'text'
    } // 订单编号
    
    this.totalAmount= {
    val: totalAmount,
    label: 'totalAmount',
    status: true,
    type: 'text'
    } // totalAmount
    
    this.tradeNo= {
    val: tradeNo,
    label: '支付宝交易号',
    status: true,
    type: 'text'
    } // 支付宝交易号
    
    this.expireTime= {
    val: expireTime,
    label: '过期时间',
    status: true,
    type: 'datetime'
    } // 过期时间
    
    this.monthYear= {
    val: monthYear,
    label: '按月、年支付（M 月 Y 年）',
    status: true,
    type: 'text'
    } // 按月、年支付（M 月 Y 年）
    
  }
}

export default function createSysRechargeRecord(SysRechargeRecord = {}) {
  return new SysRechargeRecordModel({
    
  id: SysRechargeRecord.id,
        
  username: SysRechargeRecord.username,
        
  rechargeTime: SysRechargeRecord.rechargeTime,
        
  loginIp: SysRechargeRecord.loginIp,
        
  openId: SysRechargeRecord.openId,
        
  status: SysRechargeRecord.status,
        
  remark: SysRechargeRecord.remark,
        
  rechargeCount: SysRechargeRecord.rechargeCount,
        
  orderNo: SysRechargeRecord.orderNo,
        
  totalAmount: SysRechargeRecord.totalAmount,
        
  tradeNo: SysRechargeRecord.tradeNo,
        
  expireTime: SysRechargeRecord.expireTime,
          
  monthYear: SysRechargeRecord.monthYear    
  })
}
