//表格列表

//建表相关

Vue.component('my-grid-view', {
    props:["value","meta"],
    data:function(){
        return {
            table:{  //用于生成建表语句的json
                tableId:100,
                tableName:"",
                tableCnName:"",
                cols:[{
                    colID:100010,
                    enName:"",
                    cnName:"",
                    type:"",
                    size:10,
                    defauleValue:"",
                    isNull:false
                }]
            },
        }
        
    },
    created: function () {
        //加载数据
        //this.about = this.abouts["a1"];
    },
    computed:{
        
    },
    methods: {
        colSql:function(col){
            var type = col.type;
            var tmpSize = col.size;
            if (col.type.indexOf("decimal") >-1 ) {
                tmpSize = type.replace("decimal","");
                type = "decimal";
            }
            
            var defVal = col.defauleValue;
            if (typeof(defVal) == "undefined")
                defVal = "";

            var info = this.colCreate[type];
            if (col.enName == "AddTime")
                info = this.colCreate.timestampi;
            else if  (col.enName == "UpdateTime")
                info = this.colCreate.timestampu;

            if (col.isNull) info = info.replace(" NOT "," ");
            
            info = info.replace("{default}",defVal)
                       .replace("{comment}","")  //乱码怎么破？col.comment
                       .replace("{szie}",tmpSize);
            return info;
        },
        showTables:function(sheetName){
            //显示sheets里的表
            this.show.tableInfo = [];

            for (var key in this.excels.tables){
                var t =  this.excels.tables[key];
                if (t.sheetName == sheetName)
                    this.show.tableInfo.push(t);
            }
        },
        showCols:function(code){
            //显示表
            this.show.tableName = this.excels.tables[code].enName;
            this.show.cols = this.excels.tables[code].columns;

            this.show.colIdName = this.excels.tables[code].columns[code+"010"].enName;

        },
        showAbout:function(key){
            //this.about = this.abouts[key];
        }

    },
    template: `
    <table id="grid" rules="all" class="table_default1" style="width: 1039px; float: left;">
            <tbody>
                <tr id="tr0" class="first" myclass="first">
                    <th style="text-align:center;" width="40px">
                        <input type="checkbox" id="chk_0_undefined" name="n{ID}"></th>
                    <th width="50px">模块ID</th><th width="150px">模块名称</th><th>链接地址</th>
                    <th width="160px">数据列表视图ID</th><th width="160px">查询控件视图ID</th>
                    <th width="50px">是否隐藏</th><th width="50px">是否锁定</th>
                    <th width="40px">排序</th>
                </tr>
                <tr id="tr-10" index="0" class="alt" myclass="alt">
                    <td id="tdCheck" style="text-align:center;"> 
                        <input type="checkbox" id="chk_undefined_-10" name="nundefined"> 
                        </td>
                    <td id="td1000010" style="text-align:left;" width="50px">-10</td>
                    <td id="td1000060" style="text-align:left;" width="150px">系统管理　118</td>
                    <td id="td1000090" style="text-align:left;">#</td>
                    <td id="td1000113" style="text-align:left;" width="160px">0</td>
                    <td id="td1000115" style="text-align:left;" width="160px">0</td>
                    <td id="td1000120" style="text-align:left;" width="50px">否</td>
                    <td id="td1000130" style="text-align:left;" width="50px">false</td>
                    <td id="td1000140" style="text-align:left;" width="40px">10000</td>
                </tr>
            </tbody>
        </table>    `

});
