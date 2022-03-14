import Logo from './components/Logo.js';
import SearchBar from './components/SearchBar.js';
import IconsTop from './components/IconsTop.js';

export default function Top() {
    return (
        <div className="Top">
            <Logo />
            <SearchBar />
            <IconsTop />
        </div>
    )
}