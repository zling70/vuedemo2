<template>
  <div
    style="border: 1px solid blue; width: 760px; margin: 0 auto; height: 660px"
  >
    <span style="font: 20px bold; color: blue">销售订单</span>
    <vxe-form :data="billView" title-width="100" title-align="right">
      <vxe-form-item title="单据编号" field="billno" span="12">
        <template v-slot>
          <vxe-input
            v-model="billView.billno"
            placeholder="单据编号"
            clearable
          ></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="单据日期" field="billdate" span="12">
        <template v-slot>
          <vxe-input
            v-model="billView.billdate"
            type="date"
            placeholder="请选择日期"
            clearable
          ></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="客户名称" field="customer" span="12">
        <template v-slot>
          <vxe-input
            v-model="billView.customer"
            placeholder="请选择客户"
            clearable
          ></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="送货地址" field="customeraddress" span="12">
        <template v-slot>
          <vxe-input
            v-model="billView.customeraddress"
            placeholder="客户送货地址"
            clearable
          ></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="单况" field="billstatus" span="12">
        <template v-slot>
          <vxe-input v-model="billView.billstatus" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="币别" field="currid" span="12">
        <template v-slot>
          <vxe-input v-model="billView.currid" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="订单类型" field="billstylename" span="12">
        <template v-slot>
          <vxe-input v-model="billView.billstylename" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="单价是否含税" field="priceofoftax" span="12">
        <template v-slot>
          <vxe-input v-model="billView.priceofoftax" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="业务人员" field="salesid" span="12">
        <template v-slot>
          <vxe-input v-model="billView.salesid" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="所属部门" field="departid" span="12">
        <template v-slot>
          <vxe-input v-model="billView.departid" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="制单人员" field="maker" span="12">
        <template v-slot>
          <vxe-input v-model="billView.maker" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="复核人员" field="permitter" span="12">
        <template v-slot>
          <vxe-input v-model="billView.permitter" clearable></vxe-input>
        </template>
      </vxe-form-item>
    </vxe-form>

    <el-tabs  type="card">
      <el-tab-pane label="明细">
        <vxe-table
          border
          round
          highlight-hover-row
          
          max-height="230"
          :data="billView.details"
          :edit-config="{trigger: 'click', mode: 'cell'}"
        >
          <vxe-table-column
            type="seq"
            title="序号"
            width="60"
          ></vxe-table-column>
          <vxe-table-column
            field="itemid"
            title="编号"
            width="160"
            :edit-render="{name: 'input', autoselect: true}"
          ></vxe-table-column>
          <vxe-table-column
            field="name"
            title="物料名称"
            width="160"
            :edit-render="{name: 'input', autoselect: true}"
          ></vxe-table-column>
          <vxe-table-column field="status" title="规格型号"></vxe-table-column>
          <vxe-table-column field="quantities" title="数量" :edit-render="{name: 'input', autoselect: true}"></vxe-table-column>
          <vxe-table-column field="unitprice" title="单价" :edit-render="{name: 'input', autoselect: true}"></vxe-table-column>
          <vxe-table-column field="amounts" title="金额" :edit-render="{name: 'input', autoselect: true}"></vxe-table-column>
        </vxe-table>
      </el-tab-pane>
      <el-tab-pane label="备注"> 
        <vxe-textarea v-model="billView.remark"   :autosize="{ minRows: 10, maxRows: 14 }" placeholder="默认尺寸"></vxe-textarea>
      </el-tab-pane>
    </el-tabs>
    <template>
      <el-button @click="insertEvent">新增</el-button>
      <el-button @click="saveEvent">保存</el-button>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
Vue.use(VXETable);
export default {
  data() {
    return {
      billView: {
        billno: "20200220001", //单据编号
        billdate: new Date(), //单据日期
        customer: "健坤科技", //客户
        customeraddress: "株洲", //送货地址
        billstatus: "未结案", //单况
        remark: "写入备注", //备注
        currid: "RMB", //币别
        billstylename: "打折销售", //订单类型
        maker: "", //制单人员
        permitter: "刘经理", //复合人员
        priceofoftax: "是", //单价是否含税
        salesid: "小花", //业务人员
        departid: "销售部", //所属部门
        details: [
          {
            lineno: 1,
            code: "FI-SW-01",
            name: "Koi",
            unitprice: 36.5,
            status: "P",
            quantities: 10.0,
            amounts: 368.0,
            itemid: "EST-1编号",
          },
          {
            lineno: 2,
            code: "K9-DL-01",
            name: "Dalmation",
            unitprice: 18.5,
            status: "P",
            quantities: 10.0,
            amounts: 185.0,
            itemid: "EST-10",
          },
          {
            lineno: 3,
            code: "RP-SN-01",
            name: "Rattlesnake",
            unitprice: 38.5,
            status: "P",
            quantities: 10.0,
            amounts: 385.0,
            itemid: "EST-11",
          },
          {
            lineno: 4,
            code: "RP-SN-01",
            name: "Rattlesnake",
            unitprice: 26.5,
            status: "P",
            quantities: 10.0,
            amounts: 265.0,
            itemid: "EST-12",
          },
          {
            lineno: 5,
            code: "RP-LI-02",
            name: "Iguana",
            unitprice: 35.5,
            status: "P",
            quantities: 10.0,
            amounts: 355.0,
            itemid: "EST-13",
          },
          {
            lineno: 6,
            code: "FL-DSH-01",
            name: "Manx",
            unitprice: 158.5,
            status: "P",
            quantities: 10.0,
            amounts: 1585.0,
            itemid: "EST-14",
          },
          {
            lineno: 7,
            code: "FL-DSH-01",
            name: "Manx",
            unitprice: 83.5,
            status: "P",
            quantities: 10.0,
            amounts: 835.0,
            itemid: "EST-15",
          },
          {
            lineno: 8,
            code: "FL-DLH-02",
            name: "Persian",
            unitprice: 23.5,
            status: "P",
            quantities: 10.0,
            amounts: 235.0,
            itemid: "EST-16",
          },
          {
            lineno: 9,
            code: "FL-DLH-02",
            name: "Persian",
            unitprice: 89.5,
            status: "P",
            quantities: 10,
            amounts: 895.0,
            itemid: "EST-17",
          },
          {
            lineno: 10,
            code: "AV-CB-01",
            name: "Amazon Parrot",
            unitprice: 63.5,
            status: "P",
            quantities: 10,
            amounts: 635.0,
            itemid: "EST-18",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    insertEvent() {
      console.log("数据插入操作");
      alert("数据插入操作");
    },
    saveEvent() {
      console.log("数据保存操作");
      alert("数据保存操作");
      alert(JSON.stringify(this.billView))
    },
  },
};
</script>

<style>
</style>