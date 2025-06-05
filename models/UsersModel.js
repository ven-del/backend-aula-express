class UsersModel {
    static list = [
        {
            id: 1,
            login: 'admin',
            senha: "123",
            
        },
        {
            id: 2,
            login: 'admin2',
            senha: "321",
            
        }
    ]

    static authenticate(login, senha) {
        const index = this.list.findIndex(item => item.login === login && item.senha === senha);
        return this.list[index];
    }

    static read() {
        return this.list;
    }

    static getById(id) {
        const data = this.list.filter(item => item.id === Number(id));
        return data
    }

    static create(data) {
        this.list.push(data);
    }

    static update(id, data) {
        const index = this.list.findIndex(item => item.id === Number(id));
        this.list[index] = data;
    }

    static delete(id) {
        const index = this.list.findIndex(item => item.id === Number(id));
        this.list.splice(index, 1);
    }
}

module.exports = UsersModel;