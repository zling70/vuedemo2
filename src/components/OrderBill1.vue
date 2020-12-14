<template>
  <div
    style="
      width: 820px;
      margin: 0 auto;
      padding: 10px;
      border: 1px solid #95b8e7;
    "
  >
    <div style="margin-bottom: 20px">
      <label for="billno">单据编号:</label>
      <TextBox
        inputId="billno"
        name="billno"
        v-model="bill.billno"
        style="margin-right: 50px"
      ></TextBox>
      <label for="billdate" style="padding-left: 60px">单据日期:</label>
      <DateBox
        inputId="billdate"
        name="billdate"
        v-model="bill.billdate"
        format="yyyy-MM-dd"
      ></DateBox>
    </div>
    <div style="margin-bottom: 20px">
      <label for="customer">客户:</label>
      <TextBox
        inputId="customer"
        name="customer"
        v-model="bill.customer"
        style="margin-left: 32px; margin-right: 50px"
      ></TextBox>
      <label for="billstylename" style="padding-left: 60px">单据类型:</label>
      <TextBox
        inputId="billstylename"
        name="billstylename"
        v-model="bill.billstylename"
      ></TextBox>
    </div>
    <div style="margin-bottom: 20px">
      <label for="test5">送货地址:</label>
      <ComboBox
        :data="custaddrs"
        v-model="bill.customeraddress"
        :panelStyle="{ height: 'auto' }"
        @valueChange="selection = null"
        inputId="test5"
        name="test5"
        style="margin-right: 50px"
      ></ComboBox>
      <label for="currid" style="padding-left: 60px">币别:</label>
      <TextBox
        inputId="currid"
        name="currid"
        v-model="bill.currid"
        style="margin-left: 32px"
      ></TextBox>
    </div>
    <div style="margin-bottom: 20px">
      <label for="billstatus">单况:</label>
      <TextBox
        inputId="billstatus"
        name="billstatus"
        v-model="bill.billstatus"
        style="margin-left: 32px; margin-right: 50px"
      ></TextBox>
      <label for="priceofoftax" style="padding-left: 28px">单价是否含税:</label>
      <TextBox
        inputId="priceofoftax"
        name="priceofoftax"
        v-model="bill.priceofoftax"
      ></TextBox>
    </div>
    <p v-if="selection">You selected: {{ selectionInfo }}</p>
    <tabs>
      <!--参考http://www.jeasyui.net/demo_vue/755.html -->
      <TabPanel title="内容">
        <DataGrid
          :data="bill.details"
          style="height: 280px"
          :clickToEdit="true"
          selectionMode="cell"
          editMode="cell"
        >
          <!--easyui 组件-->
          <GridColumn field="lineno" title="行号" width="40"></GridColumn>
          <GridColumn
            field="itemid"
            title="物料编号"
            :editable="true"
            editRules="required"
          ></GridColumn>
          <GridColumn
            field="name"
            title="物料名称"
            :editable="true"
            :editRules="['required', 'length[3,15]']"
          ></GridColumn>
          <GridColumn
            field="status"
            title="规格型号"
            align="center"
          ></GridColumn>
          <GridColumn field="quantities" title="数量" align="right" :editable="true" editRules="required">
            <template slot="edit" slot-scope="scope">
              <NumberBox
                v-model="scope.row.quantities"
                :precision="1"
              ></NumberBox>
            </template>
          </GridColumn>
          <GridColumn field="unitprice" title="单价" align="right" :editable="true" editRules="required">
            <template slot="edit" slot-scope="scope">
              <NumberBox
                v-model="scope.row.unitprice"
                :precision="2"
              ></NumberBox>
            </template>
          </GridColumn>
          <GridColumn
            field="amounts"
            title="金额"
             align="right" :editable="true" editRules="required"
            width="20%"
          >
            <template slot="edit" slot-scope="scope">
              <NumberBox
                v-model="scope.row.amounts"
                :precision="1"
              ></NumberBox>
            </template>
          </GridColumn>
        </DataGrid>
      </TabPanel>
      <TabPanel title="备注">
        <div style="width: 800px; height: 280px; padding: 50px">
          <textarea cols="90" rows="10">hello</textarea>
        </div>
      </TabPanel>
    </tabs>
    <div style="margin-top: 50px; margin-bottom: 20px">
      <label for="test11">业务人员:</label>
      <TextBox
        inputId="test11"
        name="test11"
        style="margin-right: 50px"
      ></TextBox>
      <label for="test12" style="padding-left: 50px">制单人员:</label>
      <TextBox inputId="test12" name="test12"></TextBox>
    </div>
    <div style="margin-bottom: 20px">
      <label for="test13">所属部门:</label>
      <TextBox
        inputId="test3"
        name="test13"
        style="margin-right: 50px"
      ></TextBox>
      <label for="test14" style="padding-left: 50px">审核人员:</label>
      <TextBox
        inputId="test14"
        name="test14"
        style="padding-left: 20px"
      ></TextBox>
    </div>
    <div style="padding-bottom: 50px">
      <ButtonGroup selectionMode="single">
        <LinkButton
          iconCls="icon-add"
          :toggle="true"
          :selected="true"
          style="margin-right: 20px"
          @click="add()"
          >新增</LinkButton
        >
        <LinkButton
          iconCls="icon-remove"
          :toggle="true"
          style="margin-right: 20px"
          >删除</LinkButton
        >
        <LinkButton
          iconCls="icon-save"
          :toggle="true"
          style="margin-right: 20px"
          >保存</LinkButton
        >
        <LinkButton iconCls="icon-edit" :disabled="true">修改</LinkButton>
        <LinkButton
          iconCls="icon-back"
          :toggle="true"
          style="margin-right: 20px"
          >第一条</LinkButton
        >
        <LinkButton
          iconCls="icon-back"
          :toggle="true"
          style="margin-right: 20px"
          >上一条</LinkButton
        >
        <LinkButton
          iconCls="icon-toright"
          :toggle="true"
          style="margin-right: 20px"
          >下一条</LinkButton
        >
        <LinkButton
          iconCls="icon-toright"
          :toggle="true"
          style="margin-right: 20px"
          >最后一条</LinkButton
        >
      </ButtonGroup>
      <MenuButton text="Help" :plain="true" iconCls="icon-help">
        <Menu>
          <MenuItem text="Help"></MenuItem>
          <MenuItem text="Update"></MenuItem>
          <MenuItem text="About"></MenuItem>
        </Menu>
      </MenuButton>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import "vx-easyui/dist/themes/default/easyui.css";
import "vx-easyui/dist/themes/icon.css";
import "vx-easyui/dist/themes/vue.css";
import EasyUI from "vx-easyui";
Vue.use(EasyUI);
export default {
  data() {
    return {
      bill: {
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
      custaddrs: [
        {
          value: 1,
          text: "长沙",
        },
        {
          value: 2,
          text: "株洲",
        },
        {
          value: 3,
          text: "湘潭",
        },
      ],
      selection: null,
    };
  },
  methods: {
    add() {
      let t = this.$data;
      alert(t.bill);
      window.console.log(this.$data);
    },
    getError(name) {
      return this.errors[name] && this.errors[name].length
        ? this.errors[name][0]
        : null;
    },
    hasError(name) {
      return this.getError(name) != null;
    },
    getTipOpts(name) {
      return {
        content: this.getError(name),
        closed: !this.hasError(name),
        position: "right",
      };
    },
  },
  computed: {
    selectionInfo() {
      if (!this.selection) {
        return null;
      }
      window.console.log(this.selection);
      return this.selection;
    },
  },
};
</script>