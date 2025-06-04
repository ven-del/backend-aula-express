class CafesModel {
    static list = [
        {
            id: 1,
            tipo: 'expresso',
            tamanho: ['pequeno', 'médio', 'grande'],
            preco: 5.00,
        },

        {
            id: 2,
            tipo: 'capuccino',
            tamanho: ['pequeno', 'médio', 'grande'],
            preco: 10.00,
        },

        {
            id: 3,
            tipo: 'chafé',
            tamanho: ['pequeno', 'médio', 'grande'],
            preco: 3.00,
        },

        {
            id: 4,
            tipo: 'garapa',
            tamanho: ['pequeno', 'médio', 'grande'],
            preco: 1.00,
        },
    ];

    static read() {
        return this.list;
    }

    static getById(id) {
        const register = this.list.filter(item => item.id === Number(id));
        return register;

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

module.exports = CafesModel;