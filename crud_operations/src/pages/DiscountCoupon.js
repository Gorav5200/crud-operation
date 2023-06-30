import React from 'react'
 import "../StyleSheets/Discount.css"
import Header from '../Components/Header'
function DiscountCoupon() {
  return (
    <>
    <Header/>
    <div className="">
	<div className="container-fluid mt-5">
		<div className="row justify-content-center">
			<div className="col-lg-9 px-0">
				<div className="container-fluid rounded-0 border-0 mt-4">
					<div className="row">
						<div className="col-md-4 bg-black">
							<div className="card rounded-0 border-0 card1">
								<div className="row justify-content-center">
									<div className="col-md-12 col-10">
										<h2 id="summer">summer</h2>
									</div>
									<div className="col-md-12 col-10">
										<h2 id="sale">sale</h2>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-md-12 col-10">
										<h2 id="saveupto">save up to</h2>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-11">
										<div className="row justify-content-left">
											<div className="col-md-6 col-6 text-right">
												<h2 id="thirty" className="">30</h2>
											</div>
											<div className="col-1 px-0"></div>
											<div className="col-4 text-left">
												<div className="row d-flex">
													<p id="percent">%</p>
												</div>
												<div className="row d-flex">
													<p id="off">OFF</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row justify-content-center">
									<p id="instore">in stores & online</p>
								</div>
							</div>
						</div>
						<div className="col-md-8 bg-white">
							<form className="">
								<div className="card rounded-0 border-0 card2">
									<div className="row justify-content-center">
										<div className="col-11">
											<h4 className="subhead1 text-center">enter your email below to unlock</h4>
										</div>
									</div>
									<div className="row justify-content-center">
										<div className="col-11">
											<h3 className="subhead2 text-center">where should we send your 30% off?</h3>
										</div>
									</div>

									<div className="row justify-content-center">
										<div className="col-md-10 col-11">
											<div className="form-group row">
						                        <div className="col-md-12">
						                        	<input id="email" type="email" placeholder="Email your email here" className="form-control input-box rm-border"/>
						                        </div>
						                    </div>
						                    <div className="form-group row">
						                      	<div className="col-md-12">
													<input type="submit" value="GET MY $10 OFF" className="btn btn-red rm-border btn-block"/>
												</div>
						                    </div>
								            <div className="form-group row justify-content-center mb-0">       
								                <div className="col-md-12 px-3 mt-4">
								                  	<a href="#"><p className="thanks">no thanks</p></a>
								                </div>
								            </div>

								            <div className="form-group row justify-content-center mb-0">       
								                <div className="col-md-10 px-3">
								                  	<p className="conditions">First time registereants only. *$10 off on $25+ orders, and entering your email also makes you eligible to receive future promotional emails.</p>
								                </div>
								            </div>
						                </div>
					                </div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
  )
}

export default DiscountCoupon