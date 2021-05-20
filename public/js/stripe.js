var stripe = Stripe('pk_test_51Iqv57SDn5dqFBjLIUR7JiZXxWUGEhgi1mFkb6afeyLyLeiC0iGHw70LAumkWP9Tpx1bvsubZrhpxgZrmNUWTDj000hfLst3ZA')
var orderBtn = document.getElementById('order-btn')
orderBtn.addEventListener('click', function(){
    stripe.redirectToCheckout({
        sessionId: 'sessionId'
    })
})