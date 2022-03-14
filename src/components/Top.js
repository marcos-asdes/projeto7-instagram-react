import Logo from './Logo.js';
import SearchBar from './SearchBar.js';
import NavigationBar from './NavigationBar.js';

export default function Top() {
    return (
        <div className='CenterTopInCSS'>
            <div className='Top'>
                <Logo />
                <SearchBar />
                <NavigationBar />
            </div>
        </div>
    )
}