const ApexLSTwo = () => {
    return (
        <section id="learn" className="bg-secondary text-light p-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
            
            <div className="col-md">
                <img src={require("../images/GunsForSale.avif")} className="img-fluid" alt=""/>
            </div>
        
            <div className="col-md">
                <h2>Build Of The Season</h2>
                <p>
                <h3>Flatline & Eva-8</h3>
                
                    Flatline Assault Rifle: The Flatline's hard-hitting rounds are perfect for engaging enemies at medium to long range. Equip it with a 2x HCOG Bruiser for precision.
                
                    
                    EVA-8 Auto Shotgun: For close-quarters encounters, the EVA-8 is a reliable choice. Enhance its effectiveness with a Shotgun Bolt for faster fire rate.
                
                </p>
                <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> See your Stats
                </a>
            </div>
        
            </div>
        </div>
        </section>

        )
    }
    
    export default ApexLSTwo
