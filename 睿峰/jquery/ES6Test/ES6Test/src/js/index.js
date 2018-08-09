$(function(){
    //箭头函数
    let sayhello = (name='Petter')=> {
        console.log(`hello ${name}`);
    }

    sayhello('喵');
    sayhello();

    let sun = (a,b)=>{
        console.log(a+b);
    }
    sun(4,5);

    let total = (...nums)=>{
        /*
            ...nums:rest参数
            存储所有调用时传递的参数
            其类型为数组
        */
        let res = 0;
        nums.forEach(num =>{
            res += num;
        })
        return res;
    }

    console.log(total(1,2,3,4,5,6,78,9))


    let numbers = [1,2,3,4,56,78,94,5,4];
    console.log(`最大值：${Math.max(...numbers)}    最小值：${Math.min(...numbers)}`);
})