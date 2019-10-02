//演示需要的json
//数据表的Excel文档的table表格里用的几个控件的json
var docExcelControlMeta={
    enName:{
        controlId:101,
        controlType:116,
        colName:"字段名称",
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段的名称",
        name:"enName",
        value:"",
        placeholder:"请输入字段名称",
        size:10,
        maxlength:10
     
    },
    cnName:{
        controlId:102,
        controlType:116,
        colName:"中文名称",
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段的中文名称",
        name:"cnName",
        value:"",
        placeholder:"请输入字段的中文名称",
        size:10,
        maxlength:10
    },
    type:{
        controlId:103,
        controlType:116,
        colName:"字段类型",
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段类型",
        disabled:false,
        readonly:false,
        name:"type",
        value:"",
        placeholder:"请选择字段类型",
        size:10,
        maxlength:10,
        listKey:"colType",
        list:[{"id":1,"name":"nvarchar"},{"id":2,"name":"varchar"},{"id":3,"name":"ntext"},{"id":4,"name":"text"},{"id":5,"name":"int"},{"id":6,"name":"datetime"},{"id":7,"name":"char"}]
    },
    size:{
        controlId:104,
        controlType:111,
        colName:"字段大小",
        isClear:false,
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段大小",
        disabled:false,
        readonly:false,
        name:"size",
        value:"1",
        min:1,
        max:8000,
        step:1
    },
    defaultValue:{
        controlId:105,
        controlType:116,
        colName:"默认值",
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段的默认值",
        name:"defaultValue",
        value:"",
        placeholder:"请输入字段的默认值",
        size:10,
        maxlength:100
    },
    isNull:{
        controlId:106,
        controlType:155,
        colName:"允许空",
        isClear:false,
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"允许空",
        disabled:false,
        required:true,
        name:"",
        listKey:"colType",
        list:[{"id":"true","name":"是"}]
    },
    command:{
        controlId:101,
        controlType:116,
        colName:"说明",
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"字段的说明",
        name:"cnName",
        value:"",
        placeholder:"请输入字段的说明",
        size:10,
        maxlength:100
    },
    ctlType:{
        controlId:101,
        controlType:150,
        colName:"控件类型",
        isClear:false,
        tabIndex:1,
        class:"cssTxt input_t1",
        title:"控件类型",
        disabled:false,
        required:true,
        name:"",
        listKey:"ctlType",
        list:[{"id":1,"name":"true"}]
    } 
};

//数据库文档的模拟数据
var dataDocInfo = [
    {
        enName:"name",
        cnName:"姓名",
        type:"nvarchar",
        size:10,
        defaultValue:"",
        isNull:false,
        command:"员工姓名",
        ctlType:116
    },
    {
        enName:"age",
        cnName:"年龄",
        type:"int",
        size:4,
        defaultValue:"18",
        isNull:false,
        command:"年龄",
        ctlType:111
    },
    {
        enName:"borthday",
        cnName:"出生日期",
        type:"datetime",
        size:10,
        defaultValue:"1980-01-01",
        isNull:false,
        command:"出生日期",
        ctlType:103
    },
    { enName:"MobilePhone",cnName:"手机号",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"手机号",ctlType:112},
    { enName:"WeChat",cnName:"微信",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"微信",ctlType:116},
    { enName:"QQ",cnName:"QQ",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"QQ",ctlType:111},
    { enName:"Nation",cnName:"民族",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"民族",ctlType:116},
    { enName:"Education",cnName:"学历",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"学历",ctlType:116},
    { enName:"Marriage",cnName:"婚否",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"婚否",ctlType:116},
    { enName:"College",cnName:"毕业院校",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"毕业院校",ctlType:116},
    { enName:"Specialized",cnName:"所学专业",type:"nvarchar",size:20,defaultValue:"",isNull:false,command:"所学专业",ctlType:116}

    
];