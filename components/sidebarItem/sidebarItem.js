import styles from "./sidebarItem.module.css";
import { capitalizeFunc } from "../../utils/capitalizeFunc";
import { StoreContext, ACTION_TYPES } from "../../store/store-context";
import { useContext } from "react";
import cls from "classnames";

export default function SidebarItem({ name, icon }) {

    const { state, dispatch } = useContext(StoreContext);

    const changeContent = (content) => {
        dispatch({
            type: ACTION_TYPES.SET_INFO_CONTENT,
            payload: { infoContent: content }
        })
    }

    return (
        <div className={state.sidebar? cls(styles.center, styles.item) : styles.item} onClick={() => changeContent(name)}>
            <div className={state.sidebar ? styles.indicator : styles.hide}>
                <span>{capitalizeFunc(name)}</span>
            </div>
            <div className={styles.innerItem}>
                {
                    icon
                }
                <span className={state.sidebar ? styles.hide : styles.itemName}>{capitalizeFunc(name)}</span>
            </div>
        </div>
    );
};