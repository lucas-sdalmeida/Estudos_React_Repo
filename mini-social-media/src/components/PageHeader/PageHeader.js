import "./PageHeader.css";

function PageHeader({ title, className }) {
    return (
        <header className={ "page-header " + className }>
            <h1>{ title }</h1>
        </header>
    );
}

export default PageHeader;
