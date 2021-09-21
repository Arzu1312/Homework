import React from 'react';


function Work() {
    return (
        <div className="work">
            <div className="container">
               <div className="row">
                    <div className="col-12">
                        <div className="intro m-0">
                            <div className="intro-content">
                                <span className="storm">HOW IT WORKS</span>
                                <h3 className="mt-3 mb-0">Create and sell your NFTs</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row items">
                    <div className="col-12 col-sm-6 col-lg-3 item">
                        <div className="single-work">
                        <i class="fas fa-wallet"></i>
                        <h4>Set up your wallet</h4>
                        <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 item">
                        <div className="single-work">
                        <i class="fas fa-th-large"></i>
                        <h4>Create your collection</h4>
                        <p>Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 item">
                        <div className="single-work">
                        <i class="fas fa-inbox"></i>
                        <h4>Add your NFTs</h4>
                        <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 item">
                        <div className="single-work">
                        <i class="fas fa-shopping-bag"></i>
                        <h4>List them for sale</h4>
                        <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
