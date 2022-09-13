import React from 'react'
import "./footer.css";


function Footer() {
  return (
    <div>
 <footer class="container-fluid">
        <div class="row flex">
            <div class="  Footer columns-md ml-3 ">
                <h6>ABOUT</h6>
                <div >
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Flipkart Stories</a>
                    <a href="#">Press</a>
                    <a href="#">Flipkart</a>
                    <a href="#">Wholesale</a>
                </div>
            </div>
            <div class="w-1/6 ml-6 Footer">
                <h6>HELP</h6>
                <div>
                    <a href="#">Payments</a>
                    <a href="#">Shipping</a>
                    <a href="#">Cancellation & Returns</a>
                    <a href="#">FAQ</a>
                    <a href="#">Report</a>
                    <a href="#">Infringement</a>
                </div>
            </div>
            <div class="w-1/6 Footer">
                <h6>POLICY</h6>
                <div>
                    <a href="#">Return Policy</a>
                    <a href="#">Term of Use</a>
                    <a href="#">Security</a>
                    <a href="#">Privacy</a>
                    <a href="#">Sitemap</a>
                    <a href="#">EPR Compliance</a>
                </div>
            </div>
            <div class="w-1/6 Footer">
                <h6>SOCIAL</h6>
                <div>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">You Tube</a>
                </div>
            </div>
            <div class="w-1/6 Footer border-l border-gray-600">
                <h6 class="ml-1">Mail Us:</h6>
                <div class="ml-1">
                    <p>Flipkart Internet Private Limited,</p>
                    <p>Buildings Alyssa, Begonia &</p>
                    <p>Clove Embassy Tech Village,</p>
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p>Bengaluru, 560103,</p>
                    <p>Karnataka, India</p>
                </div>
            </div>
            <div class="w-1/6 ml-3 Footer">
                <h6>Registered Office Address:</h6>
                <div>
                    <p>Flipkart Internet Private Limited,</p>
                    <p>Buildings Alyssa, Begonia &</p>
                    <p>Clove Embassy Tech Village,</p>
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p>Bengaluru, 560103,</p>
                    <p>Karnataka, India</p>
                    <p>CIN : U51109KA2012PTC066107</p>
                    <p>Telephone: <a href="#" class="text-blue-600">044-45614700</a></p>
                </div>
            </div>
        </div>
         
        <div class="row border-t mt-5 py-3 border-white">
            <div class="w-1/6">
                <i class="fa fa-briefcase border-amber-300"></i>
                <span>Sell On Flipkart</span>
            </div>
            <div class="w-1/6">
                <i class="fab fa-stumbleupon-circle border-amber-300"></i>
                <span>Advertise</span>
            </div>
            <div class="w-1/6">
                <i class="fa fa-gift border-amber-300"></i>
                <span>Gift Cards</span>
            </div>
            <div class="w-1/6">
                <i class="fa fa-question-circle border-amber-300"></i>
                <span>Help Center</span>
            </div>
            <div class="w-1/6 md:w-1/5 pr-4 pl-4 csm:w-1/2">
                <span>&copy; 2007-2022 Flipkart.com</span>
            </div>
            <div class="w-1/6 md:w-2/5 pr-4 pl-4 sm:w-1/2 ">
                <img class="img-fluid" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"/>
            </div>
        </div>

    </footer>




    </div>
    
  )
}

export default Footer

