class BolosModel{
    static list = [
        {
            id: 1,
            sabor: 'Laranja',
            preco: 8
        },
        {
            id: 2,
            sabor: 'Limao',
            preco: 9
        },
        {
            id: 3,
            sabor: 'Chocolate com Cenoura',
            preco: 12
        },
        {
            id: 4,
            sabor: 'Morango',
            preco: 10
        }
         
    ]
    static read(){
        return BolosModel.list;
    }
    static getById(id){
        const register = BolosModel.list.filter(item => item.id === Number(id));
        return register;
    }
    static create(data){
        BolosModel.list.push(data);
    }
    static update(id, data){
        const index = BolosModel.list.findIndex(item => item.id === Number(id));
        BolosModel.list[index] = data;
    }
    static delete(id){
        const index = BolosModel.list.findIndex(item => item.id === Number(id));
        BolosModel.list.splice(index,1);
    }
}

module.exports = BolosModel;