import Model from './Model'

export default class noticeModel extends Model {
    constructor({id, noticeTitle, noticeContent, attathmentKey, creTime, publishTime, creUserId, creUserName, uptTime, uptUserId, uptUserName) {
        super()
        this.id = {
            val: id,
            label: '主键ID',
            type: 'text'
        }
        this.noticeTitle = {
            val: noticeTitle,
            label: '公告标题',
            type: 'text'
        }
        this.noticeContent = {
            val: noticeContent,
            label: '公告内容',
            type: 'textarea'
        }
        this.attathmentKey = {
            val: attathmentKey,
            label: '附件key',
            type: 'text'
        }
        this.creTime = {
            val: creTime,
            label: '创建时间',
            type: 'text'
        }
        this.publishTime = {
            val: publishTime,
            label: '发布时间',
            type: 'text'
        }
        this.creUserId = {
            val: creUserId,
            label: '创建人ID',
            type: 'text'
        }
        this.creUserName = {
            val: creUserName,
            label: '创建人姓名',
            type: 'text'
        }
        this.uptTime = {
            val: uptTime,
            label: '最后更新时间',
            type: 'text'
        }
        this.uptUserId = {
            val: uptUserId,
            label: '最后更新人员ID',
            type: 'text'
        }
        this.uptUserName = {
            val: uptUserName,
            label: '最后更新人员姓名',
            type: 'text'
        }


    }

}

export function createnotice(Notice = {}) {
    return new noticeModel({
        id: Model.id,
        noticeTitle: Model.noticeTitle,
        noticeContent: Model.noticeContent,
        attathmentKey: Model.attathmentKey,
        creTime: Model.creTime,
        publishTime: Model.publishTime,
        creUserId: Model.creUserId,
        creUserName: Model.creUserName,
        uptTime: Model.uptTime,
        uptUserId: Model.uptUserId,
        uptUserName: Model.uptUserName,
    })
}