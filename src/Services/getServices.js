import api from "./config";

async function getAbility() {
    const ability = await api.get('/ability')
    return ability.data
}

export default getAbility