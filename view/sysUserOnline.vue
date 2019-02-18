<template>
    <div class="deduction-type">
        <search-wrapper :condition-list="conditionList"
                        @handleSearch="openSearch"
                        @handleReset="closeSearch"></search-wrapper>
        <button-wrapper :button-list="buttonList"
                        :getCheckedList="getCheckedList"
                        @create="handleCreateDialog"
                        @del="del"></button-wrapper>
        <!-- 表格 -->
        <table-panel v-loading="!pageObj.dataList"
                     ref="tablePanel"
                     :table-attr="tableAttr"
                     :table-height="tableHeight"
                     :table-button="tableBtnList"
                     :pageObj="pageObj"
                     @change="handleChange"
                     @handleCurrentChange="handleCurrentChange"
                     @handleSizeChange="handleSizeChange"></table-panel>

        <dialog-form ref="dialogForm"
                     :label-width="140"
                     :title="dialogAttr.title"
                     :form-attr="formAttr"
                     :is-show="isShow"
                     :button-list="dialogBtnList"
                     @dialogSubmit="dialogSubmit"
                     @cancel="closeDialog"></dialog-form>
    </div>
</template>

<script type="text/ecmascript-6">
    import createSysUserOnline from '@/class/entity/SysUserOnline'
    import {SearchWrapper, ButtonWrapper, TablePanel, DialogForm} from '@/components/index'
    import * as sysUserOnlineApi from '@/api/entityApi/sysUserOnline'
    import {createPage} from '@/class/Page'
    import {pageMixins, appMixins, dialogMixins} from '@/mixins'

    export default {
        components: {
            SearchWrapper,
            ButtonWrapper,
            TablePanel,
            DialogForm
        },
        mixins: [pageMixins, appMixins, dialogMixins],
        data() {
            return {
                conditionList: [
                    {
                        label: '减分项类别名称',
                        type: 'text',
                        prop: 'itemTypeName',
                        val: ''
                    },
                    {
                        label: '状态',
                        type: 'select',
                        prop: 'itemTypeStatus',
                        val: '',
                        options: {}
                    }
                ], // 检索条件列表
                buttonList: [
                    {
                        label: '新增',
                        type: 'primary',
                        action: 'create'
                    },
                    {
                        label: '删除',
                        type: 'primary',
                        action: 'del',
                        danger: '您确定要删除选中的减分项类别信息吗？',
                        checkedLength: {
                            not: {
                                0: '删除操作至少要选择一条记录'
                            }
                        }
                    }
                ], // 操作按钮
                tableBtnList: {
                    title: '操作',
                    buttonList: [
                        {
                            label: '修改',
                            action: 'change',
                            notShow: false
                        }
                    ]
                },
                dialogAttr: {
                    title: '',
                    type: '' // 用于区分dialog提交的是新增操作还是修改操作
                },
                tableAttr: null, // 表格属性
                formAttr: null, // 表单属性
                pageObj: null,
                entity: createSysUserOnline()
            }
        },
        created() {
            // 设置码表信息
            this.setValByKey(this.conditionList, 'prop', 'itemTypeStatus', 'options', this.dictData.deductionTypeStatus)
            this.getTableAttr()
            this.setPageObj()
        },
        methods: {
            setPageObj() {
                this.pageObj = createPage({
                    url: 'market/deductItemType/getList'
                })
                this.pageObj.getList()
            },
            // 获取表格配置
            getTableAttr() {
                this.entity.setAttrType(false)
                this.tableAttr = this.entity.getTableAttr()
            },
            // 获取表单配置文件
            getFormAttr(data = {}) {
                // 清空原始列表数据
                this.entity = this.entity.constructor(data)
                this.entity.setAttrType(true)
                this.formAttr = this.entity.getFormAttr()
            },
            // 打开新增面板
            handleCreateDialog() {
                this.dialogAttr.title = '新增减分项'
                this.dialogAttr.type = 'create'
                this.formAttr = null
                this.getFormAttr()
                this.openDialog()
            },
            // 处理修改操作
            handleChange({index, data, action, type, val}) {
                this.dialogAttr.title = '修改减分项'
                this.dialogAttr.type = 'update'
                this.formAttr = null
                this.getFormAttr(data)
                this.openDialog()
            },
            // 遮罩层保存被点击时候
            dialogSubmit(data) {
                if (this.dialogAttr.type === 'create') {
                    sysUserOnlineApi.create(data).then(res => {
                        this.closeDialog()
                        this.pageObj.getList()
                        this.$message.success(res.msg)
                    })
                } else if (this.dialogAttr.type === 'update') {
                    sysUserOnlineApi.update(data).then(res => {
                        this.closeDialog()
                        this.pageObj.getList()
                        this.$message.success(res.msg)
                    })
                }
            },
            // 删除操作
            del() {
                let ids = this.getValListByKey('itemTypeCode')
                sysUserOnlineApi.del({
                    id: ids.toString()
                }).then(res => {
                    this.pageObj.getList()
                    this.$message.success(res.msg)
                })
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
