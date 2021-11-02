export interface Cliente {
    id?: number
    email?: string, //representa o email do usuário
    senha?: string
    sexo?: string
    cep?: string
    logradouro?: string
    complemento?: string
    bairro?: string
    localidade?: string
    uf?: string
    dd?: string
    telefone?: string
    celular?: string
    pedido?: [{
        idDoPedido?: number
        tipoDaPizza?: string,
        saborDaPizza?: string,
        borda?: string,
        valor?: number,
        foto?: string
    }]


}