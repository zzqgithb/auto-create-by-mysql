import Model from '../Model'

// 
export class QrtzCalendarsModel extends Model {
  constructor({schedName,calendarName,calendar}) {
    super()
    
    this.schedName= {
    val: schedName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.calendarName= {
    val: calendarName,
    label: '',
    status: true,
    type: 'text'
    } // 
    
    this.calendar= {
    val: calendar,
    label: '',
    status: true,
    type: 'hidden'
    } // 
    
  }
}

export default function createQrtzCalendars(QrtzCalendars = {}) {
  return new QrtzCalendarsModel({
    
  schedName: QrtzCalendars.schedName,
        
  calendarName: QrtzCalendars.calendarName,
          
  calendar: QrtzCalendars.calendar    
  })
}
