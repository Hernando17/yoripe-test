import { Ellipsis } from "../../../utils";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Story({ data, userPost }) {
    return (
        <div className="story">
            <div className="story-container">
                <div className="story-item">
                    <div className="gradient-off">
                        <img className="story-pp" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
                        <div className="story-add">
                            <FontAwesomeIcon icon={faAdd} size="sm" color="white" />
                        </div>
                    </div>
                    <p className="story-username">{Ellipsis({ text: "Michael", limit: 9 })}</p>
                </div>
                {
                    data.map((item, index) => (
                        <div key={index} className="story-item">
                            <div className="gradient">
                                <img className="story-pp" src={userPost[index].pp} />
                            </div>
                            <p className="story-username">{Ellipsis({ text: item.user.username, limit: 9 })}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}