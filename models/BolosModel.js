const supabase = require("../api/config/connection")

class BolosModel{
    // static list = [
    //     {
    //         id: 1,
    //         sabor: 'Laranja',
    //         preco: 8
    //     },
    //     {
    //         id: 2,
    //         sabor: 'Limao',
    //         preco: 9
    //     },
    //     {
    //         id: 3,
    //         sabor: 'Chocolate com Cenoura',
    //         preco: 12
    //     },
    //     {
    //         id: 4,
    //         sabor: 'Morango',
    //         preco: 10
    //     }
         
    // ]
    // static read(){
    //     return BolosModel.list;
    // }
    static async read(){
        const { data, error } = await supabase
            .from('bolo')
            .select(`
                bolo_id,
                sabor,
                preco,
                usuario: usuario_id(login)
            `);
        if(error) throw error;

        return data.map(bolo =>({
            bolo_id: bolo.bolo_id,
            sabor: bolo.sabor,
            preco: bolo.preco,
            usuario:bolo.usuario.login
        }));
    };

    // static getById(id){
    //     const register = BolosModel.list.filter(item => item.id === Number(id));
    //     return register;
    // }

    static async getById(id){
        const {data, error} = await supabase
            .from('bolo')
            .select(`
                id,
                sabor,
                preco,
                usuario:usuario_id(login)
            `)
            .eq('id', id)
            .single();
        if(error) throw error;

        return {
            id: data.id,
            sabor: data.sabor,
            preco: data.preco,
            usuario: data.usuario.login
        };
    };

    // static create(data){
    //     BolosModel.list.push(data);
    // }

    static async create( bolo ){
        const {data, error } = await supabase
            .from('bolo')
            .insert([bolo])
            .select(`
                id,
                sabor,
                preco,
                usuario: usuario_id(login)
            `)
            .single();
        if(error) throw error;

        return{
            id: data.id,
            sabor: data.sabor,
            preco: data.preco,
            usuario: data.usuario.login
        };
    };

    // static update(id, data){
    //     const index = BolosModel.list.findIndex(item => item.id === Number(id));
    //     BolosModel.list[index] = data;
    // }

    static async update (id, bolo){
        const {data, error} = await supabase
            .from('bolo')
            .update(bolo)
            .eq('id', id)
            .select(`
                id,
                sabor,
                preco,
                usuario: usuario_id(login)
            `)
            .single();
        if (error) throw error;

        return {
            id: data.id,
            sabor: data.sabor,
            preco: data.preco,
            usuario: data.usuario.login
        };
    };
    // static delete(id){
    //     const index = BolosModel.list.findIndex(item => item.id === Number(id));
    //     BolosModel.list.splice(index,1);
    // }
    static async delete(id){
        const {error} = await supabase
            .from('bolo')
            .delete()
            .eq('id', id);
        if(error) throw error;

        return { success: true };
    };
}

module.exports = BolosModel;