export const ADDTEXT = "ADD_TEXT"
export const DELETETEXT = "DELETE_TEXT"

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