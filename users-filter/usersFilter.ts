type User = {
    name: string,
    age: number,
    status: boolean
}

const users: User[] = [
    {
        name: "Giulio",
        age: 21,
        status: true
    },
    {
        name: "Guido Cerqueira",
        age: 36,
        status: true
    },
    {
        name: "Thiago",
        age: 23,
        status: true
    },
    {
        name: "Lucas",
        age: 22,
        status: true
    },
    {
        name: "Guido Santiago",
        age: 29,
        status: true
    }
]

const findUsers = (usersList: User[], userName: string): User[] => {
    let usersFound: User[]

    usersFound = usersList.filter((user) => user.name.toLowerCase().includes(userName.toLowerCase()))

    return usersFound
}

console.log(findUsers(users, "GUido"));
