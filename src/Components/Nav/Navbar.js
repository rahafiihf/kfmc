import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Form, Button } from 'react-bootstrap';
import './Nav.css';
import logo from '../../Assets/logov1.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbars = ({ language }) => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="active">
                            {language === 'ar' ? 'الرئيسية' : 'Home'}
                        </Nav.Link>
                        <NavDropdown title={language === 'ar' ? "الخدمات الألكترونية" : "Electronic Services"} id="basic-nav-dropdown">
                            <NavDropdown.Item as="a" href="http://localhost:3000/card-issuance.html">
                                {language === 'ar' ? 'إصدار البطاقة' : 'Card Issuance'}
                            </NavDropdown.Item>
                            <NavDropdown.Item as="a" href="http://localhost:3000/evaluation.html">
                                {language === 'ar' ? 'التقييم' : 'Evaluation'}
                            </NavDropdown.Item>
                            <NavDropdown.Item as="a" href="http://localhost:3000/clearance.html"> {/* رابط نموذج إخلاء الطرف هنا */}
                                {language === 'ar' ? 'إخلاء طرف' : 'Clearance'}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about-collective" className="active">
                            {language === 'ar' ? 'عن التجمع' : 'About the Cluster'}
                        </Nav.Link>
                        <Nav.Link href="#about-us" className="active">
                            {language === 'ar' ? 'من نحن' : 'About Us'}
                        </Nav.Link>
                        <NavDropdown title={language === 'ar' ? "المساعدة" : "Help"} id="basic-nav-dropdown">
                            <NavDropdown.Item as="a" href="http://localhost:3000/faq.html"> {/* رابط الأسئلة الشائعة هنا */}
                                {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#contact-section">
                                  {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleSearchToggle}>
                            <i className="fas fa-search"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {showSearch && (
                <div className="search-overlay">
                    <div className="search-container">
                        <Button variant="transparent" onClick={handleSearchToggle} className="close-button">
                            <i className="fas fa-times"></i> {/* زر إغلاق */}
                        </Button>
                        <Form inline>
                            <Form.Control type="text" placeholder={language === 'ar' ? 'ابحث...' : 'Search...'} />
                        </Form>
                    </div>
                </div>
            )}
        </Navbar>
    );
};

export default Navbars;
