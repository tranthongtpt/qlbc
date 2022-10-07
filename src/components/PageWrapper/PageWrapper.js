
import ContentWrapper from '../Contentwrapper/ContentWrapper';
import TopBar from '../TopBar/TopBar';
import './pagewrapper.css'
import '../Contentwrapper/contentwrapper.css'
function PageWrapper() {
    return ( 
        <div className="page-wrapper">
            <TopBar/>
            <ContentWrapper/>
        </div>
     );
}

export default PageWrapper;