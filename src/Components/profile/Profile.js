import { useContext } from "react";
import myContext from "../../Contexts/Context";
import MenuContext from "../../Contexts/MenuContext";
import classes from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/firebase-config";

const Profile = () => {
  const ctx = useContext(myContext);
  const MenuCtx = useContext(MenuContext);
  const history = useNavigate();
  const currentUser = useAuth();

  const setMenuItem = (index) => {
    MenuCtx.setMenu(index);
    history("/myBooks");
  };

  return (
    <div className={classes.profile}>
      <p>
        User:<span>{currentUser?.email}</span>
      </p>

      {/* prettier-ignore */}
      <div className={classes.data} onClick={() => {setMenuItem(1)}}>
        <p className={ MenuCtx.menu === 1 ? classes.active : classes.link}>Read</p>
        <div>{ctx.statusState.read?.length}</div>
      </div>
      {/* prettier-ignore */}
      <div className={classes.data} onClick={() => {setMenuItem(2)}}>
        <p className={ MenuCtx.menu === 2 ? classes.active : classes.link }>Want To Read</p>
        <div>{ctx.statusState.wantToRead?.length}</div>
      </div>
      {/* prettier-ignore */}
      <div className={classes.data} onClick={() => { setMenuItem(3)}}>
        <p className={MenuCtx.menu === 3 ? classes.active : classes.link}>Currently Reading</p>
        <div>{ctx.statusState.currentlyReading?.length}</div>
      </div>
      {/* prettier-ignore */}
      <div className={classes.data} onClick={() => { setMenuItem(4)}}>
        <p className={ MenuCtx.menu === 4 ? classes.active : classes.link }>Favorites</p>
        <div>{ctx.statusState.favorites?.length}</div>
      </div>
    </div>
  );
};

export default Profile;
