export const fileUrl = (path) => `${path}`;

export const persianDigit = (value, direction) => {
    if (direction === "ltr") return value;

    const persian = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
    };

    if (!value) {
        return "";
    }

    value = value.toString();

    for (const key in persian) {
        value = value.replace(new RegExp(`${key}`, "g"), persian[key]);
    }

    return value;
};
