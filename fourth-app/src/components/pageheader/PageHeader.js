import PropType from "prop-types";

function PageHeader({ logoImage, pageTitle }) {
    function showLogoImage() {
        if (logoImage) return <img src={logoImage} alt="" />
    }

    return (
        <header className="page-header">
            <div className="page-title">
                { showLogoImage() }
                <h1>{ pageTitle }</h1>
            </div>
        </header>
    );
}

PageHeader.propType = {
    pageTitle: PropType.string.isRequired,
    imageLogo: PropType.string
}

export default PageHeader;
