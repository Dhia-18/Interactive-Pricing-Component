const rangeInput = document.querySelector("input[type=range]");
const pageviews = document.getElementById("pageviews");
const price = document.getElementById("price");

const period = document.getElementById("period");
const periodInput = document.querySelector("input[type=checkbox]");

const submitButton = document.querySelector("button[type=submit]");

function calculatePrice(value){
    let price;
    if(period.textContent==="month"){
        price=(32/100)*value;
    }
    else{
        price=(288/100)*value;
    }

    return(price.toFixed(2));
}

function calculatePageview(value){
    return((200/100)*value);
}

function changePageViewAndPrice(){
    pageviews.textContent=`${calculatePageview(rangeInput.value)}K`;
    price.textContent=`$${calculatePrice(rangeInput.value)}`;
}

periodInput.addEventListener("click",()=>{
    if(periodInput.checked){
        period.textContent="year";
    }
    else{
        period.textContent="month";
    }
    changePageViewAndPrice();
});

rangeInput.addEventListener("input",()=>{
    rangeInput.style.background = `linear-gradient(to right, var(--soft-cyan) ${rangeInput.value}%, var(--light-grayish-blue-1) ${rangeInput.value}%)`;

    changePageViewAndPrice();
});

submitButton.addEventListener("click",()=>{
    alert("Congratulations!");
});