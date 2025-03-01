import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./icon.png" alt="Logo" className={css.logo} />

      <div className={css.menu}>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive ? `${css.item} ${css.active}` : css.item
          }
          title="Dashboard"
        >
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink
          to="calender"
          className={({ isActive }) =>
            isActive ? `${css.item} ${css.active}` : css.item
          }
          title="Calendar"
        >
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink
          to="board"
          className={({ isActive }) =>
            isActive ? `${css.item} ${css.active}` : css.item
          }
          title="Trello board"
        >
          <FaTasks size={30} />
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive ? `${css.item} ${css.active}` : css.item
          }
          title="Users"
        >
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
