var Database = require('jt400');
var database = new Database();

//query reading with express
var query = require('./MappixQuery.js');
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//csv reading
var http = require('http');
var csv = require('csv');
var obj = csv();


// Database reading

var config = {
	libpath: __dirname + '/jt400.jar',
	drivername: 'com.ibm.as400.access.AS400JDBCDriver',
	url: 'jdbc:as400://10.10.60.82:8471/APG;translate binary=true;user=APIGEE;password=APIGEE_BE'
};

database.initialize(config);

var MAPICS_PARTAZURE_QUERY = query.MAPICS_PARTAZURE_QUERY();
var r1 = 'In the function';


// query reading
app.get('/MAPICS_PARTAZURE_QUERY', function (req, res) { 

   console.log(r1);
   database.execute(MAPICS_PARTAZURE_QUERY);

   database.on('execute', function(error, results) {
	if(error) {
		console.log(error);	
	} else {
		console.log(results);
		res.json("Data pringitngsdf;a;  ",results);
	} 
   });

})




// csv Reading

var array = [];

function MyCSV(F1, F2, F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,F19,F20,F21,F22,F23,F24,F25,F26,F27,F28,F29,F30,F31,F32,F33,F34,F35,F36,F37,F38,F39,F40,F41,F42,F43,F44,F45,F46,F47,F48,F49,F50,F51,F52,F53,F54,F55,F56,F57,F58,F59,F60,F61,F62,F63,F64,F65,F66) {
    this.ERP     	 		            = F1;
    this.Enterprise_Code                	    = F2;
    this.Site_Name	 			    = F3;
    this.Supplier_ID	 			    = F4;
    this.Customer_Item_ID			    = F5;
    this.Customer_Item_Description		    = F6;
    this.Supplier_Item_ID 			    = F7;
    this.Supplier_Item_Description		    = F8;
    this.Global_Customer_ID 			    = F9;
    this.Global_Supplier_ID 			    = F10;
    this.Global_Item_ID 			    = F11;
    this.EOL_Guidance  				    = F12;
    this.Purchasing_Group			    = F13;
    this.Commodity_Code 			    = F14;
    this.Classification_Code			    = F15;
    this.Unit_price 				    = F16;
    this.Price_basic 				    = F17;
    this.Currency	 			    = F18;
    this.UOM_PO 				    = F19;
    this.Critical_Item 				    = F20;
    this.Lead_Time_Days 			    = F21;
    this.Forecast_Grace_Period			    = F22;
    this.Blanket_Expiry_Tolerance		    = F23;
    this.Order_Grace_Period	    		    = F24;
    this.Request_Promise_Date_Tolerance 	    = F25;
    this.Commit_Quantity_Tolerance_Min  	    = F26;
    this.Commit_Quantity_Tolerance_Max 	            = F27;
    this.Min_DOS 		        	    = F28;
    this.Max_DOS 		        	    = F29;
    this.Target_Dos 		        	    = F30;
    this.Min_Tolerance_Request_Promise_Quantity     = F31;
    this.Max_Tolerance_Request_Promise_Quantity     = F32;
    this.Min_Tolerance_Request_Shipped_Quantity     = F33;
    this.Max_Tolerance_Request_Shipped_Quantity     = F34;
    this.Min_Tolerance_Request_Received_Quantity    = F35;
    this.Max_Tolerance_Request_Received_Quantity    = F36;
    this.Min_Tolerance_Request_Invoiced_Quantity    = F37;
    this.Max_Tolerance_Request_Invoiced_Quantity    = F38;
    this.Min_Tolerance_Received_Invoiced_Quantity   = F39;
    this.Max_Tolerance_Received_Invoiced_Quantity   = F40;
    this.Min_Tolerance_Invoice_Price_Mismatch 	    = F41;
    this.Max_Tolerance_Invoice_Price_Mismatch       = F42;
    this.Late_Shipments_Tolerance                   = F43;
    this.Late_Deliveries_Tolerance                  = F44;
    this.Customer_MOQ                               = F45;
    this.Supplier_Shipment_Size                     = F46;
    this.Item_Hierarchy_Level_1                     = F47;
    this.Item_Hierarchy_Level_2                     = F48;
    this.Item_Hierarchy_Level_3                     = F49;
    this.Item_Hierarchy_Level_4                     = F50;
    this.Item_Hierarchy_Level_5                     = F51;
    this.Planning_Bucket_Type                       = F52;
    this.Product_Line_Cell                          = F53;
    this.Planning_Buckets         	            = F54;
    this.Serial_Number_Flag                         = F55;
    this.Old_Part_Number                            = F56;
    this.Material_Type                  	    = F57;
    this.Material_Group                 	    = F58;
    this.Bulk_Item_Flag                 	    = F59;
    this.Flex_String_Collab_04                      = F60;
    this.Flex_String_Collab_05                      = F61;
    this.Block_Shipments                            = F62;
    this.Early_Shipment_Tolerance                   = F63;
    this.Over_Shipment_Tolerance                    = F64;
    this.Price_Mismatch_Tolerance_Min               = F65;
    this.Price_Mismatch_Tolerance_Max               = F66;


}; 

// Array storiing the value of csv file
var MyData = []; 

// Reading the csv file

var count = 0;
obj.from.path('../MacPac-data-layer/config-file-part.csv').to.array(function (data) {
console.log(data.length);
    for (var index = 0; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4], data[index][5], data[index][6], data[index][7], data[index][8], data[index][9], data[index][10], data[index][11], data[index][12], data[index][13], data[index][14], data[index][15], data[index][16], data[index][17], data[index][18], data[index][19], data[index][20], data[index][21], data[index][22], data[index][23], data[index][24], data[index][25], data[index][26], data[index][27], data[index][28], data[index][29], data[index][30], data[index][31], data[index][32], data[index][33], data[index][34], data[index][35], data[index][36], data[index][37], data[index][38], data[index][39], data[index][40], data[index][41], data[index][42], data[index][43], data[index][44], data[index][45], data[index][46], data[index][47], data[index][48], data[index][49], data[index][50], data[index][51], data[index][52], data[index][53], data[index][54], data[index][55], data[index][56], data[index][57], data[index][58], data[index][59], data[index][60], data[index][61], data[index][62], data[index][63], data[index][64], data[index][65]));
console.log(MyData);
    }
	
});


var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(MyData));
});
var Converter = require("csvtojson").Converter;
var fs=require("fs"); 
var csvFileName="../MacPac-data-layer/config-file-part.csv";
var csvConverter=new Converter({});

csvConverter.on("end_parsed",function(jsonObj){
    console.log(jsonObj); //here is your result json object
});
fs.createReadStream(csvFileName).pipe(csvConverter);

server.listen(8080);

app.listen(8081);
console.log("Test");



























