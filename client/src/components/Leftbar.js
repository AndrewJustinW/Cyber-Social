import Chat from '@material-ui/icons/Chat';
import Bookmark from '@material-ui/icons/Bookmark';
import Cloud from '@material-ui/icons/Cloud';
import MenuBook from '@material-ui/icons/MenuBook';

const Leftbar = () => {
    return (
        <div className="leftbar-wrapper">

            <div className="leftbar-top">


                <ul className="leftbar-menu" >

                    <li className="leftbar-menu-item"> <Chat className="leftbar-menu-icon" /> <span className="leftbar-menu-text">Chat</span> </li>
                    <li className="leftbar-menu-item"> <MenuBook className="leftbar-menu-icon" /> <span className="leftbar-menu-text">News</span> </li>
                    <li className="leftbar-menu-item"> <Cloud className="leftbar-menu-icon" /> <span className="leftbar-menu-text">Weather</span> </li>
                    <li className="leftbar-menu-item"> <Bookmark className="leftbar-menu-icon" /> <span className="leftbar-menu-text">Saved Posts</span> </li>

                </ul>

            </div>
            <h2>Widgets</h2>
            <div className="widgets">


            </div>

        </div>
    )
}


export default Leftbar
