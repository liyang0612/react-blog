export const ADDUSER = "ADDUSER"
export const DELETEUSER = "DELETEUSER"

export function addUser(text) {
      return {
          type:ADDUSER,
          text
      }
}

export function deleteUser(index) {
    return {
        type:DELETEUSER,
        index
    }
}