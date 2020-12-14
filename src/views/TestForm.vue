<template>
  <div
    style="
      width: 820px;
      margin: 0 auto;
      padding: 10px;
      border: 1px solid #95b8e7;
    "
  >
  <span style="font:20px bold;color:blue">客户资料录入</span>
    <!--easyui 
        <DataGrid
          :data="details"
          style="height: 360px"
          :clickToEdit="true"
          selectionMode="cell"
          editMode="cell"
        >
          
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
          <GridColumn
            field="quantities"
            title="数量"
            align="right"
            :editable="true"
            editRules="required"
          >
            <template slot="edit" slot-scope="scope">
              <NumberBox
                v-model="scope.row.quantities"
                :precision="1"
              ></NumberBox>
            </template>
          </GridColumn>
          <GridColumn
            field="unitprice"
            title="单价"
            align="right"
            :editable="true"
            editRules="required"
          >
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
            align="right"
            :editable="true"
            editRules="required"
            width="20%"
          >
            <template slot="edit" slot-scope="scope">
              <NumberBox v-model="scope.row.amounts" :precision="1"></NumberBox>
            </template>
          </GridColumn>
        </DataGrid>
组件-->

            <el-form :model="bill" ref="customer" label-width="120px" class="demo-ruleForm" size="mini">
            <el-row>
                <el-col :span='12'>
                    <el-form-item label="客户编号:">
                        <el-input v-model="customer.cid" placeholder="唯一编号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="建档日期:">
                        <el-date-picker type="date" v-model="customer.buildupdate" style="width:278px" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span='12'>
                    <el-form-item label="客户简称:">
                        <el-input v-model="customer.shortname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="客户全名:">
                        <el-input v-model="customer.cfullname"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="负责人:">
                        <el-input v-model="customer.chiefname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="开户银行:">
                        <el-input v-model="customer.bankname"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="联系人:">
                        <el-input v-model="customer.linkman"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="联系电话:">
                        <el-input v-model="customer.tel"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='8'>
                    <el-form-item label="送货地址:">
                        <el-input v-model="customer.areaid" placeholder="填写唯一编号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='16'>
                    <el-form-item label="">                        
                        <el-input v-model="customer.areaname" placeholder="详细地址 株洲市石峰区"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			
        </el-form>
        
    <div style="padding-top: 20px;padding-bottom: 20px;">
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
          iconCls="icon-save"
          :toggle="true"
          style="margin-right: 20px"
          @click="save()"
          >保存</LinkButton
        >
        <LinkButton
          iconCls="icon-remove"
          :toggle="true"
          style="margin-right: 20px" :disabled="true"
          >删除</LinkButton
        >
        <LinkButton iconCls="icon-edit" :disabled="true">修改</LinkButton>
      </ButtonGroup>
      <MenuButton text="Help" :plain="true" iconCls="icon-help" :disabled="true">
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
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
import EasyUI from "vx-easyui";
Vue.use(EasyUI);
export default {
  name: "materials",
  data() {
    return {
        customer:{
            cid:'001',
            cfullname:'常山赵子龙',
            shortname:'赵云',//客户简称
            areaid:'',//地址id
            areaname:'',//地址名称
            chiefname:'刘备',//负责人
            linkman:'李武',//联系人
            tel:'13873384567',//电话号码
            buildupdate:'',
            bankname:'中国银行建设路支行' //开户行
        },
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
    };
  },
  methods:{
      add(){
          //alert(JSON.stringify(this.customer))
          this.customer.cid = '';
          this.customer.shortname = '';
          this.customer.cfullname = '';
          this.customer.chiefname = '';
          this.customer.linkman = '';
          this.customer.tel = '';
          this.customer.bankname = '';
          this.customer.areaid = '';
          this.customer.areaname = '';
          this.customer.buildupdate = new Date();
      },
        save(){
            console.log('执行数据保存操作');
            alert(JSON.stringify(this.customer));
        }
  },
  mounted() {
    // 初始化查询，默认为前一天
    this.customer.buildupdate = new Date();
}
};
</script>
<style>
    
</style>