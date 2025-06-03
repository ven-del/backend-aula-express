class BolosModel {
    static list = [
        {
            id: 1,
            sabor: 'Laranja',
            preco: 15.00,
        },

        {
            id: 2,
            sabor: 'Limão',
            preco: 20.00,
        }
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

module.exports = BolosModel;