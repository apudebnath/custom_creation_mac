
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const deliveryCharge = document.getElementById('delivery-charge');
const promoDiscount = document.getElementById('promo-input');

// Price management 
const total = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');
const totalPay = document.getElementById('total-pay');

function totalPrice(){
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraMemoryPrice = parseInt(extraMemory.innerText);
    const extraStoragePrice = parseInt(extraStorage.innerText);
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    const grandTotal = bestPriceTotal + extraMemoryPrice + extraStoragePrice + deliveryChargeValue;
    total.innerText = grandTotal;
}

/* 
function promoCodes(){
    // totalPrice()
    promoDiscount.value = 'stevekaku';
    const promoInput = promoDiscount.value;
    console.log(promoInput);
    if(promoInput == 'stevekaku'){
        const totalDiscount = Number((total.innerText * 20)/100);
        const totalPayAmount = totalPrice()-totalDiscount;
        // totalPay.innerText = totalPayAmount;
         totalPay.innerText = totalPayAmount;
        // console.log(totalPayAmount);
    }
}
const discount = promoCodes();
console.log(discount);
 */
// Memory Event
const memoryDefault = document.getElementById('memory-default').addEventListener('click', function(){
 extraMemory.innerText = "0";
 totalPrice()
})
const memoryPrice = document.getElementById('memory-price').addEventListener('click', function(){;
 extraMemory.innerText = "180";
 totalPrice()
})
// Storage Event
const storageDefault = document.getElementById('default-storage').addEventListener('click', function(){
    extraStorage.innerText = '0';
    totalPrice()
})
const storage512Gb = document.getElementById('storage-512gb').addEventListener('click', function(){
    extraStorage.innerText = '100';
    totalPrice()

})
const storage1Tb = document.getElementById('storage-1tb').addEventListener('click', function(){
    extraStorage.innerText = '180';
    totalPrice()
})
// Delivery Charge
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge.innerText = '0';
    totalPrice()
})
const DeliveryCost = document.getElementById('delivery-cost').addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    totalPrice()
})
// Coupon Event
const promoCode = document.getElementById('Pormo-code').addEventListener('click', function(){
    promoCodes();
    
})
