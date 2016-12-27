export const ADDUSER = "ADDUSER"

export function addUser(text) {
      return {
          type:ADDUSER,
          text
      }
}