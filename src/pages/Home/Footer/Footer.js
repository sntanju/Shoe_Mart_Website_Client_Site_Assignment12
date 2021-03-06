import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

        const cellIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />  
        const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
        const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
        const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
        const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
        const messangerIcon = <FontAwesomeIcon icon={faFacebookMessenger} />
        const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />

    return (
        
            <Container fluid>
            <Row className="footer">

                <Col lg={3} md={6} sm={12} xs={12}>
                <br />
                    <h3><img className= "logo" src="https://www.designfreelogoonline.com/wp-content/uploads/2021/02/000764-Shoes-02.png" alt="" />Shoe Mart</h3> 
                    
                    <p>We supplys worlds most beautiful and top class shoes to the people as their need and expection.So, youcan come here and choose the best shoe for you.</p>   
                </Col>

                <Col lg={2} md={6} sm={12} xs={12}>
                <br />
                    <h3>Follow</h3>
                    <hr />
                    <p> {facebookIcon} Fecebook</p>
                    <p> {whatsappIcon} WhatsApp</p>
                    <p> {instagramIcon} Instagram</p>
                    <p> {twitterIcon} Twitter</p>                
                </Col>
            
                <Col lg={3} md={6} sm={12} xs={12}>
                <br />
                    <h3>Contact</h3>
                    <hr />
                    <p>{cellIcon}  Cell: +543857935</p>
                    <p>{emailIcon}  Mail: ShoeMart@smt.com</p>  
                    <p>{twitterIcon}  Twit: ShoeMart@smt.com</p>  
                    <p>{messangerIcon}  Message: ShoeMart@smt.com</p>  
                </Col>

                <Col lg={2} md={6} sm={12} xs={12}>
                <br />
                    <h3>Legal</h3>
                    <hr />
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Policy</p>
                </Col>

                <Col lg={2} md={6} sm={12} xs={12}>
                <br />
                    <h3>Visit</h3>
                    <hr />
                    <p>Shoe Mart Co. WasingtonDC</p>
                    <p>42 AB Road, Ste 100 <br /> Irvine, a, USA 43894</p>
                </Col>

                <p  className="footer-text">Copyright warning &copy; 2021 Shoe Mart</p>
            </Row>
            </Container>
       
    );
};

export default Footer;