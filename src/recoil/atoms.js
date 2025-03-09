import {atom} from "recoil";

export const sortOrderState = atom({
    key: "sortOrderState", // 고유키 (필수)
    default : "oldest" // 오래된순
});
