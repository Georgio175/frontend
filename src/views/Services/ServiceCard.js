import React from "react";
import { useNavigate } from "react-router-dom";

function ServiceCard(props) {
  const navigate = useNavigate();

    return (
        <div style={{
            borderRadius: '10px'
            , height: '500px'
            , display: 'flex'
            , flexDirection: 'column'
        }} className="service_card" 
        onClick={() => navigate(`/Services/${props.data?.id}`)}
        >
            <div style={{
                height: '280px'
                , borderRadius: '5px'
            }} className="service_image">
                <img src={`${props.data?.cover_image_link}`} />
                {/* {props.data?.profile_image_link} */}
            </div>
            <div style={{
                marginTop: '20px'
                , textTransform: 'capitalize'
                , fontSize: '16px'
                , fontWeight: '600'
            }} className="service_title">
                {props.data?.name}
            </div>
            <div style={{lineHeight:'40px',fontSize:'14px',color:'grey'}}>
                {props.data?.location_name}
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
                Starting From : <span style={{color:'#94B7F5'}}>{props.data?.price}$</span>
            </div>
        </div>
    );
}

export default ServiceCard;
