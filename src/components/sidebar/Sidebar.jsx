import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
               
                    <li className="sidebarListItem ">
                        Admin
                    </li>
                    <li className="sidebarListItem ">
                        User
                    </li>
                    {/* <li className="sidebarListItem ">
                        Profile
                        
                    </li> */}
                    <li className="sidebarListItem">
                        DV
                    </li>
                    <li className="sidebarListItem">
                        Notification
                    </li>
                    <li className="sidebarListItem">
                        History
                    </li>
                    <li className="sidebarListItem">
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
