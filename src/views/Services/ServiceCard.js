import React from "react";

function ServiceCard() {
    return (
        <div style={{
            borderRadius: '10px'
            , height: '500px'
            , display: 'flex'
            , flexDirection: 'column'
        }} className="service_card">
            <div style={{
                height: '280px'
                , borderRadius: '5px'
            }} className="service_image">
                <img src="https://gotrip-next.vercel.app/img/hotels/1.png" />
            </div>
            <div style={{
                marginTop: '20px'
                , textTransform: 'capitalize'
                , fontSize: '16px'
                , fontWeight: '600'
            }} className="service_title">
                title with line
            </div>
            <div style={{lineHeight:'40px',fontSize:'14px',color:'grey'}}>
                Lebanon
            </div>
            <div style={{backgroundColor:'#ff5531'
                        ,height:'40px'
                        ,width:'40px'
                        ,borderRadius:'5px'
                        ,color:'white'
                        ,display:'flex'
                        ,justifyContent:'center'
                        ,alignItems:'center'}}>
                4.7
            </div>
            <div style={{marginTop:'30px'}}>
                Starting From : <span style={{color:'#94B7F5'}}>999$</span>
            </div>
        </div>
    );
}

export default ServiceCard;
