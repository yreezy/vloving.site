<template>
  <div>
    <TopFilter :list="topFilterList" :cols="3" :collapse="true" @filterChange="changeHandle"></TopFilter>
    <FilterTable
      ref="table"
      :columns="columns"
      :fetchapi="fetchApi"
      selectionType="single"
      :params="fetchParams"
      :datakey="'records'"
      :isSelectColumn="true"
      :onColumnsChange="columns => (this.columns = columns)"
      :onRowSelectChange="getSelectData"
    ></FilterTable>
    <div
      :style="{
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 9,
        borderTop: '1px solid #e9e9e9',
        padding: '10px 20px',
        background: '#fff',
        textAlign: 'right'
      }"
    >
      <el-button size="small" type="primary" icon="el-icon-plus" @click="saveHandle">确定</el-button>
      <el-button size="small" @click="cancleHandle">取消</el-button>
    </div>
  </div>
</template>
<script>
import { querySalesOrderVin } from '@/api/capitalsettle/saleSettlement/ordermanage';
import { getUsersByPosition } from '@/api/retail/salesmanage/salesordermanage';
export default {
  name: 'ViNoSelect',
  data() {
    return {
      fetchApi: querySalesOrderVin,
      fetchParams: {},
      topFilterList: this.createTopFilters(), // 查询区条件
      columns: this.createTableColumns(),
      theSelect: null
    };
  },
  created() {
    this.getEmployeeList();
  },
  methods: {
    createTopFilters() {
      return [
        {
          type: 'INPUT',
          label: '销售订单号',
          fieldName: 'viNo',
          placeholder: '请输入...'
        },
        {
          type: 'INPUT',
          label: '客户名称',
          fieldName: 'customerName',
          placeholder: '请输入...'
        },
        {
          type: 'INPUT',
          label: 'VIN',
          fieldName: 'vin',
          placeholder: '请输入...'
        },
        {
          type: 'SELECT',
          label: '销售顾问',
          fieldName: 'consultant',
          placeholder: '请输入...',
          itemList: []
        }
      ];
    },
    createTableColumns() {
      return [
        {
          title: '序号',
          dataIndex: 'index',
          width: 80,
          sorter: true,
          render: props => {
            return <span>{props.row.index + 1}</span>;
          }
        },
        {
          title: '销售订单号',
          dataIndex: 'viNo',
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: '客户编号',
          dataIndex: 'potentialCustomerNo',
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: '客户名称',
          dataIndex: 'customerName',
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: '销售顾问',
          dataIndex: 'consultant',
          sorter: true,
          filter: true,
          filterType: 'input'
        },
        {
          title: 'VIN',
          dataIndex: 'vin',
          width: 170,
          sorter: true,
          filter: true,
          filterType: 'input'
        }
      ];
    },
    // 获取销售顾问
    async getEmployeeList() {
      let params = {
        positionCodes: [10061015],
        menuId: 223001
      };
      const res = await getUsersByPosition(params);
      // console.log('销售顾问', res)
      if (res.resultCode === 200) {
        let orginList = res.data.map(x => ({ value: x.userId, text: x.userName }));
        this.consultantList = orginList.filter((item, index, array) => {
          return array.findIndex(el => el.value == item.value) === index;
        });
        this.topFilterList.find(item => item.fieldName === 'consultant').itemList = this.consultantList;
      }
    },
    changeHandle(fetchParams) {
      this.fetchParams = Object.assign({}, fetchParams);
    },
    getSelectData(val) {
      this.theSelect = val;
    },
    saveHandle() {
      this.$emit('closeViNo', this.theSelect);
    },
    cancleHandle() {
      this.$emit('closeViNo', '');
    }
  }
};
</script>
<style lang="less" scoped></style>
