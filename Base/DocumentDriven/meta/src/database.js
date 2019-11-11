//建表相关

var dataBaseApp = new Vue({
    el:"#dataBaseApp",
    data:{
        colCreate:{  //unsigned zerofill
            tinyint:" tinyint(4) NOT NULL DEFAULT '{default}' COMMENT '{comment}' ",
            int:" int(11) NOT NULL DEFAULT '{default}' COMMENT '{comment}' ",
            bit:" bit(1)  NOT NULL DEFAULT b'{default}' COMMENT '{comment}' ",
            double:" double{szie} NOT NULL DEFAULT '{default}' COMMENT '{comment}' ",
            float:" float{szie}  NOT NULL DEFAULT '{default}' COMMENT '{comment}' ",
            decimal:"decimal{szie} NOT NULL  DEFAULT '{default}'  COMMENT '{comment}'",
            
            varchar:" varchar({szie}) NOT NULL DEFAULT '{default}'  COMMENT '{comment}' ",
            char:" char({szie}) NOT NULL  DEFAULT '{default}'  COMMENT '{comment}'",
            nvarchar:" varchar({szie}) NOT NULL DEFAULT '{default}'  COMMENT '{comment}' ",
            nchar:" char({szie}) NOT NULL  DEFAULT '{default}'  COMMENT '{comment}'",
            date:" date  NOT NULL COMMENT '{comment}'" ,
            time:" time  NOT NULL COMMENT '{comment}'",
            year:" year(4) DEFAULT  NOT NULL COMMENT '{comment}'",
            timestamp:" timestamp  NOT NULL COMMENT '{comment}'",
            timestampi:" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '{comment}'",
            timestampu:" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '{comment}'",
            datetime:" datetime  NOT NULL COMMENT '{comment}'",
            text:" text CHARACTER SET utf8 COLLATE utf8_croatian_ci COMMENT '{comment}'",
            ntext:" text CHARACTER SET utf8 COLLATE utf8_croatian_ci COMMENT '{comment}'" 
             
        },
        excel:{
            sheets:[{
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
            }],
            
        },

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

    }

});
