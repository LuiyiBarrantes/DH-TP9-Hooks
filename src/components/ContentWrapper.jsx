import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from '../pages/ContentRowTop';
import Footer from './Footer';
export const ContentWrapper = () => {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
