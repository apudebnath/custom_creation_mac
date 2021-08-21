
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const deliveryCharge = document.getElementById('delivery-charge');
const promoDiscount = document.getElementById('promo-input');


const total = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');
const totalPay = document.getElementById('total-pay');

// ===== Price management =====
function totalPrice(){
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraMemoryPrice = parseInt(extraMemory.innerText);
    const extraStoragePrice = parseInt(extraStorage.innerText);
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);
    let grandTotal = bestPriceTotal + extraMemoryPrice + extraStoragePrice + deliveryChargeValue;
    total.innerText = grandTotal;
    // return grandTotal;
}

// =====  Promo Code function  =====
function promoCodes(){
    if(promoDiscount.value.toLowerCase() == 'stevekaku'.toLowerCase()){
        const totalDiscount = Number((total.innerText * 20)/100);
        console.log(totalDiscount);
        const totalPayAmount = total.innerText-totalDiscount;
        totalPay.innerText = totalPayAmount;
    }
    promoDiscount.value = '';
}

// =====  Memory Event  =====
const memoryDefault = document.getElementById('memory-default').addEventListener('click', function(){
 extraMemory.innerText = "0";
 totalPrice()
})
const memoryPrice = document.getElementById('memory-price').addEventListener('click', function(){;
 extraMemory.innerText = "180";
 totalPrice()
})

// =====  Storage Event  =====
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

// =====  Delivery Charge  =====
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge.innerText = '0';
    totalPrice()
})
const DeliveryCost = document.getElementById('delivery-cost').addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    totalPrice()
})

// =====  Coupon Event  =====
const promoCode = document.getElementById('Pormo-code').addEventListener('click', function(){
    promoCodes();
    
})

