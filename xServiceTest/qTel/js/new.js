//here is your code...
summerready = function () {
};
function call(){
    summer.UMTel.call('13261813382')
}
function sendMessage(){
    summer.UMTel.sendMsg({
        tel:'13261813382',
        body:'收到请回复'
    })
    alert('发送成功！！！！！')
}
function sendMail(){
    summer.UMTel.sendMail('wuxlr@yonyou.com','我是谁？','收到勿回');
    alert('发送成功')
}
function saveContact(){
    summer.UMTel.saveContact( {
        tel:"18210773633",//手机号码
        employeename:"鬼杀",//联系人名称
        jobname:"国务院总理",//职位
        orgname:"暗杀部",//部门名称
        address:"天通苑1号",//单位地址
        email:"1234@163.com",//邮箱
        officetel:"010-897657"//办公电话
    });
    alert('保存成功');
}