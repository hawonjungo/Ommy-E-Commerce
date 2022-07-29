import StripeCheckout from 'react-stripe-checkout'

const KEY ="pk_test_51LQXSvD8KIIHglPMBaltiK0QMR9dTnUIid6Bm45opKDVZZDXPzXqL60BsBQS6dswIggqioI1amBAJMGXkzqIraYI00geMEdGfN"

const Pay = () =>{

    const onToken = (token)=>{
        
    }
    return(
    <div
        style ={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
    >
        <StripeCheckout name="Ommy Shop" 
                        image=""
                        billingAddress
                        shippingAddress
                        description="Your total is $20"
                        amount={2000}
                        token={onToken}
                        stripeKey={KEY}
        >
         
        <button
            style={{
                border:"none",
                width:120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"
            }}
        >
            Pay Now
        </button>           
        </StripeCheckout>
    </div>
    )
}

export default Pay;