const users = []

const addUser = ({ id, username, room }) => {
    // Sanitizacija podataka
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validiraj podatke
    if (!username || !room) {
        return {
            error: 'Korisničko ime i soba su obavezni!'
        }
    }

    // Provjeri da li postoji korisnik sa istim imenom u sobi
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validiraj korisničko ime
    if (existingUser) {
        return {
            error: 'Ponuđeno korisničko ime je zauzeto!'
        }
    }

    // Sačuvaj korisnika
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
        return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}