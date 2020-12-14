<template>
    <div style="border: 1px solid blue;width:760px;margin:0 auto;height:660px;padding-right:20px">
		<span style="font:20px bold;color:blue">销售订单</span>
        <el-form :model="bill" ref="bill" label-width="120px" class="demo-ruleForm" size="mini">
            <el-row>
                <el-col :span='12'>
                    <el-form-item label="单据编号:">
                        <el-input v-model="bill.billno"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="单据日期:">
                        <el-date-picker type="date" v-model="bill.billdate" style="width:260px"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span='12'>
                    <el-form-item label="客    户:">
                        <el-input v-model="bill.customer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="送货地址:">
                        <el-input v-model="bill.customeraddress"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="单况:">
                        <el-input v-model="bill.billstatus"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="币别:">
                        <el-input v-model="bill.currid"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="订单类型:">
                        <el-input v-model="bill.billstylename"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="制单人员:">
                        <el-input v-model="bill.maker"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="业务人员:">
                        <el-input v-model="bill.salesid"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="所属部门:">
                        <el-input v-model="bill.departid"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
			<el-row>
                <el-col :span='12'>
                    <el-form-item label="单价是否含税:">
                        <el-input v-model="bill.priceofoftax"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span='12'>
                    <el-form-item label="审核人员:">
                        <el-input v-model="bill.permitter"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
		<el-tabs type="card" style="width:720px;margin:0 auto">
			<el-tab-pane label="明细">
				<el-table :data="bill.details" style="height:280px;overflow:auto">
					<el-table-column prop="lineno" label="序号"></el-table-column>
					<el-table-column prop="itemid" label="物料编号"></el-table-column>
					<el-table-column prop="name" label="物料名称"></el-table-column>
					<el-table-column prop="status" label="规格型号"></el-table-column>
					<el-table-column prop="quantities" label="数量"></el-table-column>
					<el-table-column prop="unitprice" label="单价"></el-table-column>
					<el-table-column prop="amounts" label="金额"></el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="备注">
				<el-input rows="10" type="textarea"></el-input>
			</el-tab-pane>
		</el-tabs>
    </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

    export default {
        data() {
            return {                
                bill: {
					billno: '20200220001', //单据编号
					billdate: new Date(), //单据日期
					customer: '健坤科技', //客户
					customeraddress: '株洲', //送货地址
					billstatus: '未结案', //单况
					remark: '写入备注', //备注
					currid: 'RMB', //币别
					billstylename:'打折销售',//订单类型
					maker: '', //制单人员
					permitter: '刘经理', //复合人员
					priceofoftax: '是', //单价是否含税
					salesid: '小花', //业务人员
					departid: '销售部', //所属部门
					details: [{
							"lineno": 1,
							"code": "FI-SW-01",
							"name": "Koi",
							"unitprice": 36.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 368.00,
							"itemid": "EST-1编号"
						},
						{
							"lineno": 2,
							"code": "K9-DL-01",
							"name": "Dalmation",
							"unitprice": 18.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 185.00,
							"itemid": "EST-10"
						},
						{
							"lineno": 3,
							"code": "RP-SN-01",
							"name": "Rattlesnake",
							"unitprice": 38.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 385.00,
							"itemid": "EST-11"
						},
						{
							"lineno": 4,
							"code": "RP-SN-01",
							"name": "Rattlesnake",
							"unitprice": 26.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 265.00,
							"itemid": "EST-12"
						},
						{
							"lineno": 5,
							"code": "RP-LI-02",
							"name": "Iguana",
							"unitprice": 35.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 355.00,
							"itemid": "EST-13"
						},
						{
							"lineno": 6,
							"code": "FL-DSH-01",
							"name": "Manx",
							"unitprice": 158.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 1585.00,
							"itemid": "EST-14"
						},
						{
							"lineno": 7,
							"code": "FL-DSH-01",
							"name": "Manx",
							"unitprice": 83.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 835.00,
							"itemid": "EST-15"
						},
						{
							"lineno": 8,
							"code": "FL-DLH-02",
							"name": "Persian",
							"unitprice": 23.50,
							"status": "P",
							"quantities": 10.00,
							"amounts": 235.00,
							"itemid": "EST-16"
						},
						{
							"lineno": 9,
							"code": "FL-DLH-02",
							"name": "Persian",
							"unitprice": 89.50,
							"status": "P",
							"quantities": 10,
							"amounts": 895.00,
							"itemid": "EST-17"
						},
						{
							"lineno": 10,
							"code": "AV-CB-01",
							"name": "Amazon Parrot",
							"unitprice": 63.50,
							"status": "P",
							"quantities": 10,
							"amounts": 635.00,
							"itemid": "EST-18"
						}
					]
				}
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
   
</style>