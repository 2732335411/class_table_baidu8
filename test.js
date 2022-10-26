// table=[{"XQJ":4,"JSZ":14,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":14,"time":"星期四,第3-4节(第14周)","addr":"文体馆"},{"XQJ":4,"JSZ":15,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":15,"time":"星期四,第3-4节(第15周)","addr":"文体馆"},{"XQJ":4,"JSZ":18,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":18,"time":"星期四,第3-4节(第18周)","addr":"文体馆"}]
arr=[{"XQJ":4,"JSZ":18,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":18,"time":"星期四,第3-4节(第18周)","addr":"文体馆"},{"XQJ":4,"JSZ":18,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":16,"time":"星期四,第3-4节(第18周)","addr":"文体馆"}]
arr1={"XQJ":4,"JSZ":18,"teacher":"阮开俊","name":"体育Ⅰ","QSZ":18,"time":"星期四,第3-4节(第18周)","addr":"文体馆"}






let check=function(check_arr,check_arr2){
    res=true;
    for(i in check_arr){
        if (check_arr[i]!=check_arr2[i]) {
            res=false

    }}
    return res


}

for(i of arr){
    if(check(i,arr1)==true){
        console.log('存在');
        break
    }
}