import React from "react";
import "./Home.css";
import img from "../images/back.png";

const Home = () => {
  return (
    <>
    <section id="intro" className="intro-background">
      <div className="sticky-top bg-white hidden-spacer"> </div>
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 order-md-2 text-center text-md-start">
            <h1>
              <div className="circular-background">
                <div className="display-6 bold-text">
                  Where Ideas Come to Life
                </div>
                <div className="display-4 bold-text">Welcome to Voltix</div>
              </div>
            </h1>
            
          </div>
          <div className="col-md-5 order-md-1 text-center d-none d-md-block">
            <img src={img} className="img-fluid" alt="ebook" />
          </div>
        </div>
      </div>
    </section>
     <section id="pricing" class="bg-light mt-5">
     <div class="container-lg">
       <div class="text-center">
         <h2>Pricing Plans</h2>
         <p class="lead text-muted">Choose a pricing plan to suit you.</p>
       </div>
 
       <div class="row my-5 g-0 align-items-center justify-content-center">
         <div class="col-8 col-lg-4 col-xl-3">
           <div class="card border-0">
             <div class="card-body text-center py-4">
               <h4 class="card-title">Starter Edition</h4>
               <p class="lead card-subtitle">eBook download only</p>
               <p class="display-5 my-4 text-primary fw-bold">$12.99</p>
               <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
               <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                 Buy Now
               </a>
             </div>
           </div>
         </div>
 
         <div class="col-9 col-lg-4">
           <div class="card border-primary border-2">
             <div class="card-header text-center text-primary">Most Popular</div>
             <div class="card-body text-center py-5">
               <h4 class="card-title">Complete Edition</h4>
               <p class="lead card-subtitle">eBook download & all updates</p>
               <p class="display-4 my-4 text-primary fw-bold">$18.99</p>
               <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
               <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                 Buy Now
               </a>
             </div>
           </div>
         </div>
 
         <div class="col-8 col-lg-4 col-xl-3">
           <div class="card border-0">
             <div class="card-body text-center py-4">
               <h4 class="card-title">Ultimate Edition</h4>
               <p class="lead card-subtitle">download, updates & extras</p>
               <p class="display-5 my-4 text-primary fw-bold">$24.99</p>
               <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
               <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                 Buy Now
               </a>
             </div>
           </div>
         </div>
       </div>
 
     </div>
   </section>

   </>
  );
};

export default Home;
