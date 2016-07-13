
       function myFunction(ele,condition) {
            var x = ele;
            var a;
            for (a = 0; a < x.length; a++){
                if(x[a].nodeName == condition){
                  return x[a]; 
                }
            }      
           return false;
       }   

      function changeArrow(ele){
        
        var nextchildele = ele.childNodes;
        var parentele = ele.parentElement;
        var nextele = parentele.nextSibling;
        console.log(nextchildele);  

        var i = 1;
        var eleNow;
        while (nextele) {
          console.log(i + '. ' + nextele.nodeName);
          if(nextele.nodeName == 'DIV'){
            eleNow = nextele;
            if(hasClass(eleNow, 'in') === true){
                
                var res = myFunction(nextchildele,'H4');
                var nextnextele = res.childNodes;
                var res = myFunction(nextnextele,'SPAN');
                
                res.classList.remove("glyphicon-triangle-right-cust");
                res.classList.add("glyphicon-triangle-bottom");
            } else{
                var res = myFunction(nextchildele,'H4');
                var nextnextele = res.childNodes;
                var res = myFunction(nextnextele,'SPAN');
                
                res.classList.remove("glyphicon-triangle-bottom");
                res.classList.add("glyphicon-triangle-right-cust");
            }
          }
          nextele = nextele.nextSibling;
          i++;
        } 

 
      
return;
        

      }

      function hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
      }

