'use strict';

module.exports = class Game {
    
    constructor(id, symbol){
        this.id = id;
        this.player = symbol.toUpperCase();
        this.matrix = Array(3).fill(0).map(() => Array(3).fill(0));
        this.round = 0;
        this.winner = null;
    }

    /**
     * @description Função responsável por realizar o movimento do jogador
     * @param {String} player 
     * @param {Integer} x 
     * @param {Integer} y 
     * @param {Function} callback 
     */
    movement(player, x, y, callback){
        if (this.player !== player) return callback({msg: 'Não é turno do jogador'});

        // Bitwise XOR
        x = x !== 1 ? x ^ 2 : x;
        y = y !== 1 ? y ^ 2 : y;

        if (!this.validMove(x, y)) return callback({msg: 'Não é um movimento válido'});

        ++this.round;
        this.player = player.toUpperCase() === 'X' ? 'O' : 'X';
        this.matrix[y][x] = player.toUpperCase() === 'X' ? -1 : 1;

        this.evaluate(callback);

    }

    /**
     * @description Verifica o resultado do jogo
     * @param {Function} callback 
     */
    evaluate(callback){
        if(this.diagonal() || this.column() || this.row()){
            this.player = this.player === 'X' ? 'O' : 'X';
            this.winner = this.player;
            return callback(null, {msg: 'Partida Finalizada', winner: this.player});
        }else if (this.round === 9) {
            this.winner = 'Draw';
            return callback(null, {status: 'Partida Finalizada', winner: 'Draw'});
        }
        callback();
    }

    /**
     * @description Verifica o resultado das diagonais da matriz e retorna verdadeiro caso uma das linhas sejam iguais
     */
    diagonal() {
        const d1 = this.matrix.map((a, i) => a[i]).reduce((t, c) => t + c);
        const d2 = this.matrix.map((a, i) => [...a].reverse()[i]).reduce((t, c) => t + c);

        return [d1, d2].some(e => Math.abs(e) === 3);
    }

    /**
     * @description Verifica o resultado das linhas da matriz e retorna verdadeiro caso uma das linhas sejam iguais
     */
    row() {
        const result = this.matrix.reduce((a, b) => a.map((v, i) => v + b[i]));
        return result.some(e => Math.abs(e) === 3);
    }

    /**
     * @description Verifica o resultado das colunas da matriz e retorna verdadeiro caso uma das colunas sejam iguais
     */
    column() {
        const result = this.matrix.map(a => a.reduce((t, c) => t + c));
        return result.some(e => Math.abs(e) === 3);
    }

    /**
     * @description Verifica se o movimento é válido
     * @param {Integer} x 
     * @param {Integer} y 
     */
    validMove(x, y){
        return this.matrix[y][x] === 0 && x >= 0 && x <= 2 && y >= 0 && y <= 2;
    }

}