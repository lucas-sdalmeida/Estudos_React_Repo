function Footer({ length }) {
    return (
        <footer>
            <p>Bye there</p>
            <p>Há { length } { length === 1 ? 'item' : 'itens' } na lista!</p>
        </footer>
    );
}

export default Footer;
