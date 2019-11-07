const db = require('../data/db-config');

const find = () => {
    return db('schemes')
}

const findById = (id) => {
    return db('schemes').where({id})
}

const findSteps = (id) => {
    return db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .select('schemes.id', 'scheme_name', 'step_number', 'instructions')
        .where({'schemes.id': id})
        .orderBy('step_number')
}

const add = async (scheme) => {
    let id = await db('schemes').insert(scheme)
    let newScheme = await findById(id[0])
    return newScheme
}

const update = async (changes, id) => {
    await db('schemes')
        .where({id})
        .update(changes)
    let newScheme = await db('schemes')
        .where({id})
    return newScheme[0]
}

const remove = async (id) => {
    try{
        let delScheme = await db('schemes')
        .where({id})
        await db('schemes')
        .where({id})
        .del()
    return delScheme[0]
    }
    catch (error){
        return null;
    }
}

const addStep = async (step, scheme_id) => {
    try{
        const query = {...step, scheme_id: scheme_id}
        let id = await db('steps').insert(query)
        let result = await db('steps').where({id: id[0]})
        return result[0]
    }
    catch (error) {
        return null
    }
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}