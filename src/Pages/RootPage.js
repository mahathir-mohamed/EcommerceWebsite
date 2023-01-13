import PageRoutes from '../PageRoutes';
import Header from '../HeaderAndFooter/Header';
import Footer from '../HeaderAndFooter/Footer';

function RootPage(){
    return(
        <div className="mainPage">
            <Header/>
            <PageRoutes/>
            <Footer/>
       </div>
       )
    }
export default RootPage;