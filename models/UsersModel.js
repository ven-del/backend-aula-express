class UsersModel {
    static list = [
        {
            id: 1,
            login: 'admin',
            senha: 123,
            
        },
        {
            id: 2,
            login: 'admin2',
            senha: 321,
            
        }
    ]

    static read() {
        return UsersModel.list;
    }

    static getById(id) {
        const data = UsersModel.list.filter(item => item.id === Number(id));
        return data
    }

    static create(data) {
        UsersModel.list.push(data);
    }

    static update(id, data) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id));
        UsersModel.list[index] = data;
    }

    static delete(id) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id));
        UsersModel.list.splice(index, 1);
    }
}

module.exports = UsersModel;