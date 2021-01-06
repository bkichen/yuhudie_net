//var name = "somoveLanguage";
var name =$("#ddlSomoveLanguage").children('option:selected').val();

$(function() {
	var Request = new UrlSearch();
	
	if(Request.lang!= ""){
		if(Request.lang == "zh-cn") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "zh"
			});
			
		}else if(Request.lang == "en") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "en"
				
			});
			

		}else if(Request.lang == "cs") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "cs"
			});
			

		}else if(Request.lang == "de") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "de"
			});
			

		}else if(Request.lang == "es-ar") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "es"
			});
			
		}else if(Request.lang == "fr") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "fr"
			});
			
		}else if(Request.lang == "it") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "it"
			});
			

		}else if(Request.lang == "ja") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ja"
			});
			
		}else if(Request.lang == "ko") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ko"
			});
			
		}else if(Request.lang == "nl") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "nl"
			});
			

		}else if(Request.lang == "pl") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "pl"
			});
			

		}else if(Request.lang == "pt") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "pt"
			});
			
		}else if(Request.lang == "ro") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ro"
			});

		}else if(Request.lang == "ru") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ru"
			});

		}else if(Request.lang == "th") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "th"
			});

		}else if(Request.lang == "tr") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "tr"
			});

		}else if(Request.lang == "uk") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "uk"
			});

		}else if(Request.lang == "tw") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "tw"
			});

		}else{
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "zh"
			});
		}
		$("#ddlSomoveLanguage").find("option[value='"+Request.lang+"']").attr("selected",true);
	}
	
});







function chgLang(event) {
	var value = $("#ddlSomoveLanguage").children('option:selected').val();
	SetCookie(name, value);
	if(getCookie(name) != "") {
		if(getCookie(name) == "zh-cn") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "zh"
			});
			
		
		}else if(getCookie(name) == "en") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "en"
			});
			

		}else if(getCookie(name) == "cs") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "cs"
			});
			

		}else if(getCookie(name) == "de") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "de"
			});
			

		}else if(getCookie(name) == "es-ar") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "es"
			});
			
		}else if(getCookie(name) == "fr") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "fr"
			});
			
		}else if(getCookie(name) == "it") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "it"
			});
			

		}else if(getCookie(name) == "ja") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ja"
			});
			
		}else if(getCookie(name) == "ko") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ko"
			});
			
		}else if(getCookie(name) == "nl") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "nl"
			});
			

		}else if(getCookie(name) == "pl") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "pl"
			});
			

		}else if(getCookie(name) == "pt") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "pt"
			});
			
		}else if(getCookie(name) == "ro") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ro"
			});

		}else if(getCookie(name) == "ru") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "ru"
			});

		}else if(getCookie(name) == "th") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "th"
			});

		}else if(getCookie(name) == "tr") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "tr"
			});

		}else if(getCookie(name) == "uk") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "uk"
			});

		}else if(getCookie(name) == "tw") {
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "tw"
			});

		}else{
			//默认语言为中文
			$("[data-localize]").localize("text", {
				pathPrefix: "/api/lang",
				language: "zh"
			});
			
		}
		location.replace("https://api.virscan.org/api/api.html?lang="+getCookie(name));
		$("#ddlSomoveLanguage").find("option[value='"+getCookie(name)+"']").attr("selected",true);

	}
	
	//location.reload();
	
	
}
//js获取地址传参
function UrlSearch() 
{

   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?") 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
    if(num>0){ 
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     } 
   } 
} 

function SetCookie(name, value) {

	var Days = 30; //此 cookie 将被保存 30 天
	var exp = new Date(); //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ';';
}

function getCookie(name) { //取cookies函数   
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]);
	return null;
}


