/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

let babelrc = require('rc')('babel', {})
delete babelrc._
delete babelrc.config
delete babelrc.configs

export default babelrc