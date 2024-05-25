import Col from 'react-bootstrap/Col';

export const Projectcard=({
    title, description , imgUrl , technology , link
})=>{ 

    return( 
        <Col className='pbox'>
        <div className="proj-imgbx">
            <a href={link}>
            <img src={imgUrl} className='cardimag'></img>
          
            <div className="projText"> 
         <h4>{title}</h4>
         <p>{technology}</p>
         <p>{description}</p>
         
        </div>
        </a>
        </div>
       
        </Col>
    )
}