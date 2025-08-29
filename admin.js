function abcd(){
    const num=Number(document.getElementById("nod").value);
    var result=document.getElementById("res");
    var img=document.getElementById("img");
    const values=[];
    const images=[];
    for(let i=0;i<num;i++){
        const value = Math.floor(Math.random()*num+1)
        values.push(value);
        images.push(`<img src="${value}.png">`)
        result.textContent=`Dice ${values.join(",")}`;
        img.innerHTML=images.join("");


    }
}