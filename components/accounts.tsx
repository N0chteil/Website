import styles from "../styles/Accounts.module.css";
import React, { useEffect } from "react";

export default function AccountsComponent() {
    const profiles = {
        private: [
            {
                platform: "Twitter",
                icon: {
                    "font-awesome": "fa-brands fa-twitter",
                    color: "#1DA1F2"
                },
                username: "N0chteil",
                url: "https://twitter.com/N0chteil"
            },
            {
                platform: "Discord",
                icon: {
                    "font-awesome": "fa-brands fa-discord",
                    color: "#5865F2"
                },
                username: "N0chteil ^^#6257",
                url: "https://discord.com/users/495901098926669825"
            },
            {
                platform: "Reddit",
                icon: {
                    "font-awesome": "fa-brands fa-reddit",
                    color: "#FF4500"
                },
                username: "N0chteil",
                url: "https://www.reddit.com/user/N0chteil"
            },
            {
                platform: "Steam",
                icon: {
                    "font-awesome": "fa-brands fa-steam",
                    color: "#373435"
                },
                username: "N0chteil",
                url: "https://steamcommunity.com/id/N0chteil"
            },
            {
                platform: "Xbox",
                icon: {
                    "font-awesome": "fa-brands fa-xbox",
                    color: "#107C10"
                },
                username: "N0chteil",
                url: "https://account.xbox.com/Profile?xr=N0chteil6519"
            }
        ],
        business: [
            {
                platform: "LinkedIn",
                icon: {
                    "font-awesome": "fa-brands fa-linkedin",
                    color: "#0077B5"
                },
                username: "Emil Albrecht",
                url: "https://www.linkedin.com/in/emil-albrecht/"
            }
        ],
        shared: [
            {
                platform: "GitHub",
                icon: {
                    "font-awesome": "fa-brands fa-github",
                    color: "#181717"
                },
                username: "N0chteil",
                url: "https://github.com/N0chteil"
            }
        ]
    };

    let [selectedType, setSelectedType] = React.useState(
            profiles.private.concat(profiles.shared)
        ),
        selected: string;

    function selectionItem(e: React.MouseEvent<HTMLDivElement>, type: string) {
        let target = e.target as HTMLDivElement;

        if (target.tagName === "SPAN")
            target = target.parentElement as HTMLDivElement;
        if (selected === type) return;

        selected = type;

        document
            .querySelectorAll(`.${styles.selected}`)
            .forEach((ele) => ele.classList.remove(styles.selected));

        target.classList.add(styles.selected);

        // @ts-ignore
        setSelectedType(profiles[type].concat(profiles.shared));
    }

    return (
        <div className={styles.container}>
            <div className={styles.selection}>
                <div className={styles.selectionItemContainer}>
                    <div
                        className={[styles.selectionItem, styles.selected].join(
                            " "
                        )}
                        onClick={(e) => selectionItem(e, "private")}
                    >
                        <span>Private</span>
                    </div>
                </div>
                <div className={styles.selectionItemContainer}>
                    <div
                        className={styles.selectionItem}
                        onClick={(e) => selectionItem(e, "business")}
                    >
                        <span>Business</span>
                    </div>
                </div>
            </div>

            <div className={styles.profiles}>
                {selectedType.map((profile: any) => (
                    <div
                        className={styles.profileContainer}
                        key={profile.platform}
                    >
                        <div
                            className={styles.profile}
                            key={profile.platform}
                            onClick={() => {
                                window.open(profile.url, "_blank");
                            }}
                        >
                            <div className={styles.icon}>
                                <i
                                    className={profile.icon["font-awesome"]}
                                    style={{ color: profile.icon.color }}
                                ></i>
                            </div>
                            <div className={styles.name}>
                                <span className={styles.profileLink}>
                                    {profile.username}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
