import React from 'react';
import './Home.css';
import backgroundImage from '../../Assets/kk.png';
import AwardsCarousel from '../AwardsCarousel'; // تأكد من استيراد مكون الجوائز

const Home = ({ language }) => {
    const texts = {
        ar: {
            title: "برنامج التدريب التعاوني في التجمع الصحي الثاني بالرياض",
            subtitle: "ابدأ رحلتك المهنية معنا اليوم من خلال التسجيل في برنامج التدريب التعاوني",
            button: "سجّل الأن",
            aboutTitle: "عن التجمع الثاني بالرياض",
            aboutText: "يُعد التجمع الثاني بمدينة الرياض من المناطق الحضرية الحديثة التي تم تطويرها وفقًا لأعلى المعايير الهندسية والتخطيطية، ليوفر بيئة متكاملة للسكن والعمل. يتميز التجمع بموقعه الاستراتيجي الذي يتيح سهولة الوصول إلى مختلف مناطق العاصمة، بالإضافة إلى توافر كافة الخدمات الأساسية والترفيهية مثل المراكز التجارية، المؤسسات التعليمية، والمرافق الصحية. كما يضم التجمع مساحات خضراء واسعة وأماكن مخصصة للأنشطة الترفيهية، مما يجعله وجهة مميزة للعائلات والأفراد الباحثين عن أسلوب حياة عصري متوازن. يعد التجمع الثاني بالرياض خيارًا مثاليًا للاستثمار العقاري والسكن الراقي في بيئة تجمع بين الحداثة والراحة.",
            aboutUsTitle: "من نحن ؟", 
            aboutUsText: "نحن مؤسسة متخصصة في تقديم برامج التدريب التعاوني في منطقة الرياض، وتحديدًا ضمن التجمع الثاني الذي يمتد من رماح إلى الزلفي. نهدف إلى تزويد الطلاب والمهنيين بالمعرفة والمهارات اللازمة لتحقيق النجاح في مجالاتهم. نقدم فرص تدريب متنوعة في بيئة احترافية تتيح للمتدربين التعلم من خبراء في مختلف الصناعات. نلتزم بتعزيز التعاون بين المؤسسات التعليمية والقطاعات الاقتصادية، مما يسهم في تطوير الكفاءات المحلية ودعم سوق العمل. مع التركيز على جودة التعليم والتدريب، نحن هنا لنكون الجسر الذي يربط بين النظرية والتطبيق.",
            footerText: "تابعونا على وسائل التواصل الاجتماعي"
        },

        en: {
            title: "Cooperative Training Program at the Second Health Cluster in Riyadh",
            subtitle: "Start your professional journey with us today by registering for the cooperative training program",
            button: "Register Now",
            aboutTitle: "About the Second Cluster in Riyadh",
            aboutText: "The second cluster in Riyadh is one of the modern urban areas developed according to the highest engineering and planning standards, providing an integrated environment for living and work. The cluster features a strategic location that allows easy access to various areas of the capital, as well as all essential and recreational services such as shopping centers, educational institutions, and health facilities. It also includes extensive green spaces and designated areas for recreational activities, making it an attractive destination for families and individuals seeking a balanced modern lifestyle. The second cluster in Riyadh is an ideal choice for real estate investment and upscale housing in an environment that combines modernity and comfort.",
            aboutUsTitle: "About Us",
            aboutUsText: "We are an institution specialized in providing cooperative training programs in the Riyadh area, specifically within the second cluster extending from Ramah to Al-Zulfi. We aim to equip students and professionals with the knowledge and skills necessary to achieve success in their fields. We offer diverse training opportunities in a professional environment that allows trainees to learn from experts in various industries. We are committed to enhancing cooperation between educational institutions and economic sectors, contributing to the development of local competencies and supporting the labor market. With a focus on the quality of education and training, we are here to be the bridge that connects theory with practice.",
            footerText: "Follow us on social media"
        }
    };

    return (
        <>
            <header className='home-header'>
                <div className='container'>  
                    <div className='row'>
                        <div className='col-md-8 col-lg-8'>
                            <h2 style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].title}</h2>
                            <h5 style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].subtitle}</h5>
                            <button style={{ float: language === 'ar' ? 'right' : 'left', marginTop: '20px' }}>
                                <a href='/register.html' style={{ textDecoration: 'none', color: 'inherit' }}>{texts[language].button}</a>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className='info-section' id='about-collective'>
                <h3 style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].aboutTitle}</h3>
                <p style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].aboutText}</p>
            </section>

            <section className='info-section' id='about-us'>
                <h3 style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].aboutUsTitle}</h3>
                <p style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{texts[language].aboutUsText}</p>
            </section>

            {/* قسم الجوائز */}
            <AwardsCarousel language={language} />

            {/* قسم التواصل الاجتماعي */}
            <footer id="contact-section">
    <div className="social-icons">
        <a href="https://www.instagram.com/cluster2_riyadh" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://x.com/Cluster2_Riyadh" target="_blank"><i className="fas fa-">𝕏</i></a>
        <a href="https://snapchat.com/t/1mw89rOC" target="_blank"><i className="fab fa-snapchat"></i></a>
        <a href="https://www.tiktok.com/@cluster2_riyadh" target="_blank"><i className="fab fa-tiktok"></i></a>
        <a href="https://ca.linkedin.com/company/second-health-cluster" target="_blank"><i className="fab fa-linkedin"></i></a>
    </div>
    <ul>
        <li><a href="#"><i className="fas fa-phone"></i> 0123456789</a></li>
        <li><a href="mailto:info@example.com"><i className="fas fa-envelope"></i> info@example.com</a></li>
    </ul>
</footer>


        </>
    );
}

export default Home;
