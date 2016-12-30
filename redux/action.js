export const ADDUSER = "ADDUSER"
export const DELETEUSER = "DELETEUSER"
export const EDITUSER = "EDITUSER"
export const INDEX = "INDEX"

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

export function editUser(text,index) {
    return {
        type:EDITUSER,
        text,
        index
    }
}

export function index(index) {
    return {
        type:INDEX,
        index
    }
}