export const ADDTEXT = "ADD_TEXT"

export function addText(text) {
    return {
        type: ADDTEXT,
        text: text
    }
}