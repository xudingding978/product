

<link rel="stylesheet" type="text/css" href="styles/shopping_cart.css">

<body>
    <div id="sc_cart" class="scCart" style="width: 100%">
        <select class="scProductSelect" id="product_list" name="product_list[]" style="display:none;" multiple="multiple">
        </select>               
        <div class="scCartListHead">
            <table width="100%"><tbody><tr>
                        <td>&nbsp;&nbsp;Directory</td>
                        <td width="80px">Year</td>
                        <td width="80px">Package</td>
                        <td width="140px">Amount ($)</td>
                    </tr></tbody></table>
        </div>
        <!-- Cart List: Selected Products are listed inside div below -->
        <div id="checkoutcart" class="scCartList"></div>

        <div class="scCartListHead">
            <table width="100%"><tbody><tr>
                        <td>
                            <!-- Message Label -->
                            <span id="sc_message"></span></td>
                        <td width="100px">Subtotal (<span id="curruncyid"> $ </span>):</td>
                        <td width="100px"  align='right'>

                            <span id="tot_amount">0.00</span>
                        </td>
                        <td width='75px' align='left'></td>
                    </tr></tbody></table>
        </div>
        <br/>  
        <form name="shoppingcartform" id="cartform" action="/dashboard/checkout_processing.php" method="post" onSubmit="return checkout()">  
            <input type="hidden" value="" id="checkout_total_amount" name="total_amount"/>
            <input type="hidden" value="" id="checkout_client_cart" name="client_cart"/>
            <input type="hidden" value="" id="checkout_curruncy_code" name="curruncy_code"/> 
            <input type="hidden" value="" id="checkout_email" name="email"/> 

        </form>
        <!-- light and mini
        <form action="https://paypal.com/webapps/adaptivepayment/flow/pay" target="PPDGFrame" onSubmit="ontalk()">
            <input id="type" type="hidden" name="expType" value="light">
            <input id="paykey" type="hidden" name="payKey" value="">
            <input type="submit" id="submitBtn" value="Test">
        </form>-->

    </div>

    <script type="text/javascript" charset="utf-8">
//        function ontalk(){
//            $('#checkout_client_cart').val(localStorage.clientcart);
//            $('#checkout_total_amount').val(localStorage.totalamount);
//            $('#checkout_curruncy_code').val(localStorage.curruncyid);
//            $('#checkout_email').val(localStorage.email);
//                        
//            //alert(emailaddress);
//            //alert(localStorage.totalamount);
//            //document.forms["shoppingcartform"].submit();    
//            $.ajax({
//                url: '/dashboard/payKeyGenerator.php',
//                type: 'POST',
//                data: "",
//                async: false,
//                success: function(response) {                               
//                    if($.trim(response)=="FAIL"){                                                    
//                        alert("Fail:"+response);
//                    }else{                                    
//                        $('#paykey').val(response);
//                        console.log("--------------");
//                        console.log(response);
//                                    
//                        //document.getElementById("submitBtn").click();
//                        // alert("Key:"+response); 
//                    }
//                }
//            });
//                        
//                        
////                        
////        }
//        var embeddedPPFlow = new PAYPAL.apps.DGFlow({trigger: 'submitBtn'});
//        function get_full_url(url_path)
//        {
//            var loc = window.location;
//            var url = '' + loc.protocol + '//' + loc.host + url_path;
//            return url;
//        }
//        function MyEmbeddedFlow(embeddedFlow) {
//            this.embeddedPPObj = embeddedFlow;
//            this.paymentSuccess = function () {
//                this.embeddedPPObj.closeFlow();
//                // handle payment success here
//                //  - redirect to a success page (or)
//                //  - show another div confirming the payment (or)
//                //  - display a popup confirming the payment
//                // NOTE: the line below redirects to a success page
//                //alert(get_full_url('/registration.php'));
//                // window.location.href = get_full_url('/registration.php');
//            };
//            this.paymentCanceled = function () {
//                this.embeddedPPObj.closeFlow();
//                // handle payment cancellation here
//                //  - redirect to a cancel page (or)
//                //  - show another div messaging that payment was canceled (or)
//                //  - display a popup to retry payment again
//                // NOTE: the line below redirects to a cancellation page
//                //  alert(get_full_url('/registration.php'));
//                // window.location.href = get_full_url('/registration.php');
//            };
//        }
//        var myEmbeddedPaymentFlow = new MyEmbeddedFlow(embeddedPPFlow);
//        function handleEmbeddedFlow() {
//            if (top && top.opener && top.opener.top) {
//                top.opener.top.dgFlow.paymentSuccess();
//                window.close();f
//            } else if (top.myEmbeddedPaymentFlow) {
//                top.myEmbeddedPaymentFlow.paymentSuccess();
//            } else {
//                alert('Please close the window and reload to continue');
//            }
//        }
//        function handleEmbeddedFlow() {
//      
//            if (top && top.opener && top.opener.top) {
//                top.opener.top.myEmbeddedPaymentFlow.paymentCanceled();
//                window.close();
//            } else if (top.myEmbeddedPaymentFlow) {
//                top.myEmbeddedPaymentFlow.paymentCanceled();
//            } else {
//                alert('Please close the window and reload to continue');
//            }
//        }
//        setTimeout(handleEmbeddedFlow,200);
    </script>