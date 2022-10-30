text='星期一,第11-12节(第10周)'

let jie=function(target) {
    for(i in target) {
        if(text[i] == '节'){
            return i
        }
    }
}
// 取出节次-结束节次
Sections=text.slice(5,jie(text));
console.log(Sections);
up_class=['8.00','8.45','9.45','10.30','11.20','14.00','14.45','15.45','16.30','19.00','19.45','20.35','21.20']
off_class=['8.40','9.25','10.25','11.10','11.50','14.40','15.25','16.25','17.10','19.40','20.25','21.15','22.00']


partition=Sections.split('-')
start_time=up_class[Number(partition[0])-1]
end_time=off_class[Number(partition[1])-1]

