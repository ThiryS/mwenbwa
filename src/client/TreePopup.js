// eslint-disable-next-line unicorn/filename-case
import React, {useState} from "react";
import {Popup} from "react-leaflet";
import tree from "./data/tree.png";
import treeleaf from "./data/treeleaf.png";
import "./TreePopup.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const TreePopup = ({name, circonf, lock}) => {
    const [stateOnglets, setStateOnglets] = useState(1);
    const [isShown, setIsShown] = useState(false);

    const goInfo = () => {
        setStateOnglets(1);
    };

    const goComment = () => {
        setStateOnglets(2);
    };

    const openModal = () => {
        setStateOnglets(3);
        setIsShown(false);
    };

    const showHover = () => {
        setIsShown(true);
    };

    const closeHover = () => {
        setIsShown(false);
    };

    return (
        <>
            <Popup>
                <div className={"popup"}>
                    <div className={"onglets"}>
                        <div
                            onClick={goInfo}
                            className={`onglet ${
                                stateOnglets === 1 ? "active" : " "
                            }`}>
                            Info
                        </div>
                        <div
                            onClick={goComment}
                            className={`onglet ${
                                stateOnglets === 2 ? "active" : " "
                            }`}>
                            Comment
                        </div>
                    </div>
                    <div className={"container"}>
                        {stateOnglets === 1 ? (
                            <div className={"contentInfo"}>
                                <div className={"info"}>
                                    <div className={"arbre"}>
                                        <img
                                            src={tree}
                                            width={"70px"}
                                            height={"70px"}
                                        />
                                    </div>
                                    <div className={"name"}>
                                        <FontAwesomeIcon
                                            icon={faInfoCircle}
                                            className={"iconInfo"}
                                            onClick={openModal}
                                            onMouseEnter={showHover}
                                            onMouseLeave={closeHover}
                                        />
                                        {isShown && (
                                            <div className={"hover"}>
                                                <p>
                                                    Historique des propriétaires
                                                </p>
                                            </div>
                                        )}
                                        <h5>{name}</h5>
                                        <a
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                            href={`https://fr.wikipedia.org/wiki/${name}`}>
                                            wikipedia
                                        </a>
                                    </div>
                                </div>
                                <div className={"button_prix"}>
                                    <button
                                        className={"buy"}
                                        // eslint-disable-next-line react/button-has-type
                                        type={"submit"}>
                                        Buy for {circonf}
                                        <img
                                            src={treeleaf}
                                            width={"20px"}
                                            height={"20px"}
                                        />
                                    </button>
                                </div>
                            </div>
                        ) : stateOnglets === 2 ? (
                            <div className={"contentComment"}>
                                <div className={"comment"}>
                                    <div className={"comments"}>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                        <div className={"singleComment"}>
                                            <h6>User</h6>
                                            <p>comment</p>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className={"submit"}>
                                    <textarea className={"textArea"} />
                                    <button
                                        className={"submitComment"}
                                        // eslint-disable-next-line react/button-has-type
                                        type={"submite"}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className={"propriétaires"}>
                                <h6>Historique des propriétaires</h6>
                                <hr />
                                <div className={"content"}>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                    <div className={"userProprio"}>
                                        <p>User</p>
                                        <p>Date</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Popup>
            ;
        </>
    );
};
export default TreePopup;
