import Profile from './components/Profile.js';
import Suggestions from './components/Suggestions.js';
import Trademark from './components/Trademark.js';

export default function SideBar() {
    return (
        <div>
            <Profile />
            <Suggestions />
            <Trademark />
        </div>
    )
}