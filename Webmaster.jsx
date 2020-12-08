import React from 'react'
import Heading from './Heading/Heading'
import './webmaster.css';


export const Webmaster = () => {
    return (
        <div>
             <Heading />
        <div className="webFlex">
             <div className="webText">
                 <div className="WebText1">
                    Administrator af hjemmesiden: 
                    Oliver Gjesing <br/>
                    Mail: trekronervej4@gmail.com <br/>
                    Tlf: 25 67 93 03
                </div><div className="WebText2">
                    Er der noget du gerne vil have på
                    hjemmesiden,
                    så kontakt Oliver på ovenstående <br/>
                    mail eller mobil nr.
                </div><div className="WebText3">
                    Så kommer det på hjemmesiden
                    hurtigst muligt. 
                </div></div>
                
             <div className="WebImg"></div>
             
             </div>
        </div>
    )
}

export default Webmaster;
