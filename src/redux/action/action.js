export const ADDTEXT = "ADD_TEXT"
export const DELETETEXT = "DELETE_TEXT"
export const ARTICLEUPDATE = "ARTICLEUPDATE"

export function addText(text) {
    return {
        type: ADDTEXT,
        text: text
    }
}
export function deleteText(key) {
    return {
        type: DELETETEXT,
        text: key
    }
}

export function articleUpdate(obj) {
    return {
        type: ARTICLEUPDATE,
        text: obj
    }
}
