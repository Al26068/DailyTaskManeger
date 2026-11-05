type Means ="Onfoot" | "Luup" | "Bicycle" ;

type CommuteRecord ={
    date: string;
    approach: Means;
    time: string;
}


const bicyclebutton = document.getElementById("Bicycle");

bicyclebutton?.addEventListener("click", ()=> {
    //今日の日時を取り出す
    const now =new Date();
    //年を取り出す
    const year = now.getFullYear();
    //月を取り出す(+1して0うめ)
    const month = now.getMonth()+1;
    const zeromonth =String(month).padStart(2,"0");
    //日を取り出す
    const date = now.getDate();
    const zerodate =String(date).padStart(2,"0");
    //つなげて2026-11-06にする
    const fulldate =`${year}-${zeromonth}-${zerodate}` ;
    console.log(fulldate);
    //
})

