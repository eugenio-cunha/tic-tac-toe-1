'use strict';

const cache = new Map();

/**
 * @description Cria uma nova partida
 * @param {String} id 
 * @param {Object} game 
 * @param {Function} callback 
 */
exports.set = (id, game, callback) => {
    if (!id || !game) return callback('id/game cannot be null');
    cache.set(id, game);

    callback && callback();
};

/**
 * @description Obtem uma partida
 * @param {String} id 
 * @param {Function} callback 
 */
exports.get = (id, callback) => {
    if (!cache.has(id)) return callback('Não é turno do jogador');

    callback(null, cache.get(id));
};

/**
 * @description Exclui uma partida
 * @param {String} id 
 * @param {Function} callback 
 */
exports.del = (id, callback) => {
    if (!cache.delete(id)) return callback('game not found');

    callback && callback();
};